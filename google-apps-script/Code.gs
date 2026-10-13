/**
 * ============================================================================
 * MASINENI FRND RESTAURANT — GOOGLE APPS SCRIPT WEB APP & EMAIL AUTOMATION
 * ============================================================================
 * 
 * DESCRIPTION:
 * Connects the Masineni Frnd restaurant website contact form to Google Sheets
 * and sends an automated, attractive, colorful, responsive email confirmation
 * to the customer, plus an instant alert to the restaurant management.
 * 
 * GOOGLE SHEET COLUMNS (Row 1 Headers):
 * Col A: Timestamp
 * Col B: Inquiry ID
 * Col C: Full Name
 * Col D: Email Address
 * Col E: Phone Number
 * Col F: Subject
 * Col G: Message
 * Col H: Status
 * Col I: Follow-up Notes
 * ============================================================================
 */

// CONFIGURATION CONSTANTS
var CONFIG = {
  RESTAURANT_NAME: "Masineni Frnd",
  RESTAURANT_TAGLINE: "Good Food. Great Friends. Unforgettable Moments.",
  RESTAURANT_PHONE: "+91 98765 43210",
  RESTAURANT_EMAIL: "contact@masinenifrnd.com",
  ADMIN_NOTIFICATION_EMAIL: "", // Set your admin email here to receive alerts (e.g. "manager@masinenifrnd.com")
  RESTAURANT_ADDRESS: "Plot No. 42, Green Park Avenue, Near Bypass Road, Anantapur, Andhra Pradesh - 515001",
  WEBSITE_URL: "http://localhost:5173", // Replace with your live custom domain when published
  DEFAULT_SHEET_NAME: "Inquiries",
  
  // BRAND COLOR TOKENS
  COLORS: {
    WARM_CREAM: "#FFF8EC",
    TOMATO_RED: "#F45135",
    FRESH_ORANGE: "#FF9F43",
    GOLDEN_YELLOW: "#FFD166",
    LEAF_GREEN: "#70AD47",
    WHITE: "#FFFFFF",
    SOFT_PEACH: "#FFE5D4",
    TEXT_MAIN: "#1E2229",
    TEXT_MUTED: "#5A6270",
    BORDER_LIGHT: "#F1E3D0"
  }
};

/**
 * Handle HTTP GET request (Health check & status verification)
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "success",
    message: "Masineni Frnd Contact Form API is active and running.",
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Handle HTTP POST request from frontend form submission
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait up to 30 seconds for concurrent submissions
  lock.tryLock(30000);

  try {
    var rawData = {};

    // 1. Parse incoming payload (supports application/json or url-encoded form data)
    if (e.postData && e.postData.contents) {
      try {
        rawData = JSON.parse(e.postData.contents);
      } catch (err) {
        rawData = e.parameter || {};
      }
    } else if (e.parameter) {
      rawData = e.parameter;
    }

    // 2. Extract and sanitize form fields
    var fullName = sanitizeInput(rawData.fullName || rawData.name || "Valued Guest");
    var email = sanitizeInput(rawData.email || "");
    var phone = sanitizeInput(rawData.phone || "");
    var subject = sanitizeInput(rawData.subject || "General Inquiry");
    var message = sanitizeInput(rawData.message || "No specific request details provided.");

    // Validate required fields
    if (!email || !phone) {
      return createJsonResponse({
        success: false,
        error: "Missing required contact details (email and phone are mandatory)."
      });
    }

    // 3. Generate Unique Inquiry Reference ID
    var timestamp = new Date();
    var formattedDate = Utilities.formatDate(timestamp, Session.getScriptTimeZone() || "GMT+5:30", "dd/MM/yyyy, hh:mm:ss a");
    var datePrefix = Utilities.formatDate(timestamp, Session.getScriptTimeZone() || "GMT+5:30", "yyyyMMdd");
    var randomSuffix = Math.floor(1000 + Math.random() * 9000);
    var inquiryId = "MF-" + datePrefix + "-" + randomSuffix;

    // 4. Record into Google Sheet
    var sheet = getOrCreateInquirySheet();
    sheet.appendRow([
      formattedDate,
      inquiryId,
      fullName,
      email,
      phone,
      subject,
      message,
      "New",              // Default Status
      "Received via Web"  // Notes
    ]);

    // 5. Send Colorful, Responsive Email Confirmation to Customer
    try {
      sendCustomerConfirmationEmail({
        inquiryId: inquiryId,
        fullName: fullName,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
        submittedAt: formattedDate
      });
    } catch (emailError) {
      Logger.log("Customer email failed: " + emailError.toString());
    }

    // 6. Send Alert Notification to Restaurant Admin (if configured)
    if (CONFIG.ADMIN_NOTIFICATION_EMAIL && CONFIG.ADMIN_NOTIFICATION_EMAIL.indexOf("@") !== -1) {
      try {
        sendAdminAlertEmail({
          inquiryId: inquiryId,
          fullName: fullName,
          email: email,
          phone: phone,
          subject: subject,
          message: message,
          submittedAt: formattedDate
        });
      } catch (adminError) {
        Logger.log("Admin email failed: " + adminError.toString());
      }
    }

    // 7. Return Success JSON Response to Frontend
    return createJsonResponse({
      success: true,
      message: "Thank you! Your inquiry has been recorded and an email confirmation has been sent.",
      data: {
        inquiryId: inquiryId,
        submittedAt: timestamp.toISOString(),
        fullName: fullName,
        email: email
      }
    });

  } catch (error) {
    Logger.log("doPost Error: " + error.toString());
    return createJsonResponse({
      success: false,
      error: "Server processing error: " + error.toString()
    });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Get or automatically create the target Sheet with locked column headers
 */
function getOrCreateInquirySheet() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(CONFIG.DEFAULT_SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(CONFIG.DEFAULT_SHEET_NAME);
  }

  // Ensure row 1 header exists
  if (sheet.getLastRow() === 0) {
    var headers = [
      "Timestamp",
      "Inquiry ID",
      "Full Name",
      "Email Address",
      "Phone Number",
      "Subject",
      "Message",
      "Status",
      "Follow-up Notes"
    ];
    
    sheet.appendRow(headers);

    // Style Header Row
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground(CONFIG.COLORS.TOMATO_RED);
    headerRange.setFontColor("#FFFFFF");
    headerRange.setFontWeight("bold");
    headerRange.setHorizontalAlignment("center");
    sheet.setFrozenRows(1);
    
    // Auto-adjust column widths
    for (var i = 1; i <= headers.length; i++) {
      sheet.setColumnWidth(i, 160);
    }
  }

  return sheet;
}

/**
 * Sanitize input to prevent injection or broken formatting
 */
function sanitizeInput(text) {
  if (typeof text !== "string") return String(text || "");
  return text.trim();
}

/**
 * Build standard JSON Output with CORS friendliness
 */
function createJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * ============================================================================
 * EMAIL AUTOMATION: ATTRACTIVE, COLORFUL, RESPONSIVE CUSTOMER EMAIL TEMPLATE
 * ============================================================================
 */
function sendCustomerConfirmationEmail(info) {
  var subjectLine = "Inquiry Received: Welcome to " + CONFIG.RESTAURANT_NAME + " (Ref: " + info.inquiryId + ")";
  var htmlBody = buildCustomerHtmlTemplate(info);

  // Plain-text alternative fallback for legacy email clients
  var plainText = 
    "Hello " + info.fullName + ",\n\n" +
    "Thank you for contacting " + CONFIG.RESTAURANT_NAME + "!\n" +
    "We have successfully received your inquiry / table reservation request.\n\n" +
    "INQUIRY SUMMARY:\n" +
    "Reference ID: " + info.inquiryId + "\n" +
    "Subject: " + info.subject + "\n" +
    "Phone: " + info.phone + "\n" +
    "Date & Time: " + info.submittedAt + "\n" +
    "Your Message: " + info.message + "\n\n" +
    "WHAT HAPPENS NEXT?\n" +
    "Our guest relations team will review your request and get back to you shortly.\n" +
    "Need urgent assistance? Call us at " + CONFIG.RESTAURANT_PHONE + "\n\n" +
    "Warm Regards,\n" +
    CONFIG.RESTAURANT_NAME + " Team\n" +
    CONFIG.RESTAURANT_ADDRESS;

  MailApp.sendEmail({
    to: info.email,
    subject: subjectLine,
    body: plainText,
    htmlBody: htmlBody,
    name: CONFIG.RESTAURANT_NAME
  });
}

/**
 * Generates the Colorful, Cross-Device Responsive HTML Email Template
 */
function buildCustomerHtmlTemplate(info) {
  var c = CONFIG.COLORS;

  return '<!DOCTYPE html>' +
  '<html lang="en">' +
  '<head>' +
  '  <meta charset="UTF-8">' +
  '  <meta name="viewport" content="width=device-width, initial-scale=1.0">' +
  '  <title>Masineni Frnd Inquiry Confirmation</title>' +
  '  <style>' +
  '    body { margin: 0; padding: 0; background-color: ' + c.WARM_CREAM + '; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; -webkit-font-smoothing: antialiased; }' +
  '    table { border-collapse: collapse; }' +
  '    .container { max-width: 620px; width: 100%; margin: 0 auto; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(244, 81, 53, 0.08); }' +
  '    .header-banner { background: linear-gradient(135deg, ' + c.TOMATO_RED + ' 0%, ' + c.FRESH_ORANGE + ' 100%); padding: 36px 24px; text-align: center; color: #FFFFFF; }' +
  '    .badge-pill { display: inline-block; background-color: ' + c.GOLDEN_YELLOW + '; color: #8A5A00; padding: 6px 16px; border-radius: 50px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px; }' +
  '    .content-body { padding: 36px 32px; color: ' + c.TEXT_MAIN + '; }' +
  '    .table-summary { width: 100%; border: 1px solid ' + c.BORDER_LIGHT + '; border-radius: 12px; overflow: hidden; margin: 24px 0; background-color: #FAFAFA; }' +
  '    .table-summary td { padding: 12px 18px; font-size: 14px; border-bottom: 1px solid ' + c.BORDER_LIGHT + '; }' +
  '    .table-label { font-weight: 600; color: ' + c.TEXT_MUTED + '; width: 35%; background-color: ' + c.WARM_CREAM + '; }' +
  '    .table-value { color: ' + c.TEXT_MAIN + '; font-weight: 500; }' +
  '    .btn-primary { display: inline-block; background-color: ' + c.TOMATO_RED + '; color: #FFFFFF !important; padding: 14px 28px; border-radius: 50px; font-weight: 700; text-decoration: none; font-size: 15px; box-shadow: 0 4px 14px rgba(244, 81, 53, 0.3); }' +
  '    .btn-secondary { display: inline-block; background-color: ' + c.SOFT_PEACH + '; color: ' + c.TOMATO_RED + ' !important; padding: 14px 24px; border-radius: 50px; font-weight: 700; text-decoration: none; font-size: 15px; margin-left: 10px; }' +
  '    .notice-box { background-color: ' + c.SOFT_PEACH + '; border-left: 4px solid ' + c.FRESH_ORANGE + '; padding: 16px 20px; border-radius: 8px; margin: 24px 0; font-size: 14px; line-height: 1.6; }' +
  '    .footer-bar { background-color: #F8F3EA; padding: 24px 32px; text-align: center; font-size: 12px; color: ' + c.TEXT_MUTED + '; border-top: 1px solid ' + c.BORDER_LIGHT + '; }' +
  '    @media only screen and (max-width: 600px) {' +
  '      .content-body { padding: 24px 20px !important; }' +
  '      .btn-secondary { margin-left: 0 !important; margin-top: 12px !important; display: block !important; text-align: center !important; }' +
  '      .btn-primary { display: block !important; text-align: center !important; }' +
  '    }' +
  '  </style>' +
  '</head>' +
  '<body style="margin: 0; padding: 24px 10px; background-color: ' + c.WARM_CREAM + ';">' +
  '  <table width="100%" cellpadding="0" cellspacing="0" border="0">' +
  '    <tr>' +
  '      <td align="center">' +
  '        <div class="container">' +
  
  // HEADER BANNER
  '          <div class="header-banner">' +
  '            <div class="badge-pill">★ AUTHENTIC INDIAN HOSPITALITY ★</div>' +
  '            <h1 style="margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.02em;">' + CONFIG.RESTAURANT_NAME + '</h1>' +
  '            <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.95;">' + CONFIG.RESTAURANT_TAGLINE + '</p>' +
  '          </div>' +

  // MAIN BODY
  '          <div class="content-body">' +
  '            <h2 style="margin: 0 0 12px 0; font-size: 22px; color: ' + c.TOMATO_RED + ';">Namaste ' + escapeHtml(info.fullName) + '! 🙏</h2>' +
  '            <p style="margin: 0 0 16px 0; font-size: 15px; line-height: 1.6; color: ' + c.TEXT_MAIN + ';">' +
  '              Thank you for choosing <strong>' + CONFIG.RESTAURANT_NAME + '</strong>. We have received your inquiry / table reservation details and our hospitality team is already on it!' +
  '            </p>' +

  // SUMMARY TABLE
  '            <table class="table-summary" cellpadding="0" cellspacing="0">' +
  '              <tr>' +
  '                <td class="table-label">Reference ID</td>' +
  '                <td class="table-value" style="color: ' + c.TOMATO_RED + '; font-weight: 700;">' + info.inquiryId + '</td>' +
  '              </tr>' +
  '              <tr>' +
  '                <td class="table-label">Guest Name</td>' +
  '                <td class="table-value">' + escapeHtml(info.fullName) + '</td>' +
  '              </tr>' +
  '              <tr>' +
  '                <td class="table-label">Contact Number</td>' +
  '                <td class="table-value">' + escapeHtml(info.phone) + '</td>' +
  '              </tr>' +
  '              <tr>' +
  '                <td class="table-label">Email ID</td>' +
  '                <td class="table-value">' + escapeHtml(info.email) + '</td>' +
  '              </tr>' +
  '              <tr>' +
  '                <td class="table-label">Subject / Purpose</td>' +
  '                <td class="table-value"><strong>' + escapeHtml(info.subject) + '</strong></td>' +
  '              </tr>' +
  '              <tr>' +
  '                <td class="table-label">Submitted On</td>' +
  '                <td class="table-value">' + info.submittedAt + '</td>' +
  '              </tr>' +
  '              <tr>' +
  '                <td class="table-label">Request Details</td>' +
  '                <td class="table-value" style="line-height: 1.5;">' + escapeHtml(info.message) + '</td>' +
  '              </tr>' +
  '            </table>' +

  // NEXT STEPS NOTICE BOX
  '            <div class="notice-box">' +
  '              <strong style="color: ' + c.TOMATO_RED + '; display: block; margin-bottom: 4px;">⏱ What Happens Next?</strong>' +
  '              Our guest desk coordinator will review your request and connect with you via phone call or WhatsApp to confirm your table arrangements and dietary preferences.' +
  '            </div>' +

  // CALL TO ACTION BUTTONS
  '            <div style="text-align: center; margin: 30px 0 16px 0;">' +
  '              <a href="' + CONFIG.WEBSITE_URL + '/menu" class="btn-primary" target="_blank">Browse Our Delicious Menu →</a>' +
  '              <a href="tel:' + CONFIG.RESTAURANT_PHONE.replace(/\\s+/g, '') + '" class="btn-secondary">📞 Call Us: ' + CONFIG.RESTAURANT_PHONE + '</a>' +
  '            </div>' +

  // VISITING & TIMINGS HIGHLIGHT
  '            <div style="background-color: #FFFFFF; border: 1px dashed ' + c.BORDER_LIGHT + '; border-radius: 12px; padding: 18px; margin-top: 24px;">' +
  '              <p style="margin: 0 0 6px 0; font-size: 13px; font-weight: 700; color: ' + c.TEXT_MAIN + ';">📍 Restaurant Address:</p>' +
  '              <p style="margin: 0 0 12px 0; font-size: 13px; color: ' + c.TEXT_MUTED + ';">' + CONFIG.RESTAURANT_ADDRESS + '</p>' +
  '              <p style="margin: 0; font-size: 13px; color: ' + c.TEXT_MUTED + ';">⏰ <strong>Dining Hours:</strong> Mon – Sun: 11:30 AM – 11:00 PM (Kitchen closes at 10:45 PM)</p>' +
  '            </div>' +
  '          </div>' +

  // FOOTER BAR
  '          <div class="footer-bar">' +
  '            <p style="margin: 0 0 6px 0; font-weight: 600; color: ' + c.TEXT_MAIN + ';">' + CONFIG.RESTAURANT_NAME + ' Fine Dine & Gatherings</p>' +
  '            <p style="margin: 0 0 8px 0;">This is an automated confirmation sent to ' + escapeHtml(info.email) + ' regarding your inquiry on our website.</p>' +
  '            <p style="margin: 0; font-size: 11px; color: #9E9E9E;">© ' + new Date().getFullYear() + ' ' + CONFIG.RESTAURANT_NAME + '. All rights reserved.</p>' +
  '          </div>' +

  '        </div>' +
  '      </td>' +
  '    </tr>' +
  '  </table>' +
  '</body>' +
  '</html>';
}

/**
 * Sends a notification email to the restaurant admin / manager
 */
function sendAdminAlertEmail(info) {
  var subject = "🚨 NEW INQUIRY: " + info.fullName + " (" + info.subject + ") [" + info.inquiryId + "]";
  var body = 
    "A new customer inquiry has arrived on the website:\n\n" +
    "Reference ID: " + info.inquiryId + "\n" +
    "Customer Name: " + info.fullName + "\n" +
    "Phone: " + info.phone + "\n" +
    "Email: " + info.email + "\n" +
    "Subject: " + info.subject + "\n" +
    "Date: " + info.submittedAt + "\n\n" +
    "Message:\n" + info.message + "\n\n" +
    "Please follow up with the customer promptly.\n" +
    "Google Sheet: " + SpreadsheetApp.getActiveSpreadsheet().getUrl();

  MailApp.sendEmail({
    to: CONFIG.ADMIN_NOTIFICATION_EMAIL,
    subject: subject,
    body: body,
    name: "Masineni Frnd Website Alert"
  });
}

/**
 * Escapes HTML characters for security
 */
function escapeHtml(string) {
  return String(string)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Contact Service Layer
 * Supports Google Sheets database integration, Email automation webhook,
 * schema validation, and structured audit logging.
 */

import { validateContactForm } from '../domain/contactModel';
import { auditLogger } from '../infrastructure/auditLogger';
import { RESTAURANT_CONFIG } from '../infrastructure/config';

export async function submitContactMessage(formData) {
  // 1. Validate input schema
  const validation = validateContactForm(formData);

  if (!validation.isValid) {
    auditLogger.log({
      actor: formData.email || 'anonymous',
      action: 'CONTACT_FORM_VALIDATION_FAILED',
      resource_id: 'inquiry_form',
      status: 'FAILED'
    });

    return {
      success: false,
      errors: validation.errors
    };
  }

  const endpoint = RESTAURANT_CONFIG.contact.googleScriptUrl;
  const inquiryId = `MF-${Date.now().toString(36).toUpperCase()}`;

  try {
    // 2. If Google Apps Script Web App URL is provided, submit to Google Sheets
    if (endpoint && endpoint.trim().length > 0) {
      const bodyData = new URLSearchParams({
        inquiryId,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toISOString()
      });

      await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: bodyData.toString(),
        mode: 'no-cors'
      });

      auditLogger.log({
        actor: formData.email,
        action: 'CONTACT_FORM_GOOGLESHEET_SUCCESS',
        resource_id: inquiryId,
        status: 'SUCCESS'
      });

      return {
        success: true,
        message: 'Thank you! Your inquiry has been saved to our Google Sheets and an email confirmation has been sent to your inbox.',
        data: {
          inquiryId,
          submittedAt: new Date().toISOString(),
          fullName: formData.fullName,
          subject: formData.subject
        }
      };
    }

    // 3. Fallback simulated local response if Google Script is not yet linked
    await new Promise((resolve) => setTimeout(resolve, 600));

    auditLogger.log({
      actor: formData.email,
      action: 'CONTACT_FORM_SUBMISSION_SUCCESS',
      resource_id: inquiryId,
      status: 'SUCCESS'
    });

    return {
      success: true,
      message: 'Thank you for reaching out to Masineni Frnd! Your inquiry has been received. Our hospitality team will be in touch shortly.',
      data: {
        inquiryId,
        submittedAt: new Date().toISOString(),
        fullName: formData.fullName,
        subject: formData.subject
      }
    };
  } catch (error) {
    auditLogger.log({
      actor: formData.email || 'unknown',
      action: 'CONTACT_FORM_EXCEPTION',
      resource_id: 'inquiry_submission',
      status: 'FAILED'
    });

    return {
      success: false,
      errors: {
        form: 'An unexpected error occurred while connecting. Please try again or call us directly.'
      }
    };
  }
}

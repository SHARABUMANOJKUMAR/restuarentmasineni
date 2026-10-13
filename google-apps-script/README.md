# Google Sheet & Email Automation Setup Guide — Masineni Frnd

This guide explains how to connect your **Masineni Frnd** contact form to **Google Sheets** as a database and send **automatic, colorful, responsive confirmation emails** to customers.

---

## 1. Google Sheet Columns Setup

Open [Google Sheets](https://sheets.new) and create a new spreadsheet named:  
**`Masineni Frnd — Customer Inquiries`**

Rename the first sheet tab to: **`Inquiries`**

In **Row 1**, set the following exact column headers:

| Column | Header Name | Description |
|---|---|---|
| **A** | `Timestamp` | Date and time when the form was submitted |
| **B** | `Inquiry ID` | Auto-generated unique reference (e.g., `MF-20261013-4821`) |
| **C** | `Full Name` | Guest's full name |
| **D** | `Email Address` | Guest's email address |
| **E** | `Phone Number` | Guest's mobile contact number |
| **F** | `Subject` | Reason / Reservation type |
| **G** | `Message` | Special requests, table booking notes, guest count |
| **H** | `Status` | `New` (can be changed to *Called*, *Confirmed*, *Completed*) |
| **I** | `Follow-up Notes` | Internal notes added by restaurant reception staff |

> **Tip:** You can format Row 1 with a Tomato Red background (`#F45135`) and white bold text for a clean, branded dashboard!

---

## 2. Deploy Google Apps Script (Step-by-Step)

1. Inside your Google Sheet, click **Extensions** in the top menu bar → select **Apps Script**.
2. Delete any default code in the editor (`myFunction`).
3. Open the file [`google-apps-script/Code.gs`](./Code.gs) from this project, copy the entire code, and paste it into the Apps Script editor.
4. *(Optional)* At the top of `Code.gs`, in the `CONFIG` object:
   - Set `ADMIN_NOTIFICATION_EMAIL: "your_restaurant_email@gmail.com"` if you want instant notification emails whenever a customer submits the form.
5. Click the **Save** icon (floppy disk or `Ctrl + S`).
6. Click the blue **Deploy** button at top right → click **New deployment**.
7. In the left panel, click the gear icon ⚙ next to "Select type" → choose **Web app**.
8. Fill in the deployment settings:
   - **Description**: `Masineni Frnd Contact Form Webhook v1`
   - **Execute as**: `Me (your_email@gmail.com)`
   - **Who has access**: **`Anyone`** *(Crucial: This allows your website frontend to submit entries)*
9. Click **Deploy**.
10. Click **Authorize access**, select your Google account, and grant permissions.
11. **Copy the Web App URL** (looks like `https://script.google.com/macros/s/AKfycbx.../exec`).

---

## 3. Connect to the Frontend React Website

You can connect the Web App URL in two easy ways:

### Option A: Via Environment File (Recommended)
Create a `.env` file in the root of the project:
```env
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbx.../exec
```

### Option B: Directly in Configuration File
Open [`src/infrastructure/config.js`](../src/infrastructure/config.js) and paste the URL:
```javascript
export const RESTAURANT_CONFIG = {
  // ...
  contact: {
    // ...
    googleScriptUrl: 'https://script.google.com/macros/s/AKfycbx.../exec'
  }
};
```

---

## 4. What Happens When a Customer Submits the Form?

1. **Instant Google Sheet Row**: The data is appended to your spreadsheet immediately.
2. **Automated Customer Email**:
   - Sent instantly to the guest's email address.
   - Styled with Masineni Frnd's brand colors: Warm Cream (`#FFF8EC`), Tomato Red (`#F45135`), Fresh Orange (`#FF9F43`), and Leaf Green (`#70AD47`).
   - Displays a clean summary card with their **Reference ID**, **Contact info**, and **Message**.
   - Includes **"Browse Our Delicious Menu"** and **"Call Restaurant"** direct call-to-action buttons.
   - Displays opening hours, location address, and hospitality note.
   - 100% responsive across all screen sizes (Smartphones, Tablets, Laptops, Apple Mail, Gmail, Outlook).
3. **Optional Admin Alert**: If `ADMIN_NOTIFICATION_EMAIL` is configured, restaurant staff receive an instant notification to follow up on the reservation.

# Masineni Frnd — Frontend Service Layer API Documentation

This document specifies the contracts, input schemas, response structures, and error handling for the Masineni Frnd restaurant client services. All service calls are asynchronous and wrapped with structured error handling and system audit logging.

---

## 1. Menu Service (`src/services/menuService.js`)

### 1.1 `getCategories()`
Retrieves all available culinary categories for filtering.
- **Request**: None
- **Response**:
```json
{
  "success": true,
  "data": [
    { "id": "all", "label": "All Dishes", "icon": "Utensils" },
    { "id": "starters", "label": "Starters", "icon": "Flame" },
    { "id": "veg", "label": "Vegetarian Dishes", "icon": "Leaf" },
    { "id": "non-veg", "label": "Non-Vegetarian", "icon": "Drumstick" },
    { "id": "biryani", "label": "Biryani & Rice", "icon": "Sparkles" },
    { "id": "main-course", "label": "Main Course", "icon": "ChefHat" },
    { "id": "desserts", "label": "Desserts", "icon": "Cake" },
    { "id": "beverages", "label": "Beverages & Mocktails", "icon": "Wine" }
  ]
}
```

### 1.2 `getMenuItems(filters)`
Retrieves food dishes based on active category and optional text query.
- **Request Parameters**:
  - `category` *(string, optional)*: Filter by category id (e.g. `'biryani'`). Default: `'all'`
  - `searchQuery` *(string, optional)*: Case-insensitive match on name and description.
  - `vegOnly` *(boolean, optional)*: If `true`, limits results to vegetarian items.
- **Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": "biryani-1",
      "name": "Hyderabadi Special Chicken Dum Biryani",
      "description": "Slow-cooked fragrant basmati rice layered with marinated tender chicken, saffron, and aromatic spices.",
      "price": 380,
      "category": "biryani",
      "isVeg": false,
      "isSpicy": true,
      "rating": 4.9,
      "reviewCount": 240,
      "badge": "Chef's Special",
      "image": "https://...",
      "prepTime": "20-25 mins"
    }
  ],
  "total": 1
}
```
- **Error Cases**:
  - `INVALID_FILTER`: Throws structured error `{ success: false, error: "Invalid category filter supplied" }`

### 1.3 `getFeaturedDishes()`
Returns top signature dishes showcased on the homepage.
- **Response**: Array of 6 curated signature dishes.

---

## 2. Gallery Service (`src/services/galleryService.js`)

### 2.1 `getGalleryItems(category)`
Retrieves high-resolution curated restaurant and food photos.
- **Request Parameters**:
  - `category` *(string, optional)*: `'all' | 'food' | 'interiors' | 'dining'`
- **Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": "gal-1",
      "title": "Royal Family Dining Hall",
      "category": "interiors",
      "imageUrl": "https://...",
      "thumbnailUrl": "https://...",
      "caption": "Spacious and ambient dining area designed for family celebrations."
    }
  ]
}
```

---

## 3. Contact Service (`src/services/contactService.js`)

### 3.1 `submitContactMessage(payload)`
Validates and logs a client contact/inquiry message.
- **Request Schema**:
```json
{
  "fullName": "Sharath Kumar",
  "email": "sharath@example.com",
  "phone": "+91 98765 43210",
  "subject": "Table Reservation / Event Inquiry",
  "message": "We would like to book a table for 8 persons this Sunday evening."
}
```
- **Validation Rules**:
  - `fullName`: Minimum 2 characters, required.
  - `email`: Valid RFC 5322 email pattern, required.
  - `phone`: Valid 10-digit Indian telephone format (supports optional +91), required.
  - `subject`: Minimum 3 characters, required.
  - `message`: Minimum 10 characters, required.
- **Success Response (HTTP 200 / Google Apps Script)**:
```json
{
  "success": true,
  "message": "Thank you! Your inquiry has been saved to our Google Sheets and an email confirmation has been sent to your inbox.",
  "data": {
    "inquiryId": "MF-20261013-4821",
    "timestamp": "2026-10-13T19:55:00+05:30",
    "fullName": "Sharath Kumar",
    "email": "sharath@example.com"
  }
}
```

### 3.2 Google Apps Script Web App Integration
- **Endpoint**: Configured via `RESTAURANT_CONFIG.contact.googleScriptUrl` or `VITE_GOOGLE_SCRIPT_URL`
- **Method**: `POST` (URL-encoded / JSON)
- **Google Sheet Storage**: Appends rows with headers: `Timestamp`, `Inquiry ID`, `Full Name`, `Email Address`, `Phone Number`, `Subject`, `Message`, `Status`, `Follow-up Notes`
- **Email Automation**:
  - Automatically dispatches responsive HTML confirmation email to the guest's email.
  - Sends immediate inquiry alert email to restaurant management (`CONFIG.ADMIN_NOTIFICATION_EMAIL`).
- **Error Response**:
```json
{
  "success": false,
  "errors": {
    "email": "Please enter a valid email address.",
    "phone": "Please enter a valid 10-digit mobile number."
  }
}
```

---

## 4. Audit & Logging Service (`src/infrastructure/auditLogger.js`)

Complies with the system mandatory audit log schema:
```json
{
  "timestamp": "2026-10-13T14:25:00.000Z",
  "actor": "client_visitor",
  "action": "MENU_SEARCH",
  "resource_id": "biryani",
  "status": "SUCCESS"
}
```
Logs are maintained in memory with export capabilities and formatted console output disabled in production.

/**
 * Masineni Frnd Restaurant — Core Configuration & Metadata
 */

export const RESTAURANT_CONFIG = {
  name: 'Masineni Frnd',
  tagline: 'Good Food. Great Friends. Unforgettable Moments.',
  shortDescription: 'Discover delicious flavours, freshly prepared dishes, and memorable dining experiences at Masineni Frnd.',
  location: {
    displayAddress: 'Plot No. 42, Green Park Avenue, Near Bypass Road, Anantapur, Andhra Pradesh - 515001, India',
    landmark: 'Opposite Silicon Park, Next to Orchid Heights',
    city: 'Anantapur / Bengaluru Corridor',
    mapQuery: 'Masineni+Frnd+Restaurant',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123456.78!2d77.60!3d14.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzAwLjAiTiA3N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin'
  },
  contact: {
    primaryPhone: '+91 98765 43210',
    secondaryPhone: '+91 85542 33445',
    email: 'info@masinenifrnd.com',
    reservationsEmail: 'reservations@masinenifrnd.com',
    // Google Apps Script Web App Endpoint for Google Sheets & Email Automation
    googleScriptUrl: import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbw1fNkVA96Twf_fMWDNbhWNUmIbrULTY56xqFur52PX_4xSsQhSccHtvlJm6K_6LnaX/exec'
  },
  hours: {
    weekdays: '11:30 AM – 11:00 PM',
    weekends: '11:00 AM – 11:30 PM',
    kitchenCloses: '10:45 PM'
  },
  social: {
    instagram: 'https://instagram.com/masinenifrnd',
    facebook: 'https://facebook.com/masinenifrnd',
    twitter: 'https://twitter.com/masinenifrnd',
    whatsapp: 'https://wa.me/919876543210'
  },
  navLinks: [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Menu', path: '/menu' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' }
  ],
  stats: [
    { value: '45+', label: 'Signature Dishes', description: 'Curated by master culinary chefs' },
    { value: '100% Fresh', label: 'Locally Sourced', description: 'Daily fresh farm produce & spices' },
    { value: '180+', label: 'Guest Seating Capacity', description: 'Family halls, AC dining & cabins' },
    { value: '4.8 ★', label: 'Customer Satisfaction', description: 'Over 5,000+ happy dining patrons' }
  ]
};

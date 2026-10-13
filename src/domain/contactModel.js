/**
 * Contact Domain Model & Form Validation Logic
 */

export function validateContactForm({ fullName = '', email = '', phone = '', subject = '', message = '' }) {
  const errors = {};

  // Full Name validation
  const trimmedName = fullName.trim();
  if (!trimmedName) {
    errors.fullName = 'Please enter your full name.';
  } else if (trimmedName.length < 2) {
    errors.fullName = 'Full name must be at least 2 characters.';
  } else if (!/^[a-zA-Z\s.'-]+$/.test(trimmedName)) {
    errors.fullName = 'Please enter a valid name without special characters.';
  }

  // Email validation
  const trimmedEmail = email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = 'Please provide an email address.';
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email format (e.g., name@domain.com).';
  }

  // Phone validation (Indian 10-digit mobile or optional +91 prefix)
  const trimmedPhone = phone.trim().replace(/[\s-]/g, '');
  const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
  if (!trimmedPhone) {
    errors.phone = 'Please provide your contact phone number.';
  } else if (!phoneRegex.test(trimmedPhone)) {
    errors.phone = 'Please enter a valid 10-digit mobile number (e.g., 9876543210).';
  }

  // Subject validation
  const trimmedSubject = subject.trim();
  if (!trimmedSubject) {
    errors.subject = 'Please specify a subject or reason for inquiry.';
  } else if (trimmedSubject.length < 3) {
    errors.subject = 'Subject must be at least 3 characters.';
  }

  // Message validation
  const trimmedMessage = message.trim();
  if (!trimmedMessage) {
    errors.message = 'Please write your message or inquiry details.';
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

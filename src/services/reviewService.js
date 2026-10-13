/**
 * Review & Testimonial Service Layer
 */

import { TESTIMONIALS_DATA } from '../data/testimonialsData';

export async function fetchTestimonials() {
  try {
    return {
      success: true,
      data: TESTIMONIALS_DATA
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to retrieve testimonials'
    };
  }
}

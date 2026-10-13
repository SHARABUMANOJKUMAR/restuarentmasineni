/**
 * Gallery Service Layer
 * Encapsulates curated photo catalog access and category filtering.
 */

import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/galleryData';
import { auditLogger } from '../infrastructure/auditLogger';

export async function fetchGalleryCategories() {
  try {
    return {
      success: true,
      data: GALLERY_CATEGORIES
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to fetch gallery categories'
    };
  }
}

export async function fetchGalleryItems(category = 'all') {
  try {
    const items = category === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === category);

    auditLogger.log({
      action: 'FILTER_GALLERY',
      resource_id: `category:${category}`,
      status: 'SUCCESS'
    });

    return {
      success: true,
      data: items,
      total: items.length
    };
  } catch (error) {
    auditLogger.log({
      action: 'FILTER_GALLERY_ERROR',
      resource_id: `category:${category}`,
      status: 'FAILED'
    });
    return {
      success: false,
      error: error.message || 'Failed to retrieve gallery items'
    };
  }
}

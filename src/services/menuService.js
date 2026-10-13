/**
 * Menu Service Layer
 * Encapsulates menu data access, filtering, and structured responses.
 */

import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { filterMenuItems } from '../domain/menuModel';
import { auditLogger } from '../infrastructure/auditLogger';

export async function fetchCategories() {
  try {
    return {
      success: true,
      data: MENU_CATEGORIES
    };
  } catch (error) {
    auditLogger.log({
      action: 'FETCH_CATEGORIES_ERROR',
      resource_id: 'menu_categories',
      status: 'FAILED'
    });
    return {
      success: false,
      error: error.message || 'Unable to retrieve menu categories'
    };
  }
}

export async function fetchMenuItems({ category = 'all', searchQuery = '', isVegOnly = false } = {}) {
  try {
    const filtered = filterMenuItems(MENU_ITEMS, { category, searchQuery, isVegOnly });

    auditLogger.log({
      action: 'FILTER_MENU',
      resource_id: `category:${category}|query:${searchQuery}`,
      status: 'SUCCESS'
    });

    return {
      success: true,
      data: filtered,
      total: filtered.length
    };
  } catch (error) {
    auditLogger.log({
      action: 'FILTER_MENU_ERROR',
      resource_id: 'menu_items',
      status: 'FAILED'
    });
    return {
      success: false,
      error: error.message || 'Failed to retrieve menu items'
    };
  }
}

export async function fetchFeaturedDishes() {
  try {
    const featured = MENU_ITEMS.filter((item) => item.isFeatured);
    return {
      success: true,
      data: featured
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to retrieve featured dishes'
    };
  }
}

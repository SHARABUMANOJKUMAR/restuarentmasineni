/**
 * Menu Domain Model & Pure Business Logic
 */

import { MENU_CATEGORIES } from '../data/menuData';

export function formatCurrency(amount) {
  if (typeof amount !== 'number') return '₹0';
  return `₹${amount.toLocaleString('en-IN')}`;
}

export function getCategoryLabel(categoryId) {
  const cat = MENU_CATEGORIES.find((c) => c.id === categoryId);
  return cat ? cat.label : 'All Dishes';
}

export function filterMenuItems(items, { category = 'all', searchQuery = '', isVegOnly = false }) {
  if (!Array.isArray(items)) return [];

  const query = searchQuery.trim().toLowerCase();

  return items.filter((item) => {
    // Category match
    const matchesCategory =
      category === 'all' ||
      item.category === category ||
      (category === 'veg' && item.isVeg) ||
      (category === 'non-veg' && !item.isVeg);

    if (!matchesCategory) return false;

    // Veg Only filter toggle
    if (isVegOnly && !item.isVeg) return false;

    // Search query match (on name, description, category, and badge)
    if (query) {
      const nameMatch = item.name.toLowerCase().includes(query);
      const descMatch = item.description.toLowerCase().includes(query);
      const badgeMatch = item.badge ? item.badge.toLowerCase().includes(query) : false;
      const catMatch = item.category.toLowerCase().includes(query);

      return nameMatch || descMatch || badgeMatch || catMatch;
    }

    return true;
  });
}

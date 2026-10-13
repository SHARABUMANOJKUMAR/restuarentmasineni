import React, { useState, useEffect, useMemo } from 'react';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Badge, VegIndicator } from '../components/common/Badge';
import { SectionHeader } from '../components/common/SectionHeader';
import { FoodCard } from '../components/FoodCard';
import { fetchCategories, fetchMenuItems } from '../services/menuService';
import {
  Utensils,
  Search,
  Filter,
  Flame,
  Leaf,
  Sparkles,
  Soup,
  Cake,
  GlassWater,
  Drumstick,
  RotateCcw,
  Check
} from 'lucide-react';

const ICON_MAP = {
  Utensils,
  Flame,
  Leaf,
  Drumstick,
  Sparkles,
  Soup,
  Cake,
  GlassWater
};

export const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isVegOnly, setIsVegOnly] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load categories and menu items
  useEffect(() => {
    async function init() {
      setLoading(true);
      const catRes = await fetchCategories();
      if (catRes.success) {
        setCategories(catRes.data);
      }
      const itemsRes = await fetchMenuItems({ category: 'all', searchQuery: '', isVegOnly: false });
      if (itemsRes.success) {
        setMenuItems(itemsRes.data);
      }
      setLoading(false);
    }
    init();
  }, []);

  // Filter items whenever category, search query, or veg toggle changes
  useEffect(() => {
    async function filterData() {
      const res = await fetchMenuItems({
        category: activeCategory,
        searchQuery,
        isVegOnly
      });
      if (res.success) {
        setMenuItems(res.data);
      }
    }
    filterData();
  }, [activeCategory, searchQuery, isVegOnly]);

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setIsVegOnly(false);
  };

  return (
    <div className="bg-warm-cream" style={{ minHeight: '80vh', paddingBottom: 'var(--space-4xl)' }}>
      {/* 1. MENU HERO BANNER */}
      <section className="bg-gradient-hero" style={{ padding: 'var(--space-3xl) 0 var(--space-2xl) 0' }}>
        <Container size="default">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
            <Badge variant="primary" size="md" icon={Utensils} style={{ marginBottom: 'var(--space-md)' }}>
              EXPLORE OUR COMPLETE FLAVOURS
            </Badge>

            <Typography variant="display" color="main" style={{ marginBottom: 'var(--space-md)' }}>
              Our Authentic{' '}
              <Typography as="span" variant="display" color="primary">
                Food Menu
              </Typography>
            </Typography>

            <Typography variant="body-lg" color="muted">
              Every dish is freshly prepared to order using hand-selected spices, traditional slow-dum methods, and farm-fresh ingredients. Browse our categories below.
            </Typography>
          </div>
        </Container>
      </section>

      {/* 2. SEARCH & FILTER CONTROLS BAR */}
      <section style={{ padding: 'var(--space-lg) 0' }}>
        <Container size="default">
          <Card
            variant="default"
            padding="lg"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: 'var(--space-xl)'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 'var(--space-md)'
              }}
            >
              {/* Search Input Box */}
              <div style={{ position: 'relative', flex: '1 1 300px' }}>
                <div
                  style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--color-text-muted)',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Search size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Search dishes (e.g. Biryani, Paneer, Tandoori)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px 12px 42px',
                    borderRadius: 'var(--radius-full)',
                    border: '1.5px solid var(--color-border-subtle)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    backgroundColor: 'var(--color-warm-cream)',
                    color: 'var(--color-text-main)'
                  }}
                />
              </div>

              {/* Vegetarian Only Filter Toggle */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  backgroundColor: 'var(--color-warm-cream)',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-full)',
                  border: '1.5px solid var(--color-border-subtle)',
                  cursor: 'pointer'
                }}
                onClick={() => setIsVegOnly(!isVegOnly)}
              >
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '6px',
                    border: '2px solid var(--color-leaf-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: isVegOnly ? 'var(--color-leaf-green)' : '#FFFFFF'
                  }}
                >
                  {isVegOnly && <Check size={14} color="#FFFFFF" strokeWidth={3} />}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <VegIndicator isVeg={true} />
                  <Typography variant="small" weight={700} color={isVegOnly ? 'green' : 'main'}>
                    Pure Veg Only
                  </Typography>
                </div>
              </div>

              {/* Reset Action if filters active */}
              {(activeCategory !== 'all' || searchQuery || isVegOnly) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleResetFilters}
                  icon={RotateCcw}
                >
                  Reset Filters
                </Button>
              )}
            </div>
          </Card>

          {/* 3. CATEGORY PILLS BAR */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              overflowX: 'auto',
              paddingBottom: '12px',
              marginBottom: 'var(--space-2xl)',
              scrollbarWidth: 'none'
            }}
          >
            {categories.map((cat) => {
              const IconComponent = ICON_MAP[cat.icon] || Utensils;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 18px',
                    borderRadius: 'var(--radius-full)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.9rem',
                    fontWeight: isActive ? 700 : 500,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    border: '1.5px solid',
                    borderColor: isActive ? 'var(--color-tomato-red)' : 'var(--color-border-subtle)',
                    backgroundColor: isActive ? 'var(--color-tomato-red)' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : 'var(--color-text-main)',
                    boxShadow: isActive ? '0 4px 14px rgba(244, 81, 53, 0.25)' : 'var(--shadow-sm)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <IconComponent size={16} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* 4. DISHES COUNT BAR */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 'var(--space-lg)'
            }}
          >
            <Typography variant="h3" weight={700}>
              {activeCategory === 'all' ? 'All Dishes' : categories.find((c) => c.id === activeCategory)?.label}
            </Typography>

            <Typography variant="small" color="muted">
              Showing <Typography as="span" variant="small" weight={700} color="primary">{menuItems.length}</Typography> dishes
            </Typography>
          </div>

          {/* 5. FOOD CARDS GRID */}
          {menuItems.length > 0 ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
                gap: 'var(--space-xl)'
              }}
            >
              {menuItems.map((item) => (
                <FoodCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            /* EMPTY RESULTS STATE */
            <Card
              variant="default"
              padding="xl"
              style={{
                textAlign: 'center',
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: 'var(--space-3xl) var(--space-xl)'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-soft-peach)',
                  color: 'var(--color-tomato-red)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-md) auto'
                }}
              >
                <Search size={30} />
              </div>
              <Typography variant="h3" weight={700} style={{ marginBottom: '8px' }}>
                No Dishes Matched Your Filter
              </Typography>
              <Typography variant="body" color="muted" style={{ marginBottom: 'var(--space-xl)', maxWidth: '440px', margin: '0 auto var(--space-xl) auto' }}>
                We couldn't find any dish matching "{searchQuery}" in this category. Try adjusting your search term or reset filters.
              </Typography>
              <Button variant="primary" size="md" onClick={handleResetFilters} icon={RotateCcw}>
                Reset All Filters
              </Button>
            </Card>
          )}

          {/* 6. SAMPLE PRICING DISCLAIMER */}
          <div
            style={{
              marginTop: 'var(--space-3xl)',
              padding: 'var(--space-lg)',
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px dashed var(--color-border-subtle)',
              textAlign: 'center'
            }}
          >
            <Typography variant="small" color="muted">
              <strong>Notice:</strong> All prices listed above are sample representations in Indian Rupees (₹) for demonstration and menu browsing. Taxes extra as applicable. Dishes subject to daily kitchen availability.
            </Typography>
          </div>
        </Container>
      </section>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { SectionHeader } from '../components/common/SectionHeader';
import { LightboxModal } from '../components/LightboxModal';
import { fetchGalleryCategories, fetchGalleryItems } from '../services/galleryService';
import { Camera, Maximize2, Sparkles } from 'lucide-react';

export const Gallery = () => {
  const [categories, setCategories] = useState([]);
  const [galleryItems, setGalleryItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    async function loadData() {
      const catRes = await fetchGalleryCategories();
      if (catRes.success) setCategories(catRes.data);
      const itemsRes = await fetchGalleryItems('all');
      if (itemsRes.success) setGalleryItems(itemsRes.data);
    }
    loadData();
  }, []);

  useEffect(() => {
    async function filterItems() {
      const res = await fetchGalleryItems(activeCategory);
      if (res.success) setGalleryItems(res.data);
    }
    filterItems();
  }, [activeCategory]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-warm-cream" style={{ minHeight: '80vh', paddingBottom: 'var(--space-4xl)' }}>
      {/* 1. HERO BANNER */}
      <section className="bg-gradient-hero" style={{ padding: 'var(--space-3xl) 0 var(--space-2xl) 0' }}>
        <Container size="default">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
            <Badge variant="primary" size="md" icon={Camera} style={{ marginBottom: 'var(--space-md)' }}>
              MOMENTS & CULINARY ART
            </Badge>
            <Typography variant="display" color="main" style={{ marginBottom: 'var(--space-md)' }}>
              Restaurant{' '}
              <Typography as="span" variant="display" color="primary">
                Photo Gallery
              </Typography>
            </Typography>
            <Typography variant="body-lg" color="muted">
              Explore glimpses of our masterfully plated dishes, ambient dining interiors, comfortable family seating, and unforgettable friend gatherings.
            </Typography>
          </div>
        </Container>
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <section style={{ padding: 'var(--space-lg) 0' }}>
        <Container size="default">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: 'var(--space-2xl)'
            }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '10px 24px',
                    borderRadius: 'var(--radius-full)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.95rem',
                    fontWeight: isActive ? 700 : 500,
                    cursor: 'pointer',
                    border: '1.5px solid',
                    borderColor: isActive ? 'var(--color-tomato-red)' : 'var(--color-border-subtle)',
                    backgroundColor: isActive ? 'var(--color-tomato-red)' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : 'var(--color-text-main)',
                    boxShadow: isActive ? '0 4px 14px rgba(244, 81, 53, 0.25)' : 'var(--shadow-sm)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* 3. GALLERY PHOTO GRID */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 'var(--space-lg)'
            }}
          >
            {galleryItems.map((item, index) => (
              <Card
                key={item.id}
                variant="default"
                padding="none"
                hoverable
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  cursor: 'pointer',
                  position: 'relative',
                  group: 'gallery-item'
                }}
                onClick={() => openLightbox(index)}
              >
                <div style={{ height: '280px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={item.thumbnailUrl || item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />

                  {/* Hover Overlay with Zoom Icon */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(30, 34, 41, 0.8) 0%, transparent 60%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '16px'
                    }}
                  >
                    <div style={{ alignSelf: 'flex-end' }}>
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          color: 'var(--color-tomato-red)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                        }}
                      >
                        <Maximize2 size={18} />
                      </div>
                    </div>

                    <div>
                      {item.tag && (
                        <Badge variant="orange" size="sm" style={{ marginBottom: '6px' }}>
                          {item.tag}
                        </Badge>
                      )}
                      <Typography variant="h4" color="white" weight={700}>
                        {item.title}
                      </Typography>
                      <Typography variant="small" color="white" style={{ opacity: 0.85 }}>
                        {item.caption}
                      </Typography>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. LIGHTBOX MODAL */}
      <LightboxModal
        isOpen={lightboxOpen}
        items={galleryItems}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </div>
  );
};

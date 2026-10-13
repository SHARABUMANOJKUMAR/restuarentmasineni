import React from 'react';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { SectionHeader } from '../components/common/SectionHeader';
import { RESTAURANT_CONFIG } from '../infrastructure/config';
import {
  Utensils,
  Heart,
  Sparkles,
  ShieldCheck,
  Award,
  Users,
  ChefHat,
  ArrowRight,
  Smile
} from 'lucide-react';

export const AboutUs = () => {
  return (
    <div>
      {/* 1. HERO BANNER */}
      <section className="bg-gradient-hero" style={{ padding: 'var(--space-3xl) 0' }}>
        <Container size="default">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
            <Badge variant="orange" size="md" icon={Heart} style={{ marginBottom: 'var(--space-md)' }}>
              WELCOME TO MASINENI FRND
            </Badge>
            <Typography variant="display" color="main" style={{ marginBottom: 'var(--space-md)' }}>
              Our Story,{' '}
              <Typography as="span" variant="display" color="primary">
                Our Passion.
              </Typography>
            </Typography>
            <Typography variant="body-lg" color="muted">
              Born from a simple belief: dining is an experience best celebrated in the company of friends and family, elevated by wholesome recipes, rich spices, and genuine Indian hospitality.
            </Typography>
          </div>
        </Container>
      </section>

      {/* 2. GRAND INTERIOR SHOWCASE */}
      <section className="bg-white" style={{ paddingBottom: 'var(--space-3xl)' }}>
        <Container size="default">
          <Card
            variant="elevated"
            padding="none"
            style={{
              borderRadius: '28px',
              overflow: 'hidden',
              marginTop: '-30px',
              border: '4px solid #FFFFFF'
            }}
          >
            <div style={{ height: '480px', position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85"
                alt="Masineni Frnd Restaurant Interior and Seating"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(30, 34, 41, 0.7) 0%, transparent 45%)'
                }}
              />
              <div style={{ position: 'absolute', bottom: '32px', left: '32px', right: '32px' }}>
                <Typography variant="h2" color="white" weight={700}>
                  Spacious Dining Infrastructure Crafted for Comfort
                </Typography>
                <Typography variant="body" color="white" style={{ opacity: 0.9 }}>
                  Modern acoustic design, warm ambient fixtures, plush family seating, and clean modern aesthetics.
                </Typography>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      {/* 3. OUR STORY & FOOD PHILOSOPHY */}
      <section className="section-padding bg-warm-cream">
        <Container size="default">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-3xl)',
              alignItems: 'center'
            }}
          >
            <div>
              <Badge variant="primary" size="md" icon={Sparkles} style={{ marginBottom: 'var(--space-md)' }}>
                WARM ROOTS & TIMELESS RECIPES
              </Badge>
              <Typography variant="h2" weight={800} style={{ marginBottom: 'var(--space-lg)' }}>
                Serving Delight In Every Grain & Garnish
              </Typography>
              <Typography variant="body" color="muted" style={{ marginBottom: 'var(--space-md)' }}>
                At Masineni Frnd, our kitchen is driven by culinary craftsmanship and authentic regional flavours. Every pot of biryani is dum-cooked with patient dedication, letting slow-released steam unite golden saffron basmati with spice-infused meats and aromatics.
              </Typography>
              <Typography variant="body" color="muted" style={{ marginBottom: 'var(--space-xl)' }}>
                We pride ourselves on creating a comfortable, inclusive environment where generations gather together. From spicy starters to soothing traditional desserts, each dish is balanced to perfection to suit the palate of every guest.
              </Typography>

              <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                <Button to="/menu" variant="primary" size="md" icon={Utensils}>
                  Discover Our Menu
                </Button>
                <Button to="/gallery" variant="secondary" size="md">
                  View Photo Gallery
                </Button>
              </div>
            </div>

            {/* Visual Collage of Food Preparation & Dining */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'var(--space-md)'
              }}
            >
              <Card variant="default" padding="none" style={{ borderRadius: '20px', overflow: 'hidden', height: '220px' }}>
                <img
                  src="/tandoori-chicken.png"
                  alt="Tandoori Chicken Preparation"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Card>

              <Card variant="default" padding="none" style={{ borderRadius: '20px', overflow: 'hidden', height: '220px' }}>
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
                  alt="Family Dining Experience"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Card>

              <Card variant="default" padding="none" style={{ borderRadius: '20px', overflow: 'hidden', height: '220px', gridColumn: 'span 2' }}>
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Restaurant Seating and Booths"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. FOUR PILLARS: FRESHNESS, QUALITY, HYGIENE, HOSPITALITY */}
      <section className="section-padding bg-white">
        <Container size="default">
          <SectionHeader
            badge="OUR CORE PRINCIPLES"
            badgeIcon={ShieldCheck}
            title="The Standards That Guide"
            highlight="Our Kitchen Daily"
            description="From procurement to plating, our culinary and service teams uphold strict benchmarks to ensure every plate is safe, fresh, and delicious."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 'var(--space-xl)'
            }}
          >
            {/* 1. Freshness */}
            <Card variant="default" padding="xl" hoverable style={{ backgroundColor: '#FFFFFF' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: '#E8F5E1',
                  color: 'var(--color-leaf-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-md)'
                }}
              >
                <Sparkles size={28} />
              </div>
              <Typography variant="h3" weight={700} style={{ marginBottom: '8px' }}>
                Farm Fresh Sourcing
              </Typography>
              <Typography variant="body" color="muted">
                We partner with verified local farmers and suppliers. Fresh greens, hand-picked spices, and chilled dairy arrive at our kitchen daily with zero frozen compromises.
              </Typography>
            </Card>

            {/* 2. Quality */}
            <Card variant="default" padding="xl" hoverable style={{ backgroundColor: '#FFFFFF' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: '#FFF2E2',
                  color: 'var(--color-fresh-orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-md)'
                }}
              >
                <ChefHat size={28} />
              </div>
              <Typography variant="h3" weight={700} style={{ marginBottom: '8px' }}>
                Uncompromised Quality
              </Typography>
              <Typography variant="body" color="muted">
                Pure desi ghee, premium aged long-grain basmati, authentic cold-pressed oils, and traditional slow dum cooking methods that preserve delicate flavors.
              </Typography>
            </Card>

            {/* 3. Hygiene */}
            <Card variant="default" padding="xl" hoverable style={{ backgroundColor: '#FFFFFF' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: '#FEE7E3',
                  color: 'var(--color-tomato-red)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-md)'
                }}
              >
                <ShieldCheck size={28} />
              </div>
              <Typography variant="h3" weight={700} style={{ marginBottom: '8px' }}>
                Strict Kitchen Hygiene
              </Typography>
              <Typography variant="body" color="muted">
                Commercial-grade stainless steel prep stations, UV-sterilized water filtration, regular health screenings, and sanitized dinnerware at every table.
              </Typography>
            </Card>

            {/* 4. Hospitality */}
            <Card variant="default" padding="xl" hoverable style={{ backgroundColor: '#FFFFFF' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: '#FFF8D6',
                  color: '#9C7200',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-md)'
                }}
              >
                <Smile size={28} />
              </div>
              <Typography variant="h3" weight={700} style={{ marginBottom: '8px' }}>
                Heartfelt Hospitality
              </Typography>
              <Typography variant="body" color="muted">
                Hospitality rooted in Indian culture. Attentive, courteous service staff who listen to your taste preferences and take care of children and senior family members.
              </Typography>
            </Card>
          </div>
        </Container>
      </section>

      {/* 5. COLORFUL STATISTICS SECTION */}
      <section
        style={{
          padding: 'var(--space-3xl) 0',
          backgroundColor: 'var(--color-soft-peach)',
          borderTop: '1px solid rgba(244, 81, 53, 0.12)',
          borderBottom: '1px solid rgba(244, 81, 53, 0.12)'
        }}
      >
        <Container size="default">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 'var(--space-xl)',
              textAlign: 'center'
            }}
          >
            {RESTAURANT_CONFIG.stats.map((stat, idx) => (
              <div key={idx}>
                <Typography variant="display" color="primary" weight={800} style={{ marginBottom: '4px' }}>
                  {stat.value}
                </Typography>
                <Typography variant="h4" color="main" weight={700} style={{ marginBottom: '4px' }}>
                  {stat.label}
                </Typography>
                <Typography variant="small" color="muted">
                  {stat.description}
                </Typography>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="section-padding bg-white">
        <Container size="narrow">
          <Card
            variant="default"
            padding="xl"
            style={{
              textAlign: 'center',
              backgroundColor: 'var(--color-warm-cream)',
              borderRadius: '24px'
            }}
          >
            <Typography variant="h2" weight={800} style={{ marginBottom: 'var(--space-md)' }}>
              Come Taste The Passion For Yourself
            </Typography>
            <Typography variant="body-lg" color="muted" style={{ marginBottom: 'var(--space-xl)', maxWidth: '560px', margin: '0 auto var(--space-xl) auto' }}>
              We invite you to experience the authentic warmth of Masineni Frnd. Reserve a table or explore our curated selection of signature dishes.
            </Typography>
            <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button to="/menu" variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                Discover Our Menu
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Contact For Reservations
              </Button>
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
};

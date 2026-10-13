import React, { useState, useEffect } from 'react';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { SectionHeader } from '../components/common/SectionHeader';
import { FoodCard } from '../components/FoodCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { fetchFeaturedDishes } from '../services/menuService';
import { fetchTestimonials } from '../services/reviewService';
import { RESTAURANT_CONFIG } from '../infrastructure/config';
import {
  Utensils,
  ArrowRight,
  PhoneCall,
  Sparkles,
  Leaf,
  Flame,
  Armchair,
  HeartHandshake,
  ShieldCheck,
  Star,
  Users
} from 'lucide-react';

export const Home = () => {
  const [featuredDishes, setFeaturedDishes] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    async function loadHomeData() {
      const dishesRes = await fetchFeaturedDishes();
      if (dishesRes.success) {
        setFeaturedDishes(dishesRes.data);
      }
      const testRes = await fetchTestimonials();
      if (testRes.success) {
        setTestimonials(testRes.data);
      }
    }
    loadHomeData();
  }, []);

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-hero" style={{ padding: 'var(--space-3xl) 0 var(--space-4xl) 0', position: 'relative', overflow: 'hidden' }}>
        <Container size="default">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              alignItems: 'center',
              gap: 'var(--space-3xl)'
            }}
          >
            {/* Hero Left Content */}
            <div>
              <div style={{ marginBottom: 'var(--space-md)' }}>
                <Badge variant="orange" size="md" icon={Sparkles}>
                  AUTHENTIC INDIAN TASTE & COZY DINING
                </Badge>
              </div>

              <Typography variant="display" color="main" style={{ marginBottom: 'var(--space-lg)' }}>
                Good Food.{' '}
                <Typography as="span" variant="display" color="primary">
                  Great Friends.
                </Typography>{' '}
                Unforgettable Moments.
              </Typography>

              <Typography variant="body-lg" color="muted" style={{ marginBottom: 'var(--space-2xl)', maxWidth: '540px' }}>
                {RESTAURANT_CONFIG.shortDescription}
              </Typography>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap', marginBottom: 'var(--space-2xl)' }}>
                <Button to="/menu" variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                  Explore Menu
                </Button>
                <Button to="/contact" variant="secondary" size="lg" icon={PhoneCall}>
                  Contact Us
                </Button>
              </div>

              {/* Trust Badges Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-xl)',
                  paddingTop: 'var(--space-lg)',
                  borderTop: '1px solid var(--color-border-subtle)',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'var(--shadow-sm)',
                      color: 'var(--color-golden-yellow)'
                    }}
                  >
                    <Star size={20} fill="var(--color-golden-yellow)" />
                  </div>
                  <div>
                    <Typography variant="h4" weight={800}>4.8 / 5.0</Typography>
                    <Typography variant="caption" color="muted">5000+ Happy Guests</Typography>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'var(--shadow-sm)',
                      color: 'var(--color-leaf-green)'
                    }}
                  >
                    <Leaf size={20} />
                  </div>
                  <div>
                    <Typography variant="h4" weight={800}>100% Fresh</Typography>
                    <Typography variant="caption" color="muted">Pure Farm Ingredients</Typography>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Right Visuals (Asymmetrical Food Showcase) */}
            <div style={{ position: 'relative' }}>
              <Card
                variant="elevated"
                padding="none"
                style={{
                  borderRadius: '32px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                  border: '4px solid #FFFFFF'
                }}
              >
                <div style={{ height: '440px', position: 'relative' }}>
                  <img
                    src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=85"
                    alt="Authentic Dum Biryani"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {/* Subtle Gradient Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)'
                    }}
                  />
                  <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
                    <Badge variant="gold" size="sm" style={{ marginBottom: '6px' }}>
                      SIGNATURE SPECIALTY
                    </Badge>
                    <Typography variant="h3" color="white" weight={700}>
                      Hyderabadi Claypot Chicken Dum Biryani
                    </Typography>
                    <Typography variant="small" color="white">
                      Slow-cooked with pure ghee, whole saffron, and secret coastal spices.
                    </Typography>
                  </div>
                </div>
              </Card>

              {/* Floating Highlight Card */}
              <div
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-15px',
                  backgroundColor: '#FFFFFF',
                  padding: '14px 20px',
                  borderRadius: '20px',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  border: '1px solid var(--color-border-subtle)'
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-soft-peach)',
                    color: 'var(--color-tomato-red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Flame size={20} />
                </div>
                <div>
                  <Typography variant="caption" color="primary" weight={700}>FRESH OFF THE TANDOOR</Typography>
                  <Typography variant="small" weight={700}>Cooked to Order</Typography>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. FEATURED DISHES SECTION */}
      <section className="section-padding bg-white">
        <Container size="default">
          <SectionHeader
            badge="OUR CULINARY HIGHLIGHTS"
            badgeIcon={Utensils}
            title="Featured Dishes Prepared with"
            highlight="Passion & Precision"
            description="Explore the beloved staples that keep our guests coming back. From fragrant slow-cooked biryanis to melt-in-mouth paneer curries."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-xl)',
              marginBottom: 'var(--space-3xl)'
            }}
          >
            {featuredDishes.map((dish) => (
              <FoodCard key={dish.id} item={dish} />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Button to="/menu" variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
              View Complete Restaurant Menu
            </Button>
          </div>
        </Container>
      </section>

      {/* 3. WHY CHOOSE US SECTION */}
      <section className="section-padding bg-warm-cream">
        <Container size="default">
          <SectionHeader
            badge="THE MASINENI FRND DIFFERENCE"
            badgeIcon={ShieldCheck}
            title="Why Guests"
            highlight="Love Dining With Us"
            description="We combine time-honored Indian culinary craft with warm hospitality and an inviting modern dining environment."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 'var(--space-lg)'
            }}
          >
            {/* Pillar 1 */}
            <Card variant="default" padding="xl" hoverable style={{ backgroundColor: '#FFFFFF', textAlign: 'center' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '20px',
                  backgroundColor: '#E8F5E1',
                  color: 'var(--color-leaf-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-md) auto'
                }}
              >
                <Leaf size={32} />
              </div>
              <Typography variant="h3" weight={700} style={{ marginBottom: '8px' }}>
                Fresh Ingredients
              </Typography>
              <Typography variant="body" color="muted">
                Locally sourced vegetables, farm-fresh poultry, pure cold-pressed oils, and freshly ground whole spices every single morning.
              </Typography>
            </Card>

            {/* Pillar 2 */}
            <Card variant="default" padding="xl" hoverable style={{ backgroundColor: '#FFFFFF', textAlign: 'center' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '20px',
                  backgroundColor: '#FFF2E2',
                  color: 'var(--color-fresh-orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-md) auto'
                }}
              >
                <Flame size={32} />
              </div>
              <Typography variant="h3" weight={700} style={{ marginBottom: '8px' }}>
                Delicious Flavours
              </Typography>
              <Typography variant="body" color="muted">
                Mastery of age-old slow dum dum-cooking, charcoal clay tandoors, and rich satin gravies passed down through seasoned chefs.
              </Typography>
            </Card>

            {/* Pillar 3 */}
            <Card variant="default" padding="xl" hoverable style={{ backgroundColor: '#FFFFFF', textAlign: 'center' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '20px',
                  backgroundColor: '#FEE7E3',
                  color: 'var(--color-tomato-red)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-md) auto'
                }}
              >
                <Armchair size={32} />
              </div>
              <Typography variant="h3" weight={700} style={{ marginBottom: '8px' }}>
                Comfortable Dining
              </Typography>
              <Typography variant="body" color="muted">
                Spacious climate-controlled dining hall, plush velvet booths, modern wooden tables, and dedicated quiet family banquet zones.
              </Typography>
            </Card>

            {/* Pillar 4 */}
            <Card variant="default" padding="xl" hoverable style={{ backgroundColor: '#FFFFFF', textAlign: 'center' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '20px',
                  backgroundColor: '#FFF8D6',
                  color: '#9C7200',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-md) auto'
                }}
              >
                <HeartHandshake size={32} />
              </div>
              <Typography variant="h3" weight={700} style={{ marginBottom: '8px' }}>
                Friendly Service
              </Typography>
              <Typography variant="body" color="muted">
                Warm greetings, attentive table service, customized spice level adjustments, and a focus on making your celebration memorable.
              </Typography>
            </Card>
          </div>
        </Container>
      </section>

      {/* 4. RESTAURANT INFRASTRUCTURE & EXPERIENCE SECTION */}
      <section className="section-padding bg-white">
        <Container size="default">
          <SectionHeader
            badge="AMAZING AMBIENCE"
            badgeIcon={Armchair}
            title="Step Into Our"
            highlight="Modern Dining Haven"
            description="Designed for lively reunions, intimate family conversations, and memorable gatherings in an ambiance of comfort and warmth."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-xl)'
            }}
          >
            {/* Atmosphere Item 1 */}
            <Card variant="default" padding="none" hoverable style={{ backgroundColor: '#FFFFFF' }}>
              <div style={{ height: '240px', overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                  alt="Comfortable Family Seating & Warm Lighting"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: 'var(--space-lg)' }}>
                <Typography variant="h4" weight={700} style={{ marginBottom: '6px' }}>
                  Spacious Family Dining & Warm Lighting
                </Typography>
                <Typography variant="small" color="muted">
                  Thoughtfully spaced tables designed with acoustic comfort and glowing pendant chandeliers to enhance your dining experience.
                </Typography>
              </div>
            </Card>

            {/* Atmosphere Item 2 */}
            <Card variant="default" padding="none" hoverable style={{ backgroundColor: '#FFFFFF' }}>
              <div style={{ height: '240px', overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80"
                  alt="Cozy Velvet Booth Seating"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: 'var(--space-lg)' }}>
                <Typography variant="h4" weight={700} style={{ marginBottom: '6px' }}>
                  Plush Private Booths & Modern Furniture
                </Typography>
                <Typography variant="small" color="muted">
                  Ergonomic seating crafted with high-grade upholstery, generous leg room, and comfortable settings for groups of friends.
                </Typography>
              </div>
            </Card>

            {/* Atmosphere Item 3 */}
            <Card variant="default" padding="none" hoverable style={{ backgroundColor: '#FFFFFF' }}>
              <div style={{ height: '240px', overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
                  alt="Clean and Sparkling Restaurant Interiors"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: 'var(--space-lg)' }}>
                <Typography variant="h4" weight={700} style={{ marginBottom: '6px' }}>
                  Pristine Cleanliness & Aesthetic Decor
                </Typography>
                <Typography variant="small" color="muted">
                  Spotless tableware, polished timber finishes, and continuous hygiene protocols that give complete peace of mind.
                </Typography>
              </div>
            </Card>
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Button to="/gallery" variant="secondary" size="md" icon={ArrowRight} iconPosition="right">
              View Complete Photo Gallery
            </Button>
          </div>
        </Container>
      </section>

      {/* 5. CUSTOMER TESTIMONIALS SECTION */}
      <section className="section-padding bg-warm-cream">
        <Container size="default">
          <SectionHeader
            badge="GUEST REVIEWS"
            badgeIcon={Users}
            title="What Our Patrons"
            highlight="Say About Us"
            description="Honest words from families, food lovers, and friend groups who have shared their memorable moments at Masineni Frnd."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-xl)'
            }}
          >
            {testimonials.map((test) => (
              <TestimonialCard key={test.id} testimonial={test} />
            ))}
          </div>
        </Container>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section
        style={{
          padding: 'var(--space-4xl) 0',
          backgroundColor: 'var(--color-tomato-red)',
          color: '#FFFFFF',
          position: 'relative'
        }}
      >
        <Container size="narrow">
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: 'var(--space-md)' }}>
              <Badge variant="gold" size="md">
                JOIN US TODAY
              </Badge>
            </div>

            <Typography variant="display" color="white" weight={800} style={{ marginBottom: 'var(--space-md)' }}>
              Great Food Is Even Better With Friends!
            </Typography>

            <Typography variant="body-lg" color="white" style={{ marginBottom: 'var(--space-2xl)', opacity: 0.95 }}>
              Whether you are planning a grand family birthday, a weekend reunion with old buddies, or a relaxed evening dinner, our tables and chefs are ready to welcome you.
            </Typography>

            <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button to="/menu" variant="orange" size="lg" icon={Utensils}>
                View Our Menu
              </Button>
              <Button to="/contact" variant="secondary" size="lg" icon={PhoneCall}>
                Get In Touch
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

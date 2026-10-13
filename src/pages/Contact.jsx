import React from 'react';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { ContactForm } from '../components/ContactForm';
import { RESTAURANT_CONFIG } from '../infrastructure/config';
import {
  MessageSquare,
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Navigation
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, TwitterIcon } from '../components/common/SocialIcons';

export const Contact = () => {
  return (
    <div className="bg-warm-cream" style={{ minHeight: '80vh', paddingBottom: 'var(--space-4xl)' }}>
      {/* 1. HERO BANNER */}
      <section className="bg-gradient-hero" style={{ padding: 'var(--space-3xl) 0 var(--space-2xl) 0' }}>
        <Container size="default">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
            <Badge variant="primary" size="md" icon={MessageSquare} style={{ marginBottom: 'var(--space-md)' }}>
              GET IN TOUCH & RESERVATIONS
            </Badge>

            <Typography variant="display" color="main" style={{ marginBottom: 'var(--space-md)' }}>
              We'd Love to{' '}
              <Typography as="span" variant="display" color="primary">
                Hear From You!
              </Typography>
            </Typography>

            <Typography variant="body-lg" color="muted">
              Whether you are planning a family feast, a birthday celebration, or have inquiries regarding our menu and catering, reach out to {RESTAURANT_CONFIG.name}.
            </Typography>
          </div>
        </Container>
      </section>

      {/* 2. MAIN CONTACT SECTION: CONTACT INFO + FORM */}
      <section style={{ padding: 'var(--space-lg) 0' }}>
        <Container size="default">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-2xl)',
              alignItems: 'start'
            }}
          >
            {/* Left Column: Direct Contact Info & Restaurant Photo */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
              {/* Contact Information Cards */}
              <Card variant="default" padding="xl" style={{ backgroundColor: '#FFFFFF', borderRadius: '24px' }}>
                <Typography variant="h3" weight={700} style={{ marginBottom: 'var(--space-lg)' }}>
                  Restaurant Information
                </Typography>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                  {/* Phone */}
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        backgroundColor: '#FEE7E3',
                        color: 'var(--color-tomato-red)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Phone size={22} />
                    </div>
                    <div>
                      <Typography variant="caption" color="muted">PHONE NUMBERS</Typography>
                      <a href={`tel:${RESTAURANT_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`} style={{ textDecoration: 'none' }}>
                        <Typography variant="h4" color="primary" weight={700}>
                          {RESTAURANT_CONFIG.contact.primaryPhone}
                        </Typography>
                      </a>
                      <Typography variant="small" color="muted">
                        Secondary: {RESTAURANT_CONFIG.contact.secondaryPhone}
                      </Typography>
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        backgroundColor: '#FFF2E2',
                        color: 'var(--color-fresh-orange)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Mail size={22} />
                    </div>
                    <div>
                      <Typography variant="caption" color="muted">EMAIL INQUIRIES</Typography>
                      <a href={`mailto:${RESTAURANT_CONFIG.contact.email}`} style={{ textDecoration: 'none' }}>
                        <Typography variant="body" weight={700} color="main">
                          {RESTAURANT_CONFIG.contact.email}
                        </Typography>
                      </a>
                      <Typography variant="small" color="muted">
                        Reservations: {RESTAURANT_CONFIG.contact.reservationsEmail}
                      </Typography>
                    </div>
                  </div>

                  {/* Address */}
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        backgroundColor: '#E8F5E1',
                        color: 'var(--color-leaf-green)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <MapPin size={22} />
                    </div>
                    <div>
                      <Typography variant="caption" color="muted">LOCATION & ADDRESS</Typography>
                      <Typography variant="body" weight={600} color="main">
                        {RESTAURANT_CONFIG.location.displayAddress}
                      </Typography>
                      <Typography variant="small" color="muted">
                        Landmark: {RESTAURANT_CONFIG.location.landmark}
                      </Typography>
                    </div>
                  </div>

                  {/* Hours */}
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        backgroundColor: '#FFF8D6',
                        color: '#9C7200',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Clock size={22} />
                    </div>
                    <div>
                      <Typography variant="caption" color="muted">DINING TIMINGS</Typography>
                      <Typography variant="body" weight={600} color="main">
                        Mon – Sun: {RESTAURANT_CONFIG.hours.weekdays}
                      </Typography>
                      <Typography variant="small" color="muted">
                        Weekends: {RESTAURANT_CONFIG.hours.weekends} (Kitchen closes at {RESTAURANT_CONFIG.hours.kitchenCloses})
                      </Typography>
                    </div>
                  </div>
                </div>

                {/* Social Connect Icons */}
                <div style={{ marginTop: 'var(--space-xl)', paddingTop: 'var(--space-lg)', borderTop: '1px solid var(--color-border-subtle)' }}>
                  <Typography variant="caption" color="muted" style={{ marginBottom: '10px' }}>
                    CONNECT ON SOCIAL MEDIA
                  </Typography>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <a
                      href={RESTAURANT_CONFIG.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-soft-peach)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-tomato-red)'
                      }}
                    >
                      <InstagramIcon size={20} />
                    </a>
                    <a
                      href={RESTAURANT_CONFIG.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-soft-peach)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-tomato-red)'
                      }}
                    >
                      <FacebookIcon size={20} />
                    </a>
                    <a
                      href={RESTAURANT_CONFIG.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-soft-peach)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-tomato-red)'
                      }}
                    >
                      <TwitterIcon size={20} />
                    </a>
                  </div>
                </div>
              </Card>

              {/* Visually Attractive Restaurant Ambience Card */}
              <Card variant="default" padding="none" style={{ borderRadius: '24px', overflow: 'hidden' }}>
                <div style={{ height: '240px', position: 'relative' }}>
                  <img
                    src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80"
                    alt="Masineni Frnd Restaurant Hall"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)'
                    }}
                  />
                  <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                    <Typography variant="h4" color="white" weight={700}>
                      Reserve Ahead For Large Groups
                    </Typography>
                    <Typography variant="small" color="white" style={{ opacity: 0.9 }}>
                      Dedicated family cabins and banquet arrangements available.
                    </Typography>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. LOCATION & MAP PLACEHOLDER SECTION */}
      <section style={{ padding: 'var(--space-2xl) 0' }}>
        <Container size="default">
          <Card
            variant="default"
            padding="none"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                padding: 'var(--space-xl)',
                borderBottom: '1px solid var(--color-border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 'var(--space-md)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Navigation size={20} color="var(--color-tomato-red)" />
                  <Typography variant="h3" weight={700}>
                    Find Our Restaurant
                  </Typography>
                </div>
                <Typography variant="body" color="muted">
                  Conveniently situated along the main arterial corridor with ample valet parking for families and cars.
                </Typography>
              </div>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(RESTAURANT_CONFIG.location.displayAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--color-tomato-red)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none'
                }}
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Realistic Interactive Map Embed / Visual Map Container */}
            <div style={{ height: '360px', width: '100%', position: 'relative', backgroundColor: '#F1EBE1' }}>
              <iframe
                title="Restaurant Location Map"
                src="https://maps.google.com/maps?q=Anantapur,+Andhra+Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
};

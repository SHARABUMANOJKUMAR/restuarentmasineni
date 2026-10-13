import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './common/Container';
import { Typography } from './common/Typography';
import { Button } from './common/Button';
import { RESTAURANT_CONFIG } from '../infrastructure/config';
import {
  UtensilsCrossed,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, TwitterIcon } from './common/SocialIcons';

export const Footer = React.memo(function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '2px solid var(--color-border-subtle)',
        marginTop: 'auto'
      }}
    >
      {/* Top Banner / Hospitality Promise */}
      <div
        style={{
          backgroundColor: 'var(--color-soft-peach)',
          padding: 'var(--space-xl) 0',
          borderBottom: '1px solid rgba(244, 81, 53, 0.12)'
        }}
      >
        <Container size="default">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 'var(--space-lg)'
            }}
          >
            <div>
              <Typography variant="h3" color="primary" weight={700}>
                Ready for an unforgettable dining experience?
              </Typography>
              <Typography variant="body" color="muted">
                Visit Masineni Frnd with your friends and family for authentic flavors and warm memories.
              </Typography>
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
              <Button to="/menu" variant="primary" size="md">
                View Full Menu
              </Button>
              <Button to="/contact" variant="outline" size="md">
                Get In Touch
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Content */}
      <div style={{ padding: 'var(--space-3xl) 0 var(--space-2xl) 0' }}>
        <Container size="default">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 'var(--space-2xl)'
            }}
          >
            {/* Column 1: Brand Info */}
            <div>
              <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-md)', textDecoration: 'none' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--color-tomato-red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF'
                  }}
                >
                  <UtensilsCrossed size={22} />
                </div>
                <div>
                  <Typography variant="h3" color="primary" weight={800}>
                    Masineni Frnd
                  </Typography>
                  <Typography variant="caption" color="muted" weight={600}>
                    FINE DINE & GATHERINGS
                  </Typography>
                </div>
              </Link>
              <Typography variant="body" color="muted" style={{ marginBottom: 'var(--space-lg)' }}>
                {RESTAURANT_CONFIG.tagline} A celebration of vibrant Indian culinary traditions, soulful biryanis, and joyous moments shared with friends.
              </Typography>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a
                  href={RESTAURANT_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-soft-peach)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-tomato-red)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href={RESTAURANT_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-soft-peach)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-tomato-red)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <FacebookIcon size={18} />
                </a>
                <a
                  href={RESTAURANT_CONFIG.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-soft-peach)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-tomato-red)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <TwitterIcon size={18} />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <Typography variant="h4" color="main" weight={700} style={{ marginBottom: 'var(--space-md)' }}>
                Quick Navigation
              </Typography>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {RESTAURANT_CONFIG.navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'var(--color-text-muted)',
                        transition: 'color 0.2s ease',
                        textDecoration: 'none'
                      }}
                    >
                      <ArrowRight size={14} color="var(--color-tomato-red)" />
                      <Typography variant="body" color="muted">
                        {link.label}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Hours of Operation */}
            <div>
              <Typography variant="h4" color="main" weight={700} style={{ marginBottom: 'var(--space-md)' }}>
                Opening Hours
              </Typography>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <Clock size={20} color="var(--color-fresh-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <Typography variant="body" weight={600} color="main">
                      Monday – Sunday
                    </Typography>
                    <Typography variant="small" color="muted">
                      {RESTAURANT_CONFIG.hours.weekdays}
                    </Typography>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <Clock size={20} color="var(--color-leaf-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <Typography variant="body" weight={600} color="main">
                      Weekends & Holidays
                    </Typography>
                    <Typography variant="small" color="muted">
                      {RESTAURANT_CONFIG.hours.weekends}
                    </Typography>
                  </div>
                </div>
                <Typography variant="small" color="light" style={{ marginTop: '4px' }}>
                  *Kitchen closes daily at {RESTAURANT_CONFIG.hours.kitchenCloses}.
                </Typography>
              </div>
            </div>

            {/* Column 4: Contact & Location */}
            <div>
              <Typography variant="h4" color="main" weight={700} style={{ marginBottom: 'var(--space-md)' }}>
                Restaurant Address
              </Typography>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <MapPin size={20} color="var(--color-tomato-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <Typography variant="small" color="muted">
                    {RESTAURANT_CONFIG.location.displayAddress}
                  </Typography>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Phone size={18} color="var(--color-tomato-red)" style={{ flexShrink: 0 }} />
                  <a href={`tel:${RESTAURANT_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`} style={{ textDecoration: 'none' }}>
                    <Typography variant="small" color="main" weight={600}>
                      {RESTAURANT_CONFIG.contact.primaryPhone}
                    </Typography>
                  </a>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Mail size={18} color="var(--color-tomato-red)" style={{ flexShrink: 0 }} />
                  <a href={`mailto:${RESTAURANT_CONFIG.contact.email}`} style={{ textDecoration: 'none' }}>
                    <Typography variant="small" color="muted">
                      {RESTAURANT_CONFIG.contact.email}
                    </Typography>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Disclaimer */}
          <div
            style={{
              marginTop: 'var(--space-3xl)',
              paddingTop: 'var(--space-lg)',
              borderTop: '1px solid var(--color-border-subtle)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 'var(--space-sm)'
            }}
          >
            <Typography variant="small" color="muted">
              © {currentYear} {RESTAURANT_CONFIG.name}. All rights reserved. Made for Indian culinary hospitality.
            </Typography>
            <Typography variant="caption" color="light">
              Demonstration Frontend Prototype • All menu prices and figures are sample content.
            </Typography>
          </div>
        </Container>
      </div>
    </footer>
  );
});

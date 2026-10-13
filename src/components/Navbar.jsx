import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Container } from './common/Container';
import { Typography } from './common/Typography';
import { Button } from './common/Button';
import { RESTAURANT_CONFIG } from '../infrastructure/config';
import { UtensilsCrossed, Menu, X, ArrowRight, Phone } from 'lucide-react';

export const Navbar = React.memo(function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Track scroll position for header glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(255, 248, 236, 0.94)' : 'var(--color-warm-cream)',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--color-border-subtle)' : '1px solid transparent',
        transition: 'all 0.25s ease',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.05)' : 'none'
      }}
    >
      {/* Top micro-bar for phone & welcome */}
      <div
        style={{
          backgroundColor: 'var(--color-tomato-red)',
          color: 'var(--color-white)',
          padding: '4px 0',
          fontSize: '0.8rem'
        }}
      >
        <Container size="default">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Typography variant="caption" color="white" weight={600}>
                WELCOME TO MASINENI FRND RESTAURANT • FRESH FOOD & WARM HOSPITALITY
              </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <a
                href={`tel:${RESTAURANT_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#FFFFFF', textDecoration: 'none' }}
              >
                <Phone size={12} />
                <Typography variant="small" color="white" weight={600}>
                  {RESTAURANT_CONFIG.contact.primaryPhone}
                </Typography>
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navigation Bar */}
      <Container size="default">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 0',
            position: 'relative'
          }}
        >
          {/* Brand Logo */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none'
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor: 'var(--color-tomato-red)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 4px 12px rgba(244, 81, 53, 0.3)'
              }}
            >
              <UtensilsCrossed size={24} />
            </div>
            <div>
              <Typography variant="h3" color="primary" weight={800} style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                Masineni Frnd
              </Typography>
              <Typography variant="caption" color="muted" weight={600}>
                RESTAURANT & DINE-IN
              </Typography>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '28px'
            }}
            className="mf-desktop-nav"
          >
            {RESTAURANT_CONFIG.navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                style={({ isActive }) => ({
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.975rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--color-tomato-red)' : 'var(--color-text-main)',
                  textDecoration: 'none',
                  position: 'relative',
                  padding: '6px 2px',
                  transition: 'color 0.2s ease'
                })}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '2.5px',
                          backgroundColor: 'var(--color-tomato-red)',
                          borderRadius: '2px'
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div style={{ display: 'none' }} className="mf-desktop-cta">
            <Button
              to="/menu"
              variant="primary"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
            >
              Explore Our Menu
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              border: '1.5px solid var(--color-border-subtle)',
              backgroundColor: 'var(--color-white)',
              color: 'var(--color-tomato-red)',
              cursor: 'pointer'
            }}
            className="mf-mobile-toggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div
          style={{
            backgroundColor: 'var(--color-warm-cream)',
            borderTop: '1px solid var(--color-border-subtle)',
            padding: '20px 0 24px 0',
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)'
          }}
          className="animate-fade-in"
        >
          <Container size="default">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {RESTAURANT_CONFIG.navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  style={({ isActive }) => ({
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--color-tomato-red)' : 'var(--color-text-main)',
                    textDecoration: 'none',
                    padding: '10px 16px',
                    borderRadius: '10px',
                    backgroundColor: isActive ? 'var(--color-soft-peach)' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  })}
                >
                  {link.label}
                  <ArrowRight size={16} />
                </NavLink>
              ))}

              <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--color-border-subtle)' }}>
                <Button
                  to="/menu"
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={() => setIsOpen(false)}
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Explore Our Menu
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}

      {/* Responsive media query styles for navbar */}
      <style>{`
        @media (min-width: 868px) {
          .mf-desktop-nav { display: flex !important; }
          .mf-desktop-cta { display: block !important; }
          .mf-mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
});

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = React.memo(function ScrollToTop() {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  // Monitor scroll height
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showButton) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        backgroundColor: 'var(--color-tomato-red)',
        color: '#FFFFFF',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 6px 18px rgba(244, 81, 53, 0.35)',
        cursor: 'pointer',
        zIndex: 900,
        transition: 'transform 0.2s ease, background-color 0.2s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.backgroundColor = 'var(--color-tomato-red-hover)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.backgroundColor = 'var(--color-tomato-red)';
      }}
    >
      <ArrowUp size={22} />
    </button>
  );
});

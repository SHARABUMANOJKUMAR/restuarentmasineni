import React, { useEffect } from 'react';
import { Typography } from './common/Typography';
import { Badge } from './common/Badge';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const LightboxModal = React.memo(function LightboxModal({
  isOpen,
  items = [],
  currentIndex = 0,
  onClose,
  onPrev,
  onNext
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !items.length) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery view"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(20, 24, 30, 0.92)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-md)'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top Close Button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close lightbox"
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          color: '#FFFFFF',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease',
          zIndex: 10
        }}
      >
        <X size={24} />
      </button>

      {/* Navigation Arrow Previous */}
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous image"
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          color: '#FFFFFF',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10
        }}
      >
        <ChevronLeft size={30} />
      </button>

      {/* Main Image and Details Card */}
      <div
        style={{
          maxWidth: '960px',
          width: '100%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Full Image */}
        <div
          style={{
            position: 'relative',
            maxHeight: '65vh',
            backgroundColor: '#111',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          <img
            src={currentItem.imageUrl}
            alt={currentItem.title}
            style={{
              maxHeight: '65vh',
              width: '100%',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Caption Bar */}
        <div
          style={{
            padding: 'var(--space-lg) var(--space-xl)',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--space-md)'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <Typography variant="h3" weight={700}>
                {currentItem.title}
              </Typography>
              {currentItem.tag && (
                <Badge variant="primary" size="sm">
                  {currentItem.tag}
                </Badge>
              )}
            </div>
            <Typography variant="body" color="muted">
              {currentItem.caption}
            </Typography>
          </div>

          <Typography variant="small" color="light" weight={600}>
            {currentIndex + 1} of {items.length}
          </Typography>
        </div>
      </div>

      {/* Navigation Arrow Next */}
      <button
        type="button"
        onClick={onNext}
        aria-label="Next image"
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          color: '#FFFFFF',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10
        }}
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
});

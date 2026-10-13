import React, { useState } from 'react';
import { Card } from './common/Card';
import { Typography } from './common/Typography';
import { Badge, VegIndicator } from './common/Badge';
import { formatCurrency } from '../domain/menuModel';
import { Star, Clock, Flame } from 'lucide-react';

const FALLBACK_FOOD_IMAGE = 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80';

export const FoodCard = React.memo(function FoodCard({ item }) {
  const [imgSrc, setImgSrc] = useState(item.image);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageError = () => {
    setImgSrc(FALLBACK_FOOD_IMAGE);
  };

  return (
    <Card
      variant="default"
      padding="none"
      hoverable
      className="mf-food-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-lg)'
      }}
    >
      {/* Food Image Container */}
      <div
        className="mf-image-container"
        style={{
          height: '210px',
          width: '100%',
          position: 'relative'
        }}
      >
        <img
          src={imgSrc}
          alt={item.name}
          onError={handleImageError}
          loading="lazy"
          className="mf-image mf-image--zoom"
          style={{
            transform: isHovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.4s ease'
          }}
        />

        {/* Top Badges overlay */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            right: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 2
          }}
        >
          {/* Veg/Non-Veg Badge */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              padding: '4px 8px',
              borderRadius: '6px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <VegIndicator isVeg={item.isVeg} />
            <Typography variant="caption" weight={700} color={item.isVeg ? 'green' : 'primary'}>
              {item.isVeg ? 'VEG' : 'NON-VEG'}
            </Typography>
          </div>

          {/* Specialty Badge if present */}
          {item.badge && (
            <Badge variant="primary" size="sm">
              {item.badge}
            </Badge>
          )}
        </div>

        {/* Prep Time Tag */}
        {item.prepTime && (
          <div
            style={{
              position: 'absolute',
              bottom: '10px',
              right: '12px',
              backgroundColor: 'rgba(30, 34, 41, 0.75)',
              backdropFilter: 'blur(4px)',
              padding: '3px 8px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <Clock size={12} color="#FFFFFF" />
            <Typography variant="caption" color="white" weight={600}>
              {item.prepTime}
            </Typography>
          </div>
        )}
      </div>

      {/* Card Content Area */}
      <div
        style={{
          padding: 'var(--space-md) var(--space-lg) var(--space-lg) var(--space-lg)',
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}
      >
        {/* Rating and Spice Level */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 'var(--space-xs)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Star size={15} fill="var(--color-golden-yellow)" color="var(--color-golden-yellow)" />
            <Typography variant="small" weight={700} color="main">
              {item.rating || '4.8'}
            </Typography>
            <Typography variant="caption" color="muted">
              (Reviews)
            </Typography>
          </div>

          {item.spiceLevel === 'spicy' && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', color: 'var(--color-tomato-red)' }}>
              <Flame size={14} />
              <Typography variant="caption" color="primary" weight={700}>Spicy</Typography>
            </span>
          )}
        </div>

        {/* Dish Name */}
        <Typography variant="h3" weight={700} style={{ marginBottom: '6px' }}>
          {item.name}
        </Typography>

        {/* Short Description */}
        <Typography
          variant="small"
          color="muted"
          style={{
            marginBottom: 'var(--space-lg)',
            flex: 1,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {item.description}
        </Typography>

        {/* Card Footer: Price & Dine-In Tag */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 'var(--space-sm)',
            borderTop: '1px solid var(--color-border-subtle)',
            marginTop: 'auto'
          }}
        >
          <div>
            <Typography variant="caption" color="muted">
              PRICE
            </Typography>
            <Typography variant="h3" color="primary" weight={800}>
              {formatCurrency(item.price)}
            </Typography>
          </div>

          <div
            style={{
              padding: '6px 12px',
              backgroundColor: 'var(--color-soft-peach)',
              borderRadius: 'var(--radius-full)'
            }}
          >
            <Typography variant="caption" color="primary" weight={700}>
              Fresh Dine-In
            </Typography>
          </div>
        </div>
      </div>
    </Card>
  );
});

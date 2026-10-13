import React, { useState } from 'react';
import { Card } from './common/Card';
import { Typography } from './common/Typography';
import { Badge } from './common/Badge';
import { Star, Quote } from 'lucide-react';

const FALLBACK_AVATAR = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';

export const TestimonialCard = React.memo(function TestimonialCard({ testimonial }) {
  const [avatarSrc, setAvatarSrc] = useState(testimonial.avatar);

  return (
    <Card
      variant="default"
      padding="lg"
      hoverable
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        backgroundColor: '#FFFFFF',
        position: 'relative'
      }}
    >
      <div>
        {/* Top Header: Rating stars & Quote icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 'var(--space-md)'
          }}
        >
          <div style={{ display: 'flex', gap: '4px' }}>
            {[...Array(testimonial.rating || 5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                fill="var(--color-golden-yellow)"
                color="var(--color-golden-yellow)"
              />
            ))}
          </div>
          <Quote size={28} color="var(--color-soft-peach)" />
        </div>

        {/* Testimonial Quote */}
        <Typography
          variant="body"
          color="main"
          style={{
            fontStyle: 'italic',
            marginBottom: 'var(--space-lg)',
            lineHeight: 1.65
          }}
        >
          "{testimonial.content}"
        </Typography>
      </div>

      {/* Guest Information */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-md)',
          paddingTop: 'var(--space-md)',
          borderTop: '1px solid var(--color-border-subtle)'
        }}
      >
        <img
          src={avatarSrc}
          alt={testimonial.name}
          onError={() => setAvatarSrc(FALLBACK_AVATAR)}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid var(--color-fresh-orange)',
            flexShrink: 0
          }}
        />
        <div style={{ flex: 1 }}>
          <Typography variant="h4" weight={700}>
            {testimonial.name}
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
            <Typography variant="small" color="muted">
              {testimonial.role}
            </Typography>
            {testimonial.tag && (
              <Badge variant="orange" size="sm">
                {testimonial.tag}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
});

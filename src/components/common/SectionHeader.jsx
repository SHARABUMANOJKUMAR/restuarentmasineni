import React from 'react';
import { Typography } from './Typography';
import { Badge } from './Badge';

export const SectionHeader = React.memo(function SectionHeader({
  badge,
  badgeIcon,
  title,
  highlight,
  description,
  align = 'center',
  className = ''
}) {
  return (
    <div
      className={className}
      style={{
        textAlign: align,
        maxWidth: align === 'center' ? '720px' : '100%',
        margin: align === 'center' ? '0 auto var(--space-2xl) auto' : '0 0 var(--space-xl) 0'
      }}
    >
      {badge && (
        <div style={{ marginBottom: 'var(--space-sm)' }}>
          <Badge variant="primary" icon={badgeIcon}>
            {badge}
          </Badge>
        </div>
      )}

      <Typography variant="h2" align={align} style={{ marginBottom: 'var(--space-xs)' }}>
        {title}{' '}
        {highlight && (
          <Typography as="span" variant="h2" color="primary">
            {highlight}
          </Typography>
        )}
      </Typography>

      {description && (
        <Typography variant="body-lg" color="muted" align={align}>
          {description}
        </Typography>
      )}
    </div>
  );
});

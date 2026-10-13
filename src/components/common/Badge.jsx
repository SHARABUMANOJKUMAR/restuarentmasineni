import React from 'react';

export const Badge = React.memo(function Badge({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  children,
  className = '',
  ...props
}) {
  const classes = [
    'mf-badge',
    `mf-badge--${variant}`,
    `mf-badge--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={classes} {...props}>
      {Icon && <Icon size={size === 'sm' ? 12 : 14} aria-hidden="true" />}
      {children}
    </span>
  );
});

export const VegIndicator = React.memo(function VegIndicator({ isVeg, className = '' }) {
  return (
    <span
      className={`${isVeg ? 'mf-indicator-veg' : 'mf-indicator-nonveg'} ${className}`}
      title={isVeg ? '100% Vegetarian' : 'Non-Vegetarian'}
      role="img"
      aria-label={isVeg ? 'Vegetarian dish' : 'Non-Vegetarian dish'}
    />
  );
});

import React from 'react';

export const Card = React.memo(function Card({
  variant = 'default',
  padding = 'md',
  hoverable = false,
  className = '',
  children,
  onClick,
  ...props
}) {
  const classes = [
    'mf-card',
    `mf-card--${variant}`,
    `mf-card--pad-${padding}`,
    hoverable ? 'mf-card--hoverable' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} onClick={onClick} {...props}>
      {children}
    </div>
  );
});

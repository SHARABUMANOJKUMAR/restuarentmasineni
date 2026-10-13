import React from 'react';

export const Container = React.memo(function Container({
  size = 'default',
  className = '',
  children,
  ...props
}) {
  return (
    <div className={`mf-container mf-container--${size} ${className}`} {...props}>
      {children}
    </div>
  );
});

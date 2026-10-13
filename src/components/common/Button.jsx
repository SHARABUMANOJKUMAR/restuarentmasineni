import React from 'react';
import { Link } from 'react-router-dom';

export const Button = React.memo(function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon: Icon,
  iconPosition = 'left',
  to,
  href,
  fullWidth = false,
  loading = false,
  disabled = false,
  type = 'button',
  onClick,
  className = '',
  ...props
}) {
  const classes = [
    'mf-btn',
    `mf-btn--${variant}`,
    `mf-btn--${size}`,
    fullWidth ? 'mf-btn--full' : '',
    className
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {loading ? (
        <span className="animate-spin" aria-hidden="true" style={{ display: 'inline-block', width: '16px', height: '16px', border: '2px solid currentColor', borderTopColor: 'transparent', borderRadius: '50%' }} />
      ) : (
        Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 20 : 18} aria-hidden="true" />
      )}
      {children}
      {!loading && Icon && iconPosition === 'right' && (
        <Icon size={size === 'sm' ? 16 : size === 'lg' ? 20 : 18} aria-hidden="true" />
      )}
    </>
  );

  if (to && !disabled) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  if (href && !disabled) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" onClick={onClick} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
});

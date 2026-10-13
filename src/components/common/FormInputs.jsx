import React from 'react';
import { Typography } from './Typography';
import { AlertCircle } from 'lucide-react';

export const Input = React.memo(function Input({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
  icon: Icon,
  className = '',
  disabled = false,
  ...props
}) {
  const inputId = id || name;

  return (
    <div className={`mf-form-group ${className}`}>
      {label && (
        <label htmlFor={inputId} className="mf-label">
          <Typography variant="small" weight={600} color="main">
            {label} {required && <Typography as="span" variant="small" color="primary">*</Typography>}
          </Typography>
        </label>
      )}
      <div style={{ position: 'relative', width: '100%' }}>
        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`mf-input ${error ? 'mf-input--error' : ''}`}
          style={Icon ? { paddingLeft: '42px' } : undefined}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {Icon && (
          <div
            style={{
              position: 'absolute',
              left: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--color-text-muted)',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Icon size={18} />
          </div>
        )}
      </div>
      {error && (
        <div id={`${inputId}-error`} className="mf-form-error" role="alert">
          <AlertCircle size={14} />
          <Typography variant="small" color="primary" as="span">{error}</Typography>
        </div>
      )}
    </div>
  );
});

export const Textarea = React.memo(function Textarea({
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
  required = false,
  error,
  className = '',
  disabled = false,
  ...props
}) {
  const inputId = id || name;

  return (
    <div className={`mf-form-group ${className}`}>
      {label && (
        <label htmlFor={inputId} className="mf-label">
          <Typography variant="small" weight={600} color="main">
            {label} {required && <Typography as="span" variant="small" color="primary">*</Typography>}
          </Typography>
        </label>
      )}
      <textarea
        id={inputId}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`mf-textarea ${error ? 'mf-textarea--error' : ''}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <div id={`${inputId}-error`} className="mf-form-error" role="alert">
          <AlertCircle size={14} />
          <Typography variant="small" color="primary" as="span">{error}</Typography>
        </div>
      )}
    </div>
  );
});

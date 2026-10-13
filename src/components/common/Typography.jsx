import React from 'react';

const TAG_MAP = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  'body-lg': 'p',
  body: 'p',
  small: 'span',
  caption: 'span'
};

export const Typography = React.memo(function Typography({
  variant = 'body',
  as,
  color = 'main',
  align = 'left',
  weight,
  className = '',
  children,
  ...props
}) {
  const Component = as || TAG_MAP[variant] || 'p';

  const classes = [
    'mf-typo',
    `mf-typo--${variant}`,
    `mf-typo--color-${color}`,
    `mf-typo--align-${align}`,
    className
  ].filter(Boolean).join(' ');

  const style = weight ? { fontWeight: weight } : undefined;

  return (
    <Component className={classes} style={style} {...props}>
      {children}
    </Component>
  );
});

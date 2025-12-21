import React, { type MouseEventHandler } from 'react';
import type { ReactNode } from 'react';

import './Button.css';

type ButtonVariant = 'primary' | 'secondary';

interface CommonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  maxWidth?: string | number;
  maxWidthMobile?: string | number;
  height?: string | number;
  heightMobile?: string | number;
  style?: React.CSSProperties;
}

type ButtonOnlyProps = {
  as?: 'button';
  type?: 'button' | 'submit';
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorOnlyProps = {
  as: 'a';
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = CommonProps & (ButtonOnlyProps | AnchorOnlyProps);

const toPx = (v?: number | string) => (typeof v === 'number' ? `${v}px` : v);

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  maxWidth,
  maxWidthMobile,
  height,
  heightMobile,
  style,
  as = 'button',
  onClick,
  ...rest
}) => {
  const cssVars = {
    '--btn-max-width': toPx(maxWidth) ?? undefined,
    '--btn-max-width-mobile': toPx(maxWidthMobile) ?? undefined,
    '--btn-height': toPx(height) ?? undefined,
    '--btn-height-mobile': toPx(heightMobile) ?? undefined,
  } as Record<string, string | undefined>;

  const className = `button button--${variant}`;

  if (as === 'a') {
    return (
      <a
        className={className}
        style={{ ...cssVars, ...style }}
        onClick={
          onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined
        }
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={
        (rest as React.ButtonHTMLAttributes<HTMLButtonElement>).type ?? 'button'
      }
      onClick={
        onClick as React.MouseEventHandler<HTMLButtonElement> | undefined
      }
      className={className}
      style={{ ...cssVars, ...style }}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default Button;

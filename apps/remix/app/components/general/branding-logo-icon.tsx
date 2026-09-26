import type { ImgHTMLAttributes } from 'react';

export type LogoProps = ImgHTMLAttributes<HTMLImageElement>;

/**
 * Wezella mark icon (rebranded from the upstream Documenso SVG icon).
 */
export const BrandingLogoIcon = ({ alt = 'Wezella Sign', ...props }: LogoProps) => {
  return <img src="/static/logo-icon.png" alt={alt} {...props} />;
};

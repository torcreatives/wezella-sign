import type { ImgHTMLAttributes } from 'react';

export type LogoProps = ImgHTMLAttributes<HTMLImageElement>;

/**
 * Wezella Sign wordmark (rebranded from the upstream Documenso SVG logo).
 *
 * Served from the app's own `public/static/logo.png` so the brand can be
 * swapped without touching code. The upstream `fill="currentColor"` SVG was
 * replaced because the Wezella lockup is a raster asset.
 */
export const BrandingLogo = ({ alt = 'Wezella Sign', ...props }: LogoProps) => {
  return <img src="/static/logo.png" alt={alt} {...props} />;
};

import { BRAND_MARK_INNER, BRAND_VIEWBOX } from '@/lib/landing/brandMark';

/**
 * The brain-tree mark, drawn like the app logo: rimmed canopy, trunk and a light-gray ground line. Hemisphere
 * colours come from the CSS variables --lh / --rh, which the pick script sets from the logo pair of the day
 * (lib/landing/pairs.ts). The rim and trunk colour follow the ground (light or dark) through --mark-rim / --trunk.
 */
export default function BrandMark() {
  return (
    <svg className="mark" viewBox={BRAND_VIEWBOX} aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: BRAND_MARK_INNER }} />
  );
}

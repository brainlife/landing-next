import { FOOTER } from '@/lib/landing/content';
import BrandMark from './BrandMark';

export default function SiteFooter() {
  return (
    <footer><div className="wrap">
      <span className="fbrand"><BrandMark />{FOOTER.left}</span>
      <span>{FOOTER.licence}{FOOTER.links.map(l => <span key={l.label}> · <a href={l.href}>{l.label}</a></span>)}</span>
    </div></footer>
  );
}

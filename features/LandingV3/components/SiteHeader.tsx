'use client';
import { useEffect, useState } from 'react';
import { EXTERNAL_LINKS } from '@/lib/constants';
import { getAssetPath } from '@/lib/basePath';
import { NAV, LABELS } from '@/lib/landing/content';
import BrandMark from './BrandMark';

/**
 * Logo left, links right. Under 760px the links collapse behind a menu button (CSS `.site.open`);
 * the panel closes on Escape, on a link click, and when the viewport grows past the breakpoint.
 */
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    const mq = window.matchMedia('(min-width: 761px)');
    const onMq = () => { if (mq.matches) setOpen(false); };
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    return () => { window.removeEventListener('keydown', onKey); mq.removeEventListener('change', onMq); };
  }, [open]);
  return (
    <div className={open ? 'site open' : 'site'}>
      <a className="brand" href={getAssetPath('/about/')} aria-label="brainlife.io home">
        <BrandMark /><span>brainlife<i>.io</i></span>
      </a>
      <button type="button" className="menu-btn" aria-expanded={open} aria-controls="site-nav"
        aria-label={open ? LABELS.closeMenu : LABELS.openMenu} onClick={() => setOpen(v => !v)}>
        <span /><span /><span />
      </button>
      <nav id="site-nav" className="nav" aria-label="Primary" onClick={e => { if ((e.target as HTMLElement).closest('a')) setOpen(false); }}>
        {NAV.map(n => <a key={n.label} href={n.href}>{n.label}</a>)}
        <a className="btn" href={EXTERNAL_LINKS.PORTAL}>{LABELS.signIn}</a>
      </nav>
    </div>
  );
}

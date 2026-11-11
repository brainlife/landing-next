/**
 * Logo colour pairs and the hero rotation. One hero is picked per page load (the logo pair is pinned, see PINNED_PAIR_INDEX) by
 * PICK_SCRIPT, which runs inline before first paint; the site's accent colours follow the pair.
 *
 * accentLight is used for small text on the light ground (#f7f8f6) and must clear WCAG AA 4.5:1
 * (scripts/verify-landing-data.mjs checks this). accentDark is the right hemisphere colour itself,
 * used for buttons and eyebrows on the dark hero.
 */
export type Pair = { name: string; left: string; right: string; accentLight: string; accentDark: string; accentDarkInk: string };

export const PAIRS: Pair[] = [
  { name: 'blue · teal', left: '#005981', right: '#2ab0a0', accentLight: '#005981', accentDark: '#2ab0a0', accentDarkInk: '#0b1a24' },
  { name: 'red · orange', left: '#a9262c', right: '#e57536', accentLight: '#a9262c', accentDark: '#e57536', accentDarkInk: '#0b1a24' },
  { name: 'orange · yellow', left: '#e57536', right: '#f9c926', accentLight: '#b84f18', accentDark: '#f9c926', accentDarkInk: '#0b1a24' },
  { name: 'teal · yellow', left: '#2ab0a0', right: '#f9c926', accentLight: '#167a6e', accentDark: '#f9c926', accentDarkInk: '#0b1a24' },
  { name: 'light blue · orange', left: '#3b9fd0', right: '#e57536', accentLight: '#b84f18', accentDark: '#3b9fd0', accentDarkInk: '#0b1a24' },
];

/**
 * Hero visuals and their relative weights. The flow field is the fixed hero (team decision, Oct 2026);
 * the ruler and lens stay available with #ruler / #lens and can be put back in rotation by giving them
 * a weight. A hero with weight 0 is never picked at random. The ruler is skipped on narrow screens.
 */
export const HERO_WEIGHTS = { field: 1, ruler: 0, lens: 0 } as const;
export type HeroVariant = keyof typeof HERO_WEIGHTS;
export const HERO_VARIANTS = Object.keys(HERO_WEIGHTS) as HeroVariant[];

/**
 * PINNED: the logo pair is no longer randomised per page load, so colours stay stable across reloads.
 * Index 4 = 'light blue · orange'. `?pair=` and the review bar's shuffle button still work for review.
 * Keep the CSS fallbacks in landing-v3.css (--accent-light/--accent-dark, --lh/--rh) in sync with this pair.
 */
export const PINNED_PAIR_INDEX = 4;

/**
 * Inline script run before first paint. Sets the six accent variables, `data-hero` on <html>
 * (so CSS can lay the hero out before React hydrates), and `window.__bl` for components.
 * URL overrides: `#lens|#field|#ruler` pins a hero, `?pair=tealyellow` pins a pair.
 */
export const PICK_SCRIPT = `(function(){try{
var P=${JSON.stringify(PAIRS)},PINNED=${PINNED_PAIR_INDEX},W=${JSON.stringify(HERO_WEIGHTS)};
var h=(location.hash||'').slice(1),hero=(h in W)?h:null;
if(!hero){var tot=0,k;for(k in W)tot+=W[k];var r=Math.random()*tot;for(k in W){if(!W[k])continue;r-=W[k];if(r<=0){hero=k;break;}}}
if(hero==='ruler'&&window.innerWidth<760)hero='lens';
var q=String(new URLSearchParams(location.search).get('pair')||'').replace(/[^a-z]/g,'');
var pair=null;for(var i=0;i<P.length;i++){if(P[i].name.replace(/[^a-z]/g,'')===q)pair=P[i];}
pair=pair||P[PINNED];
var s=document.documentElement.style;s.setProperty('--lh',pair.left);s.setProperty('--rh',pair.right);
s.setProperty('--accent-light',pair.accentLight);s.setProperty('--accent-dark',pair.accentDark);s.setProperty('--accent-dark-ink',pair.accentDarkInk);
document.documentElement.setAttribute('data-hero',hero);
window.__bl={pair:pair,hero:hero};}catch(e){}})();`;

export function applyPair(p: Pair) {
  const s = document.documentElement.style;
  s.setProperty('--lh', p.left); s.setProperty('--rh', p.right);
  s.setProperty('--accent-light', p.accentLight); s.setProperty('--accent-dark', p.accentDark); s.setProperty('--accent-dark-ink', p.accentDarkInk);
  if (window.__bl) window.__bl.pair = p;
}

declare global {
  interface Window { __bl?: { pair: Pair; hero: HeroVariant } }
}

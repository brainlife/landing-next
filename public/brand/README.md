# brainlife mark · palette set

The original brain-tree mark, recoloured to the site palette. Shadows removed. Trunk is ink #1d2230.

Pairs (left hemisphere · right hemisphere):
- blue-teal          #005981 · #2ab0a0
- red-orange         #a9262c · #e57536
- orange-yellow      #e57536 · #f9c926
- teal-yellow        #2ab0a0 · #f9c926
- lightblue-orange   #3b9fd0 · #e57536

Files
- svg/*-on-dark.svg   white gyral outline, for the dark hero and footer on dark
- svg/*-on-light.svg  outline removed, for white/light backgrounds
- svg/brainlife-mark-themable.svg  one file driven by CSS variables --lh, --rh, --trunk, --outline (how the landing page rotates colours per load)
- png/                1024px renders of each pair on dark and on light; 64px favicons on dark

Suggested use: rotate the pair per page load on the site; keep blue-teal fixed for the favicon and social cards so the tab icon stays recognisable.

## App marks (brainlife.io / brainlife-lite)

The light-blue · orange pair as used in the app sidebar, footer and favicon (brainlife/brainlife-lite#324):
- `brainlife-mark-lightblue-orange-app-on-light.svg` — white rim around the canopy with a thin gray outline (`#8f99a5`) and soft shadow, so the rim reads on white
- `brainlife-mark-lightblue-orange-app-on-dark.svg` — white rim with a soft shadow, for dark backgrounds

Both have a light-gray ground line (`#c8cdd4`) under the trunk, wider than the canopy and fading at the ends, so the ink trunk has a visible base on dark backgrounds. The trunk is drawn outside the rim filter to keep its edges clean. The canvas is wider than the original mark (viewBox `-19 0 185.79 143.6`) to fit the ground line.

## App colors (brainlife-lite `src/themeMui.ts`)

Site palette (`brandColors`): blue `#005981`, light blue `#3b9fd0`, teal `#2ab0a0`, red `#a9262c`, orange `#e57536`, yellow `#f9c926`.

Status colors (`statusColors`, used for MUI `success` / `info` / `error` in light and dark):
- running / info `#3b9fd0`
- success `#5fa86b`
- failure / error `#d0494f`

Primary (light mode) `#3d6a92`; warning `#c9a94f` (dark mode `#d9bf6a`).

Filled chips and contained warning buttons are tonal: the color at 16% opacity as background with the color's dark shade as text (light shade in dark mode), 26% on hover.

Type scale: `body2` 0.8rem for controls, `data` 0.75rem for table / list / panel content, `caption` 0.7rem for small labels and chips; `font-size-adjust: ex-height 0.5` on `body` so monospace matches DM Sans.

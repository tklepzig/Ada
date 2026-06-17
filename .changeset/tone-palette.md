---
"ada-ui": major
---

Reworked the colour system around an independent five-slot palette and a pure-CSS theming engine.

**Renamed the colour slots** (breaking — update your markup):

- `default` (the no-class default) → `primary`
- `shade1` / `shade2` / `shade3` → `tone-1` / `tone-2` / `tone-3`
- `warn` → unchanged

The slots are now treated as an independent palette rather than shades of one colour. The per-colour base variables were renamed to spell out their meaning: `--l-base` → `--lightness`, `--c-base` → `--chroma`.

**Moved the colour engine into the base stylesheet (`ada.css`).** The slot classes and the 100–950 ladder now live in `ada.css`, so a theme is just custom properties on `:root` — no SCSS or `@extend` needed:

- A *ramp* theme sets `--base-hue` (plus `--lightness` / `--chroma`); the four tones derive from the base hue by a per-slot offset, and `warn` stays fixed. The **blue** theme lands on the default offsets, so it is now a handful of properties.
- A *curated* theme additionally overrides `--hue` / `--lightness` / `--chroma` per slot and the `--100` / `--950` ends. **jupiter-2** is authored this way.

**Fixed light theme dropping per-slot overrides.** Light mode previously reassigned lightness/chroma to a theme's absolute light values, silently flattening every slot onto the primary's. The light theme is now expressed as a per-theme shift (`--lightness-light-shift` / `--chroma-light-shift`) added on top of each slot's own value, so per-slot overrides survive. Blue and green render identically; jupiter-2's light theme is corrected (its steel reads as a muted blue and its burnt orange stays distinct, instead of both collapsing onto the primary orange).

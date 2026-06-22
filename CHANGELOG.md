# ada-ui

## 7.0.1

### Patch Changes

- 1cd7847: Automated the version pinned in the README's jsDelivr CDN links. The release
  step now rewrites them to the version being cut, so the docs no longer carry a
  manual `@version` placeholder for users to swap by hand. Snapshots are
  unaffected — they don't run the release `version` script.
- 4d6e15c: Fixed the `npx ada-ui <theme>` bundle generator concatenating the theme before
  the base stylesheet. A theme is now appended after `ada.css` so its `:root`
  overrides win the cascade — curated themes (e.g. jupiter-2) that override
  engine-output variables (`--950`, `--panel-bg`, …) were previously clobbered by
  the engine defaults and rendered with the wrong palette. Ramp themes (blue,
  green) were unaffected.

  Updated the README theming section to match the current pure-CSS engine: load a
  theme after `ada.css`, the available ready-made themes, and how to author a
  ramp, per-slot, or fully curated theme (all three of `--base-hue`, `--lightness`
  and `--chroma` are required for a ramp).

## 7.0.0

### Major Changes

- d9bb452: Reworked the colour system around an independent five-slot palette and a pure-CSS theming engine.

  **Renamed the colour slots** (breaking — update your markup):

  - `default` (the no-class default) → `primary`
  - `shade1` / `shade2` / `shade3` → `tone-1` / `tone-2` / `tone-3`
  - `warn` → unchanged

  The slots are now treated as an independent palette rather than shades of one colour. The per-colour base variables were renamed to spell out their meaning: `--l-base` → `--lightness`, `--c-base` → `--chroma`.

  **Moved the colour engine into the base stylesheet (`ada.css`).** The slot classes and the 100–950 ladder now live in `ada.css`, so a theme is just custom properties on `:root` — no SCSS or `@extend` needed:

  - A _ramp_ theme sets `--base-hue` (plus `--lightness` / `--chroma`); the four tones derive from the base hue by a per-slot offset, and `warn` stays fixed. The **blue** theme lands on the default offsets, so it is now a handful of properties.
  - A _curated_ theme additionally overrides `--hue` / `--lightness` / `--chroma` per slot and the `--100` / `--950` ends. **jupiter-2** is authored this way.

  **Fixed light theme dropping per-slot overrides.** Light mode previously reassigned lightness/chroma to a theme's absolute light values, silently flattening every slot onto the primary's. The light theme is now expressed as a per-theme shift (`--lightness-light-shift` / `--chroma-light-shift`) added on top of each slot's own value, so per-slot overrides survive. Blue and green render identically; jupiter-2's light theme is corrected (its steel reads as a muted blue and its burnt orange stays distinct, instead of both collapsing onto the primary orange).

## 6.1.0

### Minor Changes

- 5d9f45c: Added the **jupiter-2** theme — a deep-space palette (navy + warning-orange + cream), available via the `ada-ui/jupiter-2` export.

  Also introduced a themeable `--panel-bg` custom property. Panel surface colour is now a per-theme knob: it defaulted in the shared shade system to the existing translucent accent wash, so the **blue** and **green** themes render identically. The jupiter-2 theme overrode it to give panels a flat navy surface, while variant panels (`.panel.shadeN`) kept their per-shade tint.

  Added two themeable label-colour custom properties so text stays legible on light surfaces:

  - `--command-fg` (button labels, default `--color100`) — jupiter-2 set it to black so labels clear WCAG AA on its light orange/amber/steel/red buttons (cream only reached ~2.5:1); its warn red was lightened slightly so the dark labels pass there too.
  - `--tile-fg` (tile labels, default `--fg-body`) — jupiter-2 used it for adaptive contrast: dark labels on its lighter tiles (orange/amber/steel), cream kept on the darker ones (burnt/red).

  The blue and green themes set neither property, so they rendered identically.

## 6.0.1

### Patch Changes

- bb5e4ed: Added `flex` class to easily stretch any element inside compound-commands.
  (Sets `flex: 1`)

## 6.0.0

### Major Changes

- 90e86eb: Renamed font-size tokens from `--scale` to `--text`.

### Minor Changes

- 254e3c2: Added possibility to define a scaling factor by setting the CSS class `scaled`
  and the CSS custom property `--scale` to a number. This allows to easily scale
  down or up any part of the UI.

## 5.9.1

### Patch Changes

- 9329d75: Streamlined blue theme to be the best of both previously existing blue themes

## 5.9.0

### Minor Changes

- 2738ce6: Added separate padding tokens that are responsive, unlike the already existing
  spacing tokens

## 5.8.0

### Minor Changes

- 4ad5251: Added first version of Tile component (WIP)

### Patch Changes

- 4a0440f: Fixed broken panel background due to missing CSS variable

## 5.7.3

### Patch Changes

- 7f8a89a: Updated readme

## 5.7.2

### Patch Changes

- bac39c8: Created a dummy patch release to test the npm trusted publishing configuration

## 5.7.1

### Patch Changes

- b54434c: Updated themes

## 5.7.0

### Minor Changes

- 4655a60: Added another green variant

## 5.6.0

### Minor Changes

- 0ff6670: Added green theme

## 5.5.1

### Patch Changes

- 5b39b4e: Streamline variable names

## 5.5.0

### Minor Changes

- 0ca0582: Renamed primary color to default
- 9336950: Aligned input height with command height
- 462ca48: Made blue theme a bit darker

### Patch Changes

- 5cdd331: Moved base l and c values into specific theme

## 5.4.0

### Minor Changes

- 063ef97: Add npx script to generate one complete css file

## 5.3.1

### Patch Changes

- d04cec7: Simplify light theme logic by using a hard-coded light theme lightness and chroma base

## 5.3.0

### Minor Changes

- 619db2d: Add base values for lightness and chroma which can be overriden for light theme

### Patch Changes

- 619db2d: Fix wrong foreground colors for color variants in light theme

## 5.2.0

### Minor Changes

- 1bb7ec4: Add abbreviations for commands to be shown on small screens instead of the default label

### Patch Changes

- d9ec56e: Using whole border as focus state

## 5.1.1

### Patch Changes

- 332e233: Remove padding in case of empty footer or header

## 5.1.0

### Minor Changes

- 8877329: Allow changing theme by setting a css class on the html element

## 5.0.0

### Major Changes

- 327604d: Remove margins
- 327604d: Improve demo page
- 327604d: Use the same disabled style for all color variants
- 327604d: Remove small border width and light corner
- 327604d: Add typography and spacing tokens
- 33e84ac: Simplified colors and using oklch instead of hsl
- 33e84ac: Add reset style
- 33e84ac: Deprecate Button in favor of Command
- 33e84ac: Deprecate tile in favor of using always a panel

## 4.7.0

### Minor Changes

- b03f4b1: Add exports for base and theme styles

## 4.6.0

### Minor Changes

- d515756: Decrease horizontal padding of input

### Patch Changes

- 3802546: Set box-sizing to border-box on global level
- d03c0d7: Add Changesets for managing changelog

## < 4.6.0

- No changelog was maintained, sorry...

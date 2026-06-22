---
"ada-ui": patch
---

Fixed the `npx ada-ui <theme>` bundle generator concatenating the theme before
the base stylesheet. A theme is now appended after `ada.css` so its `:root`
overrides win the cascade — curated themes (e.g. jupiter-2) that override
engine-output variables (`--950`, `--panel-bg`, …) were previously clobbered by
the engine defaults and rendered with the wrong palette. Ramp themes (blue,
green) were unaffected.

Updated the README theming section to match the current pure-CSS engine: load a
theme after `ada.css`, the available ready-made themes, and how to author a
ramp, per-slot, or fully curated theme (all three of `--base-hue`, `--lightness`
and `--chroma` are required for a ramp).

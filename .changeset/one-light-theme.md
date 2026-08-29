---
"ada-ui": major
---

Themes are now scoped under `[data-theme="<name>"]` instead of `:root`, so any
number can be loaded at once and the root attribute picks one; without it
`ada.css` is themeless, as with no theme file loaded. Added the `light` theme
(`ada-ui/light`): deep verdigris control surfaces with pale labels on a bone
page, curated per slot.

Breaking: every consumer must set `data-theme` on its root element. `.light-theme`
was removed along with the derived light mode — the lifted ramps left saturated
pastel surfaces on a near-white page — so `--lightness-light-shift`,
`--chroma-light-shift`, `--fg-body-light`, `--bg-body-light` and
`--reading-light` are gone; apps that offered light mode load `ada-ui/light` next
to their dark theme and switch the attribute.

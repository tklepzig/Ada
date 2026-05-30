---
"ada-ui": minor
---

Added the **jupiter-2** theme — a deep-space palette (navy + warning-orange + cream), available via the `ada-ui/jupiter-2` export.

Also introduced a themeable `--panel-bg` custom property. Panel surface colour is now a per-theme knob: it defaulted in the shared shade system to the existing translucent accent wash, so the **blue** and **green** themes render identically. The jupiter-2 theme overrode it to give panels a flat navy surface, while variant panels (`.panel.shadeN`) kept their per-shade tint.

Added two themeable label-colour custom properties so text stays legible on light surfaces:

- `--command-fg` (button labels, default `--color100`) — jupiter-2 set it to black so labels clear WCAG AA on its light orange/amber/steel/red buttons (cream only reached ~2.5:1); its warn red was lightened slightly so the dark labels pass there too.
- `--tile-fg` (tile labels, default `--fg-body`) — jupiter-2 used it for adaptive contrast: dark labels on its lighter tiles (orange/amber/steel), cream kept on the darker ones (burnt/red).

The blue and green themes set neither property, so they rendered identically.

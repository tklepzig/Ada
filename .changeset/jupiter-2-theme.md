---
"ada-ui": minor
---

Added the **jupiter-2** theme — a deep-space palette (navy + warning-orange + cream), available via the `ada-ui/jupiter-2` export.

Also introduced a themeable `--panel-bg` custom property. Panel surface colour is now a per-theme knob: it defaulted in the shared shade system to the existing translucent accent wash, so the **blue** and **green** themes render identically. The jupiter-2 theme overrode it to give panels a flat navy surface, while variant panels (`.panel.shadeN`) kept their per-shade tint.

Added a themeable `--command-fg` custom property for button label colour (default `--color100`, so blue/green were unchanged). The jupiter-2 theme set it to a near-black navy so labels clear WCAG AA on its light orange/amber/steel/red buttons (cream only reached ~2.5:1); its warn red was lightened slightly so dark labels pass there too.

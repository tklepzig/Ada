---
"ada-ui": minor
---

Add the **jupiter-2** theme — a deep-space palette (navy + warning-orange + cream), available via the `ada-ui/jupiter-2` export.

Also introduces a themeable `--panel-bg` custom property. Panel surface colour is now a per-theme knob: it defaults in the shared shade system to the existing translucent accent wash, so the **blue** and **green** themes render identically. The jupiter-2 theme overrides it to give panels a flat navy surface, while variant panels (`.panel.shadeN`) keep their per-shade tint.

---
"ada-ui": patch
---

Fixed the header text glow silently disappearing. The `text-shadow` on
headers referenced `--400`, a palette slot that stopped existing after the
tone-N rework, which made the whole declaration invalid so no glow rendered.
It now uses `--500`, so headers glow again in their tone's own hue.

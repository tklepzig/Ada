---
"ada-ui": patch
---

Stopped disabled `.command.flash` buttons from flashing their tone colour. The
flash animation now only runs while the command is interactive, so a disabled
flashing command keeps its muted greyed-out surface instead of animating back to
the tone (primary, tone-1–4 or warn) colour.

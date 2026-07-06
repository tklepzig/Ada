---
"ada-ui": patch
---

Revert the background color on the html element (introduced in 7.2.2). Backgrounding html stops the body background from propagating to the document canvas, so body then paints in its own layer — over any `z-index: -1` element (e.g. a fixed canvas backdrop), hiding it completely. With body-only background the propagation covers the viewport (including overscroll) and negative-z layers stay visible.

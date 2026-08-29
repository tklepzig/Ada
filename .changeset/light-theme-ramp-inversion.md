---
"ada-ui": major
---

Inverted the shade ladder in light mode, so `--color950` is the near-white page
and `--color100` the dark ink. Filled controls were previously rendering the
identical colour in both modes, which read as a gentle lift on a dark ground and
a heavy slab on a pale one. Blue, green and teal now clear AAA on the label of
every filled slot (7.55-7.61, was 4.89-7.79) with the button-to-ground separation
back in dark mode's range, and the tone slots keep enough chroma at the pale end
to stay distinguishable from each other. Light-mode tiles, capped below AAA by
their surface, clear it too — 8.8-9.3, except warn's, which stays heavy by design
at 4.97-4.99 (AA).

Breaking for theme authors. `--lightness-light-shift` is removed (it no longer
affects anything now that the light steps are absolute); `--chroma-light-shift`
is unchanged. Because the light steps are literals declared per slot, several
documented theme inputs now apply in **dark mode only**: `--100` / `--950`,
`--lightness`, and `--command-fg` (plus `--tile-fg` on warn). `--chroma` still
reaches `--500`, but the ink is capped at 0.08. A curated theme that needs those
in light mode must re-declare them at `.light-theme:root` or higher — jupiter-2
shows the pattern. Most importantly, **a theme must be rebuilt against this release**: the
ladder ends swap roles in light mode, so a theme that reads `var(--color950)`
expecting a dark value — as the documented curated pattern did for
`--fg-body-light` — gets the near-white page ground instead, i.e. pale text on a
pale surface. Pairing an older theme stylesheet with this `ada.css` produces
exactly that.

jupiter-2 adopts the inversion too, so its light mode is now peach and sand
rather than vivid orange; the orange is unchanged in dark mode. That lifts its
`tone-1` from 4.97 and its `warn` from 5.31 to AAA. Its `tone-1` takes half the
surface chroma in light mode, because the inversion equalises lightness and the
slot sits only four degrees of hue off the primary.

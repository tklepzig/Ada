# Ada

[![npm version](https://badge.fury.io/js/ada-ui.svg)](https://badge.fury.io/js/ada-ui)

My sci-fi inspired UI components library. Still growing...

## CDN

    https://cdn.jsdelivr.net/gh/tklepzig/Ada@8.1.4/css/ada.css

The link points at the latest release. To pin a different one, swap the version
— see https://github.com/tklepzig/Ada/releases.

## Install

    # Using npm
    npm install ada-ui --save

    # Using yarn
    yarn add ada-ui

## Theming

`ada.css` ships the colour engine but no palette of its own, so it always needs
a theme alongside it. A theme is a handful of custom properties scoped under
`[data-theme="<name>"]` — load it **after** `ada.css` so its values win the
cascade, and name it on your root element:

    <html data-theme="blue">
      <link rel="stylesheet" href="css/ada.css" />
      <link rel="stylesheet" href="css/ada.blue.css" />

Any number of themes can be loaded at once; the attribute picks one and the
rest stay inert, so switching (e.g. dark ⇄ light) is a single attribute swap:

    <link rel="stylesheet" href="css/ada.teal.css" />
    <link rel="stylesheet" href="css/ada.light.css" />
    <script>document.documentElement.dataset.theme = "light";</script>

Without the attribute `ada.css` is themeless — the same as loading no theme file
— and you can supply the custom properties yourself.

Or via the CDN:

    https://cdn.jsdelivr.net/gh/tklepzig/Ada@8.1.4/css/ada.css
    https://cdn.jsdelivr.net/gh/tklepzig/Ada@8.1.4/css/ada.blue.css

With npm, import the base entry first and the theme second (same cascade rule
through your bundler):

    import "ada-ui";
    import "ada-ui/jupiter-2";

### Ready-made themes

| Import             | Theme                                              |
| ------------------ | -------------------------------------------------- |
| `ada-ui/blue`      | Blue (the default ramp theme)                      |
| `ada-ui/green`     | Green                                              |
| `ada-ui/jupiter-2` | Deep-space navy + warning-orange + cream (curated) |
| `ada-ui/teal`      | Deep green-teal + chartreuse + gold (curated)      |
| `ada-ui/light`     | The light theme: deep verdigris on bone (curated)  |

All themes except `light` are dark. There is no light variant of a dark theme;
an app that offers both loads its dark theme and `light`, and switches between
the two.

### The colour slots

The palette is six independent slots, each applied via a class: `primary` (the
no-class default), `tone-1` … `tone-4`, and `warn`. They are treated as
distinct colours, not shades of one. Within a slot, a light→dark `--color100` …
`--color950` ladder is derived for you.

### Rolling your own theme

A custom theme is a small CSS file that sets properties under
`[data-theme="<name>"]` (or on `:root`, if it is the only theme you load). There
are three levels, from least to most control:

1. **Hue ramp** — set `--base-hue`, `--lightness` and `--chroma`. The five tones
   derive from the base hue by a fixed per-slot offset; `warn` stays at its
   fixed red. The blue theme lands exactly on the default offsets, so it is
   just:

   ```css
   [data-theme="blue"] {
     --base-hue: 246;
     --lightness: 0.3;
     --chroma: 0.1;
   }
   ```

2. **Per-slot overrides** — override `--hue` / `--lightness` / `--chroma` on an
   individual slot class to break it off the ramp:

   ```css
   [data-theme="jupiter-2"] .tone-3 {
     --hue: 258;
     --chroma: 0.06;
   }
   ```

3. **Fully curated** — additionally override the ladder ends (`--100` / `--950`)
   to decouple background and text from the hue ramp, and the surface/label
   knobs (`--panel-bg`, `--command-fg`, `--tile-fg`). The **jupiter-2** theme
   (`scss/ada.jupiter-2.scss`) is authored this way and is the reference
   example; **light** (`scss/ada.light.scss`) sets every ladder step as a
   literal and is the reference for a light palette.

## Versioning and Publishing

- Releases are created via GitHub Actions using
  [Changesets](https://github.com/changesets/changesets)
- When adding changes which need a version update, add a changeset by running
  `npm run changeset`
- When the changes are done, commit/merge your branch which will create/update a
  Release PR (opened by a bot) that incorporates the changesets to update the
  changelog and version number
- When ready for release, merge the Release PR
- For creating prereleases (snapshots), add a new comment to your PR which
  contains only `/snapshot`

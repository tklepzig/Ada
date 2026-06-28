# Ada

[![npm version](https://badge.fury.io/js/ada-ui.svg)](https://badge.fury.io/js/ada-ui)

My sci-fi inspired UI components library. Still growing...

## CDN

    https://cdn.jsdelivr.net/gh/tklepzig/Ada@7.2.1/css/ada.css

The link points at the latest release. To pin a different one, swap the version
— see https://github.com/tklepzig/Ada/releases.

## Install

    # Using npm
    npm install ada-ui --save

    # Using yarn
    yarn add ada-ui

## Theming

`ada.css` ships the colour engine but no palette of its own, so it always needs
a theme alongside it. A theme is just a handful of custom properties on `:root`
— load it **after** `ada.css` so its values win the cascade:

    <link rel="stylesheet" href="css/ada.css" />
    <link rel="stylesheet" href="css/ada.blue.css" />

Or via the CDN:

    https://cdn.jsdelivr.net/gh/tklepzig/Ada@7.2.1/css/ada.css
    https://cdn.jsdelivr.net/gh/tklepzig/Ada@7.2.1/css/ada.blue.css

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

### The colour slots

The palette is five independent slots, each applied via a class: `primary` (the
no-class default), `tone-1`, `tone-2`, `tone-3`, and `warn`. They are treated as
distinct colours, not shades of one. Within a slot, a light→dark `--color100` …
`--color950` ladder is derived for you.

For a light variant of any theme, add the `.light-theme` class to your root
element (e.g. `<html class="light-theme">`).

### Rolling your own theme

A custom theme is a small CSS file that sets `:root` properties. There are three
levels, from least to most control:

1. **Hue ramp** — set `--base-hue`, `--lightness` and `--chroma`. The four tones
   derive from the base hue by a fixed per-slot offset; `warn` stays at its
   fixed red. The blue theme lands exactly on the default offsets, so it is
   just:

   ```css
   :root {
     --base-hue: 246;
     --lightness: 0.3;
     --chroma: 0.1;
     --lightness-light-shift: 0.1; /* lift lightness in .light-theme */
   }
   ```

2. **Per-slot overrides** — override `--hue` / `--lightness` / `--chroma` on an
   individual slot class to break it off the ramp:

   ```css
   .tone-3 {
     --hue: 258;
     --chroma: 0.06;
   }
   ```

3. **Fully curated** — additionally override the ladder ends (`--100` / `--950`)
   to decouple background and text from the hue ramp, and the surface/label
   knobs (`--panel-bg`, `--command-fg`, `--tile-fg`). The **jupiter-2** theme
   (`scss/ada.jupiter-2.scss`) is authored this way and is the reference
   example.

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

# Ada

[![npm version](https://badge.fury.io/js/ada-ui.svg)](https://badge.fury.io/js/ada-ui)

My sci-fi inspired UI components library. Still growing...

## CDN

    https://cdn.jsdelivr.net/gh/tklepzig/Ada@version/css/ada.css

Replace `version` with the version of your desired release, see
https://github.com/tklepzig/Ada/releases (e.g. `5.0.0`)

> Attention: Prior to version 3.0, the filename need a `min`:
> https://cdn.jsdelivr.net/gh/tklepzig/Ada@3.0.0/css/ada.min.css

## Install

    # Using npm
    npm install ada-ui --save

    # Using yarn
    yarn add ada-ui

## Select a Theme

Beginning with version 3.0.0, you can choose between different themes. When
using the CSS, ensure to include the correct theme file before the main one,
e.g.:

    https://cdn.jsdelivr.net/gh/tklepzig/Ada@5.0.0/css/ada.blue.css

## Versioning and Publishing

- Releases are created via GitHub Actions using
  [Changesets](https://github.com/changesets/changesets)
- When adding changes which needs a version update, add a changeset by running
  `npm run changeset`
- When the changes are done, commit/merge your branch which will create/update a
  Release PR (opened by a bot) that incorporates the changesets to update the
  changelog and version number
- When ready for release, merge the Release PR
- For creating prereleases (snapshots), run `npm run snapshot <prerelease-tag>`

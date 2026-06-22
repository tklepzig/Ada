#!/usr/bin/env node

"use strict";

import { readFile, writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";

// Run as part of `npm run version` (the Changesets release step), right after
// `changeset version` has bumped package.json. It rewrites the version pinned in
// the README's CDN links so the docs always point at the release being cut — no
// manual edit needed. The Changesets action then commits the updated README into
// the Release PR alongside package.json and the lockfile.
//
// Snapshots don't run `npm run version`, so snapshot versions never leak in here.

const __dirname = dirname(fileURLToPath(import.meta.url));

// Match the version segment in any jsDelivr GitHub URL for this repo, e.g.
// `cdn.jsdelivr.net/gh/tklepzig/Ada@7.0.0/css/...`. Anchored on the repo so it
// also catches the literal `@version` placeholder on first run. jsDelivr
// normalises the `v`-prefixed git tags, so the plain package.json version works.
const cdnVersionPattern =
  /(cdn\.jsdelivr\.net\/gh\/tklepzig\/Ada@)[^/\s]+(\/)/g;

const run = async () => {
  const { version } = JSON.parse(
    await readFile(resolve(__dirname, "package.json"), "utf8"),
  );

  const readmePath = resolve(__dirname, "README.md");
  const readme = await readFile(readmePath, "utf8");
  const updated = readme.replace(cdnVersionPattern, `$1${version}$2`);

  if (updated === readme) {
    console.warn("update-readme-cdn-version: no CDN links found to update.");
    return;
  }

  await writeFile(readmePath, updated);
  console.log(`update-readme-cdn-version: pinned CDN links to ${version}.`);
};

run();

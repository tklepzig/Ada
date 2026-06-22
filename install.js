#!/usr/bin/env node

"use strict";

import { writeFile, readFile } from "fs/promises";
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const run = async (theme) => {
  const themeFile = await readFile(
    resolve(__dirname, "css", `ada.${theme}.css`),
    "utf8",
  );
  const baseFile = await readFile(resolve(__dirname, "css", "ada.css"), "utf8");

  // Base engine first, theme second: a theme is just `:root` custom properties,
  // and a curated theme overrides engine-output vars (--950, --panel-bg, …) at
  // equal specificity — so it has to come after to win the cascade.
  const themeSuffix = theme === "blue" ? "" : `-${theme}`;
  await writeFile(`ada${themeSuffix}.css`, `${baseFile.trim()}\n${themeFile.trim()}`);
};

const theme = process.argv[2] ?? "blue";
run(theme);

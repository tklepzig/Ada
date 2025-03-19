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

  const themeSuffix = theme === "blue" ? "" : `-${theme}`;
  writeFile(`ada${themeSuffix}.css`, themeFile.trim() + baseFile.trim());
};

const theme = process.argv[2] ?? "blue";
run(theme);

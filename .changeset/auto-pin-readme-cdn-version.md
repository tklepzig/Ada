---
"ada-ui": patch
---

Automated the version pinned in the README's jsDelivr CDN links. The release
step now rewrites them to the version being cut, so the docs no longer carry a
manual `@version` placeholder for users to swap by hand. Snapshots are
unaffected — they don't run the release `version` script.

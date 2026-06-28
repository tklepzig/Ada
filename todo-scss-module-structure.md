# SCSS restructure — `@import` → `@use`

## Option A — minimal

Add a `@use` to each partial that extends a cross-file placeholder:

- `_command.scss` → `@use "global";`
- `_panel-commands.scss` → `@use "global";`
- `_panel.scss` → `@use "typography";` + `@use "global";`

Smallest diff, but the shared spine stays scattered.

## Option B — abstracts module (preferred)

Move the shared placeholders + `scalable()` into a dedicated `_abstracts.scss`
that emits no CSS of its own; every consumer `@use`s it.

```
scss/
  _abstracts.scss      // %spacer, %bar-segment, %scrollbar, %header, scalable(), tokens
  _global.scss         // @use "abstracts"
  _typography.scss     // @use "abstracts"
  _command.scss        // @use "abstracts"
  _panel.scss          // @use "abstracts"
  _panel-commands.scss // @use "abstracts"
  ada.scss             // @use each partial
```

One explicit shared module; each partial declares its own deps. Keep
intra-file-only placeholders (`%corner-base`, `%ladder`) where they are.

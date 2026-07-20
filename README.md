# swatchbook-example

A standalone consumer of [swatchbook](https://github.com/unpunnyfuns/swatchbook) built two ways at once:

- a **canonical example** of wiring `@unpunnyfuns/swatchbook-addon` into a real Storybook project, and
- a **regression harness** that depends on the published `@unpunnyfuns/swatchbook-*` packages (`-addon`, `-core`, …) at 2.0.0 (never workspace-linked), so it exercises the packaging and codegen surface that the monorepo's own source-linked tests cannot.

## What it covers

- A two-axis DTCG token set (`mode`, `brand`) driving the addon toolbar.
- The built-in blocks on an MDX docs page (`src/Tokens.mdx`).
- A `useToken`-driven `Button`, which reproduces the exact conditions of the codegen-shadow bug the addon fixed in 2.0 (typed-path `.swatchbook/tokens.d.ts` in the typecheck program).
- A custom `color` presenter (`DualSurfaceSwatch`) registered via `swatchbookAddon({ presenters })`, reaching both stories and MDX.

## Run it

```sh
pnpm install
pnpm storybook        # dev server
pnpm build            # storybook build + tsc --noEmit (the harness's core assertion)
pnpm test             # one smoke story via @storybook/addon-vitest
```

## Why the build order matters

The addon writes `.swatchbook/tokens.d.ts` during a Storybook build, not during `tsc`. So the typecheck must run after a build, or it will not see the typed paths. CI runs `build-storybook` before `typecheck` for this reason.

## Published Storybook

CI builds this project's Storybook and publishes it to GitHub Pages on every green push to `main` (the `deploy` job runs only after `verify` passes). See it live at https://unpunnyfuns.github.io/swatchbook-example/.

## Use this as a template

This repo is a GitHub template: click **Use this template** to start your own swatchbook-in-Storybook project from a working, CI-green baseline. Then:

1. Replace `tokens/` with your own DTCG token set (keep a `resolver.json` entry point), and update `swatchbook.config.ts`'s `resolver`, `default` axes, `cssVarPrefix`, and `presets` to match.
2. Swap the demo `src/Button.tsx` / `src/DualSurfaceSwatch.tsx` / `src/Tokens.mdx` for your own components, presenters, and docs pages.
3. Keep the CI (`.github/workflows/ci.yml`): it is a real gate. The `build-storybook` → `tsc --noEmit` → `test` sequence catches consumer-facing breakage in the published packages, and the `deploy` job publishes your Storybook.
4. To publish your Storybook, enable GitHub Pages in your repo (**Settings → Pages → Source: GitHub Actions**); Pages is not carried over automatically when you copy a template. Storybook builds with relative asset paths, so it works at your repo's Pages subpath with no extra config.

The pinned `@unpunnyfuns/swatchbook-*@^2.0.0` versions track a swatchbook major; bump them when you move to a newer major.

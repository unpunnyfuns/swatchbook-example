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

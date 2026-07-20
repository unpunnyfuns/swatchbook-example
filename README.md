# swatchbook-example

A starter for documenting DTCG design tokens in Storybook with [swatchbook](https://github.com/unpunnyfuns/swatchbook). Clone it, drop in your own tokens, and you have a working token catalogue with a live theme toolbar.

Live Storybook: https://unpunnyfuns.github.io/swatchbook-example/

## What's inside

- A small DTCG token set with two axes (`mode`, `brand`) wired to the toolbar.
- Token docs (colours, dimensions, typography) built from swatchbook's blocks.
- A `Button` styled from tokens with the `useToken` hook.
- A custom colour presenter (`DualSurfaceSwatch`) that shows how to change the way a token type renders.

## Run it

```sh
npm install
npm run storybook   # dev server on :6006
npm run build       # build Storybook and typecheck
npm test            # run the story test
```

## Use this as a template

Click **Use this template** to start your own project from this setup. Then:

1. Replace `src/tokens/` with your own DTCG tokens, and point `swatchbook.config.ts` at your resolver, axes, and prefix.
2. Swap the demo `Button`, presenter, and docs pages under `src/` for your own.
3. To publish your Storybook to GitHub Pages, enable it in your repo (**Settings → Pages → Source: GitHub Actions**). The included workflow builds and deploys it on every push to `main`.

The `@unpunnyfuns/swatchbook-*` dependencies track a swatchbook major; bump them when you move to a newer major.

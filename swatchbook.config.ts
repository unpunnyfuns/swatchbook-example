import { defineSwatchbookConfig } from '@unpunnyfuns/swatchbook-core';

export default defineSwatchbookConfig({
  resolver: 'tokens/resolver.json',
  default: { mode: 'Light', brand: 'A' },
  cssVarPrefix: 'sb',
  presets: [
    { name: 'Light A', axes: { mode: 'Light', brand: 'A' }, description: 'Baseline.' },
    { name: 'Dark B', axes: { mode: 'Dark', brand: 'B' }, description: 'Dark surfaces, green accent.' },
  ],
});

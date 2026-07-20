import { definePreview } from '@storybook/react-vite';
import swatchbookAddon from '@unpunnyfuns/swatchbook-addon';
import { DualSurfaceSwatch } from '../src/DualSurfaceSwatch.tsx';

export default definePreview({
  addons: [swatchbookAddon({ presenters: { color: DualSurfaceSwatch } })],
});

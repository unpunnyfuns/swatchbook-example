import addonDocs from '@storybook/addon-docs';
import { definePreview } from '@storybook/react-vite';
import swatchbookAddon from '@unpunnyfuns/swatchbook-addon';

export default definePreview({
  addons: [addonDocs(), swatchbookAddon()],
});

import addonDocs from '@storybook/addon-docs';
import { definePreview } from '@storybook/react-vite';
import swatchbookAddon from '@unpunnyfuns/swatchbook-addon';

export default definePreview({
  parameters: {
    options: {
      storySort: { order: ['Introduction', 'Tokens', 'Components', 'Advanced'] },
    },
  },
  addons: [addonDocs(), swatchbookAddon()],
});

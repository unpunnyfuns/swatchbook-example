import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button.tsx';

const meta = {
  title: 'Example/Button',
  component: Button,
  args: { label: 'Accent' },
} satisfies Meta<typeof Button>;

export default meta;

export const Default: StoryObj<typeof meta> = {};

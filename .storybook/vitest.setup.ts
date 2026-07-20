import { beforeAll } from 'vitest';
import { setProjectAnnotations } from '@storybook/react-vite';
import preview from './preview.ts';

const project = setProjectAnnotations([preview]);

beforeAll(project.beforeAll);

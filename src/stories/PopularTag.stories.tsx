import type { Meta, StoryObj } from '@storybook/react-vite';

import { PopularTag } from './PopularTag';

const meta = {
  component: PopularTag,
} satisfies Meta<typeof PopularTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
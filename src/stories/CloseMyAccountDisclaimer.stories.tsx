import type { Meta, StoryObj } from '@storybook/react-vite';

import { CloseMyAccountDisclaimer } from './CloseMyAccountDisclaimer';

const meta = {
  component: CloseMyAccountDisclaimer,
} satisfies Meta<typeof CloseMyAccountDisclaimer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "isSouthAustralia": true
  },
};
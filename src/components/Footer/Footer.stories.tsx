import type { Meta, StoryObj } from '@storybook/react';

import Footer from './Footer';

const meta = {
  title: 'Example/Footer',
  component: Footer,
} satisfies Meta: any<typeof Footer>;

  export default meta;
  type Story = StoryObj<typeof meta>;

    export const FooterView: Story = {
      args: {
      primary: true,
    label: 'Footer',
  },
};

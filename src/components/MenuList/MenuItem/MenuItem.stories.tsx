import type { Meta, StoryObj } from '@storybook/react';

import MenuItem from './MenuItem';

const meta = {
  title: 'Example/MenuItem',
  component: MenuItem,
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuItemView: Story = {
  args: {
    title: 'Venetia Pizza',
    imagePath: 'pear.webp',
    ingredients: 'Mozzarella, pear, blue cheese, creamy sauce',
    weight: 545,
    price: 13.5,
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import pizzaMenu from '../../mocks/pizza.json';

import MenuList from './MenuList';

const meta = {
  title: 'Example/MenuList',
  component: MenuList,
} satisfies Meta<typeof MenuList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuListView: Story = {
  args: {
    items: pizzaMenu,
  },
};

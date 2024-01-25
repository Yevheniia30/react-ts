import { FC } from 'react';
import MenuItem from './MenuItem/MenuItem';
import { ListItem } from './types';

interface MenuListProps {
  items: ListItem[];
}

const MenuList: FC<MenuListProps> = ({ items }) => {
  return (
    <ul className="flex flex-wrap gap-10">
      {items.map(({ image, id, ...item }) => (
        <MenuItem key={id} imagePath={image} {...item} />
      ))}
    </ul>
  );
};

export default MenuList;

import React from 'react';
import { useAppSelector } from '../../hooks';

const MenuList = () => {
  const menuList = useAppSelector((state) => state.menu.listMenu);
  return (
    <ul className={'dark:text-white  space-y-4 px-12 pt-4 '}>
      {menuList.map((listItem, idx) => {
        return <li key={idx}>{listItem}</li>;
      })}
    </ul>
  );
};

export default MenuList;

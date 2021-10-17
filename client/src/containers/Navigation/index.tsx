import React from 'react';
import MenuList from '../../components/MenuList';
import LogInButton from '../../components/LogInButton';

const Menu = () => {
  return (
    //TODO fix scrolling
    <div
      className={`bg-gray-900 absolute h-screen w-full bg-opacity-100 z-30 `}
    >
      <div className={`border-b border-gray-600`}>
        <MenuList />
        <LogInButton />
      </div>
    </div>
  );
};

export default Menu;

import React from 'react';
import Logo from '../../components/Logo';
import Menu from '../Navigation';
import MenuToggle from '../../components/Hamburger';
import { useAppSelector } from '../../hooks';
import Login from '../Login';

const Header: React.FunctionComponent = () => {
  const toggleMenu = useAppSelector((state) => state.menu.toggleMenu);
  const login = useAppSelector((state) => state.login.logIn);
  return (
    <div>
      <header
        className={` sm:mx-auto bg-white dark:bg-gray-900 h-14 flex justify-between items-center
        border-b border-gray-600  px-4 `}
      >
        <Logo />
        <MenuToggle />
      </header>
      {toggleMenu && <Menu />}
      {login && <Login />}
    </div>
  );
};

export default Header;

import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeMenuVisibility } from '../../containers/Header/headerSlice';

const MenuToggle = () => {
  const toggleMenu = useAppSelector((state) => state.menu.toggleMenu);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div onClick={() => dispatch(changeMenuVisibility())}>
        {!toggleMenu ? (
          <AiOutlineMenu className={`text-white w-6 h-6`} />
        ) : (
          <AiOutlineClose className={`text-white w-6 h-6`} />
        )}
      </div>
    </div>
  );
};

export default MenuToggle;

import React from 'react';
import { changeLogInState } from '../../containers/Login/loginSlice';
import { useAppDispatch } from '../../hooks';

const LogInButton = () => {
  const dispatch = useAppDispatch();
  return (
    <div onClick={() => dispatch(changeLogInState())}>
      <p className={'pt-6 pb-6 px-8 dark:text-white font-bold text-md'}>
        Log in
      </p>
    </div>
  );
};

export default LogInButton;

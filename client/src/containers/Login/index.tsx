//TODO cut

import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeLogInState } from './loginSlice';
import Logo from '../../components/Logo';
import { AiOutlineClose } from 'react-icons/ai';

const Login = () => {
  const signIn = useAppSelector((state) => state.login.signIn);
  const dispatch = useAppDispatch();
  return (
    <div className={''}>
      <div
        className={`bg-white absolute left-0 top-0 w-screen z-40 h-full bg-black opacity-40`}
        onClick={() => dispatch(changeLogInState())}
      />
      <div
        className={`bg-gray-800 z-50 absolute shadow-2xl left-0 right-0 w-5/6 top-20 
         ml-auto mr-auto rounded flex flex-col items-center justify-center`}
      >
        {/*todo make component independent from hamburger*/}
        <AiOutlineClose
          className={`text-white w-5 h-5 absolute top-4 right-4`}
        />
        {/*LOGO 1/3*/}
        <div className={`h-1/3 w-max flex justify-center items-center my-10`}>
          <Logo size={'4xl'} />
        </div>
        <div className={'mb-2'}>
          <p className={`text-gray-400 font-medium text-sm`}>
            Sign in to your Wypok account.
          </p>
        </div>
        {/*credentials*/}
        <div className={` h-2/3 p-0 w-full p-6`}>
          <form className={`flex flex-col text-white `}>
            <div className={`space-y-4`}>
              <div className={'space-y-1'}>
                <label
                  className={`text-gray-200 font-medium text-sm`}
                  htmlFor={'login'}
                >
                  Login:
                </label>
                <input
                  className={`h-8 pl-2 bg-gray-800 text-sm border border-gray-600 rounded w-full`}
                  type={'text'}
                  name={'login'}
                />
              </div>
              <div className={'space-y-1 mb-10 '}>
                <label
                  className={`text-gray-200 font-medium text-sm`}
                  htmlFor={'password'}
                >
                  Password:
                </label>
                <input
                  className={`h-8 pl-2 bg-gray-800 text-sm border border-gray-600 rounded w-full`}
                  type={'text'}
                  name={'password'}
                />
              </div>
            </div>
          </form>
        </div>
        <div className={`w-8/12`}>
          <button
            className={
              'p-2  bg-gray-600 text-gray-200 w-full  rounded text-sm font-bold'
            }
            type={'submit'}
          >
            LOGIN
          </button>
        </div>

        <div
          className={`my-8 pt-8 border-t border-gray-600 w-11/12 text-center`}
        >
          <p className={'text-sm text-gray-600 font-medium'}>
            Don't have an account?{' '}
            <span className={`text-gray-300 hover:text-white`}>SIGN UP</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { createSlice } from '@reduxjs/toolkit';
import { LoginState } from '../../common/types';

const initialState: LoginState = {
  userCredentials: {
    username: '',
    password: '',
  },
  signIn: false,
  logIn: false,
};

export const loginSlice = createSlice({
  name: 'login',

  initialState,
  reducers: {
    changeSignInState: (state) => {
      state.signIn = !state.signIn;
    },
    changeLogInState: (state) => {
      state.logIn = !state.logIn;
    },
  },
});

export const { changeSignInState, changeLogInState } = loginSlice.actions;
export default loginSlice.reducer;

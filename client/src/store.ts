import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './containers/Application/counterSlice';
import menuReducer from './containers/Header/headerSlice';
import loginReducer from './containers/Login/loginSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    menu: menuReducer,
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

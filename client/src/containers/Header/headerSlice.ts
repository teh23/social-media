import { createSlice } from '@reduxjs/toolkit';
import { MenuState } from '../../common/types';

const initialState: MenuState = {
  toggleMenu: false,
  listMenu: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
};

export const headerSlice = createSlice({
  name: 'menu',

  initialState,
  reducers: {
    changeMenuVisibility: (state) => {
      state.toggleMenu = !state.toggleMenu;
    },
  },
});

export const { changeMenuVisibility } = headerSlice.actions;

export default headerSlice.reducer;

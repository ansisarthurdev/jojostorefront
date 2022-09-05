import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: null,
};


export const appSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    updateItem: (state, action) => {
      state.item = action.payload;
    },
  },
});

export const { updateItem } = appSlice.actions;
export const selectItem = (state) => state.app.item;

export default appSlice.reducer;
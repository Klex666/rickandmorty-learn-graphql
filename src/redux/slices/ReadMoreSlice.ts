import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentData: {
    id: 1,
    name: '',
  },
};

export const readMoreSlice = createSlice({
  name: 'pagesSlice',
  initialState,
  reducers: {
    saveCurrentData(state, actions) {
      state.currentData = actions.payload;
    },
  },
});

export const readMoreSliceActions = readMoreSlice.actions;

export default readMoreSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
};

export const pagesSlice = createSlice({
  name: 'pagesSlice',
  initialState,
  reducers: {
    nextPage(state) {
      if (state.page < 42) {
        state.page++;
      } else {
        console.log('Last page');
      }
    },
    prevPage(state) {
      if (state.page > 1) {
        state.page--;
      } else {
        console.log('Last page');
      }
    },
  },
});

export const pagesSliceActions = pagesSlice.actions;

export default pagesSlice.reducer;

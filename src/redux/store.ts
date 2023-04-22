import { configureStore } from '@reduxjs/toolkit';
import pagesSlice from './slices/PagesSlice';
import readMoreSlice from './slices/ReadMoreSlice';

export const store = configureStore({
  reducer: {
    pagesSlice,
    readMoreSlice,
  },
});

export type TypeRootState = ReturnType<typeof store.getState>;

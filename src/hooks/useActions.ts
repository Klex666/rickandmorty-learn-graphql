import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { pagesSliceActions } from '../redux/slices/PagesSlice';
import { readMoreSliceActions } from '../redux/slices/ReadMoreSlice';

const allActions = {
  ...pagesSliceActions,
  ...readMoreSliceActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};

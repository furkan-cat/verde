import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { apiSlice } from '@features/api/api';
import postsReducer from '@features/slices/post-slice';

export const store = configureStore({
  reducer: {
    postsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { apiSlice } from '@features/api/api';
import apiPostsReducer from '@features/slices/api-post-slice';
import ownPostsReducer from '@features/slices/own-post-slice';

export const store = configureStore({
  reducer: {
    apiPostsReducer,
    ownPostsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

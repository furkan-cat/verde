import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPostResponse } from '@features/api/api';

export interface IPost {
  apiPosts: IPostResponse[];
  ownPosts: IPostResponse[];
}

const initialState = {
  apiPosts: {
    userId: null,
    id: null,
    title: '',
    body: '',
  },
};

const postSlice = createSlice({
  name: 'apiPost',
  initialState,
  reducers: {
    fillApiPosts(state: any, action: PayloadAction<IPostResponse[]>) {
      state.apiPosts = action.payload;
    },
  },
});

export const { fillApiPosts } = postSlice.actions;
export default postSlice.reducer;

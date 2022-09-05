import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IPostResponse } from '@features/api/api';

export interface IPost {
  posts: IPostResponse[];
}

const initialState = {
  posts: {
    userId: null,
    id: null,
    title: '',
    body: '',
  },
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fillPosts(state: any, action: PayloadAction<IPostResponse[]>) {
      state.posts = action.payload;
    },
  },
});

export const { fillPosts } = postSlice.actions;
export default postSlice.reducer;

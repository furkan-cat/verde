import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPostResponse } from '@features/api/api';

export interface IPost {
  ownPosts: IPostResponse[];
}

const initialState = {
  ownPosts: {
    userId: null,
    id: null,
    title: '',
    body: '',
  },
};

const postSlice = createSlice({
  name: 'ownPost',
  initialState,
  reducers: {
    fillOwnPosts(state: any, action: PayloadAction<IPostResponse[]>) {
      state.ownPosts = action.payload;
    },
  },
});

export const { fillOwnPosts } = postSlice.actions;
export default postSlice.reducer;

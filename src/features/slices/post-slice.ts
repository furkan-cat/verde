import { IPostResponse } from "@features/api/api";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPosts {
  posts: {
    userId: number | null;
    id: number | null;
    title: string | null;
    body: string | null;
  };
}

const initialState: IPosts = {
  posts: {
    userId: null,
    id: null,
    title: "",
    body: "",
  },
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    fillPosts(state, action: PayloadAction<IPostResponse[]>) {
      // state type defination issue!!
      state.posts = action.payload;
    },
  },
});

export const { fillPosts } = postSlice.actions;
export default postSlice.reducer;

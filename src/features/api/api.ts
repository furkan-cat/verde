import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IPostResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const apiSlice = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPostResponse[], number | void>({
      query: () => ({
        url: "posts",
      }),
    }),
    updatePost: builder.mutation<IPostResponse[], number>({
      query: (id) => ({
        url: `posts/${id}`,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useUpdatePostMutation } = apiSlice;

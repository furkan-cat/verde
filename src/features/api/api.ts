import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IPostResponse {
  userId: number | undefined;
  id: number | undefined;
  title: string | undefined;
  body: string | undefined;
}

export const apiSlice = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPostResponse[], string | void>({
      query: () => ({
        url: "posts",
      }),
    }),
    updatePost: builder.mutation<IPostResponse[], string | void>({
      query: (id) => ({
        url: `posts/${id}`,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useUpdatePostMutation } = apiSlice;

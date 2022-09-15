import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IPostResponse {
  userId: number | undefined;
  id: number | undefined;
  title: string | undefined;
  body: string | undefined;
}

/** 
 * * Jsonplaceholder API => https://jsonplaceholder.typicode.com/
 * * Json Server API => http://localhost:8000/
**/

export const apiSlice = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPostResponse[], string | void>({
      query: () => ({
        url: 'posts',
      }),
    }),
    updatePost: builder.mutation<string, IPostResponse>({
      query: (data) => {
        const { id, userId, title, body } = data;
        return {
          url: `posts/${id}`,
          method: 'PUT',
          body: {
            userId: userId,
            id: id,
            title: title,
            body: body,
          },
        };
      },
    }),
    createPost: builder.mutation<string, IPostResponse>({
      query: (data) => {
        const { id, userId, title, body } = data;
        return {
          url: 'posts',
          method: 'POST',
          body: {
            userId: userId,
            id: id,
            title: title,
            body: body,
          },
        };
      },
    }),
    deletePost: builder.mutation<IPostResponse[], number | void>({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useUpdatePostMutation,
  useCreatePostMutation,
  useDeletePostMutation,
} = apiSlice;

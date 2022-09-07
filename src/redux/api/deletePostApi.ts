import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../../types/Post';

export const deletePostApi = createApi({
  reducerPath: 'deletePostApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4444',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    deletePost: build.mutation<any, any>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token') || '{}'}`,
        },
      }),
    }),
  }),
});

export const { useDeletePostMutation } = deletePostApi;

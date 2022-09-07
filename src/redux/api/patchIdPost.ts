import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const patchIdPost = createApi({
  reducerPath: 'patchIdPost',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4444',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    patchIdPost: build.mutation({
      query: ({ id, fields }) => ({
        url: `/posts/${id}`,
        method: 'PATCH',
        body: fields,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token') || '{}'}`,
        },
      }),
    }),
  }),
});

export const { usePatchIdPostMutation } = patchIdPost;

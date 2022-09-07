import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const postResourceApi = createApi({
  reducerPath: 'Resource',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4444',
  }),
  endpoints: (build) => ({
    resourse: build.mutation<any, any>({
      query: ({ fields }) => ({
        url: '/posts',
        method: 'POST',
        body: fields,
        headers: {
          authorization: `Bearer ${localStorage.getItem('token') || '{}'}`,
        },
      }),
    }),
  }),
});

export const { useResourseMutation } = postResourceApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const getAuthMe = createApi({
  reducerPath: 'getAuthMe',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4444',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getAuthMe: build.query({
      query: () => ({
        url: '/auth/me',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token') || '{}'}`,
        },
      }),
    }),
  }),
});

export const { useGetAuthMeQuery } = getAuthMe;

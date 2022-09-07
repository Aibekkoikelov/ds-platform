import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const postImgFileApi = createApi({
  reducerPath: 'postImgFile',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4444',
    headers: { 'content-type': 'image/png' },
    prepareHeaders: (headers, { getState, endpoint }) => {
      headers.set('Access-Control-Allow-Origin', '*');
      return headers;
    },
  }),
  endpoints: (build) => ({
    addImage: build.mutation<any, any>({
      query: ({ formData }) => ({
        url: '/upload',
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token') || '{}'}`,
        },
      }),
    }),
  }),
});

export const { useAddImageMutation } = postImgFileApi;

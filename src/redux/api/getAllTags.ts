import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const getAllTags = createApi({
  reducerPath: 'getAllTags',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4444',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getAllTags: build.query<Array<string>, Array<string>>({
      query: () => ({
        url: `/tags`,
      }),
    }),
  }),
});
export const { useGetAllTagsQuery } = getAllTags;

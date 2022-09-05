import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../../types/Post';

export const getAllPostApi = createApi({
  reducerPath: 'getAllPostApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4444',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getAllPostApi: build.query<IUser, any>({
      query: () => ({
        url: `/posts`,
      }),
    }),
  }),
});

export const { useGetAllPostApiQuery } = getAllPostApi;

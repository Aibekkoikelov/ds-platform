import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './slices/posts';
import { authReducer } from './slices/auth';
import { getAllPostApi } from './api/getAllPostApi';
import { getAllTags } from './api/getAllTags';
import { getAuthMe } from './api/getAuthMe';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    [getAllPostApi.reducerPath]: getAllPostApi.reducer,
    [getAllTags.reducerPath]: getAllTags.reducer,
    [getAuthMe.reducerPath]: getAuthMe.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      getAllPostApi.middleware,
      getAllTags.middleware,
      getAuthMe.middleware,
    ),
});

setupListeners(store.dispatch);

export default store;

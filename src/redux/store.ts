import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './slices/posts';
import { authReducer } from './slices/auth';
import { getAllPostApi } from './api/getAllPostApi';
import { getAllTags } from './api/getAllTags';
import { getAuthMe } from './api/getAuthMe';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { postReducer } from './slices/PostSlice';
import { deletePostApi } from './api/deletePostApi';
import { postImgFileApi } from './api/postImgFileApi';
import { postResourceApi } from './api/postResourceApi';
import { patchIdPost } from './api/patchIdPost';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    post: postReducer,
    [getAllPostApi.reducerPath]: getAllPostApi.reducer,
    [getAllTags.reducerPath]: getAllTags.reducer,
    [getAuthMe.reducerPath]: getAuthMe.reducer,
    [deletePostApi.reducerPath]: deletePostApi.reducer,
    [postImgFileApi.reducerPath]: postImgFileApi.reducer,
    [postResourceApi.reducerPath]: postResourceApi.reducer,
    [patchIdPost.reducerPath]: patchIdPost.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      getAllPostApi.middleware,
      getAllTags.middleware,
      getAuthMe.middleware,
      deletePostApi.middleware,
      postImgFileApi.middleware,
      postResourceApi.middleware,
      patchIdPost.middleware,
    ),
});

setupListeners(store.dispatch);

// Кастомные Для понимания с какими данными мы работаем в store
export type RootState = ReturnType<typeof store.getState>;

export default store;

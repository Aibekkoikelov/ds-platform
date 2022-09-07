import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ServerResponse, IUser } from '../../types/Post';

const initialState: ServerResponse<IUser> | any = {
  posts: {
    items: JSON.parse(localStorage.getItem('Posts') ?? '[]'),
  },
  tags: {
    items: [],
  },
};

export const PostSlice = createSlice({
  name: 'Post',
  initialState,
  reducers: {
    addPosts(state, action: PayloadAction<any>) {
      state.posts.unshift(action.payload);
      localStorage.setItem('Posts', JSON.stringify(state.posts.items));
    },
    deletePosts(state, action: PayloadAction<any>) {
      state.posts.items = state.posts.items.filter((obj) => obj._id !== action.meta.arg);
      localStorage.setItem('Posts', JSON.stringify(state.posts.items));
      localStorage.setItem('Delete obj', JSON.stringify(action.meta.arg));
    },
  },
});

export const postActions = PostSlice.actions;
export const postReducer = PostSlice.reducer;

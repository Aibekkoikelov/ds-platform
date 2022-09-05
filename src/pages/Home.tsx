import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

import { Post } from '../components/Post';
import { TagsBlock } from '../components/TagsBlock';
import { CommentsBlock } from '../components/CommentsBlock';

import { useGetAllPostApiQuery } from '../redux/api/getAllPostApi';
import MyLoader from '../components/UI/SkeletonPost/SkeletonPost';
import { useGetAllTagsQuery } from '../redux/api/getAllTags';

const Home: FC = () => {
  const userData = useSelector((state) => state.auth.data);

  const { data: posts, isLoading, isError } = useGetAllPostApiQuery('', { refetchOnFocus: true });

  const {
    data: tags,
    isLoading: loading,
    isError: Error,
  } = useGetAllTagsQuery([''], { refetchOnFocus: true });

  return (
    <>
      <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
        <Tab label="Новые" />
        <Tab label="Популярные" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {isLoading && [...Array(6)].map((_, index) => <MyLoader key={index} />)}
          {posts?.map((obj) => {
            return (
              <Post
                key={obj._id}
                id={obj._id}
                title={obj.title}
                imageUrl={obj.imageUrl ? `http://localhost:4444${obj.imageUrl}` : ''}
                user={obj.user}
                createdAt={obj.createdAt}
                viewsCount={obj.viewsCount}
                commentsCount={3}
                tags={obj.tags}
                isEditable={userData?._id === obj.user._id}
              />
            );
          })}
        </Grid>
        <Grid xs={4} item>
          {!loading ? <TagsBlock items={tags} isLoading={loading} /> : null}

          {/* <CommentsBlock
            items={[
              {
                user: {
                  fullName: 'Вася Пупкин',
                  avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
                },
                text: 'Это тестовый комментарий',
              },
              {
                user: {
                  fullName: 'Иван Иванов',
                  avatarUrl: 'https://mui.com/static/images/avatar/2.jpg',
                },
                text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top',
              },
            ]}
            isLoading={false}
          /> */}
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

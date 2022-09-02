import React from 'react';

import * as path from './constant';
import * as component from '../pages';

export const PRIVATE_ROUTE = [
  {
    id: 1,
    path: path.MAIN_PAGE,
    component: <component.MainPage />,
  },
  {
    id: 2,
    path: path.NEWS_PAGE,
    component: <component.NewsPage />,
  },
  {
    id: 3,
    path: path.LESSON,
    component: <component.LessonPage />,
  },
  {
    id: 4,
    path: path.RESOURCE,
    component: <component.ResourcePage />,
  },
  {
    id: 5,
    path: path.HOME_WORK,
    component: <component.HomeWorkPage />,
  },
  {
    id: 6,
    path: path.LESSON_TOPIC,
    component: <component.LessonTopic />,
  },
  {
    id: 7,
    path: path.LESSON_TOPIC_PAGE,
    component: <component.LessonTopicPage />,
  },

  {
    id: 8,
    path: path.HOME_RESURSES,
    component: <component.Home />,
  },
  {
    id: 9,
    path: path.FULL_POST,
    component: <component.FullPost />,
  },
  ,
  {
    id: 10,
    path: path.ADD_POST,
    component: <component.AddPost />,
  },
  ,
  {
    id: 11,
    path: path.REGISTRATION,
    component: <component.Registration />,
  },

  {
    id: 12,
    path: path.FULL_POST_Edit,
    component: <component.AddPost />,
  },
];

export const PUBLIC_ROUTE = [
  {
    id: 1,
    path: path.LOGIN,
    component: <component.Login />,
  },
];

export const ADMIN_ROUTES = [];

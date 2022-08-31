
import React from 'react'

import * as path from "./constant"
import * as component from "../pages"

export const PRIVATE_ROUTE = [
    {
        id:1,
        path: path.MAIN_PAGE,
        component: <component.MainPage/>
    },
    {
        id:2,
        path: path.NEWS_PAGE,
        component: <component.NewsPage/>
    },
    {
        id:3,
        path: path.LESSON,
        component: <component.LessonPage/>
    },
    {
        id:4,
        path: path.RESOURCE,
        component: <component.ResourcePage/>
    },
    {
        id:5,
        path: path.HOME_WORK,
        component: <component.HomeWorkPage/>
    },{
        id:6,
        path: path.LESSON_TOPIC,
        component: <component.LessonTopic/>
    },{
        id:7,
        path: path.LESSON_TOPIC_PAGE,
        component: <component.LessonTopicPage/>
    }
]
export const PUBLIC_ROUTE = [
    {
        id:1,
        path: path.LOGIN_PAGE,
        component: <component.LoginPage/>
    }
]

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
    }
]
export const PUBLIC_ROUTE = [
    {
        id:1,
        path: path.LOGIN_PAGE,
        component: <component.LoginPage/>
    }
]
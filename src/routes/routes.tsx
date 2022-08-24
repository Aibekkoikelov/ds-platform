
import React from 'react'

import * as path from "./constant"
import * as component from "../pages"

export const PRIVATE_ROUTE = [
    {
        path: path.MAIN_PAGE,
        component: <component.MainPage/>
    }
]
export const PUBLIC_ROUTE = [
    {
        path: path.LOGIN_PAGE,
        component: <component.LoginPage/>
    }
]
import React, {useState} from 'react';
import "./App.css"
import * as routes from "./routes/routes"
import {ERROR_PAGE, LOGIN_PAGE} from "./routes/constant";
import {Navigate, Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages";
import ErrorPage from "./pages/ErrorPage";
const App = () => {
  const isAuth = false
    return (
        <div>
            {isAuth ?
                <Routes>
                    {routes.PRIVATE_ROUTE.map(item=>
                        <Route path={item.path} element={item.component}/>
                    )}
                    <Route path={"*"} element={<ErrorPage/>}/>
                </Routes> :
                <Routes>
                    {routes.PUBLIC_ROUTE.map(item=>
                        <Route path={item.path} element={item.component}/>)}
                    <Route path={"*"} element={<LoginPage/>}/>
                </Routes>
            }
        </div>
    );
};

export default App;
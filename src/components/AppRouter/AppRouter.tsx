import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import * as routes from "../../routes/routes";
import ErrorPage from "../../pages/ErrorPage";
import {LoginPage, MainPage} from "../../pages";
import {AuthContext} from "../../context/AuthContext";

function AppRouter() {
    const {auth} = useContext(AuthContext)
    return (
        <div>
            {auth ?
                <Routes>
                    {routes.PRIVATE_ROUTE.map(item=>
                        <Route key={item.id} path={item.path} element={item.component}/>
                    )}
                    <Route path={"*"} element={<MainPage/>}/>
                </Routes> :
                <Routes>
                    {routes.PUBLIC_ROUTE.map(item=>
                        <Route key={item.id} path={item.path} element={item.component}/>)}
                    <Route path={"*"} element={<LoginPage/>}/>
                </Routes>
            }
        </div>
    );
}

export default AppRouter;
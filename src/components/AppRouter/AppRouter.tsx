import React from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';
import { useGetAuthMeQuery } from '../../redux/api/getAuthMe';

import * as routes from '../../routes/routes';

import style from './router.module.scss';

function AppRouter() {
  const navigate = useNavigate();
  const { data: isAuth, isLoading, isError } = useGetAuthMeQuery('', { refetchOnFocus: true });

  React.useEffect(() => {
    if (isAuth && window.localStorage.getItem('token')) {
      return navigate('/');
    }
    return navigate('/login');
  }, [isAuth]);


  return (
    <div className={style.container}>1234

      {isLoading && <h1>Loading....</h1>}

      {isAuth ? (
        <Routes>
          {routes.PRIVATE_ROUTE.map(({id, path, component}) => (
            <Route key={id} path={path} element={component} />
          ))}
        </Routes>
      ) : (
        <Routes>
          {routes.PUBLIC_ROUTE.map((item) => (
            <Route key={item.id} path={item.path} element={item.component} />
          ))}
        </Routes>
      )}
    </div>
  );
}

export default AppRouter;

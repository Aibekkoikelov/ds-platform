import React from 'React';

import { Route, Routes, useNavigate } from 'react-router-dom';
import { useGetAuthMeQuery } from '../../redux/api/getAuthMe';

import * as routes from '../../routes/routes';
import MyLoader from '../UI/SkeletonPost/SkeletonPost';
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
    <div className={style.container}>
      {isLoading && <h1>Loading....</h1>}

      {isAuth ? (
        <Routes>
          {routes.PRIVATE_ROUTE.map((item) => (
            <Route key={item.id} path={item.path} element={item.component} />
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

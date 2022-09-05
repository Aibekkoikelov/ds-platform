import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { fetchAuthMe, selectIsAuth } from '../../redux/slices/auth';
import * as routes from '../../routes/routes';
import style from './router.module.scss';

function AppRouter() {
  const dispatch = useDispatch();
  // const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   dispatch(fetchAuthMe());
  // }, []);

  // React.useEffect(() => {
  //   if (isAuth && window.localStorage.getItem('token')) {
  //     return navigate('/');
  //   }
  //   return navigate('/login');
  // }, [isAuth]);
 const isAuth: boolean = true
  return (
    <div className={style.container}>
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

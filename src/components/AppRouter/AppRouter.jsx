import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchAuthMe, selectIsAuth } from '../../redux/slices/auth';
import * as routes from '../../routes/routes';

import style from './router.module.scss';

function AppRouter() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe(fetchAuthMe()));
  }, []);

  return (
    <div className={style.container}>
      <Routes>
        {routes.PUBLIC_ROUTE.map((item) => (
          <Route key={item.id} path={item.path} element={item.component} />
        ))}
      </Routes>
    </div>
  );
}

export default AppRouter;

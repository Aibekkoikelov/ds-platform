import React from 'react';
import { useSelector } from 'react-redux';

import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/header/Header';
import { useGetAuthMeQuery } from './redux/api/getAuthMe';

const App = () => {

  const {
    data: isAuth,
    isLoading,
    isError,
  } = useGetAuthMeQuery('', {
    refetchOnFocus: true,
  });


  return (
    <div>
      {isAuth ? <Header /> : null}
      <AppRouter />
    </div>
  );
};

export default App;

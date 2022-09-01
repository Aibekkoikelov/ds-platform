import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuth } from './redux/slices/auth';
import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/header/Header';

const App = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <div>
      {isAuth ? <Header /> : null}
      <AppRouter />
    </div>
  );
};

export default App;

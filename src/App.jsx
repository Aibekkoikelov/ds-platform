import React from 'react';
import './App.css';

import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;

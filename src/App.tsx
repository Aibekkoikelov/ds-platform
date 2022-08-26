import React, {useEffect, useState} from 'react';
import "./App.css"
import {AuthContext} from "./context/AuthContext"
import AppRouter from "./components/AppRouter/AppRouter";
import Header from "./components/header/Header";
const App = () => {
    const [auth, setAuth] = useState(false)
    useEffect(() => {
        if (localStorage.getItem('authDs')) {
            setAuth(true)
        }
    }, [])
    return (
      <AuthContext.Provider value={{
          auth, setAuth
      }}>
          <div>
              {auth && <Header/>}
             <AppRouter/>
          </div>
      </AuthContext.Provider>


    );
};

export default App;
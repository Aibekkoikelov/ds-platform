import React, {useContext} from 'react';
import style from "./loginPage.module.scss"
import Input from "./component/Input";
import SubmitButton from "./component/SubmitButton";
import {AuthContext} from "../../context/AuthContext";
import {Navigate} from "react-router-dom";
const LoginPage = () => {
    const {setAuth} = useContext(AuthContext)
    const handleClick = () => {
        setAuth(true)
        localStorage.setItem("authDs", "true")
    }
    return (
        <div className={style.login} >
           <div className={style.login_box}>
               <h2 className={style.login_title}>Discovery Studio</h2>
                <hr/>
               <form onSubmit={handleClick}>
                   <Input placeholder={"Введите свою почту"} type={"email"}/>
                   <Input placeholder={"Введите свой пароль"} type={"password"}/>
                   <SubmitButton>Подтвердить</SubmitButton>
               </form>
           </div>
        </div>
    );
};

export default LoginPage;
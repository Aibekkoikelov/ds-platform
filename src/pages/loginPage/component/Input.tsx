import React, {FC} from 'react';
import style from "../loginPage.module.scss"
interface IInputProps {
    type: string
    placeholder?: string
}
function Input ({type, placeholder}:IInputProps)  {
    return (
            <input placeholder={placeholder} className={style.login_input} type={type}  onChange={(e)=> console.log(e.target.value)}/>
    );
};

export default Input;
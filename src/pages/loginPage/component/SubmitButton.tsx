import React from 'react';
import style from "../loginPage.module.scss"
interface ButtonProps {
    children?: string
}
function SubmitButton({children}: ButtonProps) {
    return (
        <button className={style.login_btn} type={"submit"}>{children}</button>
    );
}

export default SubmitButton;
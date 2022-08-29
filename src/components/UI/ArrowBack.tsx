import React from 'react';
import style from "./ui.module.scss"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {useNavigate} from "react-router-dom";

function ArrowBack() {
    const navigate = useNavigate()
    return (
        <div className={style.back} onClick={()=> navigate(-1)}>
            <ArrowBackIcon/>
            <div className={style.back_title}>Вернутся назад</div>
        </div>
    );
}

export default ArrowBack;
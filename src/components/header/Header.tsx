import React from 'react';
import style from "./header.module.scss"
import {Link, NavLink} from "react-router-dom";
import Navigation from "./component/Navigation";
import PeopleIcon from '@mui/icons-material/People';

function Header() {
    return (
        <div className={style.header}>
          <div className={style.container}>
             <div className={style.header_content}>
                 <Link className={style.navigation_link} to={"/"}>
                     DS
                 </Link>
                 <Navigation/>
                <PeopleIcon style={{color:"#fff", cursor:"pointer"}} fontSize={"large"}/>
             </div>
          </div>
        </div>
    );
}

export default Header;
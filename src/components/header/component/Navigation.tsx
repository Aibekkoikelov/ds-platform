import React from 'react';
import { links } from '../links';
import { NavLink } from 'react-router-dom';
import style from '../header.module.scss';
function Navigation() {
  return (
    <ul className={style.navigation}>
      {links.map((item, index) => (
        <li key={index}>
          <NavLink
            className={({ isActive }) =>
              isActive ? style.navigation_active : style.navigation_link
            }
            to={item.path}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;

import React from 'react';
import style from './header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/auth';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from './component/Navigation';
import PeopleIcon from '@mui/icons-material/People';
import Button from '@mui/material/Button';

import styles from './header.module.scss';
import { useGetAuthMeQuery } from '../../redux/api/getAuthMe';

function Header() {
  const dispatch = useDispatch();

  const { data: isAuth, isLoading, isError } = useGetAuthMeQuery('', { refetchOnFocus: true });

  const navigate = useNavigate();

  const onClickLogout = () => {
    if (window.confirm('Вы действительно хотите выйти?')) {
      dispatch(logout());
      localStorage.removeItem('token');
      navigate('/login');
    }
  };

  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.header_content}>
          <Link className={style.navigation_link} to={'/'}>
            DS
          </Link>
          <Navigation />
          <PeopleIcon style={{ color: '#fff', cursor: 'pointer' }} fontSize={'large'} />
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Link to="/add-post">
                  <Button variant="contained">Написать статью</Button>
                </Link>
                <Button onClick={onClickLogout} variant="contained" color="error">
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outlined">Войти</Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained">Создать аккаунт</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

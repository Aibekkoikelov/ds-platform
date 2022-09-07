import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegister } from '../../redux/slices/auth';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import styles from './Login.module.scss';
import { useGetAuthMeQuery } from '../../redux/api/getAuthMe';

const Registration: FC = (): any => {
  const { data: isAuth, isLoading, isError } = useGetAuthMeQuery('', { refetchOnFocus: true });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      password: '',
    },
    mode: 'all',
  });

  const onSubmit = async (values: any) => {
    const data = await dispatch(fetchRegister(values));
    console.log(data);

    if (!data.payload) {
      return alert('Не удалось зарегистрироваться');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return navigate('/');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Paper classes={{ root: styles.root }}>
        <Typography classes={{ root: styles.title }} variant="h5">
          Создание аккаунта
        </Typography>
        <div className={styles.avatar}>
          <Avatar sx={{ width: 100, height: 100 }} />
        </div>
        <TextField
          error={Boolean(errors.fullName?.message)}
          helperText={errors.fullName?.message}
          {...register('fullName', { required: 'Укажите полное имя' })}
          className={styles.field}
          label="Полное имя"
          fullWidth
        />

        <TextField
          className={styles.field}
          id="outlined-number"
          label="Номер телефона"
          type="number"
          fullWidth
          error={Boolean(errors.phoneNumber?.message)}
          helperText={errors.phoneNumber?.message}
          {...register('phoneNumber', { required: 'Укажите  Номер телефона' })}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          type="email"
          {...register('email', { required: 'Укажите почту' })}
          className={styles.field}
          label="E-Mail"
          fullWidth
        />
        <TextField
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          type="password"
          {...register('password', { required: 'Укажите пароль' })}
          className={styles.field}
          label="Пароль"
          fullWidth
        />
        <Button disabled={!isValid} type="submit" size="large" variant="contained" fullWidth>
          Зарегистрироваться
        </Button>
      </Paper>
    </form>
  );
};

export default Registration;

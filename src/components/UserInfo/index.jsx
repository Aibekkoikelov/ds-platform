import React from 'react';
import styles from './UserInfo.module.scss';

export const UserInfo = ({ avatarUrl, fullName, additionalText }) => {
  return (
    <div className={styles.root}>
      <img
        className={styles.avatar}
        src={
          avatarUrl ||
          'https://spng.pinpng.com/pngs/s/341-3415688_no-avatar-png-transparent-png.png'
        }
        alt="User"
      />
      <div className={styles.userDetails}>
        <span className={styles.userName}>{fullName}</span>
        <span className={styles.additional}>{additionalText}</span>
      </div>
    </div>
  );
};

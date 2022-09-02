import React, { FC } from 'react';
import style from '../leson.module.scss';
import { Link } from 'react-router-dom';
import { LESSON, LESSON_TOPIC } from '../../../routes/constant';
export interface ILessonItem {
  id?: number;
  day: string;
  month: string;
  title: string;
  isActive: boolean;
}
const LessonItem: FC<ILessonItem> = ({ day, month, title, isActive, id }) => {
  return (
    <div
      style={isActive ? { backgroundColor: 'green' } : { backgroundColor: '' }}
      className={style.lesson_item}>
      <div className={style.date_day}>{day}</div>
      <div className={style.date_month}>{month}</div>
      <div className={style.lesson_item_title}>{title.slice(0, 60)}</div>
      <Link className={style.lesson_item_btn} to={`${LESSON}/${id}`}>
        Открыть
      </Link>
    </div>
  );
};

export default LessonItem;

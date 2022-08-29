import React from 'react';
import style from "../leson.module.scss"
function LessonItem() {
    return (
        <div className={style.lesson_item}>
          <div className={style.date_day}>{"05"}</div>
            <div className={style.date_month}>{"Август"}</div>

        </div>
    );
}

export default LessonItem;
import React from 'react';
import style from "../leson.module.scss"
import LessonItem from "./LessonItem";
function LessonList() {
    return (
        <div className={style.lesson_list}>
            <LessonItem/>
            <LessonItem/>
            <LessonItem/>
            <LessonItem/>
        </div>
    );
}

export default LessonList;
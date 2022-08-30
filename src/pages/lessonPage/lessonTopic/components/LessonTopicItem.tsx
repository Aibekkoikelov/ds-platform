import React, {FC} from 'react';
import style from "./lessonTopic.module.scss";
import {Link, useParams} from "react-router-dom";
import {LESSON, LESSON_TOPIC_PAGE} from "../../../../routes/constant";

export  interface ILessonTopicItem{
    id: number
    title: string
}
const  LessonTopicItem :FC <ILessonTopicItem> = ({id, title}) => {

    return (
            <div className={style.topic_item}>
                <div className={style.topic_item_title}>{title}</div>
                <Link className={style.topic_item_btn} to={`${LESSON}/topic/${id}`}>Открыть</Link>
            </div>

    );
}

export default LessonTopicItem;
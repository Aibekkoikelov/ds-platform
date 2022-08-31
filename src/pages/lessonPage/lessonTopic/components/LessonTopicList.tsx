import React from 'react';
import LessonTopicItem, {ILessonTopicItem} from "./LessonTopicItem";
import style from "./lessonTopic.module.scss"
function LessonTopicList() {
    const data: ILessonTopicItem[] = [
        {id: 1,
        title: "Что такое JS и как его подключить к странице"},
        {id: 2,
        title: "New Lesson"},
        {id: 3,
        title: "New Lesson"},
        {id: 4,
        title: "New Lesson"},
        {id: 5,
        title: "New Lesson"},
        {id: 6,
        title: "New Lesson"}
    ]

    return (
        <div className={style.topic}>
            {data.map(item=>
                <LessonTopicItem key={item.id} {...item} />
            )}

        </div>
    );
}

export default LessonTopicList;
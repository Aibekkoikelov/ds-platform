import React from 'react';
import ArrowBack from "../../../components/UI/ArrowBack";
import style from "./components/lessonTopic.module.scss"
function LessonTopicPage() {
    const title = "All there good"
    return (
        <div>
            <ArrowBack/>
            <div className={style.topic_page}>
                <div>{title}</div>
            </div>
        </div>

    );
}

export default LessonTopicPage;
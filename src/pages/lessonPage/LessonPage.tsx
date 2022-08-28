import React from 'react';
import LessonList from "./components/LessonList";

function LessonPage() {
    return (
        <div>
          <h1>Расписание занятий</h1>
            <LessonList/>
        </div>
    );
}

export default LessonPage;
import React from 'react';
import style from "../leson.module.scss"
import LessonItem, {ILessonItem} from "./LessonItem";
function LessonList() {
    const data: ILessonItem[] = [
        {id:1, day:"05", month:"Август", title:"All super lesson ", isActive:true},
        {id:2, day:"06", month:"Август", title:"All super lesson" , isActive:false},
        {id:3, day:"07", month:"Август", title:"All super lesson" , isActive:false},
        {id:4, day:"08", month:"Август", title:"All super lesson ", isActive:false},

    ]
    return (
        <div className={style.lesson_list}>
            {data.map(item=>
                <LessonItem key={item.id} {...item}/>
            )}
        </div>
    );
}

export default LessonList;
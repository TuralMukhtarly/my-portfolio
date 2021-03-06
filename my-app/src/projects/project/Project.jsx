import React from 'react'
import style from './Project.module.css'

function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.img}>
                <a href="#" className={style.button}>Смотреть</a>
            </div>
            <div>{props.name}</div>
            <div>{props.description}</div>
        </div>
    )
}

export default Project

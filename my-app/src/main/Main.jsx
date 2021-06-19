import React from 'react'
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>

                <div className={style.text}>
                    <h1>Hello, I'm Tural Mukhtarly</h1>
                    <h3>Front-End Developer</h3>
                </div>

                <div className={style.photo}>

                </div>
            </div>
        </div>
    )
}

export default Main
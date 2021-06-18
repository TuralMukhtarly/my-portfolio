import React from 'react'
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Nav from '../nav/Nav'

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.photo}>

                </div>
                <div className={style.text}>
                    <h1>I'AM TURAL MUKHTARLY</h1>
                    <h2>FrontEnd Developer</h2>
                    <p>I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                    <button className={style.btn}>MORE ABOUT ME</button>
                </div>

                <Nav />
            </div>
        </div>
    )
}

export default Main

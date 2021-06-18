import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Nav.module.css'

function Nav() {
    return (
        <div className={style.nav}>
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/skill">Скиллы</NavLink>
            <NavLink to="#">Проекты</NavLink>
            <NavLink to="#">Контакты</NavLink>
        </div>
    )
}

export default Nav

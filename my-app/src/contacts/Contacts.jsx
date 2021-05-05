import React from 'react'
import styleContainer from '../common/styles/Container.module.css'
import style from './Contacts.module.css'

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.contacts}>
                   <input type="text"/>
                   <input type="text"/>
                   <textarea></textarea>
                </form>
                <a href="#" className={style.button}>Отправить</a>

            </div>
        </div>
    )
}

export default Contacts

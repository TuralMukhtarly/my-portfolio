import React from 'react'
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from './skill/Skill'

function Skills() {
    return (
        <div className={style.skillBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill 
                    title={"HTML"}
                    description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, ex!"}
                    />
                    <Skill 
                    title={"CSS"}
                    description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, ex!"}
                    />
                    <Skill 
                    title={"JAVASCRIPT"}
                    description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, ex!"}
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Skills

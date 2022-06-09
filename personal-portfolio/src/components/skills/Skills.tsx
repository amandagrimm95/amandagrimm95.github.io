import React from "react";
import './skills.css';
import './skills-mobile.css';
import { Skill } from './Skill';

export function Skills () {

    const skillsArray = ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'NodeJS', 'MySQL'];

    function renderSkills() {
        return skillsArray.map(x => {
            return <Skill name={x} key={x}/>
        })
    }


    return (
        <div id='skillsSection'>
            <h2>Skills</h2>
            <div id='skillsContainer'>
                {renderSkills()}
            </div>
        </div>
    )
}
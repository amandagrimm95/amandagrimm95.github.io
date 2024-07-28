import React from "react";
import './skills.css';
import './skills-mobile.css';
import { Skill } from './Skill';

export function Skills () {

    const skillsArray = ['Figma', 'React', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'NodeJS', 'MySQL', 'Ionic', 'Capacitor', 'Kajabi'];

    function renderSkills() {
        return skillsArray.map(x => {
            return <Skill name={x} key={x}/>
        })
    }


    return (
        <div id='skillsSection'>
            <h2 className="section-title">Skills & Technologies</h2>
            <div id='skillsContainer'>
                {renderSkills()}
            </div>
        </div>
    )
}
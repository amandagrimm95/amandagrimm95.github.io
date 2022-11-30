import React, { useState } from 'react';

export function Skill(props) {
    
    const [focus, setFocus] = useState(false);

    function focusSkill() {
        setFocus(true);
    }

    function unfocusSkill() {
        setFocus(false);
    }

    return (
        <div className={`skill${focus}`} onMouseEnter={focusSkill} onMouseLeave={unfocusSkill}>
            <img src={`./images/${props.name}.png`} alt=''/>
            <h3>{props.name}</h3>
        </div>
    )

}

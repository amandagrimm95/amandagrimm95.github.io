import React from 'react';
import { HeaderCanvas } from './HeaderCanvas';
import './header.css';
import './header-mobile.css';

export function Header() {

    return (
        <div id='header'>
            <HeaderCanvas className="headerCanvas"/>
            <div id='header-textbox'>
                <h1>Amanda Dunbar</h1>
                <h1>Full-Stack Engineer & Web Developer</h1>
            </div>
        </div>    
    )
}
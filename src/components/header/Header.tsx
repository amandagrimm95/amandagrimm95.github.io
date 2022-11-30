import React from 'react';
import { HeaderCanvas } from './HeaderCanvas';
import './header.css';
import './header-mobile.css';

export function Header() {

    return (
        <div id='header'>
            <HeaderCanvas className="headerCanvas"/>
            <h1>Amanda Dunbar<br/>Full-Stack Engineer & Web Developer</h1>
        </div>    
    )
}
import React, { useEffect, useState } from "react";
import './navBar.css';



export function NavBar (props) {

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    const [menuVis, setMenuVis] = useState(false);

    function handleClickOutside(e) {
        if (e.target.className !== 'header' && e.target.className !== 'skills' && e.target.className !== 'portfolio' && e.target.className !== 'contact' && e.target.id !== 'menuToggle' && menuVis) {
            toggleMenu()
        }
    }

    function toggleMenu() {
        setMenuVis(prev => !prev);
    }

    function navClick(e) {
        props.navHandler(e.target.className);
        toggleMenu();
    }

    function renderNavBar() {
        if (!menuVis) return;
        return (
            <div id='navList'>
                <ul id='navOptions'>
                    <li className="header" onClick={navClick}>Home</li>
                    <li className="skills" onClick={navClick}>Skills</li>
                    <li className="portfolio" onClick={navClick}>Portfolio </li>
                    <li className="contact" onClick={navClick}>Contact</li>
                </ul>
            </div>
        )
    }

    return (
        <div className='navBar'>
            <img src={(menuVis ? './images/menuClose.png' : './images/menuOpen.png')} alt='Menu Button' onClick={toggleMenu} id='menuToggle'/>
            {renderNavBar()}
        </div>
    )
}
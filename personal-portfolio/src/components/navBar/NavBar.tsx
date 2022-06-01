import React, { useEffect, useState } from "react";
import './navBar.css';



export function NavBar () {

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    const [menuVis, setMenuVis] = useState(false);

    function handleClickOutside(e) {
        if (e.target.id !== 'navOptions' && e.target.id !== 'menuToggle' && menuVis) {
            toggleMenu()
        }
    }

    function toggleMenu() {
        setMenuVis(prev => !prev);
    }

    function renderNavBar() {
        if (!menuVis) return;
        return (
            <div id='navList'>
                <ul id='navOptions'>
                    <li>Home</li>
                    <li>Skills</li>
                    <li>Portfolio </li>
                    <li>Contact</li>
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
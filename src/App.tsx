import React from 'react';
import { Header, NavBar, Skills, Portfolio, ContactForm } from 'components';

export function App() {

  function navScroll(section: string) {
    const element = document.getElementById(section);
    element.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className="App">
      <div id='header'/>
      <Header />
      <NavBar navHandler={navScroll}/>
      <img id='sectionBorder1' src='./images/sectionBorder.png' alt='Section Border'/>
      <div id='skills'/>
      <Skills />
      <img id='sectionBorder2'src='./images/sectionBorder.png' alt='Section Border'/>
      <div id='portfolio' />
      <Portfolio />
      <img id='sectionBorder3' src='./images/sectionBorder.png' alt='Section Border'/>
      <div id='contact' />
      <ContactForm />
    </div>
  );
}

 
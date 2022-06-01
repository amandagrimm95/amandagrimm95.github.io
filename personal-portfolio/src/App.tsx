import React from 'react';
import { Header, NavBar, Skills, Portfolio } from 'components';

export function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <img className='sectionBorder' src='./images/sectionBorder.png' alt='Section Border'/>
      <Skills />
      <img className='reverseSectionBorder'src='./images/sectionBorder.png' alt='Section Border'/>
      <Portfolio />
    </div>
  );
}

 
import React from 'react';
import components from './Hero.scss';

const Hero = () => (
  <header className={components.component}>
    <h2 className={components.title}>Things to do</h2>
    <img className={components.image} src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png" />
  </header>
);

export default Hero;

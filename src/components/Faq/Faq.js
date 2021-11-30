import React from 'react';
import Container from '../Container/Container';
import { faqPage } from '../../data/dataStore';
import Hero from '../Hero/Hero';

const FAQ = () => (
  <Container>
    <Hero
      titleText={faqPage.navTitle}
      imageHero={faqPage.image}
    />
    <p>{faqPage.content}</p>
  </Container>
);

export default FAQ;

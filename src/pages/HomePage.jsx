import React from 'react';
import Hero from 'components/Hero/Hero';
import Advantages from 'components/Advantages/Advantages';
import Motivation from 'components/Motivation/Motivation';
import OurWork from 'components/OurWork/OurWork';
import StayIn from 'components/StayIn/StayIn';

function HomePage() {
  return (
    <>
      <Hero />
      <Advantages />
      <Motivation />
      <OurWork />
      <StayIn />
    </>
  );
}

export default HomePage;

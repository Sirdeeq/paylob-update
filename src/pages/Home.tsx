import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import WhyPaylob from '../components/WhyPaylob';
import TrustedBy from '../components/TrustedBy';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Features />
      <WhyPaylob />
      <Partners />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;
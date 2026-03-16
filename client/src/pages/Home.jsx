import React from 'react';
import Hero from '../components/hero/Hero';
import HowItWorks from '../components/sections/HowItWorks';
import Gallery from '../components/gallery/Gallery';
import BackgroundAnimation from '../components/layout/BackgroundAnimation';

const Home = () => {
  return (
    <div className="relative w-full overflow-hidden text-white font-sans h-full min-h-screen">
      <BackgroundAnimation />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <Hero />
        <HowItWorks />
        <Gallery />
      </div>
    </div>
  );
};

export default Home;

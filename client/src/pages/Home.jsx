import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import VideoAbout from '../components/VideoAbout';
import WhatWeDo from '../components/WhatWeDo';
import ProductsCapabilities from '../components/ProductsCapabilities';
import OurClients from '../components/OurClients';
import ReachOut from '../components/ReachOut';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <VideoAbout />
      <WhatWeDo />
      <ProductsCapabilities />
      <OurClients />
      <ReachOut />
      <Footer />
    </div>
  );
};

export default Home;

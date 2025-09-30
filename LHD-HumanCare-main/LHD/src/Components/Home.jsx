import React from 'react';
import Hero from '../Pages/Hero';
import Page2 from '../Pages/Page2';
import Page3 from '../Pages/Page3';
import Metrics from '../Pages/Metrics';
import TopProducts from '../Pages/TopProducts';
import IndianMilkMap from './Map';
const Home = () => {
  return (
    <>
    <Hero/>
    <Metrics/>
    <IndianMilkMap/>
    <TopProducts/>
    <Page2/>
    <Page3/>
    </>
  );
};

export default Home;

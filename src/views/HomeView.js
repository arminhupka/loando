import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero/Hero';
import Steps from '../components/Steps/Steps';

const HomeView = () => (
  <MainLayout>
    <Hero />
    <Steps />
  </MainLayout>
);

export default HomeView;

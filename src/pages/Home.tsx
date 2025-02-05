import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Clients from '../components/Clients';
import Testimonials from '../components/Testimonials';


export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Clients />
      <Testimonials />
    </>
  );
}
import React from 'react';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import ServicesList from '../components/ServicesList';
import Portfolio from '../components/Portfolio';
import Showcase from '../components/Showcase';
import SocialProof from '../components/SocialProof';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <ServicesList />
      <Portfolio />
      <Showcase />
      <SocialProof />
      <CTA />
      <Footer />
    </main>
  );
}

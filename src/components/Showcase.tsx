'use client';

import React from 'react';
import MagicBento from './MagicBento';
import './Showcase.css';

const CDN_URL = process.env.NEXT_PUBLIC_CDN_URL || '';

const testimonials = [
  {
    id: 1,
    title: '500k+ Views & 1,000+ Joins',
    description: 'Massive player influx through short-form content.',
    label: 'Short-Form Growth',
    image: `${CDN_URL}/web assets/reviews/Screenshot 2026-05-29 125237.png`
  },
  {
    id: 2,
    title: 'Premium Editing',
    description: 'Consistent high-quality content delivery.',
    label: 'Video Production',
    image: `${CDN_URL}/web assets/reviews/Screenshot 2026-05-29 125326.png`
  },
  {
    id: 3,
    title: 'Highly Recommended',
    description: 'Professional and reasonable service.',
    label: 'Client Review',
    image: `${CDN_URL}/web assets/reviews/Screenshot 2026-05-29 125340.png`
  },
  {
    id: 4,
    title: 'Server Growth',
    description: 'Driving real player acquisition through content.',
    label: 'Player Acquisition',
    image: `${CDN_URL}/web assets/reviews/Screenshot 2026-05-29 125354.png`
  }
];

const MagicBentoComponent = MagicBento as any;

export default function Showcase() {
  return (
    <section className="showcase-section">
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        
        <MagicBentoComponent 
          cards={testimonials}
          textAutoHide={false}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={350}
          particleCount={15}
          glowColor="212, 175, 55" // Bronze to match the theme
        />
        
      </div>
    </section>
  );
}

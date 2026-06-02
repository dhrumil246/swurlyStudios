'use client';

import React from 'react';
import MagicRings from './MagicRings';
import SplitTextReveal from './SplitTextReveal';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-media-wrapper">
        <MagicRings 
          color="#d4af37"
          colorTwo="#b87333"
          ringCount={5}
          speed={0.4}
          blur={0.5}
          noiseAmount={0.02}
          followMouse={true}
          mouseInfluence={0.2}
          parallax={0.15}
          hoverScale={1.02}
          clickBurst={true}
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content brutalist-layout">
        
        {/* Massive Background Layer */}
        <div className="brutalist-bg-text">
          <SplitTextReveal text="SWURLY" className="hero-title-word word-1" delay={0.5} />
        </div>
        
        {/* Overlapping Foreground Layer */}
        <div className="brutalist-fg-layer">
          <div className="brutalist-subtext">
            <SplitTextReveal text="STUDIOS" className="hero-title-word word-2" delay={0.7} />
          </div>
          <p className="hero-tagline">
            Every Frame Earns Attention.<br />
            Helping creators and brands grow through content.
          </p>
        </div>

      </div>
    </section>
  );
}

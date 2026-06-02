'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './SocialProof.css';

gsap.registerPlugin(ScrollTrigger);

export default function SocialProof() {
  const container = useRef<HTMLDivElement>(null);
  
  // Refs for the numbers so GSAP can animate their textContent
  const count1 = useRef<HTMLSpanElement>(null);
  const count2 = useRef<HTMLSpanElement>(null);
  const count3 = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      }
    });

    // Fade in stats containers
    tl.fromTo('.stat-item', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: 'power2.out' }
    );

    // Number counting animations
    if (count1.current) {
      gsap.to(count1.current, {
        innerHTML: 374,
        duration: 2,
        ease: 'power3.out',
        snap: { innerHTML: 1 },
        scrollTrigger: { trigger: container.current, start: 'top 80%' }
      });
    }
    if (count2.current) {
      gsap.to(count2.current, {
        innerHTML: 10,
        duration: 2,
        ease: 'power3.out',
        snap: { innerHTML: 1 },
        scrollTrigger: { trigger: container.current, start: 'top 80%' }
      });
    }
    if (count3.current) {
      gsap.to(count3.current, {
        innerHTML: 40,
        duration: 2,
        ease: 'power3.out',
        snap: { innerHTML: 1 },
        scrollTrigger: { trigger: container.current, start: 'top 80%' }
      });
    }

  }, { scope: container });

  return (
    <section className="social-proof-section" ref={container}>
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <h3 className="stat-number"><span ref={count1}>0</span>+</h3>
            <p className="stat-label">Discord Members</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number"><span ref={count2}>0</span>M+</h3>
            <p className="stat-label">Views Generated</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number"><span ref={count3}>0</span>+</h3>
            <p className="stat-label">Servers Scaled</p>
          </div>
        </div>
      </div>
    </section>
  );
}

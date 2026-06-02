'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { SiDiscord, SiX, SiGithub } from 'react-icons/si';
import { siteConfig } from '@/config/site';
import './Footer.css';

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Create the "Curtain Reveal" parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // The footer slides up slightly slower than the user scrolls
  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 1]);

  return (
    <motion.footer 
      ref={containerRef} 
      className="agency-footer"
      style={{ y, opacity }}
    >
      <div className="footer-top">
        <div className="footer-links">
          <a href={siteConfig.links.discord} target="_blank" rel="noopener noreferrer" className="footer-link"><SiDiscord className="footer-icon"/> Discord</a>
          <a href="#" className="footer-link"><SiX className="footer-icon"/> Twitter</a>
          <a href="#" className="footer-link"><SiGithub className="footer-icon"/> GitHub</a>
        </div>
        <div className="footer-contact">
          <a href={`mailto:${siteConfig.links.email}`} className="email-link">{siteConfig.links.email}</a>
        </div>
      </div>

      <div className="footer-tagline-container">
        <p className="footer-tagline">Every Frame Earns Attention.</p>
      </div>

      <div className="footer-bottom">
        <h1 className="massive-text">SWURLY</h1>
        <div className="footer-meta">
          <span>© 2026 Swurly Studios</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </motion.footer>
  );
}

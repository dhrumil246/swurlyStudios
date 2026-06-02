'use client';

import React from 'react';
import ContactForm from './ContactForm';
import { SiDiscord, SiMaildotru } from 'react-icons/si'; // using maildotru as generic mail or FiMail
import { FiMail } from 'react-icons/fi';
import { siteConfig } from '@/config/site';
import './CTA.css';

export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-vignette"></div>
      <div className="container">
        
        <div className="cta-header">
          <h2 className="section-title text-center">Let's Build</h2>
          <p className="cta-subtitle">Ready to scale your empire? Drop into the studio.</p>
        </div>

        <div className="cta-bento-grid">
          
          {/* Main Form Box */}
          <div className="bento-card main-contact-card">
            <h3 className="bento-card-title">Send a Message</h3>
            <ContactForm />
          </div>

          {/* Side Column */}
          <div className="bento-side-column">
            
            {/* Discord Box */}
            <a href={siteConfig.links.discord} target="_blank" rel="noopener noreferrer" className="bento-card discord-card">
              <div className="discord-glow"></div>
              <SiDiscord className="bento-icon discord-icon" />
              <div className="bento-card-content">
                <h3 className="bento-card-title">Join the Discord</h3>
                <p className="bento-card-text">Connect directly with the community and team.</p>
              </div>
            </a>

            {/* Email Box */}
            <a href={`mailto:${siteConfig.links.email}`} className="bento-card email-card">
              <div className="email-glow"></div>
              <FiMail className="bento-icon email-icon" />
              <div className="bento-card-content">
                <h3 className="bento-card-title">Direct Email</h3>
                <p className="bento-card-text">{siteConfig.links.email}</p>
              </div>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

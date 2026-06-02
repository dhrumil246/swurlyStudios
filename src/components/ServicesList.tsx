'use client';

import React from 'react';
import { motion } from 'motion/react';
import { FiScissors, FiVideo, FiUsers } from 'react-icons/fi';
import './ServicesList.css';

const services = [
  {
    id: 1,
    title: 'Short-Form Strategy',
    description: 'A tailored content framework engineered to maximize reach, resonance, and measurable performance.',
    icon: <FiScissors />
  },
  {
    id: 2,
    title: 'UGC Production',
    description: 'Authentic, high-impact UGC crafted in-house for consistent voice, trust, and conversion.',
    icon: <FiVideo />
  },
  {
    id: 3,
    title: 'Creator Management',
    description: 'End-to-end coordination of creators to ensure scalable production, brand alignment, and predictable performance.',
    icon: <FiUsers />
  }
];

export default function ServicesList() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Our Services
        </motion.h2>
        
        <div className="services-stack">
          {services.map((s, index) => (
            <motion.div 
              key={s.id} 
              className="service-row-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="service-icon-wrapper">
                {s.icon}
              </div>
              <div className="service-info">
                <h3 className="service-title"><em>{s.title}</em></h3>
                <p className="service-description">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

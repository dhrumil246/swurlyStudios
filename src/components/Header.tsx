'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo-placeholder"></div>
        <nav className="main-nav">
          <Link href="#services" className="nav-link">Services</Link>
          <Link href="#portfolio" className="nav-link">Portfolio</Link>
          <Link href="#contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

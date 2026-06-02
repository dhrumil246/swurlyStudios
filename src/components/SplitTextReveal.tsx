'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface SplitTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function SplitTextReveal({ text, className = '', delay = 0 }: SplitTextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  
  // Split the text into characters
  const characters = text.split('');

  return (
    <span ref={ref} className={className} style={{ display: 'inline-block', overflow: 'visible' }}>
      {characters.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ opacity: 0, y: 50, rotateX: -90, filter: 'blur(10px)' }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' } : {}}
          transition={{
            duration: 0.8,
            delay: delay + (i * 0.03),
            ease: [0.215, 0.61, 0.355, 1.0], // custom ease similar to ReactBits
          }}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

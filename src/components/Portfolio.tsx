'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import Image from 'next/image';
import './Portfolio.css';

const portfolioData = [
  {
    id: 'theminecart',
    title: 'TheMineCart',
    description: 'TheMineCart is an innovative Minecraft Earth SMP network focused on immersive worldbuilding, geopolitics, and large-scale community interaction. Through strategic short-form content campaigns, TheMineCart rapidly expanded its reach across social platforms, building a highly engaged global playerbase and establishing itself as one of the fastest-growing Earth SMP communities in the space.',
    views: '7M+',
    conversions: '50K+',
    images: [
      '/web assets/earthsmp/earthsmp1.webp',
      '/web assets/earthsmp/esvideo1.mp4',
      '/web assets/earthsmp/esvideo2.mp4',
      '/web assets/earthsmp/earthsmp2.webp'
    ],
    align: 'left' // Image left, Text right
  },
  {
    id: 'boxmc',
    title: 'BoxMC',
    description: 'BoxMC is a unique Minecraft Box SMP server where players begin within a limited boxed area and progressively expand through grinding, PvP, upgrades, and unlocking new zones. Its fast-paced gameplay loop and competitive progression system helped build a highly active community through engaging short-form content and viral gameplay moments.',
    views: '1M+',
    conversions: '15K+',
    images: [
      '/web assets/boxmc/boxmc1.png',
      '/web assets/boxmc/bmvid1.mp4',
      '/web assets/boxmc/bmvid2.mp4',
      '/web assets/boxmc/boxmc2.png'
    ],
    align: 'right' // Text left, Image right
  },
  {
    id: 'nitromc',
    title: 'NitroMC',
    description: 'NitroMC is a competitive Minecraft Lifesteal server where every fight matters. Players steal hearts from their opponents, build powerful bases, form alliances, raid enemy factions, and battle for dominance in a constantly evolving world. With an active community, intense PvP, and high-stakes gameplay, NitroMC delivers the classic Lifesteal experience focused on progression, strategy, and survival.',
    views: '500K+',
    conversions: '20K+',
    images: [
      '/web assets/nitromc/nitromc1.png',
      '/web assets/nitromc/nmvid1.mp4',
      '/web assets/nitromc/nmvid2.mp4',
      '/web assets/nitromc/nitromc2.png'
    ],
    align: 'left'
  }
];

const VideoPlayer = ({ src, isInView }: { src: string, isInView: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isInView) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <video 
      ref={videoRef}
      src={src} 
      loop 
      muted 
      playsInline 
    />
  );
};

const PortfolioItem = ({ data }: { data: any }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "200px 0px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax the collage as we scroll past
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  const TextContent = () => (
    <div className="portfolio-text">
      <h3 className="portfolio-title"><em>{data.title}</em></h3>
      <p className="portfolio-description">{data.description}</p>
      
      <div className="portfolio-stats">
        <p className="stat-editorial">
          Generated <span className="stat-value">{data.views}</span> views and driven over <span className="stat-value">{data.conversions}</span> conversions for this project.
        </p>
      </div>
    </div>
  );

  const CollageContent = () => (
    <motion.div 
      className="portfolio-collage-wrapper"
      style={{ y }}
    >
      <motion.div className="portfolio-collage" style={{ rotate }}>
        {data.images.map((img: string, i: number) => (
          <div key={img} className={`collage-img-container img-${i} item-${data.id}-${i}`}>
            {img.endsWith('.mp4') ? (
              <VideoPlayer src={img} isInView={isInView} />
            ) : (
              <Image src={img} alt={`${data.title} preview ${i+1}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
            )}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <div ref={containerRef} className={`portfolio-row align-${data.align}`}>
      {data.align === 'left' ? (
        <>
          <CollageContent />
          <TextContent />
        </>
      ) : (
        <>
          <TextContent />
          <CollageContent />
        </>
      )}
    </div>
  );
};

export default function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <h2 className="section-title text-center">Portfolio</h2>
        <div className="portfolio-list">
          {portfolioData.map(item => (
            <PortfolioItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

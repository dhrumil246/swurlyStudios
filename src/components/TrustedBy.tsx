'use client';
import React from 'react';
import LogoLoop from './LogoLoop';

const serverLogos = [
  { src: "/web assets/server logo/fadecloud.webp", alt: "FadeCloud", href: "#" },
  { src: "/web assets/server logo/vale.webp", alt: "Vale", href: "#" },
  { src: "/web assets/server logo/talon.webp", alt: "Talon", href: "#" },
  { src: "/web assets/server logo/snailcraft.webp", alt: "Snailcraft", href: "#" },
  { src: "/web assets/server logo/frootly.webp", alt: "Frootly", href: "#" },
  { src: "/web assets/server logo/fruitblockicon.webp", alt: "Fruitblock", href: "#" },
  { src: "/web assets/server logo/crystalchaos.webp", alt: "Crystal Chaos", href: "#" },
  { src: "/web assets/server logo/nitro.webp", alt: "Nitro", href: "#" },
  { src: "/web assets/server logo/blitz.webp", alt: "Blitz", href: "#" },
  { src: "/web assets/server logo/box.webp", alt: "Box", href: "#" },
  { src: "/web assets/server logo/banana.webp", alt: "Banana", href: "#" },
  { src: "/web assets/server logo/minepiece.webp", alt: "Minepiece", href: "#" },
  { src: "/web assets/server logo/hap.webp", alt: "Hap", href: "#" },
];

const LogoLoopComponent = LogoLoop as any;

export default function TrustedBy() {
  return (
    <section className="trusted-by-section" style={{ padding: '4vw 0', backgroundColor: 'var(--bg-color)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container" style={{ marginBottom: '2rem' }}>
        <p style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', textAlign: 'center' }}>
          Servers we've built for
        </p>
      </div>
      <div style={{ height: '80px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <LogoLoopComponent
          logos={serverLogos}
          speed={40}
          direction="left"
          logoHeight={32}
          gap={80}
          hoverSpeed={10}
          scaleOnHover={true}
          fadeOut={true}
        />
      </div>
    </section>
  );
}

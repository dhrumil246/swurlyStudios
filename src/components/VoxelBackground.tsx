'use client';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function VoxelBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!mountRef.current) return;

    // 1. Setup Three.js Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050301, 0.012);

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 30);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // Important for modern, vibrant lighting
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mountRef.current.appendChild(renderer.domElement);

    // 2. Cinematic Lighting
    // Base ambient light (warm dark brown)
    const ambientLight = new THREE.AmbientLight(0x2a1610, 1.5); 
    scene.add(ambientLight);

    // Intense Rim Light (Bright Gold/Bronze) from Top-Right
    const rimLight = new THREE.DirectionalLight(0xffd700, 8.0);
    rimLight.position.set(20, 20, -5);
    scene.add(rimLight);

    // Soft Fill Light (Deep Copper/Orange) from Bottom-Left
    const fillLight = new THREE.PointLight(0xff5500, 15.0, 100);
    fillLight.position.set(-20, -20, 15);
    scene.add(fillLight);

    // Subtle front light to reveal some surface detail
    const frontLight = new THREE.DirectionalLight(0x8b4513, 2.0);
    frontLight.position.set(0, 0, 20);
    scene.add(frontLight);

    // 3. Create Celestial Orbs
    const orbs: THREE.Mesh[] = [];
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    
    // Rich, matte metallic material that catches rim lights beautifully
    const material = new THREE.MeshStandardMaterial({
      color: 0x1a0f0a,
      emissive: 0x050301,
      roughness: 0.6,
      metalness: 0.5,
    });

    const orbData = [
      { radius: 14, pos: [-18, 12, -25], rotSpeed: 0.001 },
      { radius: 9, pos: [20, -10, -15], rotSpeed: -0.002 },
      { radius: 4.5, pos: [-6, -16, 5], rotSpeed: 0.003 },
      { radius: 30, pos: [35, 25, -45], rotSpeed: 0.0005 },
    ];

    orbData.forEach((data) => {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(data.radius, data.radius, data.radius);
      mesh.position.set(...data.pos as [number, number, number]);
      scene.add(mesh);
      orbs.push(mesh);
      
      // Crisp, glowing orbital rings
      const ringGeo = new THREE.TorusGeometry(data.radius * 1.35, 0.04, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({ 
        color: 0xffaa00, 
        transparent: true, 
        opacity: 0.35,
        blending: THREE.AdditiveBlending 
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2.2;
      ring.rotation.y = Math.PI / 8;
      mesh.add(ring);
    });

    // 4. Large Background Orbital Lines
    const bgRings: THREE.Mesh[] = [];
    for(let i=0; i<4; i++) {
      const ringGeo = new THREE.TorusGeometry(35 + i*18, 0.05, 16, 128);
      const ringMat = new THREE.MeshBasicMaterial({ 
        color: 0xff8800, 
        transparent: true, 
        opacity: 0.15,
        blending: THREE.AdditiveBlending 
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.set(0,0,-60);
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      scene.add(ring);
      bgRings.push(ring);
    }

    // 5. Starfield Dust (The "Speckles")
    const starsGeo = new THREE.BufferGeometry();
    const starsCount = 800;
    const posArray = new Float32Array(starsCount * 3);
    for(let i = 0; i < starsCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 150;
    }
    starsGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const starsMat = new THREE.PointsMaterial({
      size: 0.15,
      color: 0xffd700,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const starMesh = new THREE.Points(starsGeo, starsMat);
    scene.add(starMesh);

    // 6. GSAP Scroll Choreography
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
      }
    });

    orbs.forEach((mesh, i) => {
      tl.to(mesh.position, {
        y: mesh.position.y + (i % 2 === 0 ? 20 : -20),
        z: mesh.position.z + 15,
        ease: 'none',
      }, 0);
    });

    bgRings.forEach((ring) => {
      tl.to(ring.rotation, {
        x: ring.rotation.x + Math.PI / 4,
        y: ring.rotation.y + Math.PI / 4,
        ease: 'none',
      }, 0);
    });

    tl.to(starMesh.rotation, {
      y: Math.PI / 6,
      ease: 'none'
    }, 0);

    // 7. Mouse Parallax Setup
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) * 0.001;
      mouseY = (event.clientY - windowHalfY) * 0.001;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 8. Render Loop
    let animationFrameId: number;
    const render = () => {
      targetX = mouseX * 2;
      targetY = mouseY * 2;
      
      scene.rotation.x += 0.02 * (targetY - scene.rotation.x);
      scene.rotation.y += 0.02 * (targetX - scene.rotation.y);

      orbs.forEach((mesh, i) => {
        mesh.rotation.y += orbData[i].rotSpeed;
      });

      bgRings.forEach((ring) => {
        ring.rotation.z += 0.0005;
      });

      starMesh.rotation.x += 0.0002;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    // 9. Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      starsGeo.dispose();
      starsMat.dispose();
      renderer.dispose();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: mountRef });

  return (
    <div 
      ref={mountRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}

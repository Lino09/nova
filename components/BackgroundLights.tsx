'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const colors = ['#00F5D4', '#FFD700', '#00A3FF']; // tqs, ylw, ble

export default function BackgroundLights() {
  const lightRefs = useRef<HTMLDivElement[]>([]);
  const [positions, setPositions] = useState<{ top: string; left: string }[]>(
    []
  );

  // Generate positions only on the client to avoid hydration errors
  useEffect(() => {
    setPositions(
      Array.from({ length: 3 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }))
    );
  }, []);

  // Animate lights (random movement and color switching)
  useEffect(() => {
    lightRefs.current.forEach((light, i) => {
      if (!light) return;

      gsap.to(light, {
        x: () => Math.random() * 200 - 100,
        y: () => Math.random() * 200 - 100,
        scale: () => Math.random() * 1.2 + 0.8,
        opacity: () => Math.random() * 0.3 + 0.2,
        duration: 5 + Math.random() * 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Color cycling animation
      gsap.to(light, {
        backgroundColor: () => colors[i % colors.length], // Cycle through the colors
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });
  }, [positions]);

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-20 -z-10 pointer-events-none"></div>
      <div className="fixed inset-0 -z-20 pointer-events-none">
        {positions.length > 0 &&
          positions.map((pos, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) lightRefs.current[i] = el;
              }}
              className="absolute w-72 h-72 rounded-full filter blur-3xl"
              style={{
                background: colors[i % colors.length], // Initial color
                top: pos.top,
                left: pos.left,
              }}
            />
          ))}
      </div>
    </>
  );
}

import { useCallback, useEffect, useState } from 'react';
import { HiOutlineSparkles } from 'react-icons/hi2';
import { FaHeart } from 'react-icons/fa';
import { Particle } from './styled';

const ICONS = [
  { type: 'sparkle' as const, Component: HiOutlineSparkles },
  { type: 'heart' as const, Component: FaHeart },
];

const THROTTLE_MS = 80;
const MAX_PARTICLES = 25;
const PARTICLE_LIFETIME = 1200;

type CursorParticle = {
  id: number;
  x: number;
  y: number;
  createdAt: number;
  icon: 'sparkle' | 'heart';
};

export const CursorEffects = () => {
  const [particles, setParticles] = useState<CursorParticle[]>([]);
  const lastSpawnRef = { current: 0 };
  const idRef = { current: 0 };

  const spawnParticle = useCallback((clientX: number, clientY: number) => {
    const now = Date.now();
    if (now - lastSpawnRef.current < THROTTLE_MS) return;

    lastSpawnRef.current = now;
    idRef.current += 1;

    const icon = ICONS[Math.floor(Math.random() * ICONS.length)];

    setParticles((prev) => {
      const next = [
        ...prev.filter((p) => now - p.createdAt < PARTICLE_LIFETIME),
        {
          id: idRef.current,
          x: clientX + (Math.random() - 0.5) * 30,
          y: clientY + (Math.random() - 0.5) * 30,
          createdAt: now,
          icon: icon.type,
        },
      ];
      return next.slice(-MAX_PARTICLES);
    });
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      spawnParticle(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, [spawnParticle]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setParticles((prev) =>
        prev.filter((p) => now - p.createdAt < PARTICLE_LIFETIME)
      );
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {particles.map((p) => {
        const { Component } = ICONS.find((i) => i.type === p.icon) ?? ICONS[0];
        return (
          <Particle
            key={p.id}
            $x={p.x}
            $y={p.y}
            $delay={Math.random() * 100}
          >
            <Component />
          </Particle>
        );
      })}
    </>
  );
};

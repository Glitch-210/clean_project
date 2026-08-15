'use client';
import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Detect desktop fine pointer (mouse/trackpad vs touch screen)
    const finePointer = typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!finePointer || prefersReducedMotion) {
      return;
    }

    setIsFinePointer(true);

    let animId;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let isHoveringInteractive = false;
    let hasMoved = false;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!hasMoved) {
        currentX = e.clientX;
        currentY = e.clientY;
        hasMoved = true;
      }

      // Fast direct DOM target check without React state re-renders
      const target = e.target;
      if (target) {
        const isInteractive =
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.closest('a') ||
          target.closest('button') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('wa-btn') ||
          target.classList.contains('nav-hamburger');

        isHoveringInteractive = Boolean(isInteractive);
      }
    };

    const animate = () => {
      // Ultra-snappy lerp (0.8) for instant 60fps/144fps zero-lag tracking
      currentX += (targetX - currentX) * 0.8;
      currentY += (targetY - currentY) * 0.8;

      if (cursorRef.current && hasMoved) {
        const scaleVal = isHoveringInteractive ? 1.45 : 1;
        cursorRef.current.style.transform = `translate3d(${(currentX - 9).toFixed(1)}px, ${(currentY - 9).toFixed(1)}px, 0) scale(${scaleVal})`;

        if (isHoveringInteractive) {
          cursorRef.current.style.boxShadow = '0 0 24px rgba(62, 124, 184, 0.95), 0 0 10px rgba(255, 255, 255, 0.7), inset 0 0 6px rgba(255, 255, 255, 0.4)';
        } else {
          cursorRef.current.style.boxShadow = '0 0 16px rgba(62, 124, 184, 0.8), 0 0 6px rgba(255, 255, 255, 0.5), inset 0 0 4px rgba(255, 255, 255, 0.3)';
        }
      }
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []); // Empty dependency array prevents listener teardowns and re-renders

  if (!isFinePointer) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="global-custom-cursor"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: '#3E7CB8',
          border: '1.5px solid rgba(255, 255, 255, 0.85)',
          boxShadow: '0 0 16px rgba(62, 124, 184, 0.8), 0 0 6px rgba(255, 255, 255, 0.5), inset 0 0 4px rgba(255, 255, 255, 0.3)',
          transition: 'transform 0.12s ease-out, box-shadow 0.15s ease-out',
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
        }}
      />
      <style jsx global>{`
        @media (pointer: fine) {
          html, body, a, button, input, textarea, select {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}


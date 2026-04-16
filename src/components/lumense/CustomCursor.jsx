import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only show on devices with fine pointer
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    document.body.classList.add('custom-cursor-active');
    setIsVisible(true);

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          setPosition({ x: mouseRef.current.x, y: mouseRef.current.y });
          rafRef.current = null;
        });
      }
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], [data-clickable]')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, [role="button"], [data-clickable]')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-stellar rounded-full pointer-events-none z-[9999]"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] border"
        animate={{
          x: position.x - (isHovering ? 8 : 20),
          y: position.y - (isHovering ? 8 : 20),
          width: isHovering ? 16 : 40,
          height: isHovering ? 16 : 40,
          borderColor: isHovering ? 'rgba(245,245,247,0.8)' : 'rgba(245,245,247,0.15)',
          borderWidth: isHovering ? '2px' : '1px',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.8 }}
      />
    </>
  );
}
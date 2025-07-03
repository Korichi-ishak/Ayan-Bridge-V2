import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

interface MagneticLinkProps extends LinkProps {
  children: React.ReactNode;
}

const MagneticLink: React.FC<MagneticLinkProps> = ({ children, ...props }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: 'relative' }}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 350, damping: 5, mass: 0.8 }}
    >
      <Link ref={ref} onMouseMove={handleMouse} onMouseLeave={reset} {...props}>
        {children}
      </Link>
    </motion.div>
  );
};

export default MagneticLink; 
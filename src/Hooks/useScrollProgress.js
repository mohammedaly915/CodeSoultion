import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const useScrollProgress = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  return { scrollYProgress, ref };
};
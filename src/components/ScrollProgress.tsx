import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-primary-500 via-purple-500 to-secondary-500 z-[100] origin-[0%]"
      style={{ scaleX }}
    />
  );
};

import React from "react";
import { motion } from "framer-motion";

interface AnimationContainerProps {
  children: React.ReactNode;
  delay?: number;
  reverse?: boolean;
  className?: string;
}

export const AnimationContainer: React.FC<AnimationContainerProps> = ({
  children,
  className,
  reverse,
  delay = 0,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reverse ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationContainer;

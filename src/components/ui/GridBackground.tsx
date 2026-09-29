import React from "react";
import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export const GridBackground: React.FC<GridBackgroundProps> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("relative w-full bg-white", className)}>
      {/* Elegant Architectural Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)] opacity-80"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 10%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 10%, black 40%, transparent 100%)",
        }}
      />

      {/* Subtle Ambient Glow Circles for high-end feel */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-purple-100/70 via-indigo-50/40 to-transparent blur-3xl opacity-70 -z-10" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GridBackground;

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const MagicCard: React.FC<MagicCardProps> = ({
  children,
  className,
  glowColor = "rgba(147,51,234,0.08)",
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-purple-300/80 hover:shadow-lg hover:shadow-purple-500/5",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 65%)`,
        }}
      />
      {children}
    </div>
  );
};

export default MagicCard;

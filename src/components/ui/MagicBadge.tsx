import React from "react";
import { cn } from "@/lib/utils";

interface MagicBadgeProps {
  title: string;
  className?: string;
}

export const MagicBadge: React.FC<MagicBadgeProps> = ({ title, className }) => {
  return (
    <div
      className={cn(
        "relative inline-flex h-8 overflow-hidden rounded-full p-[1.5px] focus:outline-none select-none shadow-sm",
        className
      )}
    >
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2563eb_0%,#38bdf8_50%,#2563eb_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-4 py-1 text-xs md:text-sm font-medium text-neutral-800 backdrop-blur-3xl border border-neutral-100">
        {title}
      </span>
    </div>
  );
};

export default MagicBadge;

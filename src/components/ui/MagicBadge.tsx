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
        "inline-flex items-center justify-center rounded-full bg-violet-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-700 border border-violet-200/80 shadow-xs",
        className
      )}
    >
      {title}
    </div>
  );
};

export default MagicBadge;

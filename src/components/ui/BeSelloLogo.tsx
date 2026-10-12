import React from "react";
import { cn } from "@/lib/utils";

interface BeSelloLogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg";
  dark?: boolean;
}

export const BeSelloIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <div
    className={cn(
      "relative rounded-xl overflow-hidden shadow-sm flex items-center justify-center shrink-0 aspect-square",
      className
    )}
    style={{
      background: "linear-gradient(135deg, #00C4FF 0%, #7C3AED 50%, #EC4899 100%)",
    }}
  >
    <svg
      viewBox="0 0 36 36"
      className="w-full h-full p-1.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dark Check in the back (offset to the right) */}
      <path
        d="M17 19.5L22 24.5L30.5 14"
        stroke="#111122"
        strokeWidth="3.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Pure White Check in the front */}
      <path
        d="M8.5 19.5L14.5 25.5L25 13"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export const BeSelloLogo: React.FC<BeSelloLogoProps> = ({
  className,
  iconOnly = false,
  size = "md",
  dark = false,
}) => {
  const iconSize =
    size === "sm" ? "w-7 h-7" : size === "lg" ? "w-11 h-11" : "w-8 h-8";
  const textSize =
    size === "sm" ? "text-lg" : size === "lg" ? "text-3xl" : "text-xl";

  return (
    <div className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <BeSelloIcon className={iconSize} />

      {!iconOnly && (
        <span
          className={cn(
            "font-heading font-extrabold tracking-tight flex items-center",
            textSize,
            dark ? "text-white" : "text-neutral-900"
          )}
          style={{ letterSpacing: "-0.03em" }}
        >
          <span>bese</span>
          {/* The two 'll' are two stylized colored checks as shown in the brand manual */}
          <span className="inline-flex items-center -mx-[0.5px]">
            <svg
              viewBox="0 0 14 24"
              className="w-[11px] h-[19px] -mr-[3px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 13L5.5 17L12 4"
                stroke="#00C4FF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              viewBox="0 0 14 24"
              className="w-[11px] h-[19px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 13L5.5 17L12 4"
                stroke="#EC4899"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>o</span>
        </span>
      )}
    </div>
  );
};

export default BeSelloLogo;

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ZapIcon } from "lucide-react";
import MaxWidthWrapper from "../global/MaxWidthWrapper";
import AnimationContainer from "../global/AnimationContainer";

export const FlowLogo = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn("w-6 h-6", className)}
  >
    <path
      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const Navbar = ({ onOpenAuth }: { onOpenAuth?: () => void }) => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 8) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 inset-x-0 h-16 w-full border-b border-transparent z-[99999] select-none transition-all duration-200",
        scroll
          ? "border-neutral-200/80 bg-white/85 backdrop-blur-md shadow-xs"
          : "bg-white/40 backdrop-blur-xs"
      )}
    >
      <AnimationContainer reverse delay={0.1} className="size-full">
        <MaxWidthWrapper className="flex items-center justify-between h-full">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-x-2.5 group">
            <div className="h-8 w-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
              <FlowLogo className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-neutral-900 tracking-tight font-heading">
              Flow
            </span>
          </a>

          {/* Clean Action Buttons: Iniciar Sesión & Get Started */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenAuth}
              className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100/80 rounded-xl transition-colors cursor-pointer"
            >
              Iniciar Sesión
            </button>
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-blue-600/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              <span>Get Started</span>
              <ZapIcon className="size-3.5 text-blue-200 fill-blue-200" />
            </button>
          </div>
        </MaxWidthWrapper>
      </AnimationContainer>
    </header>
  );
};

export default Navbar;

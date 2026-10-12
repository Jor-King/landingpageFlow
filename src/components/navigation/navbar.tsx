import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ZapIcon } from "lucide-react";
import MaxWidthWrapper from "../global/MaxWidthWrapper";
import AnimationContainer from "../global/AnimationContainer";
import { BeSelloLogo, BeSelloIcon } from "../ui/BeSelloLogo";

export { BeSelloLogo, BeSelloIcon };

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
          <a href="#home" className="flex items-center gap-x-2 group">
            <BeSelloLogo size="md" />
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
              className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-[#00C4FF] via-[#7C3AED] to-[#EC4899] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md shadow-[#7C3AED]/25 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              <span>Empezar gratis</span>
              <ZapIcon className="size-3.5 text-white fill-white" />
            </button>
          </div>
        </MaxWidthWrapper>
      </AnimationContainer>
    </header>
  );
};

export default Navbar;

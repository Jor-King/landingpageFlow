import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import BorderBeam from "./BorderBeam";
import { Play, X } from "lucide-react";

interface HeroVideoPlayerProps {
  className?: string;
}

export const HeroVideoPlayer: React.FC<HeroVideoPlayerProps> = ({ className }) => {
  const inlineContainerRef = useRef<HTMLDivElement>(null);
  const inlineVideoRef = useRef<HTMLVideoElement>(null);
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Custom Cursor States
  const [isHoveringInline, setIsHoveringInline] = useState(false);
  const [inlineCursorPos, setInlineCursorPos] = useState({ x: 0, y: 0 });
  const [fsCursorPos, setFsCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const openFullscreen = () => {
    const inlineVid = inlineVideoRef.current;
    const currentTime = inlineVid ? inlineVid.currentTime : 0;

    setIsExpanded(true);
    setIsHoveringInline(false);

    // Sync time to fullscreen video and unmute
    setTimeout(() => {
      const fsVid = fullscreenVideoRef.current;
      if (fsVid) {
        fsVid.currentTime = currentTime;
        fsVid.muted = false;
        fsVid.volume = 1.0;
        fsVid.play().catch(() => {});
      }
    }, 15);
  };

  const closeFullscreen = () => {
    const fsVid = fullscreenVideoRef.current;
    const currentTime = fsVid ? fsVid.currentTime : 0;

    setIsExpanded(false);

    // Sync time back to inline video and mute
    const inlineVid = inlineVideoRef.current;
    if (inlineVid) {
      inlineVid.currentTime = currentTime;
      inlineVid.muted = true;
      inlineVid.play().catch(() => {});
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isExpanded) {
        closeFullscreen();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isExpanded]);

  // Lock body and html scroll when expanded
  useEffect(() => {
    if (isExpanded) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [isExpanded]);

  return (
    <>
      {/* Inline Hero Video Card */}
      <div
        ref={inlineContainerRef}
        onClick={openFullscreen}
        onMouseEnter={(e) => {
          setIsHoveringInline(true);
          setInlineCursorPos({ x: e.clientX, y: e.clientY });
        }}
        onMouseMove={(e) => {
          setInlineCursorPos({ x: e.clientX, y: e.clientY });
        }}
        onMouseLeave={() => {
          setIsHoveringInline(false);
        }}
        className={cn(
          "group relative w-full aspect-[1728/988] overflow-hidden rounded-xl lg:rounded-2xl bg-white border border-neutral-200/90 shadow-xl shadow-neutral-900/5 select-none cursor-none",
          className
        )}
      >
        <div className="relative w-full h-full overflow-hidden bg-white">
          <BorderBeam
            size={280}
            duration={12}
            delay={9}
            colorFrom="#2563eb"
            colorTo="#06b6d4"
          />

          <video
            ref={inlineVideoRef}
            src="/assets/dashboard-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            className="w-full h-full object-cover block bg-neutral-950"
          />
        </div>
      </div>

      {/* Floating Custom "Play" Cursor for Inline Video */}
      {isHoveringInline && !isExpanded && (
        <div
          className="pointer-events-none fixed z-[999999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full bg-blue-600 text-white font-semibold text-xs shadow-2xl shadow-blue-600/50 backdrop-blur-md border border-white/20 select-none animate-in zoom-in-75 duration-100"
          style={{
            left: `${inlineCursorPos.x}px`,
            top: `${inlineCursorPos.y}px`,
          }}
        >
          <Play className="w-3.5 h-3.5 fill-white shrink-0" />
          <span>Reproducir</span>
        </div>
      )}

      {/* Fullscreen Video Portal: True 100vw/100vh with object-contain (NO cropping) and Custom 'X' Mouse Cursor */}
      {isExpanded && mounted &&
        createPortal(
          <div
            onClick={closeFullscreen}
            onMouseMove={(e) => {
              setFsCursorPos({ x: e.clientX, y: e.clientY });
            }}
            className="fixed inset-0 z-[99999999] w-screen h-screen bg-black overflow-hidden flex items-center justify-center select-none cursor-none m-0 p-0"
            style={{ width: "100vw", height: "100vh" }}
          >
            {/* The Video: object-contain fits the entire video without cutting or cropping */}
            <video
              ref={fullscreenVideoRef}
              src="/assets/dashboard-video.mp4"
              autoPlay
              loop
              playsInline
              controls={false}
              className="w-full h-full max-w-full max-h-full object-contain block bg-black"
            />

            {/* Custom Mouse Cursor is the 'X' Button that follows the cursor anywhere */}
            <div
              className="pointer-events-none fixed z-[100000000] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/90 text-white font-semibold text-xs border border-white/25 shadow-2xl backdrop-blur-xl select-none"
              style={{
                left: `${fsCursorPos.x}px`,
                top: `${fsCursorPos.y}px`,
              }}
            >
              <X className="w-4 h-4 stroke-[3] text-white shrink-0" />
              <span>Cerrar</span>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default HeroVideoPlayer;

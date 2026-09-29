import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import AnimatedBeam from "@/components/ui/AnimatedBeam";
import { CalendarDays } from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(function Circle({ className, children }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-200/90 bg-white p-2.5 shadow-[0_4px_14px_rgba(0,0,0,0.06)] hover:scale-110 transition-transform cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
});

export function Integrations({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const divCenterRef = useRef<HTMLDivElement>(null);
  const divAgencyRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-xl border border-neutral-200/80 bg-neutral-50/50 p-10",
        className
      )}
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
        {/* Left: Agency Manager */}
        <div className="flex flex-col justify-center">
          <Circle ref={divAgencyRef} className="h-14 w-14 border-2 border-blue-500 bg-blue-50">
            <CalendarDays className="w-6 h-6 text-blue-600" />
          </Circle>
        </div>

        {/* Center: Flow Calendar Hub */}
        <div className="flex flex-col justify-center">
          <Circle
            ref={divCenterRef}
            className="h-16 w-16 border-2 border-blue-600 bg-blue-600 text-white shadow-[0_0_30px_rgba(37,99,235,0.35)]"
          >
            <span className="text-xl font-bold font-heading">F</span>
          </Circle>
        </div>

        {/* Right: The 6 Social Networks */}
        <div className="flex flex-col justify-center gap-2">
          {/* Instagram */}
          <Circle ref={div1Ref}>
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <defs>
                <radialGradient id="igG" cx="20%" cy="100%" r="130%">
                  <stop offset="0%" stopColor="#FFDD55" />
                  <stop offset="30%" stopColor="#FF543E" />
                  <stop offset="60%" stopColor="#C837AB" />
                  <stop offset="100%" stopColor="#3771C8" />
                </radialGradient>
              </defs>
              <path
                fill="url(#igG)"
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </Circle>

          {/* TikTok */}
          <Circle ref={div2Ref}>
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </Circle>

          {/* Facebook */}
          <Circle ref={div3Ref}>
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#1877F2]">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </Circle>

          {/* YouTube */}
          <Circle ref={div4Ref}>
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#FF0000]">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </Circle>

          {/* LinkedIn */}
          <Circle ref={div5Ref}>
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#0A66C2]">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
            </svg>
          </Circle>

          {/* WhatsApp */}
          <Circle ref={div6Ref}>
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <path
                fill="#25D366"
                d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"
              />
              <path
                fill="#FFF"
                d="M17.5 14.4c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.4.1-.1.2-.5.7-.6.8-.1.1-.2.2-.4.1s-.9-.3-1.7-1c-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3 0-.1 0-.2-.1-.3s-.4-1.1-.6-1.5c-.2-.4-.4-.3-.5-.3h-.4c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2 0 1.1.8 2.2 1 2.4.1.2 1.6 2.5 4 3.5.6.2 1 .4 1.4.5.6.2 1.1.2 1.6.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.2-.2-.2-.4-.3z"
              />
            </svg>
          </Circle>
        </div>
      </div>

      {/* Animated Beams connecting Social Networks to Central Hub */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={divCenterRef}
        duration={3}
        pathColor="#e5e7eb"
        pathOpacity={0.9}
        gradientStartColor="#E1306C"
        gradientStopColor="#2563eb"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={divCenterRef}
        duration={3}
        pathColor="#e5e7eb"
        pathOpacity={0.9}
        gradientStartColor="#000000"
        gradientStopColor="#2563eb"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={divCenterRef}
        duration={3}
        pathColor="#e5e7eb"
        pathOpacity={0.9}
        gradientStartColor="#1877F2"
        gradientStopColor="#2563eb"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={divCenterRef}
        duration={3}
        pathColor="#e5e7eb"
        pathOpacity={0.9}
        gradientStartColor="#FF0000"
        gradientStopColor="#2563eb"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={divCenterRef}
        duration={3}
        pathColor="#e5e7eb"
        pathOpacity={0.9}
        gradientStartColor="#0A66C2"
        gradientStopColor="#2563eb"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={divCenterRef}
        duration={3}
        pathColor="#e5e7eb"
        pathOpacity={0.9}
        gradientStartColor="#25D366"
        gradientStopColor="#2563eb"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divCenterRef}
        toRef={divAgencyRef}
        duration={3}
        pathColor="#e5e7eb"
        pathOpacity={0.9}
        gradientStartColor="#2563eb"
        gradientStopColor="#1d4ed8"
      />
    </div>
  );
}

export default Integrations;

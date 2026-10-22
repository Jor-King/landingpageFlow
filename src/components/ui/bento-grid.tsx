import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Integrations } from "./integrations";
import {
  ArrowRightIcon,
  CalendarDaysIcon,
  CheckCircle2Icon,
  SearchIcon,
  Share2Icon,
  PlayIcon,
  ImageIcon,
  FileTextIcon,
  LockIcon,
  Check,
  Sparkles,
} from "lucide-react";

export const CARDS = [
  {
    Icon: CalendarDaysIcon,
    name: "Calendario de Contenido",
    description: "Organiza y visualiza cada fecha del mes con estados en vivo y entregas programadas.",
    href: "#",
    cta: "Explorar calendario",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute right-0 top-8 origin-top rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105 w-[270px]">
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs font-semibold text-neutral-900">Mayo 2026</div>
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            18/20 Aprobados
          </span>
        </div>
        <div className="grid grid-cols-7 gap-1 text-[10px] text-center text-neutral-500">
          <div>Do</div><div>Lu</div><div>Ma</div><div>Mi</div><div>Ju</div><div>Vi</div><div>Sá</div>
          {Array.from({ length: 31 }, (_, i) => {
            const isApproved = [2, 5, 8, 12, 15, 19, 22, 26, 29].includes(i + 1);
            const isPending = [9, 16].includes(i + 1);
            return (
              <div
                key={i}
                className={cn(
                  "p-1.5 rounded transition-colors text-[10px]",
                  isApproved
                    ? "bg-emerald-50 text-emerald-700 font-bold border border-emerald-200"
                    : isPending
                    ? "bg-violet-100 text-violet-800 font-bold border border-violet-200"
                    : "hover:bg-neutral-100"
                )}
              >
                {i + 1}
              </div>
            );
          })}
        </div>
      </div>
    ),
  },
  {
    Icon: Sparkles,
    name: "Genera Publicaciones con IA",
    description: "Crea redacciones persuasivas, ganchos atractivos y hashtags adaptados al tono de tu cliente en segundos.",
    href: "#",
    cta: "Probar generador IA",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute right-6 top-6 w-[88%] origin-top border border-neutral-200 bg-white rounded-2xl shadow-sm transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_15%,#000_100%)] group-hover:-translate-y-1 p-4 space-y-3">
        {/* Top Control Bar with AI Spark & Tone Selection */}
        <div className="flex items-center justify-between gap-2 border-b border-neutral-100 pb-2.5">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#00C4FF]/10 via-[#7C3AED]/10 to-[#EC4899]/10 border border-[#7C3AED]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
            <span className="text-[11px] font-bold bg-gradient-to-r from-[#00C4FF] via-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent font-heading">
              Asistente Creativo IA
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#7C3AED] text-white">
              Persuasivo
            </span>
            <span className="text-[10px] text-neutral-500 px-2 py-0.5 rounded-md bg-neutral-100 hidden sm:inline-block">
              Profesional
            </span>
            <span className="text-[10px] text-neutral-500 px-2 py-0.5 rounded-md bg-neutral-100 hidden sm:inline-block">
              Cercano
            </span>
          </div>
        </div>

        {/* Prompt Input Simulated Bar */}
        <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-neutral-50 border border-neutral-200/80 text-xs">
          <div className="flex items-center gap-2 truncate text-neutral-700 font-medium">
            <span className="text-neutral-400">💡 Tema:</span>
            <span className="truncate">Lanzamiento de producto o campaña mensual</span>
          </div>
          <span className="text-[10px] font-bold text-[#7C3AED] bg-violet-50 px-2 py-0.5 rounded-md shrink-0 border border-violet-100">
            Generar
          </span>
        </div>

        {/* AI Output Result Box */}
        <div className="rounded-xl border border-violet-200/80 bg-gradient-to-br from-violet-50/40 via-white to-pink-50/30 p-3 space-y-2 relative">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-neutral-800 font-heading flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Propuesta Generada #1
            </span>
            <span className="text-[9px] font-mono text-neutral-400">100% editable</span>
          </div>

          <p className="text-[11px] text-neutral-700 leading-relaxed font-normal">
            "¿Sabías que el 80% de tus clientes prefieren validar contenido visual antes de publicarlo? Descubre el nuevo método de aprobación digital formal 🚀"
          </p>

          <div className="flex items-center justify-between pt-1 border-t border-neutral-100 text-[10px]">
            <div className="flex gap-1.5 text-violet-700 font-medium font-mono text-[9px]">
              <span>#EstrategiaDigital</span>
              <span>#Lanzamiento2026</span>
              <span>#SocialMedia</span>
            </div>
            <div className="flex items-center gap-1 font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
              <Check className="w-3 h-3 stroke-[3]" />
              <span>Listo para el calendario</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    Icon: Share2Icon,
    name: "Formatos Multicanal",
    description: "Organiza y previsualiza publicaciones adaptadas para Instagram, TikTok, Facebook, LinkedIn, YouTube y WhatsApp.",
    href: "#",
    cta: "Ver redes compatibles",
    className: "col-span-3 lg:col-span-2 max-w-full overflow-hidden",
    background: (
      <Integrations className="absolute right-2 pl-24 md:pl-0 top-3 h-[300px] w-[600px] border-none bg-transparent transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CheckCircle2Icon,
    name: "Aprobación Formal Digital",
    description: "Tu cliente valida todo el mes mediante un enlace interactivo sin contraseñas con respaldo formal.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Flujo de aprobación",
    background: (
      <div className="absolute right-4 top-7 w-[90%] origin-top rounded-2xl border-2 border-emerald-500/30 bg-gradient-to-b from-white via-emerald-50/20 to-white shadow-xl transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 p-4 space-y-3">
        {/* Secure Magic Link Browser Pill */}
        <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-neutral-900 text-white">
          <div className="flex items-center gap-1.5 text-[10px] font-mono truncate">
            <LockIcon className="w-3 h-3 text-[#00C4FF] shrink-0" />
            <span className="truncate text-neutral-200">app.besello.com/p/nike-mayo</span>
          </div>
          <span className="text-[9px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded-full shrink-0">
            Sin clave
          </span>
        </div>

        {/* Client Identity Header with Official Seal Badge */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#00C4FF] to-[#7C3AED] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
              MR
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-neutral-950 truncate">Mariana Rivas</p>
              <p className="text-[10px] text-neutral-500 truncate">Brand Director · Nike MX</p>
            </div>
          </div>
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full shrink-0">
            ✓ Verificado
          </span>
        </div>

        {/* High-Impact Authorization Button */}
        <div className="pt-1">
          <div className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-600/30 transition-colors">
            <CheckCircle2Icon className="w-4 h-4 text-white" />
            <span>Calendario Aprobado (20/20 Posts)</span>
          </div>
        </div>

        {/* Digital Stamp Footer */}
        <div className="flex items-center justify-between text-[10px] text-neutral-600 pt-1 border-t border-neutral-200/80">
          <span className="font-mono text-[9px] text-[#7C3AED] font-semibold">Sello Digital #BS-8491</span>
          <span className="text-neutral-500 font-mono text-[9px]">Respaldado</span>
        </div>
      </div>
    ),
  },
];

export const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between border border-neutral-200/90 overflow-hidden rounded-2xl",
      "bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-violet-300/80 transition-all duration-300",
      className
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-6">
      <div className="h-10 w-10 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 mb-1">
        <Icon className="h-5 w-5 origin-left transition-all duration-300 ease-in-out group-hover:scale-90" />
      </div>
      <h3 className="text-xl font-semibold text-neutral-900 tracking-tight">{name}</h3>
      <p className="max-w-lg text-sm text-neutral-500 leading-relaxed">{description}</p>
    </div>
    <div
      className={cn(
        "absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <a
        href={href}
        className={buttonVariants({
          size: "sm",
          variant: "ghost",
          className: "cursor-pointer text-violet-600 hover:text-violet-700 hover:bg-violet-50",
        })}
      >
        <span>{cta}</span>
        <ArrowRightIcon className="ml-1.5 h-3.5 w-3.5" />
      </a>
    </div>
    <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-violet-500/[0.02]" />
  </div>
);

export default BentoGrid;

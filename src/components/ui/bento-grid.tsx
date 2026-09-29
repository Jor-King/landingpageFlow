import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Integrations } from "./integrations";
import { ArrowRightIcon, CalendarDaysIcon, CheckCircle2Icon, SearchIcon, Share2Icon } from "lucide-react";

export const CARDS = [
  {
    Icon: CalendarDaysIcon,
    name: "Parrilla de Contenido",
    description: "Crea y programa posts, carruseles, reels y stories con vista previa real.",
    href: "#",
    cta: "Explorar calendario",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Card className="absolute top-8 left-8 right-8 origin-top rounded-xl transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105 border border-neutral-200 bg-white shadow-sm p-3">
        <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-neutral-900">Post #4 - Cliente Nike</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-bold">
            Reel + Feed
          </span>
        </div>
        <div className="pt-2.5 space-y-2">
          <p className="text-[11px] text-neutral-600 line-clamp-2 leading-relaxed">
            5 errores clave al escalar tu marca en 2026. Guarda este análisis y compártelo con tu equipo...
          </p>
          <div className="flex gap-1.5 text-[10px] text-blue-600 font-mono">
            <span>#marketing</span>
            <span>#ecommerce</span>
            <span>#tips</span>
          </div>
        </div>
      </Card>
    ),
  },
  {
    Icon: SearchIcon,
    name: "Gestor de Activos y Copys",
    description: "Localiza de inmediato copys, creatividades y hashtags aprobados por cliente.",
    href: "#",
    cta: "Buscar activos",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute right-8 top-8 w-[72%] origin-top translate-x-0 border border-neutral-200 bg-white rounded-xl shadow-sm transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_25%,#000_100%)] group-hover:-translate-x-6 p-3.5">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200">
          <SearchIcon className="w-3.5 h-3.5 text-neutral-400" />
          <input
            type="text"
            readOnly
            value="Campaña Primavera - Cliente Starbucks"
            className="w-full text-xs bg-transparent text-neutral-800 focus:outline-none font-medium"
          />
        </div>
        <div className="mt-2.5 text-xs space-y-1.5">
          <div className="px-3 py-1.5 hover:bg-neutral-50 rounded-lg text-neutral-700 flex items-center justify-between text-[11px] border border-transparent hover:border-neutral-200">
            <span>Reel_Lanzamiento_Final.mp4</span>
            <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded">Aprobado</span>
          </div>
          <div className="px-3 py-1.5 hover:bg-neutral-50 rounded-lg text-neutral-700 flex items-center justify-between text-[11px] border border-transparent hover:border-neutral-200">
            <span>Copy_Instagram_Viernes.txt</span>
            <span className="text-[10px] text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded">En revisión</span>
          </div>
          <div className="px-3 py-1.5 hover:bg-neutral-50 rounded-lg text-neutral-700 flex items-center justify-between text-[11px] border border-transparent hover:border-neutral-200">
            <span>Carrusel_3_Consejos.png</span>
            <span className="text-[10px] text-neutral-500 font-semibold bg-neutral-100 px-2 py-0.5 rounded">Borrador</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    Icon: Share2Icon,
    name: "Publicación Multicanal",
    description: "Sincroniza y publica en Facebook, Instagram, TikTok, YouTube, WhatsApp y LinkedIn.",
    href: "#",
    cta: "Ver canales",
    className: "col-span-3 lg:col-span-2 max-w-full overflow-hidden",
    background: (
      <Integrations className="absolute right-2 pl-24 md:pl-0 top-3 h-[300px] w-[600px] border-none bg-transparent transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CheckCircle2Icon,
    name: "Aprobaciones en 1 Clic",
    description: "Tu cliente revisa y autoriza todo el mes sin registrarse ni descargar archivos.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Flujo de aprobación",
    background: (
      <div className="absolute right-0 top-8 origin-top rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_25%,#000_100%)] group-hover:scale-105 w-[270px]">
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs font-semibold text-neutral-900">Mayo 2026</div>
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
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
                    ? "bg-blue-100 text-blue-800 font-bold"
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
      "bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-blue-300/80 transition-all duration-300",
      className
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-6">
      <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-1">
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
          className: "cursor-pointer text-blue-600 hover:text-blue-700 hover:bg-blue-50",
        })}
      >
        <span>{cta}</span>
        <ArrowRightIcon className="ml-1.5 h-3.5 w-3.5" />
      </a>
    </div>
    <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-blue-500/[0.02]" />
  </div>
);

export default BentoGrid;

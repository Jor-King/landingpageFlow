import React from "react";
import { PLANS, ADDONS, COMPETITOR_COMPARISON } from "@/constants/besello-data";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2Icon, Sparkles, Layers, HardDrive, Check, Zap } from "lucide-react";

export const PricingCards = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full space-y-12">
      {/* 4 Monthly Plan Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-6xl mx-auto pt-2">
        {PLANS.map((plan) => {
          const isRecommended = plan.name === "Estudio";
          const isFree = plan.name === "Gratis";

          return (
            <Card
              key={plan.name}
              className={cn(
                "relative flex flex-col w-full rounded-2xl bg-white transition-all duration-300 overflow-hidden",
                isRecommended
                  ? "border-2 border-[#7C3AED] shadow-[0_12px_40px_-10px_rgba(124,58,237,0.28)] lg:-translate-y-2.5 ring-2 ring-[#00C4FF]/30"
                  : "border border-neutral-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg hover:border-neutral-300"
              )}
            >
              {/* Recommended Top Gradient Bar */}
              {isRecommended && (
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#00C4FF] via-[#7C3AED] to-[#EC4899]" />
              )}

              <CardHeader
                className={cn(
                  "border-b pb-5 pt-6",
                  isRecommended
                    ? "bg-gradient-to-b from-[#7C3AED]/5 via-white to-white border-neutral-100"
                    : "bg-neutral-50/50 border-neutral-100"
                )}
              >
                <div className="flex items-center justify-between">
                  <CardTitle
                    className={cn(
                      isRecommended ? "text-[#7C3AED] font-bold" : "text-neutral-900",
                      "text-xl font-heading"
                    )}
                  >
                    {plan.name}
                  </CardTitle>
                  {isRecommended ? (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#00C4FF] to-[#7C3AED] text-white shadow-xs">
                      Recomendado
                    </span>
                  ) : isFree ? (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Sin costo
                    </span>
                  ) : null}
                </div>

                <CardDescription className="text-neutral-500 text-xs pt-1 min-h-[1.5rem]">
                  {plan.info}
                </CardDescription>

                <div className="pt-3">
                  <h5 className="text-4xl font-bold flex items-baseline text-neutral-950 font-mono tracking-tight">
                    ${plan.price}
                    <span className="text-xs text-neutral-500 font-normal ml-1.5 font-sans">
                      {plan.price === 0 ? "para siempre" : "USD / mes"}
                    </span>
                  </h5>
                  <p className="text-[11px] font-mono text-neutral-400 mt-0.5">
                    {plan.priceCop}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="pt-5 space-y-3 flex-1">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs text-neutral-700">
                    <CheckCircle2Icon
                      className={cn(
                        "w-4 h-4 shrink-0 mt-0.5",
                        isRecommended ? "text-[#7C3AED]" : "text-emerald-600"
                      )}
                    />
                    <span className="leading-snug">{feature.text}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter className="w-full mt-auto pt-4 pb-6">
                <a
                  href={plan.btn.href}
                  className={cn(
                    buttonVariants({
                      className: isRecommended
                        ? "w-full bg-gradient-to-r from-[#00C4FF] via-[#7C3AED] to-[#EC4899] hover:opacity-95 text-white shadow-md shadow-[#7C3AED]/25 py-2.5 font-bold text-xs"
                        : isFree
                        ? "w-full bg-neutral-900 hover:bg-neutral-800 text-white py-2.5 font-semibold text-xs"
                        : "w-full border border-neutral-300 hover:border-neutral-400 text-neutral-800 hover:bg-neutral-50 py-2.5 font-semibold text-xs",
                    })
                  )}
                >
                  {plan.btn.text}
                </a>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      {/* Extras y Condiciones: Crece sin cambiar de plan (Page 8 del PDF) */}
      <div className="w-full max-w-5xl mx-auto rounded-2xl border border-neutral-200/90 bg-neutral-50/70 p-6 md:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-neutral-200/80">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-[#7C3AED] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Extras y Condiciones
            </div>
            <h4 className="text-xl font-bold font-heading text-neutral-900 mt-1">
              Crece sin cambiar de plan
            </h4>
          </div>
          <span className="text-xs text-neutral-500 max-w-xs text-start sm:text-right">
            Adapta tu cuenta a tu ritmo con complementos mensuales transparentes.
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5">
          {ADDONS.map((addon) => (
            <div
              key={addon.title}
              className="rounded-xl border border-neutral-200 bg-white p-4 shadow-2xs space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm text-neutral-900 flex items-center gap-2">
                  {addon.title === "Marca adicional" ? (
                    <Layers className="w-4 h-4 text-[#7C3AED]" />
                  ) : (
                    <HardDrive className="w-4 h-4 text-[#00C4FF]" />
                  )}
                  {addon.title}
                </span>
                <span className="text-sm font-bold font-mono text-neutral-950 bg-neutral-100 px-2 py-0.5 rounded-md">
                  {addon.price}
                </span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {addon.description}
              </p>
              <p className="text-[11px] font-medium text-[#7C3AED]">
                {addon.extra}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Comparativa Competitiva (Page 12 del PDF): Aprobación en todos los planes */}
      <div className="w-full max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-[#0B0B1A] to-[#16162E] text-white p-6 sm:p-8 md:p-10 border border-neutral-800 shadow-xl">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00C4FF]">
            Por qué BeSello
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-heading">
            La aprobación del cliente, desde el plan gratis
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400">
            En otras herramientas la aprobación es un lujo para planes corporativos. En BeSello es la base de todo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          {COMPETITOR_COMPARISON.map((comp) => (
            <div
              key={comp.name}
              className={cn(
                "rounded-2xl p-5 border transition-all",
                comp.isBeSello
                  ? "bg-white text-neutral-950 border-[#00C4FF] shadow-[0_0_25px_rgba(0,196,255,0.25)] relative"
                  : "bg-white/5 border-white/10 text-neutral-300"
              )}
            >
              {comp.isBeSello && (
                <span className="absolute -top-3 right-4 text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#00C4FF] to-[#EC4899] text-white px-2.5 py-0.5 rounded-full shadow-xs">
                  Recomendado
                </span>
              )}
              <h5
                className={cn(
                  "font-heading text-lg font-bold mb-2",
                  comp.isBeSello ? "text-neutral-950" : "text-white"
                )}
              >
                {comp.name}
              </h5>
              <p
                className={cn(
                  "text-xs leading-relaxed",
                  comp.isBeSello ? "text-neutral-700 font-medium" : "text-neutral-400"
                )}
              >
                {comp.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCards;


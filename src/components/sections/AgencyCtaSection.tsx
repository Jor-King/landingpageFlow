import React from "react";
import { ArrowRightIcon, CheckCircle2, ShieldCheck, X, Check, Sparkles } from "lucide-react";

interface AgencyCtaSectionProps {
  onOpenAuth: () => void;
}

const COMPARISON_ROWS = [
  {
    topic: "Aprobaciones",
    contra: "Chats de WhatsApp y correos que se traspapelan sin orden.",
    contraShort: "Chats de WhatsApp y correos perdidos.",
    pro: "Revisión en 1 clic desde cualquier dispositivo sin contraseñas.",
    proShort: "Aprobación en 1 clic sin contraseñas.",
  },
  {
    topic: "Formatos",
    contra: "PDFs o Excels donde el cliente no ve cómo quedará el post.",
    contraShort: "PDFs o Excels ciegos sin previsualizar.",
    pro: "Previsualización nativa exacta idéntica a cada red social.",
    proShort: "Previsualización nativa exacta en tiempo real.",
  },
  {
    topic: "Cambios",
    contra: "Ajustes improvisados sin registro que causan disputas.",
    contraShort: "Cambios sin respaldo que causan disputas.",
    pro: "Historial sellado y documentado que protege tu trabajo.",
    proShort: "Historial sellado y respaldado formalmente.",
  },
  {
    topic: "Tiempo",
    contra: "15+ horas semanales copiando copies y artes a mano.",
    contraShort: "+15 horas perdidas en tareas manuales.",
    pro: "15+ horas ahorradas cada semana para crear y crecer.",
    proShort: "+15 horas libres cada semana.",
  },
  {
    topic: "Valor percibido",
    contra: "Imagen informal y desordenada que abarata tus tarifas.",
    contraShort: "Sensación de desorden que frena tarifas.",
    pro: "Entrega moderna y ultra profesional que fideliza clientes.",
    proShort: "Presentación premium que fideliza clientes.",
  },
];

export const AgencyCtaSection: React.FC<AgencyCtaSectionProps> = ({ onOpenAuth }) => {
  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-neutral-950 text-white border border-neutral-800 shadow-2xl p-5 sm:p-8 md:p-12 my-12 select-none">
      {/* Deep Azure / Electric Blue Ambient Glows */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-600/20 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-indigo-600/20 rounded-full blur-[110px] pointer-events-none" />

      {/* Subtle modern grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-5">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading tracking-tight leading-[1.18] text-white">
          La diferencia entre el caos manual y un flujo optimizado
        </h2>

        <p className="text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl">
          Compara los costos invisibles del método tradicional frente al flujo estructurado de Flow.
        </p>

        {/* ================= SIDE-BY-SIDE PROS & CONTRAS TABLE (RESPONSIVE FOR ANDROID & DESKTOP) ================= */}
        <div className="w-full pt-4">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-md overflow-hidden shadow-xl">
            {/* Table Header Row: Side-by-side on all screen sizes */}
            <div className="grid grid-cols-2 border-b border-neutral-800 bg-neutral-900/90 text-left">
              {/* Left Column Header: Contras */}
              <div className="p-3 sm:p-4 border-r border-neutral-800 flex items-center justify-between gap-2 bg-red-950/20">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="block text-xs sm:text-sm font-bold text-red-300 font-heading">
                      Sin Flow
                    </span>
                    <span className="hidden sm:block text-[10px] text-neutral-400">
                      Método tradicional
                    </span>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-bold font-mono px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 shrink-0">
                  Contras
                </span>
              </div>

              {/* Right Column Header: Pros */}
              <div className="p-3 sm:p-4 flex items-center justify-between gap-2 bg-blue-950/30">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="block text-xs sm:text-sm font-bold text-blue-200 font-heading">
                      Con Flow
                    </span>
                    <span className="hidden sm:block text-[10px] text-neutral-400">
                      Flujo optimizado
                    </span>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-bold font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                  Pros
                </span>
              </div>
            </div>

            {/* Table Rows: Each row places Contra on left and Pro on right side-by-side */}
            <div className="divide-y divide-neutral-800/80 text-left">
              {COMPARISON_ROWS.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-2 transition-colors hover:bg-white/[0.02]"
                >
                  {/* Left Column: Contra */}
                  <div className="p-3 sm:p-4 border-r border-neutral-800 flex items-start gap-2 sm:gap-2.5 bg-red-950/[0.05]">
                    <div className="w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5 text-red-400">
                      <X className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] sm:text-xs text-neutral-300 leading-snug font-medium">
                        <span className="sm:hidden">{row.contraShort}</span>
                        <span className="hidden sm:inline">{row.contra}</span>
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Pro (Directly in front of Contra!) */}
                  <div className="p-3 sm:p-4 flex items-start gap-2 sm:gap-2.5 bg-blue-950/[0.08]">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] sm:text-xs text-white leading-snug font-medium">
                        <span className="sm:hidden">{row.proShort}</span>
                        <span className="hidden sm:inline">{row.pro}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= HIGH-END ANIMATED CTA BUTTON (WITH RADIANT BORDER & SHIMMER) ================= */}
        <div className="pt-6 sm:pt-8 flex flex-col items-center justify-center space-y-3 w-full">
          <button
            onClick={onOpenAuth}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl p-[2px] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_35px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.65)] cursor-pointer"
          >
            {/* Animated Rotating Conic Gradient Beam Border */}
            <span className="absolute inset-[-1000%] animate-[spin_3.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2563eb_0%,#a855f7_50%,#38bdf8_100%)] opacity-90" />

            {/* Inner Button Body with Radiant Blue Gradient & Sweeping Shimmer */}
            <span className="relative inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] px-7 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white transition-all duration-300 group-hover:bg-right overflow-hidden">
              {/* Shimmer Light Bar Sweeping Across */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent ease-in-out pointer-events-none" />

              <Sparkles className="w-4 h-4 text-blue-200 group-hover:rotate-12 transition-transform" />
              <span>Crear mi cuenta gratis ahora</span>
              <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Guarantee Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400 pt-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              14 días de prueba gratis
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              Sin tarjeta de crédito
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              Cancela cuando quieras
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyCtaSection;

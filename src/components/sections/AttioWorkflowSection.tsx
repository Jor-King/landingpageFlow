import React, { useEffect, useState, useRef } from "react";
import {
  CalendarDays,
  Link2,
  CheckCircle2,
  ShieldCheck,
  Check,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkflowStep {
  id: string;
  stepNumber: string;
  category: string;
  title: string;
  description: string;
  meta: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STEPS: WorkflowStep[] = [
  {
    id: "step-1",
    stepNumber: "01",
    category: "Parrilla",
    title: "Creación de Contenido",
    description: "Tu equipo redacta los copys y organiza los artes en el calendario mensual de cada cliente.",
    meta: "Posts, reels y carruseles",
    icon: CalendarDays,
  },
  {
    id: "step-2",
    stepNumber: "02",
    category: "Enlace Mágico",
    title: "Generación del Enlace",
    description: "Se crea un link privado único para el cliente. Acceso directo en 1 clic sin contraseñas.",
    meta: "flow.io/p/cliente-mayo",
    icon: Link2,
  },
  {
    id: "step-3",
    stepNumber: "03",
    category: "Revisión",
    title: "Revisión del Cliente",
    description: "Tu cliente visualiza los posts en su formato nativo exacto y comenta o solicita ajustes.",
    meta: "Previsualización nativa",
    icon: CheckCircle2,
  },
  {
    id: "step-4",
    stepNumber: "04",
    category: "Aprobación",
    title: "Aprobación Final",
    description: "El cliente autoriza la parrilla completa en 1 clic. El calendario queda sellado y listo para ejecutar.",
    meta: "Parrilla 100% aprobada",
    icon: ShieldCheck,
  },
];

export const AttioWorkflowSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasScrolledIntoView, setHasScrolledIntoView] = useState<boolean>(false);

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [transitioningIndex, setTransitioningIndex] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Timings: More deliberate, relaxed pace
  const CARD_ACTIVE_TIME = 3000;   // 3.0s processing inside card
  const CONNECTOR_TIME = 2400;     // 2.4s for the curved bar to travel
  const RESTART_PAUSE_TIME = 4500; // 4.5s pause with all steps completed

  // Scroll detection: Only trigger when scrolled into view
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasScrolledIntoView(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const runStepFlow = (step: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // 1. Current step is processing...
    timeoutRef.current = setTimeout(() => {
      // 2. Step completes with checkmark ("chulito")
      setCompletedSteps((prev) => (prev.includes(step) ? prev : [...prev, step]));

      if (step < STEPS.length - 1) {
        // 3. Start smooth progressive curved bar to the next step
        setTransitioningIndex(step);

        timeoutRef.current = setTimeout(() => {
          // 4. Bar arrived at next step!
          setTransitioningIndex(null);
          setCurrentStep(step + 1);
          runStepFlow(step + 1);
        }, CONNECTOR_TIME);
      } else {
        // All 4 steps completed! Hold in full blue/checked glory, then smoothly repeat
        timeoutRef.current = setTimeout(() => {
          setCompletedSteps([]);
          setTransitioningIndex(null);
          setCurrentStep(0);
          runStepFlow(0);
        }, RESTART_PAUSE_TIME);
      }
    }, CARD_ACTIVE_TIME);
  };

  useEffect(() => {
    if (!hasScrolledIntoView) return; // Wait until user reaches this section!
    runStepFlow(0);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [hasScrolledIntoView]);

  const handleCardClick = (targetIdx: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    const newCompleted: number[] = [];
    for (let i = 0; i < targetIdx; i++) {
      newCompleted.push(i);
    }
    setCompletedSteps(newCompleted);
    setTransitioningIndex(null);
    setCurrentStep(targetIdx);
    runStepFlow(targetIdx);
  };

  return (
    <div
      ref={sectionRef}
      className="relative w-full max-w-6xl mx-auto rounded-3xl border border-neutral-200/90 bg-white shadow-xl shadow-neutral-900/5 p-6 md:p-10 lg:p-12 overflow-hidden select-none"
    >
      {/* Attio-Style Dot Grid Canvas Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.25px,transparent_1.25px)] [background-size:20px_20px] pointer-events-none opacity-80" />

      {/* Main Workflow Row: 4 Cards with S-curve / circuit jog connectors */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-0 py-4">
        {STEPS.map((step, idx) => {
          const Icon = step.icon;
          const isCompleted = completedSteps.includes(idx);
          const isActive = hasScrolledIntoView && currentStep === idx && !isCompleted;

          // Connector state between idx and idx + 1:
          // If idx+1 has already been reached or is completed, this bar must stay completely solid blue!
          const isConnectorFullyDone =
            completedSteps.includes(idx) &&
            (completedSteps.includes(idx + 1) || currentStep > idx);
          const isConnectorTransitioning =
            transitioningIndex === idx;

          // Slight alternating stagger on desktop for an authentic circuit look
          const isEven = idx % 2 === 0;

          return (
            <React.Fragment key={step.id}>
              {/* Workflow Node Card */}
              <div
                onClick={() => handleCardClick(idx)}
                className={cn(
                  "w-full lg:w-[230px] xl:w-[245px] relative flex flex-col justify-between rounded-2xl border transition-all duration-300 p-5 bg-white cursor-pointer select-none group min-h-[220px]",
                  // Subtle vertical stagger on desktop
                  isEven ? "lg:-translate-y-2" : "lg:translate-y-2",
                  isActive
                    ? "border-blue-600 shadow-xl shadow-blue-600/15 ring-2 ring-blue-500/25 hover:border-blue-500 hover:shadow-2xl hover:scale-[1.02]"
                    : isCompleted
                    ? "border-emerald-200 bg-white shadow-xs hover:border-emerald-400 hover:shadow-md hover:scale-[1.02]"
                    : "border-neutral-200/80 shadow-2xs opacity-85 hover:opacity-100 hover:border-neutral-400 hover:shadow-md hover:scale-[1.02]"
                )}
              >
                <div>
                  {/* Card Header: Step number & Status */}
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-100 gap-2">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span
                        className={cn(
                          "px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider font-mono transition-colors shrink-0",
                          isActive
                            ? "bg-blue-600 text-white"
                            : isCompleted
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-neutral-100 text-neutral-600"
                        )}
                      >
                        {step.category}
                      </span>
                      <span className="text-xs font-mono text-neutral-400 font-semibold shrink-0">
                        #{step.stepNumber}
                      </span>
                    </div>

                    {/* Status Pill: Changes to checkmark ("chulito") when done */}
                    <div className="shrink-0">
                      {isCompleted ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full animate-in zoom-in-75 duration-300 whitespace-nowrap shrink-0">
                          <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                          Listo
                        </span>
                      ) : isActive ? (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-600 bg-blue-50 border border-blue-200/70 px-2.5 py-0.5 rounded-full whitespace-nowrap shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping shrink-0" />
                          Activo
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] text-neutral-400 whitespace-nowrap shrink-0">
                          <Clock className="w-3 h-3 shrink-0" />
                          En espera
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="pt-3.5 flex items-start gap-3">
                    <div
                      className={cn(
                        "w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all border",
                        isActive
                          ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20"
                          : isCompleted
                          ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                          : "bg-neutral-50 text-neutral-400 border-neutral-200/80"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="flex flex-col min-w-0">
                      <h4 className="text-sm font-bold text-neutral-900 font-heading tracking-tight leading-snug">
                        {step.title}
                      </h4>
                      <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Meta tag */}
                <div className="pt-4 mt-auto">
                  <span className="inline-block text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-700 border border-neutral-200/70 truncate max-w-full">
                    {step.meta}
                  </span>
                </div>
              </div>

              {/* Circuit Curved Connector (S-curve / Dogleg with turn to the right) */}
              {idx < STEPS.length - 1 && (
                <>
                  {/* Desktop Horizontal Curved Connector: Longer with right-jog curve */}
                  <div className="hidden lg:flex items-center justify-center shrink-0 w-12 xl:w-16 z-20 self-center px-1">
                    <svg
                      viewBox="0 0 64 36"
                      className="w-full h-9 overflow-visible"
                      fill="none"
                    >
                      {/* Background Faint Track */}
                      <path
                        d={
                          isEven
                            ? "M 0 10 C 20 10, 20 26, 36 26 L 46 26 C 56 26, 56 26, 64 26"
                            : "M 0 26 C 20 26, 20 10, 36 10 L 46 10 C 56 10, 56 10, 64 10"
                        }
                        stroke="#e2e8f0"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />

                      {/* Animated Blue Path: Slow, fluid travel with curved turn to the right */}
                      <path
                        d={
                          isEven
                            ? "M 0 10 C 20 10, 20 26, 36 26 L 46 26 C 56 26, 56 26, 64 26"
                            : "M 0 26 C 20 26, 20 10, 36 10 L 46 10 C 56 10, 56 10, 64 10"
                        }
                        stroke="#2563eb"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        pathLength="100"
                        strokeDasharray="100"
                        style={{
                          strokeDashoffset: isConnectorFullyDone
                            ? "0"
                            : isConnectorTransitioning
                            ? "0"
                            : "100",
                          transition: isConnectorTransitioning
                            ? `stroke-dashoffset ${CONNECTOR_TIME}ms cubic-bezier(0.4, 0, 0.2, 1)`
                            : isConnectorFullyDone
                            ? "none"
                            : "none",
                        }}
                        className={cn(
                          (isConnectorFullyDone || isConnectorTransitioning) &&
                            "drop-shadow-[0_0_8px_rgba(37,99,235,0.7)]"
                        )}
                      />
                    </svg>
                  </div>

                  {/* Mobile & Tablet Vertical Curved Connector: Curves out right and back */}
                  <div className="lg:hidden flex items-center justify-center h-12 w-full my-1 z-20">
                    <svg
                      viewBox="0 0 44 48"
                      className="h-full w-12 overflow-visible"
                      fill="none"
                    >
                      {/* Background Faint Track */}
                      <path
                        d="M 22 0 C 22 14, 38 18, 38 24 C 38 30, 22 34, 22 48"
                        stroke="#e2e8f0"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />

                      {/* Animated Blue Path with jog to the right */}
                      <path
                        d="M 22 0 C 22 14, 38 18, 38 24 C 38 30, 22 34, 22 48"
                        stroke="#2563eb"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        pathLength="100"
                        strokeDasharray="100"
                        style={{
                          strokeDashoffset: isConnectorFullyDone
                            ? "0"
                            : isConnectorTransitioning
                            ? "0"
                            : "100",
                          transition: isConnectorTransitioning
                            ? `stroke-dashoffset ${CONNECTOR_TIME}ms cubic-bezier(0.4, 0, 0.2, 1)`
                            : isConnectorFullyDone
                            ? "none"
                            : "none",
                        }}
                        className={cn(
                          (isConnectorFullyDone || isConnectorTransitioning) &&
                            "drop-shadow-[0_0_8px_rgba(37,99,235,0.7)]"
                        )}
                      />
                    </svg>
                  </div>
                </>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default AttioWorkflowSection;

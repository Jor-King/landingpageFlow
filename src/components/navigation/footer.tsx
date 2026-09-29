import React from "react";
import AnimationContainer from "../global/AnimationContainer";
import { FlowLogo } from "./navbar";

export const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-neutral-200/90 pt-14 pb-12 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-20 bg-gradient-to-b from-white to-neutral-50/60">
      <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-1 bg-neutral-300 rounded-full" />

      <div className="flex flex-col md:flex-row items-start justify-between gap-12 w-full">
        {/* Brand Column */}
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-start justify-start max-w-sm">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm">
                <FlowLogo className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-neutral-900 tracking-tight">Flow</span>
            </div>
            <p className="text-neutral-500 mt-3.5 text-sm text-start leading-relaxed">
              El sistema de planeación de contenido y aprobaciones en 1 clic para creadores, freelancers, equipos internos y agencias.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Sistemas operativos en línea</span>
            </div>
          </div>
        </AnimationContainer>

        {/* Minimal Navigation Columns (No Integrations, No Resources) */}
        <div className="flex items-start gap-12 sm:gap-16">
          <AnimationContainer delay={0.2}>
            <div>
              <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider font-heading">
                Plataforma
              </h3>
              <ul className="mt-4 text-sm text-neutral-600 space-y-2.5">
                <li>
                  <a href="#preview" className="hover:text-blue-600 transition-colors">
                    Simulador en Vivo
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-blue-600 transition-colors">
                    Características
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-blue-600 transition-colors">
                    Paso a Paso
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-blue-600 transition-colors">
                    Planes y Precios
                  </a>
                </li>
              </ul>
            </div>
          </AnimationContainer>

          <AnimationContainer delay={0.3}>
            <div>
              <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider font-heading">
                Legal & Ayuda
              </h3>
              <ul className="mt-4 text-sm text-neutral-600 space-y-2.5">
                <li>
                  <a href="#reviews" className="hover:text-blue-600 transition-colors">
                    Casos de Éxito
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-blue-600 transition-colors">
                    Preguntas Frecuentes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Términos y Privacidad
                  </a>
                </li>
              </ul>
            </div>
          </AnimationContainer>
        </div>
      </div>

      <div className="mt-12 border-t border-neutral-200/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 w-full text-xs text-neutral-400">
        <AnimationContainer delay={0.4}>
          <p>
            &copy; {new Date().getFullYear()} Flow INC. Todos los derechos reservados.
          </p>
        </AnimationContainer>
        <AnimationContainer delay={0.4}>
          <p className="text-neutral-400 text-xs">
            Diseñado para simplificar la gestión de contenidos.
          </p>
        </AnimationContainer>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import AnimationContainer from "./components/global/AnimationContainer";
import MaxWidthWrapper from "./components/global/MaxWidthWrapper";
import PricingCards from "./components/pricing-cards";
import { BentoCard, BentoGrid, CARDS } from "./components/ui/bento-grid";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import MagicBadge from "./components/ui/MagicBadge";
import MagicCard from "./components/ui/MagicCard";
import Navbar from "./components/navigation/navbar";
import Footer from "./components/navigation/footer";
import AuthModal from "./components/modals/AuthModal";
import GridBackground from "./components/ui/GridBackground";
import HeroVideoPlayer from "./components/ui/HeroVideoPlayer";
import SocialPlatforms from "./components/ui/SocialPlatforms";
import ContentStudioPreview from "./components/sections/ContentStudioPreview";
import AttioWorkflowSection from "./components/sections/AttioWorkflowSection";
import AgencyCtaSection from "./components/sections/AgencyCtaSection";
import { REVIEWS } from "./constants/besello-data";
import { ArrowRightIcon, CreditCardIcon, StarIcon, Sparkles } from "lucide-react";

export default function App() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-neutral-900 selection:bg-violet-100 selection:text-violet-900">
      {/* Top Navbar */}
      <Navbar onOpenAuth={() => setAuthOpen(true)} />

      {/* Grid Pattern Wrapper for Hero & Main Content */}
      <GridBackground>
        {/* ================= HERO SECTION ================= */}
        <MaxWidthWrapper id="home">
          <div className="flex flex-col items-center justify-center w-full text-center pt-10 md:pt-16">
            <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
              {/* Main Headline */}
              <h1 className="text-neutral-950 text-center py-6 text-4xl font-medium tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.12] w-full font-heading max-w-5xl mx-auto">
                Planifica, programa y{" "}
                <span className="text-transparent mx-1 bg-gradient-to-r from-[#00C4FF] via-[#7C3AED] to-[#EC4899] bg-clip-text inline-block">
                  aprueba contenido
                </span>{" "}
                para tus clientes
              </h1>

              {/* Subtitle */}
              <p className="mb-10 text-base md:text-lg text-neutral-600 tracking-normal text-balance max-w-2xl mx-auto leading-relaxed">
                La plataforma de planeación y aprobación de calendarios diseñada para creadores, freelancers, equipos internos y agencias. Organiza calendarios visuales, previsualiza formatos nativos y aprueba formalmente con tus clientes mediante enlace privado sin contraseñas.
              </p>

              {/* Hero CTA Button */}
              <div className="flex items-center justify-center whitespace-nowrap gap-4 z-50">
                <Button
                  onClick={() => setAuthOpen(true)}
                  className="flex items-center bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-3.5 rounded-xl shadow-lg shadow-[#7C3AED]/25 font-bold text-sm cursor-pointer transition-all hover:scale-[1.02] active:scale-95"
                >
                  <Sparkles className="w-4 h-4 mr-2 text-white" />
                  <span>Empezar gratis</span>
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </AnimationContainer>

            {/* Hero Showcase: Video without buttons, smooth expand and full mobile view */}
            <AnimationContainer
              delay={0.2}
              className="relative pt-12 pb-16 md:py-20 px-2 w-full max-w-5xl mx-auto"
            >
              {/* Soft electric violet/purple ambient glow behind */}
              <div className="absolute md:top-[10%] left-1/2 bg-gradient-to-tr from-violet-200/60 via-purple-100/50 to-indigo-100/40 w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[6rem] -z-10 animate-pulse pointer-events-none" />

              <div className="-m-2 rounded-2xl p-2.5 ring-1 ring-inset ring-neutral-200/90 lg:-m-4 lg:rounded-3xl bg-white/90 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] backdrop-blur-2xl relative">
                <HeroVideoPlayer />
              </div>
            </AnimationContainer>
          </div>
        </MaxWidthWrapper>

        {/* ================= SOCIAL NETWORKS / TRUSTED PLATFORMS SECTION ================= */}
        <MaxWidthWrapper id="platforms">
          <AnimationContainer delay={0.3}>
            <div className="py-14 border-t border-b border-neutral-200/80">
              <div className="mx-auto px-4 md:px-8 text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-violet-100">
                  Compatibilidad Oficial
                </div>
                <h2 className="text-center text-xs md:text-sm font-semibold font-heading text-neutral-500 uppercase tracking-widest mb-6">
                  Formatos y previsualización para todas tus redes sociales
                </h2>

                {/* Infinite monochrome social platforms carousel */}
                <SocialPlatforms />
              </div>
            </div>
          </AnimationContainer>
        </MaxWidthWrapper>

        {/* ================= INTERACTIVE CONTENT STUDIO & LIVE PREVIEW ================= */}
        <MaxWidthWrapper className="pt-20" id="preview">
          <AnimationContainer delay={0.1}>
            <div className="flex flex-col w-full items-center justify-center text-center py-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-violet-50 text-violet-700 text-xs font-bold uppercase tracking-wider mb-2 border border-violet-200/70 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-violet-600" />
                BeSello Studio
              </div>
              <h2 className="text-3xl md:text-5xl !leading-[1.15] font-bold font-heading text-neutral-950 mt-2 tracking-tight">
                BeSello Studio: Previsualizador y editor de contenido en vivo
              </h2>
              <p className="mt-3 text-base text-neutral-600 max-w-xl leading-relaxed">
                Escribe el texto de tu publicación, cambia la imagen y comprueba cómo tu cliente puede aprobar o solicitar ajustes directamente mediante un enlace privado sin contraseñas.
              </p>
            </div>
          </AnimationContainer>

          <AnimationContainer delay={0.2}>
            <ContentStudioPreview />
          </AnimationContainer>
        </MaxWidthWrapper>

        {/* ================= FEATURES SECTION & BENTO GRID ================= */}
        <MaxWidthWrapper className="pt-24" id="features">
          <AnimationContainer delay={0.1}>
            <div className="flex flex-col w-full items-center justify-center text-center py-8">
              <MagicBadge title="Calendario Multicanal" />
              <h2 className="text-3xl md:text-5xl !leading-[1.15] font-bold font-heading text-neutral-950 mt-6 tracking-tight">
                Control total del contenido de tus clientes
              </h2>
              <p className="mt-4 text-base md:text-lg text-neutral-600 max-w-lg leading-relaxed">
                BeSello es el sistema de planeación que reemplaza las hojas de cálculo y los correos interminables por una experiencia profesional y colaborativa.
              </p>
            </div>
          </AnimationContainer>

          <AnimationContainer delay={0.2}>
            <BentoGrid className="py-8">
              {CARDS.map((feature, idx) => (
                <BentoCard key={idx} {...feature} />
              ))}
            </BentoGrid>
          </AnimationContainer>
        </MaxWidthWrapper>

        {/* ================= PROCESS SECTION (ATTIO-STYLE ANIMATED PATH WORKFLOW) ================= */}
        <MaxWidthWrapper className="py-20" id="process">
          <AnimationContainer delay={0.1}>
            <div className="flex flex-col items-center justify-center text-center w-full py-8 max-w-xl mx-auto">
              <MagicBadge title="Flujo Automatizado" />
              <h2 className="text-3xl md:text-5xl !leading-[1.15] font-bold font-heading text-neutral-950 mt-6 tracking-tight">
                El camino de tu contenido paso a paso
              </h2>
              <p className="mt-4 text-base md:text-lg text-neutral-600 max-w-lg leading-relaxed">
                Desde la primera idea hasta la aprobación final: un flujo transparente y sincronizado que conecta a tu equipo creativo con cada cliente.
              </p>
            </div>
          </AnimationContainer>

          <AnimationContainer delay={0.2}>
            <AttioWorkflowSection />
          </AnimationContainer>
        </MaxWidthWrapper>

        {/* ================= PRICING SECTION ================= */}
        <MaxWidthWrapper className="py-16" id="pricing">
          <AnimationContainer delay={0.1}>
            <div className="flex flex-col items-center justify-center text-center w-full py-8 max-w-xl mx-auto">
              <MagicBadge title="Planes Flexibles" />
              <h2 className="text-3xl md:text-5xl !leading-[1.15] font-bold font-heading text-neutral-950 mt-6 tracking-tight">
                Elige el plan ideal para tu proyecto
              </h2>
              <p className="mt-4 text-base md:text-lg text-neutral-600 max-w-lg leading-relaxed">
                Desde creadores e influencers hasta freelancers, equipos de marketing y agencias. Todos los planes mensuales y sin compromisos.
              </p>
            </div>
          </AnimationContainer>

          <AnimationContainer delay={0.2}>
            <PricingCards />
          </AnimationContainer>

          <AnimationContainer delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 max-w-5xl mx-auto w-full">
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <CreditCardIcon className="w-4 h-4 text-[#7C3AED]" />
                <span>Plan Gratis permanente · Sin tarjeta de crédito requerida</span>
              </div>
            </div>
          </AnimationContainer>
        </MaxWidthWrapper>

        {/* ================= REVIEWS SECTION ================= */}
        <MaxWidthWrapper className="py-16" id="reviews">
          <AnimationContainer delay={0.1}>
            <div className="flex flex-col items-center justify-center text-center w-full py-8 max-w-xl mx-auto">
              <MagicBadge title="Casos de Éxito" />
              <h2 className="text-3xl md:text-5xl !leading-[1.15] font-bold font-heading text-neutral-950 mt-6 tracking-tight">
                Lo que dicen creadores, marcas y agencias
              </h2>
              <p className="mt-4 text-base md:text-lg text-neutral-600 max-w-lg leading-relaxed">
                Descubre cómo creadores, equipos de marketing y profesionales del contenido han optimizado su flujo con BeSello.
              </p>
            </div>
          </AnimationContainer>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            {REVIEWS.map((review, index) => (
              <AnimationContainer delay={0.15 * index} key={index} className="w-full h-full">
                <MagicCard className="w-full h-full p-6 flex flex-col justify-between">
                  <Card className="flex flex-col w-full h-full border-none shadow-none bg-transparent justify-between">
                    <div>
                      <CardHeader className="p-0 space-y-0.5">
                        <CardTitle className="text-base font-semibold text-neutral-900">
                          {review.name}
                        </CardTitle>
                        <CardDescription className="text-xs text-[#7C3AED] font-semibold">
                          {review.username}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-0 py-3.5">
                        <p className="text-neutral-600 text-sm leading-relaxed">
                          "{review.review}"
                        </p>
                      </CardContent>
                    </div>
                    <CardFooter className="p-0 space-x-1 pt-2">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <StarIcon
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </CardFooter>
                  </Card>
                </MagicCard>
              </AnimationContainer>
            ))}
          </div>
        </MaxWidthWrapper>

        {/* ================= AGENCY BESPOKE CTA BANNER (REPLACES LAMP CLONE) ================= */}
        <MaxWidthWrapper className="mt-8 mb-20">
          <AnimationContainer delay={0.1}>
            <AgencyCtaSection onOpenAuth={() => setAuthOpen(true)} />
          </AnimationContainer>
        </MaxWidthWrapper>
      </GridBackground>

      {/* Footer */}
      <Footer />

      {/* Auth Modal for Sign In / Sign Up triggers */}
      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        projectName="BeSello"
      />
    </div>
  );
}

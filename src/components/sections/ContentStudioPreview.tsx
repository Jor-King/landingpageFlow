import React, { useState } from "react";
import {
  Globe,
  MoreHorizontal,
  X,
  ThumbsUp,
  MessageCircle,
  Share2,
  CheckCircle2,
  Image as ImageIcon,
  RotateCcw,
  Link as LinkIcon,
  Check,
  AlertCircle,
  Sparkles,
  Smartphone,
  Monitor,
  ShieldCheck,
  Layers,
  Wand2,
  Copy,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BeSelloIcon } from "@/components/ui/BeSelloLogo";

const PHOTO_PRESETS = [
  {
    id: "editorial",
    title: "Estudio & Minimalismo",
    url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "architecture",
    title: "Diseño & Espacio",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "lifestyle",
    title: "Café & Gastronomía",
    url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "urban",
    title: "Moda & Tendencias",
    url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
  },
];

const TEXT_PRESETS = [
  {
    label: "Lanzamiento 2026",
    text: "Presentamos oficialmente la nueva colección de temporada. Diseñada para inspirar, conectar y transformar tu día a día con piezas atemporales. Descubre el catálogo completo en nuestra web oficial.",
  },
  {
    label: "Caso de Éxito",
    text: "Cómo logramos incrementar un 140% las conversiones orgánicas en solo 90 días para nuestro cliente. Menos improvisación, mejor planificación y un flujo de aprobación transparente en cada entrega.",
  },
  {
    label: "Tip Estratégico",
    text: "El error más común al gestionar marcas en redes: trabajar sin un calendario centralizado. Cuando tu equipo y tus clientes revisan todo en un solo lugar, los tiempos de entrega se reducen a la mitad.",
  },
];

const AI_SUGGESTIONS = [
  "✨ La consistencia visual construye marcas memorables. Cada entrega de este mes refleja la esencia de tu identidad con producción de alto impacto.",
  "🚀 ¿Listo para elevar el estándar de tu contenido? Te presentamos la propuesta mensual validada con estrategias enfocadas en retención y engagement.",
  "💡 Innovación en cada formato. Desde publicaciones estáticas hasta reels dinámicos, este mes diseñamos experiencias que conectan directamente con tu audiencia.",
];

export const ContentStudioPreview: React.FC = () => {
  // Studio state
  const [pageName, setPageName] = useState("BeSello Studio");
  const [postText, setPostText] = useState(
    "Descubre nuestra metodología para escalar la visibilidad de tu marca en redes sociales este 2026. Planifica calendarios mensuales, previsualiza en nativo y aprueba formalmente con tus clientes mediante enlace privado."
  );
  const [selectedPhoto, setSelectedPhoto] = useState(PHOTO_PRESETS[0].url);
  const [customPhotoUrl, setCustomPhotoUrl] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1420);

  // Studio inspector tabs & device preview
  const [selectedNetwork, setSelectedNetwork] = useState<"Instagram" | "LinkedIn" | "TikTok">("Instagram");
  const [deviceMode, setDeviceMode] = useState<"mobile" | "desktop">("mobile");
  const [aiGenerating, setAiGenerating] = useState(false);

  // Client decision state
  const [approvalStatus, setApprovalStatus] = useState<"pending" | "approved" | "rejected">("pending");
  const [feedbackNote, setFeedbackNote] = useState("");
  const [showNoteInput, setShowNoteInput] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount((prev) => prev - 1);
      setIsLiked(false);
    } else {
      setLikeCount((prev) => prev + 1);
      setIsLiked(true);
    }
  };

  const handleApplyCustomUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (customPhotoUrl.trim()) {
      setSelectedPhoto(customPhotoUrl.trim());
    }
  };

  const handleGenerateAiCopy = () => {
    setAiGenerating(true);
    setTimeout(() => {
      const randomSuggestion = AI_SUGGESTIONS[Math.floor(Math.random() * AI_SUGGESTIONS.length)];
      setPostText(randomSuggestion);
      setAiGenerating(false);
    }, 450);
  };

  const handleReset = () => {
    setPageName("BeSello Studio");
    setPostText(
      "Descubre nuestra metodología para escalar la visibilidad de tu marca en redes sociales este 2026. Planifica calendarios mensuales, previsualiza en nativo y aprueba formalmente con tus clientes mediante enlace privado."
    );
    setSelectedPhoto(PHOTO_PRESETS[0].url);
    setCustomPhotoUrl("");
    setSelectedNetwork("Instagram");
    setDeviceMode("mobile");
    setIsLiked(false);
    setLikeCount(1420);
    setApprovalStatus("pending");
    setShowNoteInput(false);
    setFeedbackNote("");
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      {/* ================= UNIFIED COMPLETE STUDIO DESKTOP WORKSPACE ================= */}
      <div className="w-full rounded-2xl md:rounded-3xl border border-neutral-200/90 bg-white shadow-2xl shadow-neutral-900/10 overflow-hidden select-none">
        {/* Studio Window Chrome / Title Bar */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 border-b border-neutral-200 bg-neutral-900 text-white gap-3">
          {/* Left: Window Dots & Studio Identity */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="h-4 w-[1px] bg-neutral-700 hidden sm:block" />
            <div className="flex items-center gap-2">
              <BeSelloIcon className="w-5 h-5 rounded-md shrink-0" />
              <span className="text-xs font-bold font-heading text-white tracking-wide">
                BeSello Studio
              </span>
              <span className="text-neutral-500 text-xs hidden sm:inline">/</span>
              <span className="text-xs text-neutral-300 font-mono hidden sm:inline truncate max-w-[180px]">
                {pageName} · Campaña 2026
              </span>
            </div>
          </div>

          {/* Center: Live Sync Badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800/80 border border-neutral-700/60 text-[11px] text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Sincronización en tiempo real</span>
          </div>

          {/* Right: Quick Studio Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden lg:flex items-center gap-1.5 text-[11px] font-mono text-neutral-400 bg-neutral-800 px-2.5 py-1 rounded-lg border border-neutral-700/50">
              <LinkIcon className="w-3 h-3 text-[#00C4FF]" />
              <span>besello.com/p/{pageName.toLowerCase().replace(/\s+/g, "-")}</span>
            </div>
            <button
              onClick={handleReset}
              className="text-neutral-300 hover:text-white text-xs flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors cursor-pointer border border-neutral-700/60"
              title="Restablecer valores originales"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restablecer</span>
            </button>
          </div>
        </div>

        {/* Studio Sub-Header: Studio Network & Format Selector */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-2.5 bg-neutral-50/80 border-b border-neutral-200/80 text-xs gap-3">
          {/* Format Tabs */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mr-1 hidden sm:inline">
              Formato:
            </span>
            {(["Instagram", "LinkedIn", "TikTok"] as const).map((net) => (
              <button
                key={net}
                type="button"
                onClick={() => setSelectedNetwork(net)}
                className={cn(
                  "px-3 py-1 rounded-lg font-medium text-xs transition-colors cursor-pointer",
                  selectedNetwork === net
                    ? "bg-neutral-900 text-white font-semibold shadow-xs"
                    : "text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/60"
                )}
              >
                {net}
              </button>
            ))}
          </div>

          {/* Stage View Controls */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-neutral-200/70 p-0.5 rounded-lg">
              <button
                type="button"
                onClick={() => setDeviceMode("mobile")}
                className={cn(
                  "p-1 rounded-md transition-colors cursor-pointer",
                  deviceMode === "mobile" ? "bg-white text-neutral-900 shadow-2xs" : "text-neutral-500 hover:text-neutral-800"
                )}
                title="Vista Móvil"
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setDeviceMode("desktop")}
                className={cn(
                  "p-1 rounded-md transition-colors cursor-pointer",
                  deviceMode === "desktop" ? "bg-white text-neutral-900 shadow-2xs" : "text-neutral-500 hover:text-neutral-800"
                )}
                title="Vista Escritorio"
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
            </div>
            <span className="text-[11px] text-neutral-400 font-mono hidden sm:inline">1080×1350 px</span>
          </div>
        </div>

        {/* Workstation Main Body: Integrated Dual-Pane Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
          {/* ================= LEFT PANE: STUDIO INSPECTOR & TOOLS ================= */}
          <div className="lg:col-span-5 p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-neutral-200 bg-white flex flex-col justify-between gap-6">
            <div className="space-y-5">
              {/* Brand Name Input */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-neutral-900 uppercase tracking-wider font-heading">
                    Marca o Cliente
                  </label>
                  <span className="text-[10px] text-neutral-400 font-mono">Nombre oficial</span>
                </div>
                <input
                  type="text"
                  value={pageName}
                  onChange={(e) => setPageName(e.target.value)}
                  placeholder="BeSello Studio"
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50/60 text-neutral-900 focus:outline-none focus:border-violet-500 focus:bg-white transition-colors font-medium"
                />
              </div>

              {/* Post Textarea with AI Generation Action */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-neutral-900 uppercase tracking-wider font-heading">
                    Texto de la Publicación
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleGenerateAiCopy}
                      disabled={aiGenerating}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-violet-700 bg-violet-50 hover:bg-violet-100 border border-violet-200/80 px-2 py-0.5 rounded-lg transition-colors cursor-pointer"
                      title="Generar nueva propuesta con IA"
                    >
                      <Sparkles className={cn("w-3 h-3 text-violet-600", aiGenerating && "animate-spin")} />
                      <span>{aiGenerating ? "Generando..." : "Asistente IA"}</span>
                    </button>
                    <span className="text-[10px] text-neutral-400 font-mono">
                      {postText.length} car.
                    </span>
                  </div>
                </div>

                <textarea
                  rows={4}
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                  placeholder="Escribe aquí el texto de tu publicación..."
                  className="w-full text-xs p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/60 text-neutral-900 focus:outline-none focus:border-violet-500 focus:bg-white transition-colors resize-none leading-relaxed"
                />

                {/* Quick Inspiration Chips */}
                <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                  <span className="text-[10px] text-neutral-400 font-medium">Ejemplos:</span>
                  {TEXT_PRESETS.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => setPostText(preset.text)}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-neutral-100 hover:bg-violet-50 hover:text-violet-700 text-neutral-600 transition-colors cursor-pointer"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Visual Media Presets */}
              <div className="space-y-2.5 pt-3 border-t border-neutral-100">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-neutral-900 uppercase tracking-wider font-heading flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Imagen de la Publicación</span>
                  </label>
                  <span className="text-[10px] text-neutral-400">4 presets</span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {PHOTO_PRESETS.map((photo) => (
                    <button
                      key={photo.id}
                      type="button"
                      onClick={() => setSelectedPhoto(photo.url)}
                      className={cn(
                        "relative aspect-square rounded-xl overflow-hidden border-2 transition-all cursor-pointer group",
                        selectedPhoto === photo.url
                          ? "border-[#7C3AED] ring-2 ring-[#7C3AED]/20 scale-102"
                          : "border-neutral-200 hover:border-neutral-400 opacity-80 hover:opacity-100"
                      )}
                      title={photo.title}
                    >
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      {selectedPhoto === photo.url && (
                        <div className="absolute inset-0 bg-[#7C3AED]/25 flex items-center justify-center">
                          <Check className="w-4 h-4 text-white stroke-[3] drop-shadow-md" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Custom URL Option */}
                <form onSubmit={handleApplyCustomUrl} className="flex gap-1.5 pt-1">
                  <input
                    type="url"
                    value={customPhotoUrl}
                    onChange={(e) => setCustomPhotoUrl(e.target.value)}
                    placeholder="O pega una URL de imagen externa..."
                    className="flex-1 text-[11px] px-3 py-1.5 rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-violet-500"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-[11px] font-semibold transition-colors shrink-0 cursor-pointer"
                  >
                    Cargar
                  </button>
                </form>
              </div>
            </div>

            {/* Studio Workspace Tip */}
            <div className="p-3 rounded-xl bg-violet-50/60 border border-violet-100 text-[11px] text-violet-900 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
              <p className="leading-snug">
                <strong>Estudio en tiempo real:</strong> Los cambios que realices aquí se reflejan al instante en la vista que tu cliente examina en su enlace privado.
              </p>
            </div>
          </div>

          {/* ================= RIGHT PANE: LIVE CANVAS & STAGE ================= */}
          <div className="lg:col-span-7 bg-neutral-100/70 p-5 sm:p-8 flex flex-col items-center justify-between gap-6">
            {/* The Native Feed Post Card Preview */}
            <div
              className={cn(
                "w-full rounded-2xl border border-neutral-200/90 bg-white shadow-xl shadow-neutral-900/5 overflow-hidden text-neutral-900 transition-all select-none",
                deviceMode === "mobile" ? "max-w-[440px]" : "max-w-[520px]"
              )}
            >
              {/* Native Post Header */}
              <div className="p-3.5 pb-2.5 flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <BeSelloIcon className="w-10 h-10 rounded-full" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-neutral-900 hover:underline cursor-pointer leading-tight">
                        {pageName || "BeSello Studio"}
                      </span>
                      {/* Official Verified Badge SVG */}
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#1877F2] shrink-0">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.2 14.2l-3.5-3.5 1.4-1.4 2.1 2.1 5.3-5.3 1.4 1.4-6.7 6.7z" />
                      </svg>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-neutral-500 mt-0.5 leading-none">
                      <span>Hace 15 min</span>
                      <span>·</span>
                      <Globe className="w-3 h-3 text-neutral-400" />
                    </div>
                  </div>
                </div>

                {/* Post Options */}
                <div className="flex items-center gap-1 text-neutral-400">
                  <button
                    type="button"
                    className="p-1.5 rounded-full hover:bg-neutral-100 hover:text-neutral-700 transition-colors"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    className="p-1.5 rounded-full hover:bg-neutral-100 hover:text-neutral-700 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Native Post Text */}
              <div className="px-3.5 pt-1 pb-3 text-xs md:text-[13px] text-neutral-900 leading-relaxed break-words whitespace-pre-line">
                {postText || "Escribe el texto de tu publicación en el panel lateral..."}
              </div>

              {/* Native Post Media Image */}
              <div className="w-full aspect-[4/3] bg-neutral-950 overflow-hidden relative group">
                <img
                  src={selectedPhoto}
                  alt="Post Media Preview"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Engagement Stats Bar */}
              <div className="px-3.5 py-2 flex items-center justify-between text-[11px] text-neutral-500 border-b border-neutral-100">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-2xs">
                    <ThumbsUp className="w-2.5 h-2.5 fill-white" />
                  </div>
                  <span className="font-medium text-neutral-700">{likeCount.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>84 comentarios</span>
                  <span>19 compartidos</span>
                </div>
              </div>

              {/* Interactive Engagement Action Buttons */}
              <div className="px-2 py-1.5 flex items-center justify-around text-neutral-600 text-xs font-semibold">
                <button
                  type="button"
                  onClick={handleLike}
                  className={cn(
                    "flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer",
                    isLiked ? "text-[#1877F2] bg-blue-50/60 font-bold" : "hover:bg-neutral-100 text-neutral-600"
                  )}
                >
                  <ThumbsUp className={cn("w-4 h-4", isLiked && "fill-[#1877F2]")} />
                  <span>Me gusta</span>
                </button>

                <button
                  type="button"
                  className="flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 hover:bg-neutral-100 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Comentar</span>
                </button>

                <button
                  type="button"
                  className="flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 hover:bg-neutral-100 transition-colors cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Compartir</span>
                </button>
              </div>
            </div>

            {/* ================= SEAMLESS INTEGRATED CLIENT APPROVAL DOCK ================= */}
            <div
              className={cn(
                "w-full rounded-2xl border border-neutral-200/90 bg-white p-4 shadow-lg shadow-neutral-900/5 space-y-3",
                deviceMode === "mobile" ? "max-w-[440px]" : "max-w-[520px]"
              )}
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-neutral-900 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                  Validación del Cliente
                </span>
                <span className="text-[11px] text-neutral-500 font-medium">
                  {approvalStatus === "approved" ? "Estado: Aprobado" : "Decisión formal sin registro"}
                </span>
              </div>

              {/* Decision Action Buttons */}
              {approvalStatus === "pending" && !showNoteInput && (
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => setApprovalStatus("approved")}
                    className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Aprobar Publicación</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowNoteInput(true)}
                    className="py-2.5 px-4 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold flex items-center justify-center gap-2 border border-neutral-200 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4 text-neutral-500" />
                    <span>Solicitar Ajuste</span>
                  </button>
                </div>
              )}

              {/* Note Input */}
              {showNoteInput && approvalStatus === "pending" && (
                <div className="space-y-2 pt-1 animate-in fade-in duration-200">
                  <textarea
                    rows={2}
                    value={feedbackNote}
                    onChange={(e) => setFeedbackNote(e.target.value)}
                    placeholder="Escribe el cambio sugerido (ej: ajustar texto, corregir hashtag o fecha)..."
                    className="w-full text-xs p-2.5 rounded-xl border border-amber-300 bg-amber-50/40 text-neutral-800 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors resize-none leading-relaxed"
                  />
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setShowNoteInput(false)}
                      className="text-xs text-neutral-500 hover:text-neutral-800 font-medium cursor-pointer"
                    >
                      Cancelar
                    </button>
                    <button
                      type="button"
                      onClick={() => setApprovalStatus("rejected")}
                      className="px-3.5 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Enviar Notas de Ajuste
                    </button>
                  </div>
                </div>
              )}

              {/* Approved Banner */}
              {approvalStatus === "approved" && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-3 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-xs text-emerald-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>¡Aprobación concedida! Contenido sellado formalmente y listo para publicar.</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setApprovalStatus("pending")}
                    className="text-[11px] font-semibold text-emerald-700 hover:underline shrink-0 cursor-pointer"
                  >
                    Deshacer
                  </button>
                </div>
              )}

              {/* Adjustments Requested Banner */}
              {approvalStatus === "rejected" && (
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between gap-3 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-xs text-amber-800 font-medium">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Ajustes solicitados. Tu equipo recibe la notificación inmediata con los comentarios.</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setApprovalStatus("pending");
                      setShowNoteInput(false);
                    }}
                    className="text-[11px] font-semibold text-amber-700 hover:underline shrink-0 cursor-pointer"
                  >
                    Volver a revisar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStudioPreview;

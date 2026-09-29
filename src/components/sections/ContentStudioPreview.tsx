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
} from "lucide-react";
import { cn } from "@/lib/utils";

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

const COPY_PRESETS = [
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
    text: "El error más común al gestionar marcas en redes: publicar sin un calendario centralizado. Cuando tu equipo y tus clientes revisan todo en un solo lugar, los tiempos de entrega se reducen a la mitad.",
  },
];

export const ContentStudioPreview: React.FC = () => {
  // State for live editor
  const [pageName, setPageName] = useState("Velvet Studio");
  const [postText, setPostText] = useState(
    "Descubre nuestra metodología para escalar la visibilidad de tu marca en redes sociales este 2026. Planifica parrillas mensuales, previsualiza en nativo y aprueba con tus clientes en 1 clic."
  );
  const [selectedPhoto, setSelectedPhoto] = useState(PHOTO_PRESETS[0].url);
  const [customPhotoUrl, setCustomPhotoUrl] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1420);

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

  const handleReset = () => {
    setPageName("Velvet Studio");
    setPostText(
      "Descubre nuestra metodología para escalar la visibilidad de tu marca en redes sociales este 2026. Planifica parrillas mensuales, previsualiza en nativo y aprueba con tus clientes en 1 clic."
    );
    setSelectedPhoto(PHOTO_PRESETS[0].url);
    setCustomPhotoUrl("");
    setIsLiked(false);
    setLikeCount(1420);
    setApprovalStatus("pending");
    setShowNoteInput(false);
    setFeedbackNote("");
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ================= LEFT COLUMN: THE REAL-TIME EDITOR ================= */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          <div className="rounded-3xl border border-neutral-200/90 bg-white p-6 shadow-sm space-y-5">
            {/* Editor Header */}
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-xs font-bold text-neutral-900 font-heading uppercase tracking-wider">
                  Editor de Publicación
                </span>
              </div>
              <button
                onClick={handleReset}
                className="text-neutral-400 hover:text-neutral-700 text-xs flex items-center gap-1 transition-colors cursor-pointer"
                title="Restablecer valores"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restablecer</span>
              </button>
            </div>

            {/* Brand / Client Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-700">
                Nombre de la Marca o Cliente
              </label>
              <input
                type="text"
                value={pageName}
                onChange={(e) => setPageName(e.target.value)}
                placeholder="Escribe el nombre de tu marca o cliente"
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50/60 text-neutral-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
              />
            </div>

            {/* Copy / Post Text Body */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-neutral-700">
                  Texto del Post (Copywriting)
                </label>
                <span className="text-[10px] text-neutral-400 font-mono">
                  {postText.length} caracteres
                </span>
              </div>

              <textarea
                rows={4}
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                placeholder="Escribe aquí el copy de tu publicación..."
                className="w-full text-xs p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/60 text-neutral-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors resize-none leading-relaxed"
              />

              {/* Quick Preset Buttons */}
              <div className="flex items-center gap-1.5 flex-wrap pt-1">
                <span className="text-[10px] text-neutral-400 font-medium">Ejemplos rápidos:</span>
                {COPY_PRESETS.map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => setPostText(preset.text)}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-neutral-100 hover:bg-blue-50 hover:text-blue-600 text-neutral-600 transition-colors cursor-pointer"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Image Selector & Gallery Presets */}
            <div className="space-y-2.5 pt-2 border-t border-neutral-100">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-neutral-700 flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-blue-600" />
                  <span>Imagen de la Publicación</span>
                </label>
                <span className="text-[10px] text-neutral-400">Selecciona o pega una URL</span>
              </div>

              {/* 4 Photo Presets */}
              <div className="grid grid-cols-4 gap-2">
                {PHOTO_PRESETS.map((photo) => {
                  const isSelected = selectedPhoto === photo.url;
                  return (
                    <button
                      key={photo.id}
                      type="button"
                      onClick={() => setSelectedPhoto(photo.url)}
                      className={cn(
                        "relative aspect-video rounded-xl overflow-hidden border-2 transition-all cursor-pointer group",
                        isSelected
                          ? "border-blue-600 shadow-md ring-2 ring-blue-500/20 scale-[1.02]"
                          : "border-neutral-200 opacity-70 hover:opacity-100"
                      )}
                    >
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover"
                      />
                      {isSelected && (
                        <div className="absolute inset-0 bg-blue-600/20 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center text-white">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Custom Image URL input */}
              <form onSubmit={handleApplyCustomUrl} className="flex gap-2 pt-1">
                <div className="relative flex-1">
                  <LinkIcon className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="url"
                    value={customPhotoUrl}
                    onChange={(e) => setCustomPhotoUrl(e.target.value)}
                    placeholder="O pega aquí la URL de tu propia imagen..."
                    className="w-full text-xs pl-8 pr-3 py-2 rounded-xl border border-neutral-200 bg-neutral-50/60 text-neutral-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white transition-colors cursor-pointer shrink-0"
                >
                  Aplicar
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: NATIVE FEED PREVIEW & CLIENT APPROVAL DOCK ================= */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center space-y-4">
          {/* Social Media Post Card */}
          <div className="w-full max-w-[540px] rounded-2xl border border-neutral-200/90 bg-white shadow-xl shadow-neutral-900/5 overflow-hidden text-neutral-900 transition-all select-none">
            {/* Header */}
            <div className="p-3.5 pb-2.5 flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                    alt="Page Avatar"
                    className="w-10 h-10 rounded-full object-cover border border-neutral-200"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-neutral-900 hover:underline cursor-pointer leading-tight">
                      {pageName || "Tu Marca"}
                    </span>
                    {/* Official Blue Verified Badge SVG */}
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

              {/* Controls */}
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

            {/* Post Text Body */}
            <div className="px-3.5 pt-1 pb-3 text-xs md:text-[13px] text-neutral-900 leading-relaxed break-words whitespace-pre-line">
              {postText || "Escribe el copy de tu publicación en el panel lateral..."}
            </div>

            {/* Post Media (Image) */}
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
                <div className="w-4 h-4 rounded-full bg-[#FA3E3E] -ml-2.5 flex items-center justify-center text-white shadow-2xs ring-1 ring-white">
                  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-white">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <span className="font-medium text-neutral-700 ml-0.5">
                  {likeCount.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="hover:underline cursor-pointer">86 comentarios</span>
                <span>·</span>
                <span className="hover:underline cursor-pointer">24 veces compartido</span>
              </div>
            </div>

            {/* Action Buttons Bar */}
            <div className="px-2 py-1 flex items-center justify-between text-xs font-semibold text-neutral-600">
              <button
                type="button"
                onClick={handleLike}
                className={cn(
                  "flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer",
                  isLiked ? "text-[#1877F2]" : "text-neutral-600 hover:text-neutral-900"
                )}
              >
                <ThumbsUp
                  className={cn(
                    "w-4 h-4 transition-transform active:scale-125",
                    isLiked && "fill-[#1877F2]"
                  )}
                />
                <span>Me gusta</span>
              </button>

              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Comentar</span>
              </button>

              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>Compartir</span>
              </button>
            </div>
          </div>

          {/* ================= CLIENT DECISION DOCK (THE LINK APPROVAL EXPERIENCE) ================= */}
          <div className="w-full max-w-[540px] rounded-2xl border border-neutral-200/90 bg-white p-4 shadow-lg shadow-neutral-900/5 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-neutral-900 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                Panel de Decisión del Cliente
              </span>
              <span className="text-[11px] text-neutral-400">
                Tu cliente entra al enlace y decide en 1 clic:
              </span>
            </div>

            {/* Decision Status Banners or Action Buttons */}
            {approvalStatus === "pending" && !showNoteInput && (
              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setApprovalStatus("approved")}
                  className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
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

            {approvalStatus === "approved" && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-3 animate-in fade-in duration-200">
                <div className="flex items-center gap-2 text-xs text-emerald-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>¡Publicación autorizada! Contenido aprobado y listo para su publicación.</span>
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
  );
};

export default ContentStudioPreview;

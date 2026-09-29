export const REVIEWS = [
  {
    name: "Carolina Méndez",
    username: "@carolina_agencymx",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    review:
      "Cambió radicalmente la dinámica con nuestros 14 clientes. Las aprobaciones que antes tardaban 3 días ahora se hacen en 20 minutos.",
  },
  {
    name: "Mateo Silva",
    username: "@mateo_growth",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    review:
      "Tener Instagram, TikTok, Facebook y LinkedIn en un solo tablero con vista mensual nos ahorra fácilmente 15 horas a la semana por community manager.",
  },
  {
    name: "Valentina Restrepo",
    username: "@valen_digital",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
    review:
      "Nuestros clientes adoran la vista de aprobación interactiva. No más hilos interminables de WhatsApp ni versiones perdidas en carpetas de Drive.",
  },
] as const;

export const PLANS = [
  {
    name: "Freelance",
    info: "Para creadores y consultores independientes",
    price: {
      monthly: 19,
      yearly: Math.round(19 * 12 * (1 - 0.12)),
    },
    features: [
      { text: "Hasta 3 marcas o clientes" },
      { text: "Calendario visual ilimitado" },
      { text: "Facebook, Instagram & LinkedIn" },
      { text: "Enlaces de aprobación para clientes" },
      { text: "Soporte estándar" },
      { text: "50 sugerencias de IA al mes" },
    ],
    btn: {
      text: "Comenzar gratis",
      href: "#pricing",
      variant: "default",
    },
  },
  {
    name: "Flow Pro",
    info: "Para creadores, freelancers y marcas en crecimiento",
    price: {
      monthly: 49,
      yearly: Math.round(49 * 12 * (1 - 0.12)),
    },
    features: [
      { text: "Hasta 15 marcas o cuentas activas" },
      { text: "Las 6 redes sociales completas" },
      { text: "TikTok, YouTube & WhatsApp incluidos" },
      { text: "Aprobaciones ilimitadas en 1 clic" },
      { text: "Espacios de trabajo independientes" },
      { text: "AI Copywriter & sugerencias ilimitadas" },
      { text: "Soporte prioritario 24/7" },
    ],
    btn: {
      text: "Probar Flow Pro",
      href: "#pricing",
      variant: "purple",
    },
  },
  {
    name: "Flow Scale",
    info: "Para equipos de marketing, empresas y agencias",
    price: {
      monthly: 119,
      yearly: Math.round(119 * 12 * (1 - 0.12)),
    },
    features: [
      { text: "Marcas y cuentas ilimitadas" },
      { text: "Todas las redes sociales sin límite" },
      { text: "Roles de equipo y permisos avanzados" },
      { text: "Portal de revisión personalizado" },
      { text: "Reportes automatizados completos" },
      { text: "Account manager dedicado" },
      { text: "Integración con API y Webhooks" },
    ],
    btn: {
      text: "Contactar ventas",
      href: "#pricing",
      variant: "default",
    },
  },
] as const;

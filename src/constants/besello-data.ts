export const APP_NAME = "BeSello";

export const REVIEWS = [
  {
    name: "Carolina Méndez",
    username: "@carolina_agencymx",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    review:
      "Cambió radicalmente la dinámica con nuestros 14 clientes. Las aprobaciones que antes tardaban 3 días ahora se hacen en 20 minutos con el link de BeSello.",
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
      "Nuestros clientes adoran el link de aprobación sin contraseñas. Cada entrega queda sellada con respaldo digital formal.",
  },
] as const;

export const PLANS = [
  {
    name: "Gratis",
    info: "Para probar sin compromiso",
    price: 0,
    priceCop: "COP 0",
    period: "Para siempre",
    badge: "Sin costo",
    popular: false,
    features: [
      { text: "1 marca · 1 usuario" },
      { text: "30 posts al mes" },
      { text: "1 GB de almacenamiento" },
      { text: "Máximo 50 MB por archivo" },
      { text: "Video 720p · Historial 3 meses" },
      { text: "Link de aprobación con marca BeSello" },
      { text: "10 publicaciones con IA al mes" },
    ],
    btn: {
      text: "Empezar gratis",
      href: "#pricing",
      variant: "outline",
    },
  },
  {
    name: "Solo",
    info: "Freelancers y creadores",
    price: 12,
    priceCop: "COP 39.000",
    period: "USD al mes",
    badge: undefined,
    popular: false,
    features: [
      { text: "3 marcas · 1 usuario" },
      { text: "Posts ilimitados" },
      { text: "25 GB de almacenamiento" },
      { text: "Máximo 250 MB por archivo · 1080p" },
      { text: "Link de aprobación sin marca BeSello" },
      { text: "Comentarios sobre imagen o video" },
      { text: "100 publicaciones con IA al mes" },
    ],
    btn: {
      text: "Elegir Solo",
      href: "#pricing",
      variant: "default",
    },
  },
  {
    name: "Estudio",
    info: "CM con varios clientes",
    price: 29,
    priceCop: "COP 95.000",
    period: "USD al mes",
    badge: "Recomendado",
    popular: true,
    features: [
      { text: "10 marcas · 3 usuarios de equipo" },
      { text: "Posts ilimitados" },
      { text: "100 GB de almacenamiento" },
      { text: "Máximo 1 GB por archivo · 1080p" },
      { text: "Historial de versiones y reportes PDF" },
      { text: "Roles y permisos básicos" },
      { text: "500 publicaciones con IA al mes" },
    ],
    btn: {
      text: "Elegir Estudio",
      href: "#pricing",
      variant: "primary",
    },
  },
  {
    name: "Agencia",
    info: "Agencias y equipos",
    price: 79,
    priceCop: "COP 259.000",
    period: "USD al mes",
    badge: "Todo ilimitado",
    popular: false,
    features: [
      { text: "30 marcas · 10 usuarios de equipo" },
      { text: "Posts ilimitados" },
      { text: "500 GB de almacenamiento" },
      { text: "Calidad de video original hasta 4K" },
      { text: "Roles y permisos avanzados" },
      { text: "Portal con tu logo y dominio propio" },
      { text: "Soporte prioritario por WhatsApp" },
      { text: "2.000 publicaciones con IA al mes" },
    ],
    btn: {
      text: "Elegir Agencia",
      href: "#pricing",
      variant: "default",
    },
  },
] as const;

export const ADDONS = [
  {
    title: "Marca adicional",
    price: "$4 /mes",
    description: "Suma un cliente nuevo sin saltar al siguiente plan.",
    extra: "+500 publicaciones con IA: $3 al mes",
  },
  {
    title: "Más almacenamiento",
    price: "Desde $3 /mes",
    description: "Solo: +50 GB ($3/mes) · Estudio: +100 GB ($4/mes) · Agencia: +250 GB ($8/mes)",
    extra: "Te avisamos automáticamente al llegar al 80%.",
  },
] as const;

export const COMPETITOR_COMPARISON = [
  {
    name: "Metricool",
    note: "La función de aprobación formal de clientes requiere su plan Advanced (desde €43/mes), convirtiendo la validación en un costo corporativo.",
    isBeSello: false,
  },
  {
    name: "Planable",
    note: "Facturación desde $33/mes por cada espacio de trabajo individual sin opción de plan gratuito permanente, encareciendo la escala.",
    isBeSello: false,
  },
  {
    name: "BeSello",
    note: "Aprobación formal con respaldo digital disponible desde el plan Gratis. Administra hasta 3 clientes independientes por solo $12/mes.",
    isBeSello: true,
  },
] as const;

import type { IconType } from "react-icons";
import { FiCode } from "react-icons/fi";
import { FaAws, FaMagento, FaSalesforce, FaCss3Alt } from "react-icons/fa";
import { TbBrandAzure, TbBrandTwilio } from "react-icons/tb";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiRedux,
  SiVite,
  SiSass,
  SiBootstrap,
  SiNodedotjs,
  SiLaravel,
  SiPhp,
  SiPython,
  SiDjango,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiSqlite,
  SiSupabase,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiAndroid,
  SiApple,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiNginx,
  SiNetlify,
  SiGithubactions,
  SiTerraform,
  SiDigitalocean,
  SiStripe,
  SiShopify,
  SiWordpress,
  SiPaypal,
  SiRazorpay,
  SiAlgolia,
  SiMapbox,
  SiGooglemaps,
  SiCloudinary,
  SiZoom,
  SiWebrtc,
  SiSocketdotio,
  SiElasticsearch,
  SiCloudflare,
  SiSentry,
  SiJest,
  SiCypress,
  SiSelenium,
  SiPostman,
  SiSwagger,
  SiFfmpeg,
} from "react-icons/si";
import { cn } from "@/lib/utils";

export const techIcons: Record<string, IconType> = {
  // Frontend
  react: SiReact,
  "react native": SiReact,
  "next.js": SiNextdotjs,
  nextjs: SiNextdotjs,
  "vue.js": SiVuedotjs,
  angular: SiAngular,
  tailwindcss: SiTailwindcss,
  "tailwind css": SiTailwindcss,
  typescript: SiTypescript,
  javascript: SiJavascript,
  html5: SiHtml5,
  css3: FaCss3Alt,
  redux: SiRedux,
  vite: SiVite,
  sass: SiSass,
  bootstrap: SiBootstrap,

  // Backend
  "node.js": SiNodedotjs,
  nodejs: SiNodedotjs,
  laravel: SiLaravel,
  php: SiPhp,
  python: SiPython,
  django: SiDjango,
  "express.js": SiExpress,
  express: SiExpress,
  "nest.js": SiNestjs,
  nestjs: SiNestjs,
  graphql: SiGraphql,
  prisma: SiPrisma,

  // Database
  postgresql: SiPostgresql,
  mysql: SiMysql,
  mongodb: SiMongodb,
  redis: SiRedis,
  firebase: SiFirebase,
  sqlite: SiSqlite,
  supabase: SiSupabase,
  elasticsearch: SiElasticsearch,

  // Mobile
  flutter: SiFlutter,
  swift: SiSwift,
  kotlin: SiKotlin,
  android: SiAndroid,
  ios: SiApple,

  // Cloud & DevOps
  aws: FaAws,
  "google cloud": SiGooglecloud,
  azure: TbBrandAzure,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  vercel: SiVercel,
  nginx: SiNginx,
  netlify: SiNetlify,
  "github actions": SiGithubactions,
  terraform: SiTerraform,
  digitalocean: SiDigitalocean,
  cloudflare: SiCloudflare,

  // Payments & commerce
  stripe: SiStripe,
  paypal: SiPaypal,
  razorpay: SiRazorpay,
  shopify: SiShopify,
  wordpress: SiWordpress,
  magento: FaMagento,
  salesforce: FaSalesforce,

  // Maps, media & comms
  "google maps": SiGooglemaps,
  mapbox: SiMapbox,
  cloudinary: SiCloudinary,
  algolia: SiAlgolia,
  zoom: SiZoom,
  webrtc: SiWebrtc,
  twilio: TbBrandTwilio,
  "socket.io": SiSocketdotio,
  ffmpeg: SiFfmpeg,

  // Quality & tooling
  sentry: SiSentry,
  jest: SiJest,
  cypress: SiCypress,
  selenium: SiSelenium,
  postman: SiPostman,
  swagger: SiSwagger,
};

// Official (or closest recognizable) brand colors, so every logo renders
// full-color like the real thing instead of inheriting a flat icon tint.
const BRAND_INK = "#0b1220";

export const techColors: Record<string, string> = {
  react: "#61DAFB",
  "react native": "#61DAFB",
  "next.js": BRAND_INK,
  nextjs: BRAND_INK,
  "vue.js": "#4FC08D",
  angular: "#DD0031",
  tailwindcss: "#06B6D4",
  "tailwind css": "#06B6D4",
  typescript: "#3178C6",
  javascript: "#F0DB4F",
  html5: "#E34F26",
  css3: "#1572B6",
  redux: "#764ABC",
  vite: "#8B5CF6",
  sass: "#CC6699",
  bootstrap: "#7952B3",

  "node.js": "#5FA04E",
  nodejs: "#5FA04E",
  laravel: "#FF2D20",
  php: "#777BB4",
  python: "#3776AB",
  django: "#0C4B33",
  "express.js": BRAND_INK,
  express: BRAND_INK,
  "nest.js": "#E0234E",
  nestjs: "#E0234E",
  graphql: "#E10098",
  prisma: "#2D3748",

  postgresql: "#4169E1",
  mysql: "#4479A1",
  mongodb: "#47A248",
  redis: "#DC382D",
  firebase: "#FFCA28",
  sqlite: "#003B57",
  supabase: "#3ECF8E",
  elasticsearch: "#00BFB3",

  flutter: "#02569B",
  swift: "#F05138",
  kotlin: "#7F52FF",
  android: "#3DDC84",
  ios: BRAND_INK,

  aws: "#FF9900",
  "google cloud": "#4285F4",
  azure: "#0078D4",
  docker: "#2496ED",
  kubernetes: "#326CE5",
  vercel: BRAND_INK,
  nginx: "#009639",
  netlify: "#00C7B7",
  "github actions": "#2088FF",
  terraform: "#7B42BC",
  digitalocean: "#0080FF",
  cloudflare: "#F38020",

  stripe: "#635BFF",
  paypal: "#003087",
  razorpay: "#3395FF",
  shopify: "#95BF47",
  wordpress: "#21759B",
  magento: "#EE672F",
  salesforce: "#00A1E0",

  "google maps": "#4285F4",
  mapbox: BRAND_INK,
  cloudinary: "#3448C5",
  algolia: "#003DFF",
  zoom: "#2D8CFF",
  webrtc: "#333333",
  twilio: "#F22F46",
  "socket.io": BRAND_INK,
  ffmpeg: "#007808",

  sentry: "#362D59",
  jest: "#C21325",
  cypress: "#0A9D72",
  selenium: "#43B02A",
  postman: "#FF6C37",
  swagger: "#85EA2D",
};

export function TechIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const key = name.toLowerCase();
  const Icon = techIcons[key] ?? FiCode;
  const color = techColors[key];

  return (
    <span className={cn("inline-flex items-center justify-center", !color && "text-ink", className)}>
      <Icon className="h-5 w-5" style={color ? { color } : undefined} />
    </span>
  );
}

import type { IconType } from "react-icons";
import {
  SiWordpress,
  SiWoocommerce,
  SiVuedotjs,
  SiTypescript,
  SiTailwindcss,
  SiStripe,
  SiSemrush,
  SiRedux,
  SiRedis,
  SiReact,
  SiPhp,
  SiNodedotjs,
  SiNginx,
  SiNextdotjs,
  SiMysql,
  SiMailchimp,
  SiLetsencrypt,
  SiLaravel,
  SiKubernetes,
  SiJavascript,
  SiInstagram,
  SiHtml5,
  SiGraphql,
  SiGoogletagmanager,
  SiGooglesearchconsole,
  SiGoogleanalytics,
  SiGoogleads,
  SiGoogle,
  SiGodaddy,
  SiGit,
  SiFigma,
  SiFacebook,
  SiDotnet,
  SiDocker,
  SiDigitalocean,
  SiCodeigniter,
  SiCloudflare,
  SiApple,
  SiAngular,
  SiAndroid,
  SiCss,
} from "react-icons/si";
import { FiCloud, FiShoppingBag, FiCode, FiPenTool } from "react-icons/fi";
import { cn } from "@/lib/utils";

export const techIcons: Record<string, IconType> = {
  wordpress: SiWordpress,
  woocommerce: SiWoocommerce,
  vue: SiVuedotjs,
  typescript: SiTypescript,
  tailwindcss: SiTailwindcss,
  stripe: SiStripe,
  semrush: SiSemrush,
  redux: SiRedux,
  redis: SiRedis,
  react: SiReact,
  php: SiPhp,
  nodejs: SiNodedotjs,
  nginx: SiNginx,
  nextjs: SiNextdotjs,
  mysql: SiMysql,
  mailchimp: SiMailchimp,
  letsencrypt: SiLetsencrypt,
  laravel: SiLaravel,
  kubernetes: SiKubernetes,
  javascript: SiJavascript,
  instagram: SiInstagram,
  html5: SiHtml5,
  graphql: SiGraphql,
  googletagmanager: SiGoogletagmanager,
  googlesearchconsole: SiGooglesearchconsole,
  googleanalytics: SiGoogleanalytics,
  googleads: SiGoogleads,
  google: SiGoogle,
  godaddy: SiGodaddy,
  git: SiGit,
  figma: SiFigma,
  facebook: SiFacebook,
  dotnet: SiDotnet,
  docker: SiDocker,
  digitalocean: SiDigitalocean,
  codeigniter: SiCodeigniter,
  cloudflare: SiCloudflare,
  apple: SiApple,
  angular: SiAngular,
  android: SiAndroid,
  css: SiCss,
  // No official brand mark available — Feather fallbacks that stay on-theme.
  salesforce: FiCloud,
  magento: FiShoppingBag,
  opencart: FiShoppingBag,
  api: FiCode,
  twilio: FiCode,
  design: FiPenTool,
};

// Official brand colors, one per logo — keeps each mark authentic instead of
// tinting every icon with a single shared accent color. Icons without a real
// brand mark (see the Feather fallbacks above) are intentionally omitted so
// they keep the neutral on-theme color instead of a made-up brand hue.
export const techBrandColors: Record<string, string> = {
  wordpress: "#21759B",
  woocommerce: "#96588A",
  vue: "#4FC08D",
  typescript: "#3178C6",
  tailwindcss: "#38BDF8",
  stripe: "#635BFF",
  semrush: "#FF642D",
  redux: "#764ABC",
  redis: "#DC382D",
  react: "#61DAFB",
  php: "#777BB4",
  nodejs: "#339933",
  nginx: "#009639",
  nextjs: "#000000",
  mysql: "#4479A1",
  mailchimp: "#FFE01B",
  letsencrypt: "#003A70",
  laravel: "#FF2D20",
  kubernetes: "#326CE5",
  javascript: "#F7DF1E",
  instagram: "#E4405F",
  html5: "#E34F26",
  graphql: "#E10098",
  googletagmanager: "#246FDB",
  googlesearchconsole: "#458CF5",
  googleanalytics: "#E37400",
  googleads: "#4285F4",
  google: "#4285F4",
  godaddy: "#1BDBDB",
  git: "#F05032",
  figma: "#F24E1E",
  facebook: "#1877F2",
  dotnet: "#512BD4",
  docker: "#2496ED",
  digitalocean: "#0080FF",
  codeigniter: "#EF4223",
  cloudflare: "#F38020",
  apple: "#000000",
  angular: "#DD0031",
  android: "#3DDC84",
  css: "#1572B6",
};

export function ServiceTechIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  const Icon = techIcons[icon] ?? FiCode;
  const brandColor = techBrandColors[icon];

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-xl border border-border bg-surface",
        !brandColor && "text-accent-deep",
        className,
      )}
      style={brandColor ? { color: brandColor } : undefined}
    >
      <Icon className="h-6 w-6" />
    </span>
  );
}

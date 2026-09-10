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

export function ServiceTechIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  const Icon = techIcons[icon] ?? FiCode;

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-xl border border-border bg-surface text-accent-deep",
        className,
      )}
    >
      <Icon className="h-6 w-6" />
    </span>
  );
}

import type { IconType } from "react-icons";
import {
  FiBookOpen,
  FiUsers,
  FiCheckSquare,
  FiClipboard,
  FiBarChart2,
  FiVideo,
  FiShield,
  FiActivity,
  FiCalendar,
  FiPackage,
  FiShoppingBag,
  FiTruck,
  FiMapPin,
  FiStar,
  FiCreditCard,
  FiLayers,
  FiTv,
  FiMic,
  FiTrendingUp,
  FiSearch,
  FiHome,
  FiKey,
  FiCamera,
  FiGift,
  FiGrid,
  FiMonitor,
  FiWifi,
  FiPhoneCall,
  FiMessageSquare,
  FiCode,
} from "react-icons/fi";
import { cn } from "@/lib/utils";

export const featureIcons: Record<string, IconType> = {
  book: FiBookOpen,
  users: FiUsers,
  check: FiCheckSquare,
  clipboard: FiClipboard,
  chart: FiBarChart2,
  video: FiVideo,
  shield: FiShield,
  activity: FiActivity,
  calendar: FiCalendar,
  package: FiPackage,
  cart: FiShoppingBag,
  truck: FiTruck,
  map: FiMapPin,
  star: FiStar,
  card: FiCreditCard,
  layers: FiLayers,
  tv: FiTv,
  mic: FiMic,
  trending: FiTrendingUp,
  search: FiSearch,
  home: FiHome,
  key: FiKey,
  camera: FiCamera,
  gift: FiGift,
  grid: FiGrid,
  monitor: FiMonitor,
  wifi: FiWifi,
  phone: FiPhoneCall,
  message: FiMessageSquare,
};

export function FeatureIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  const Icon = featureIcons[icon] ?? FiCode;

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-lg border border-border bg-surface text-accent-deep",
        className,
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1.75} />
    </span>
  );
}

import type { IconType } from "react-icons";
import {
  PiAirplaneTilt,
  PiCurrencyCircleDollar,
  PiFilmSlate,
  PiGameController,
  PiGraduationCap,
  PiHamburger,
  PiHeartbeat,
  PiHouseLine,
  PiShoppingCartSimple,
  PiSoccerBall,
} from "react-icons/pi";
import { cn } from "@/lib/utils";

export const industryIcons: Record<string, IconType> = {
  edtech: PiGraduationCap,
  healthcare: PiHeartbeat,
  ecommerce: PiShoppingCartSimple,
  fintech: PiCurrencyCircleDollar,
  "tours-travel": PiAirplaneTilt,
  media: PiFilmSlate,
  "real-estate": PiHouseLine,
  foodtech: PiHamburger,
  gaming: PiGameController,
  sports: PiSoccerBall,
};

export function IndustryIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  const Icon = industryIcons[icon] ?? PiShoppingCartSimple;

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-md border border-border bg-surface text-accent-deep",
        className,
      )}
    >
      <Icon className="h-5 w-5" />
    </span>
  );
}

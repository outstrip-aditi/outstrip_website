import type { IconType } from "react-icons";
import {
  FiCode,
  FiShoppingCart,
  FiSmartphone,
  FiPenTool,
  FiTrendingUp,
  FiCloud,
} from "react-icons/fi";
import { cn } from "@/lib/utils";

const icons: Record<string, IconType> = {
  code: FiCode,
  cart: FiShoppingCart,
  mobile: FiSmartphone,
  design: FiPenTool,
  growth: FiTrendingUp,
  cloud: FiCloud,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name] ?? FiCode;

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-md border border-border bg-surface text-accent-deep",
        className,
      )}
    >
      <Icon className="h-6 w-6" strokeWidth={1.5} />
    </span>
  );
}
"use client";

import { useState } from "react";
import { techIcons, techBrandColors } from "@/components/services/ServiceTechIcon";
import { FiCode } from "react-icons/fi";
import { cn } from "@/lib/utils";

export function TechLogo({
  icon,
  name,
  className,
}: {
  icon: string;
  name: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    const Icon = techIcons[icon] ?? FiCode;
    const brandColor = techBrandColors[icon];

    return (
      <span
        className={cn("flex items-center justify-center", !brandColor && "text-accent-deep", className)}
        style={brandColor ? { color: brandColor } : undefined}
      >
        <Icon className="h-2/3 w-2/3" />
      </span>
    );
  }

  return (
    <img
      src={`/images/technologies/${icon}.png`}
      alt={`${name} logo`}
      onError={() => setFailed(true)}
      className={cn("object-contain", className)}
    />
  );
}

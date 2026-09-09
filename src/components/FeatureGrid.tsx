import { LucideIcon } from "lucide-react";
import React from "react";

export interface FeatureItem {
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: FeatureItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function FeatureGrid({
  features,
  columns = 3,
  className = "",
}: FeatureGridProps) {
  const gridColsClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className={`grid ${gridColsClass} gap-6 lg:gap-8 ${className}`}>
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <div
            key={feature.title}
            className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 shadow-sm transition hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#103B5C] shrink-0 shadow-md">
              <Icon className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#103B5C]">
                {feature.title}
              </h3>
              <div className="my-1 h-[2px] w-8 bg-[#D72638]" />
              <p className="text-xs text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

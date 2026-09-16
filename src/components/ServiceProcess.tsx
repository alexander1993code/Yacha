import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export interface ProcessStep {
  label: string;
  description?: string;
  number?: string;
}

interface ServiceProcessProps {
  title: string;
  description?: string;
  steps: ProcessStep[];
  className?: string;
}

export default function ServiceProcess({
  title,
  description,
  steps,
  className = "",
}: ServiceProcessProps) {
  return (
    <section className={`mx-auto max-w-7xl px-6 lg:px-12 py-8 lg:py-10 text-[#103B5C] ${className}`}>
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold uppercase tracking-tight text-[#103B5C]">
          {title}
        </h2>
        <div className="mt-2 mx-auto w-12 h-1 bg-[#D72638] rounded-full" />
        {description && (
          <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Flujo en Desktop / Tablet horizontal */}
      <div className="hidden md:flex items-stretch justify-center gap-3">
        {steps.map((step, idx) => (
          <React.Fragment key={step.label}>
            <div className="flex-1 flex flex-col items-center text-center p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-sm transition hover:shadow-md hover:border-slate-300">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#103B5C] text-white text-xs font-bold mb-2 shadow-xs">
                {step.number || String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#103B5C]">
                {step.label}
              </h3>
              {step.description && (
                <p className="mt-1.5 text-[11px] text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              )}
            </div>
            {idx < steps.length - 1 && (
              <div className="flex items-center justify-center text-[#D72638] shrink-0">
                <ArrowRight className="h-5 w-5" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Flujo en Mobile vertical */}
      <div className="flex flex-col md:hidden gap-3">
        {steps.map((step, idx) => (
          <div key={step.label} className="flex flex-col items-center">
            <div className="w-full flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#103B5C] text-white text-xs font-bold shrink-0 shadow-xs">
                {step.number || String(idx + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#103B5C]">
                  {step.label}
                </h3>
                {step.description && (
                  <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
            {idx < steps.length - 1 && (
              <div className="py-1 text-[#D72638]">
                <ChevronDown className="h-4 w-4" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import { ShieldCheck } from "lucide-react";

export interface NormativaItem {
  code: string;
  name?: string;
  description: string;
}

interface NormativaSectionProps {
  title?: string;
  description?: string;
  items: NormativaItem[];
}

export default function NormativaSection({
  title = "Normativa y criterios técnicos aplicables",
  description = "Desarrollamos los sistemas contra incendio considerando el marco normativo nacional y los estándares técnicos aplicables según las características, alcance y requerimientos de cada proyecto.",
  items,
}: NormativaSectionProps) {
  return (
    <section className="w-full bg-[#103B5C] py-12 lg:py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="h-4 w-4" />
            <span>Marco Técnico & Regulatorio</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-white">
            {title}
          </h2>
          <div className="my-2 h-[2px] w-12 bg-[#D72638]" />
          <p className="mt-2 text-xs sm:text-sm text-gray-200 leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item) => (
            <div
              key={item.code}
              className="flex flex-col justify-between p-5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 transition-all hover:bg-white/15 hover:border-white/30"
            >
              <div>
                <div className="inline-block px-2.5 py-1 rounded bg-[#D72638] text-white text-xs font-extrabold uppercase tracking-wider mb-3">
                  {item.code}
                </div>
                {item.name && (
                  <h3 className="text-xs sm:text-sm font-bold text-white mb-2 leading-snug">
                    {item.name}
                  </h3>
                )}
                <p className="text-xs text-gray-200 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

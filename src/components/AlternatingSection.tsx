import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import React from "react";

interface SectionItem {
  title: string;
  description?: string;
}

interface AlternatingSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  items?: SectionItem[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  technicalNote?: string;
  link?: { label: string; href: string };
  bgMuted?: boolean;
}

export default function AlternatingSection({
  title,
  subtitle,
  description,
  items = [],
  imageSrc,
  imageAlt,
  reverse = false,
  technicalNote,
  link,
  bgMuted = false,
}: AlternatingSectionProps) {
  return (
    <section className={`w-full py-10 lg:py-14 ${bgMuted ? "bg-slate-50 border-y border-slate-200/60" : "bg-white"}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-14 ${reverse ? "lg:flex-row-reverse" : ""}`}>
          
          {/* Contenido Texto */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#103B5C]">
              {title}
            </h2>
            <div className="my-2 h-[2px] w-12 bg-[#D72638]" />

            <p className="mt-2 text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
              {description}
            </p>

            {subtitle && (
              <h3 className="mt-5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#103B5C]">
                {subtitle}
              </h3>
            )}

            {items.length > 0 && (
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {items.map((item) => (
                  <div key={item.title} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#D72638] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-gray-900 block leading-tight">
                        {item.title}
                      </span>
                      {item.description && (
                        <span className="text-[11px] text-gray-600 leading-relaxed block mt-0.5">
                          {item.description}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {technicalNote && (
              <div className="mt-4 rounded-lg bg-blue-50/80 p-3 border-l-4 border-[#103B5C] text-[11px] text-gray-700 leading-relaxed">
                <span className="font-semibold text-[#103B5C]">Nota técnica: </span>
                {technicalNote}
              </div>
            )}

            {link && (
              <div className="mt-5">
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#103B5C] hover:text-[#D72638] transition-colors"
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>

          {/* Imagen profesional */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 shadow-md">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#103B5C]/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

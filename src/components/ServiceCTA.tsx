import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";
import React from "react";

interface ServiceCTAProps {
  title: string;
  description: string;
  serviceName: string;
  imageSrc?: string;
  imageAlt?: string;
  steps?: Array<{ number: string; title: string; description: string }>;
}

export default function ServiceCTA({
  title,
  description,
  serviceName,
  imageSrc = "/Trato 1.png",
  imageAlt = "Asesoría técnica especializada YACHA",
  steps = [
    {
      number: "01",
      title: "Revisamos tu solicitud",
      description: "Evaluamos la información inicial que nos compartes sobre tu instalación.",
    },
    {
      number: "02",
      title: "Nos comunicamos contigo",
      description: "Conocemos en detalle las características y requerimientos específicos.",
    },
    {
      number: "03",
      title: "Coordinamos la visita técnica",
      description: "Definimos contigo la fecha para la evaluación técnica en campo.",
    },
  ],
}: ServiceCTAProps) {
  const cell = 51941054196;
  const message = `¡Hola! Deseo cotizar un proyecto para el servicio de: ${serviceName} con YACHA.`;
  const whatsappUrl = `https://wa.me/${cell}?text=${encodeURIComponent(message)}`;

  return (
    <section className="w-full bg-slate-50 py-12 lg:py-16 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          
          {/* Texto y Acciones */}
          <div className="w-full lg:w-3/5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D72638]">
              Atención Inmediata & Asesoría
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-[#103B5C] mt-1">
              {title}
            </h2>
            <div className="my-2 h-[2px] w-12 bg-[#D72638]" />

            <p className="mt-2 text-xs sm:text-sm text-gray-700 leading-relaxed max-w-2xl font-medium">
              {description}
            </p>

            {/* 3 pasos */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {steps.map((step) => (
                <div key={step.number} className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-xs font-extrabold text-[#D72638] block mb-1">
                    {step.number} —
                  </span>
                  <h3 className="text-xs font-bold text-[#103B5C] uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-gray-600 mt-1 leading-snug">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Botones */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#D72638] px-6 py-3 text-xs sm:text-sm font-bold text-white transition-all hover:bg-red-700 shadow-sm"
              >
                <span>Cotiza tu proyecto</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>¿Prefieres conversar? Escríbenos por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Imagen ilustrativa */}
          <div className="w-full lg:w-2/5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 shadow-md">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#103B5C]/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

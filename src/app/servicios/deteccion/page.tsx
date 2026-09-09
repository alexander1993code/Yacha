import Image from "next/image";
import FeatureGrid from "@/components/FeatureGrid";
import {
  Flame,
  Search,
  Timer,
  Wind,
  Thermometer,
  LayoutGrid,
  Bell,
  Volume2,
  Building2,
  ShieldCheck,
} from "lucide-react";

const detectionFeatures = [
  {
    icon: Flame,
    title: "Detección de Incendios",
    description: "Identificamos de manera oportuna la presencia de humo o calor.",
  },
  {
    icon: Search,
    title: "Sistema de Detección",
    description: "Soluciones integrales adaptadas a cada tipo de edificación.",
  },
  {
    icon: Timer,
    title: "Detección Temprana",
    description: "Actuamos en los primeros segundos para minimizar riesgos y daños.",
  },
  {
    icon: Wind,
    title: "Detectores de Humo",
    description: "Detectores fotoeléctricos y de ionización de alta sensibilidad.",
  },
  {
    icon: Thermometer,
    title: "Detectores de Temperatura",
    description: "Tecnología térmica para detección confiable en diversos entornos.",
  },
  {
    icon: LayoutGrid,
    title: "Panel Contra Incendio",
    description: "Paneles inteligentes para monitoreo y control del sistema de detección.",
  },
  {
    icon: Bell,
    title: "Panel de Alarma",
    description: "Gestión centralizada de alarmas y eventos en tiempo real.",
  },
  {
    icon: Volume2,
    title: "Alarma Contra Incendio",
    description: "Aviso audible y visual para evacuación y alerta inmediata.",
  },
  {
    icon: Building2,
    title: "Central de Incendios",
    description: "Supervisión completa del sistema para máxima seguridad.",
  },
];

export default function DeteccionPage() {
  return (
    <div className="w-full text-slate-900 flex flex-col justify-between">
      {/* Banner superior azul */}
      <section className="relative w-full bg-[#103B5C] text-white overflow-hidden">
        <div className="mx-auto flex w-full flex-col lg:flex-row items-center justify-between">
          
          {/* LADO IZQUIERDO */}
          <div className="z-10 flex w-full flex-col justify-center px-6 py-6 sm:px-10 lg:w-1/2 lg:pl-16 xl:pl-24 lg:py-8">
            <div className="mb-2">
              <Image
                src="/Logo YACHA.png"
                alt="YACHA Logo"
                width={220}
                height={110}
                className="h-auto w-40 sm:w-48 object-contain"
              />
            </div>

            <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">
              Nuestros Servicios
            </span>

            <h1 className="text-xl font-extrabold uppercase tracking-tight sm:text-2xl lg:text-3xl mt-1">
              Sistemas de <span className="text-[#D72638]">Detección</span>
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-gray-200 leading-relaxed max-w-lg">
              Tecnología avanzada para la detección temprana de incendios y protección de vidas y activos.
            </p>

            <div className="mt-3 flex items-center gap-3 text-gray-200">
              <ShieldCheck className="h-8 w-8 text-[#D72638] shrink-0" />
              <span className="text-gray-400 font-light text-lg">|</span>
              <span className="text-xs font-semibold tracking-wide text-gray-200">
                Ingeniería que protege <br /> lo que más importa
              </span>
            </div>
          </div>

          {/* LADO DERECHO */}
          <div className="relative hidden self-stretch w-1/2 lg:block min-h-[260px] xl:min-h-[300px]">
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
              }}
            >
              <Image
                src="/PANEL CONTRA INCENDIO.png"
                alt="Sistemas de Detección YACHA"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#103B5C]/70 via-transparent to-transparent" />
            </div>

            <svg
              className="absolute inset-0 h-full w-full pointer-events-none z-20"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <line
                x1="15"
                y1="0"
                x2="0"
                y2="100"
                stroke="#D72638"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

        </div>
      </section>

      {/* Grilla de Sub-servicios */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-6 lg:py-8 text-[#103B5C]">
        <FeatureGrid features={detectionFeatures} />
      </section>
    </div>
  );
}

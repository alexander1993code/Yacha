import Image from "next/image";
import {
  Gauge,
  Home,
  Sliders,
  Activity,
  Zap,
  Flame,
  ShieldAlert,
} from "lucide-react";

const bombFeatures = [
  {
    icon: Gauge,
    title: "Bomba Contra Incendio",
    description: "Equipos diseñados para suministrar el caudal y presión requeridos en situaciones de emergencia.",
  },
  {
    icon: Home,
    title: "Cuarto de Bombas",
    description: "Diseñamos y construimos cuartos de bombas seguros, ventilados y de fácil mantenimiento.",
  },
  {
    icon: Sliders,
    title: "Sistema de Bombeo",
    description: "Soluciones completas e integradas para un rendimiento óptimo y constante del sistema.",
  },
  {
    icon: Activity,
    title: "Bomba Jockey",
    description: "Mantiene la presión del sistema y evita el arranque innecesario de la bomba principal.",
  },
  {
    icon: Zap,
    title: "Bomba Eléctrica",
    description: "Equipos de alta eficiencia y confiabilidad para operación continua y automática.",
  },
  {
    icon: Flame,
    title: "Bomba Diésel",
    description: "Respaldo confiable ante fallas de energía eléctrica, asegurando la continuidad del sistema.",
  },
  {
    icon: ShieldAlert,
    title: "NFPA 20",
    description: "Nuestros sistemas cumplen con la norma NFPA 20: Standard for the Installation of Stationary Pumps for Fire Protection.",
  },
];

export default function BombasPage() {
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
              Bombas <span className="text-[#D72638]">Contra Incendio</span>
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-gray-200 leading-relaxed max-w-lg">
              Sistemas de bombeo confiables diseñados para garantizar presión, caudal y operación continua ante cualquier emergencia.
            </p>

            <div className="mt-3 flex items-center gap-3 text-gray-200">
              <ShieldAlert className="h-8 w-8 text-[#D72638] shrink-0" />
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
                src="/Bomba 1.png"
                alt="Bombas Contra Incendio YACHA"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {bombFeatures.map((feature) => {
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
      </section>
    </div>
  );
}

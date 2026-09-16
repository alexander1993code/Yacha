import Link from "next/link";
import {
  Bell,
  Gauge,
  Droplets,
  Wrench,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "deteccion",
    title: "Sistemas de Detección y Alarma",
    description:
      "Detección temprana y alerta oportuna mediante paneles inteligentes, detectores y lazos supervisados bajo NFPA 72.",
    icon: Bell,
    href: "/servicios/deteccion",
  },
  {
    id: "bombas",
    title: "Bombas Contra Incendio",
    description:
      "Sistemas de bombeo estacionario diseñados para suministrar caudal y presión constantes conforme a NFPA 20.",
    icon: Gauge,
    href: "/servicios/bombas",
  },
  {
    id: "agua",
    title: "Sistemas de Agua Contra Incendios",
    description:
      "Diseño e instalación de redes de rociadores automáticos, tuberías húmedas/secas, gabinetes e hidrantes bajo NFPA 13.",
    icon: Droplets,
    href: "/servicios/agua",
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento de Sistemas",
    description:
      "Inspecciones periódicas, pruebas operativas e intervenciones preventivas y correctivas bajo el estándar NFPA 25.",
    icon: Wrench,
    href: "/servicios/mantenimiento",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="w-full bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D72638]">
            Línea de Protección Contra Incendios
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#103B5C]">
            Sistemas Contra Incendios
          </h2>
          <div className="mt-2 mx-auto w-12 h-1 bg-[#D72638] rounded-full" />
          <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
            Desarrollamos proyectos de sistemas contra incendios en Lima y otras regiones del Perú: desde la evaluación técnica y diseño hasta el suministro, montaje, pruebas y mantenimiento.
          </p>
        </div>

        {/* Banner destacado: Solución Integral */}
        <div className="mb-8 rounded-2xl bg-[#103B5C] p-6 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#D72638]">
              <ShieldAlert className="h-7 w-7 text-[#D72638]" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-red-300 block">
                Solución Integral de Ingeniería
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Gestión completa del ciclo de vida de tu sistema contra incendios
              </h3>
            </div>
          </div>
          <Link
            href="/servicios/sistemas-contra-incendios"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#D72638] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-red-700 shrink-0"
          >
            <span>Ver solución integral</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Grilla de los 4 Sub-Servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href={service.href}
                className="group flex flex-col justify-between p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#103B5C]"
              >
                <div>
                  {/* Icono */}
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#D72638] group-hover:bg-[#103B5C] group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Título */}
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#103B5C] group-hover:text-[#D72638] transition-colors mb-2">
                    {service.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Footer del card */}
                <div className="mt-5 flex items-center gap-1 text-xs font-bold text-[#103B5C] group-hover:text-[#D72638] transition-colors">
                  <span>Conocer más</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

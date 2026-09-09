import { Flame, Bell, Pipette, FlameKindling, Droplets, Radio, ShieldCheck } from "lucide-react";

const services = [
  {
    id: "rociadores",
    title: "Sistemas de Rociadores",
    description:
      "Diseño e instalación de redes húmedas, secas y preacción según NFPA 13, 13R, 13D.",
    // Icono estilizado tipo rociador
    icon: (
      <svg
        className="w-6 h-6 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Boquilla de rociador / sprinkler head design */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4M8 6h8M10 6l-2 5M14 6l2 5M7 11h10l-2 3H9l-2-3zM12 14v2" />
        {/* Gotas proyectadas hacia abajo */}
        <circle cx="8" cy="19" r="1" fill="currentColor" />
        <circle cx="12" cy="20" r="1.2" fill="currentColor" />
        <circle cx="16" cy="19" r="1" fill="currentColor" />
        <circle cx="10" cy="22" r="0.8" fill="currentColor" />
        <circle cx="14" cy="22" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "deteccion",
    title: "Detección y Alarma",
    description:
      "Sistemas inteligentes de detección temprana y alarma contra incendios.",
    // Icono estilo domo / detector de humo con ondas de alarma
    icon: (
      <svg
        className="w-6 h-6 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base superior / Techo */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3h12" />
        {/* Domo del detector */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v2a7 7 0 0014 0V3" />
        {/* Sensor central */}
        <circle cx="12" cy="7" r="1.5" fill="currentColor" />
        {/* Ondas expansivas de alarma / humo */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 14c2-1 6-1 8 0M6 18c4-1.5 8-1.5 12 0" />
      </svg>
    ),
  },
  {
    id: "bombas",
    title: "Bombas contra Incendios",
    description:
      "Suministros, instalación y mantenimiento de equipos certificados UL / FM.",
    // Icono estilo hidrante / tubería de bombeo
    icon: (
      <svg
        className="w-6 h-6 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cuerpo principal del hidrante / tubería */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3h6v3H9V3zM8 6h8v15H8V6z" />
        {/* Tapa superior */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 2h4" />
        {/* Salidas laterales (bocas de hidrante / tubos) */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10h3v4H5a1 1 0 01-1-1v-2a1 1 0 011-1zM16 10h3a1 1 0 011 1v2a1 1 0 01-1 1h-3v-4z" />
        {/* Base de soporte */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 21h12" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="w-full bg-white py-4 sm:py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-5">
          <h2 className="text-sm sm:text-base font-normal text-gray-800 tracking-wide uppercase">
            Nuestros servicios
          </h2>
          <p className="mt-1 text-xl sm:text-2xl md:text-3xl font-extrabold text-primary uppercase tracking-tight">
            Soluciones integrales
          </p>
          <div className="mt-2 mx-auto w-12 h-1 bg-accent rounded-full" />
        </div>

        {/* Grilla de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col items-center text-center p-4 rounded-xl bg-background-secondary border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Contenedor del Icono */}
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 group-hover:bg-red-100 transition-colors">
                {service.icon}
              </div>

              {/* Título en text-primary */}
              <h3 className="text-base sm:text-lg font-bold text-primary mb-2">
                {service.title}
              </h3>

              {/* Descripción */}
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                {service.description}
              </p>

              {/* Decoración inferior */}
              <div className="w-10 h-1 bg-accent rounded-full transition-all duration-300 group-hover:w-16" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

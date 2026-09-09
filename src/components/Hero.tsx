import Image from "next/image";
import Whatsapp from "./Whatsapp";

export default function Hero() {

  return (
    <section className="relative w-full overflow-hidden bg-[#103B5C] text-white">
      <div className="mx-auto flex min-h-[280px] lg:min-h-[320px] w-full items-center">

        {/* Contenido (Texto alineado con la grilla del sitio) */}
        <div className="z-10 flex w-full flex-col justify-center px-6 py-6 sm:px-10 lg:w-1/2 lg:pl-16 xl:pl-28 lg:py-8">

          <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-300">
            Sistemas contra incendios
          </span>

          <h1 className="text-xl font-extrabold uppercase leading-tight tracking-tight sm:text-2xl md:text-3xl lg:text-4xl">
            Ingeniería que protege lo que más <span className="text-[#D72638]">importa</span>
          </h1>

          <p className="mt-2 max-w-xl text-xs font-normal leading-relaxed text-gray-200 sm:text-sm">
            Diseño, instalación y mantenimiento especializado para la máxima
            seguridad de tus instalaciones.
          </p>

          <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:gap-4">
            <Whatsapp />

            <a
              href="#servicios"
              className="rounded-md border border-white/40 bg-white/10 px-4 py-2 text-center text-xs font-bold text-white transition hover:bg-white/20"
            >
              Ver servicios
            </a>
          </div>
        </div>

        {/* Imagen - Abarca todo el costado derecho de la pantalla */}
        <div className="relative hidden self-stretch w-1/2 lg:block min-h-[280px] lg:min-h-[320px]">
          {/* Contenedor recortado */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <Image
              src="/Bomba 2.png"
              alt="Bomba contra incendio YACHA"
              fill
              priority
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#103B5C]/70 via-transparent to-transparent" />
          </div>

          {/* Línea diagonal perfectamente alineada sobre el corte */}
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
  );
}
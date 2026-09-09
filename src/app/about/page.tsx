import Image from "next/image";
import { Shield, Target, Eye, Gem } from "lucide-react";

export default function About() {
  return (
    <div className="w-full text-slate-900 flex flex-col justify-between">
      {/* Banner superior azul */}
      <section className="relative w-full bg-[#103B5C] text-white overflow-hidden">
        <div className="mx-auto flex w-full flex-col lg:flex-row items-center justify-between">

          {/* LADO IZQUIERDO: Contenido principal */}
          <div className="z-10 flex w-full flex-col justify-center px-6 py-6 sm:px-10 lg:w-1/2 lg:pl-16 xl:pl-24 lg:py-8">

            {/* Logo YACHA */}
            <div className="mb-2">
              <Image
                src="/Logo YACHA.png"
                alt="YACHA Logo"
                width={220}
                height={110}
                className="h-auto w-40 sm:w-48 object-contain"
              />
            </div>

            {/* Quienes Somos */}
            <h2 className="text-xl font-extrabold uppercase tracking-tight sm:text-2xl lg:text-3xl">
              Quienes <span className="text-[#D72638]">Somos</span>
            </h2>

            {/* Escudo + Frase */}
            <div className="mt-3 flex items-center gap-3 text-gray-200">
              <Shield className="h-10 w-10 text-[#D72638] shrink-0" />
              <span className="text-gray-400 font-light text-lg">|</span>
              <span className="text-xs font-semibold tracking-wide sm:text-sm text-gray-200">
                Ingeniería que protege <br /> lo que más importa
              </span>
            </div>

          </div>

          {/* LADO DERECHO: Imagen Bomba 1.png */}
          <div className="relative hidden self-stretch w-1/2 lg:block min-h-[260px] xl:min-h-[300px]">
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
              }}
            >
              <Image
                src="/Bomba 1.png"
                alt="Bomba contra incendio YACHA - Nosotros"
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

      {/* Sección inferior de 2 columnas: Identidad / Propósito, Visión, Valores */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-6 lg:py-8 text-[#103B5C]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Columna Izquierda: Identidad */}
          <div className="md:border-r md:border-[#103B5C]/20 md:pr-8">
            <h3 className="text-lg font-bold uppercase tracking-wider">
              Nuestra <span className="text-[#D72638]">Identidad</span>
            </h3>

            <div className="my-2 h-[3px] w-14 bg-[#D72638]" />

            <p className="mt-2 text-xs sm:text-sm leading-relaxed">
              Somos una empresa peruana especializada en ingeniería contra incendios.
            </p>

            <p className="mt-2 text-xs sm:text-sm leading-relaxed">
              Diseñamos, implementamos y mantenemos sistemas integrales que protegen vidas, activos e infraestructura.
            </p>

            <p className="mt-2 text-xs sm:text-sm leading-relaxed">
              Combinamos ingeniería, tecnología y experiencia para entregar soluciones confiables, eficientes y que cumplan con las normativas vigentes.
            </p>

            <p className="mt-3 text-xs sm:text-sm leading-relaxed font-medium">
              Como equipo de ingenieros apasionados por la seguridad, entendemos que cada estructura es única.
            </p>
          </div>

          {/* Columna Derecha: Propósito, Visión y Valores */}
          <div className="divide-y divide-[#103B5C]/20 space-y-4">
            
            {/* Nuestro Propósito */}
            <div className="flex items-start gap-3 pb-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#103B5C] shrink-0 shadow-md">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-base font-bold uppercase tracking-wider">
                  Nuestro <span className="text-[#D72638]">Propósito</span>
                </h3>
                <p className="mt-0.5 text-xs sm:text-sm leading-relaxed">
                  Proteger lo que más importa a través de soluciones de ingeniería confiables y de alto estándar.
                </p>
              </div>
            </div>

            {/* Nuestra Visión */}
            <div className="flex items-start gap-3 py-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#103B5C] shrink-0 shadow-md">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-base font-bold uppercase tracking-wider">
                  Nuestra <span className="text-[#D72638]">Visión</span>
                </h3>
                <p className="mt-0.5 text-xs sm:text-sm leading-relaxed">
                  Ser la empresa referente en ingeniería contra incendios en el Perú, reconocida por nuestra innovación, calidad y compromiso con la seguridad.
                </p>
              </div>
            </div>

            {/* Nuestros Valores */}
            <div className="flex items-start gap-3 pt-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#103B5C] shrink-0 shadow-md">
                <Gem className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-base font-bold uppercase tracking-wider">
                  Nuestros <span className="text-[#D72638]">Valores</span>
                </h3>
                <p className="mt-0.5 text-xs sm:text-sm leading-relaxed font-medium text-[#103B5C]">
                  Seguridad <span className="text-[#D72638] font-normal">|</span> Integridad <span className="text-[#D72638] font-normal">|</span> Excelencia <span className="text-[#D72638] font-normal">|</span> Compromiso <span className="text-[#D72638] font-normal">|</span> Innovación <span className="text-[#D72638] font-normal">|</span> Trabajo en equipo
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}

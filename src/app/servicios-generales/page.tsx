import Metadata from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle2, Wrench, Shield, Layers, Settings, FileCheck, ArrowRightLeft, MessageCircle } from "lucide-react";
import { contactConfig } from "@/config/contact";

export const metadata = {
  title: "Servicios Generales para Infraestructura | YACHA",
  description: "Servicios generales para mantenimiento, reparación y adecuación de infraestructura. YACHA desarrolla trabajos en Lima y otras regiones del Perú.",
};

export default function ServiciosGeneralesPage() {
  const whatsappUrl = contactConfig.getWhatsappUrl("Hola, quisiera consultar sobre Servicios Generales.");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* 01 · Hero */}
      <section className="bg-gradient-to-b from-[#103B5C] to-[#0A273E] text-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-300 mb-6">
            <Link href="/" className="hover:text-amber-400 transition">Inicio</Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <Link href="/sistemas-contra-incendios" className="hover:text-amber-400 transition">Servicios</Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="text-amber-400 font-semibold">Servicios Generales</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider mb-4 border border-slate-700">
                Línea Complementaria
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
                Servicios Generales
              </h1>
              <p className="text-lg font-semibold text-amber-400 mb-4">
                Soluciones para el mantenimiento, adecuación y mejora de infraestructura.
              </p>
              <p className="text-base text-slate-200 leading-relaxed mb-6 max-w-2xl">
                Desarrollamos trabajos de mantenimiento, reparación y adecuación de infraestructura de acuerdo con las necesidades y condiciones de cada proyecto.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Link
                  href="/cotiza-tu-proyecto?categoria=servicios-generales"
                  className="inline-flex items-center gap-2 rounded-lg bg-amber-500 hover:bg-amber-600 px-6 py-3.5 text-sm font-bold text-slate-950 transition shadow-lg"
                >
                  <span>Cotiza tu proyecto</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="text-xs text-slate-400 flex items-center gap-2 pt-2 border-t border-white/10">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Cobertura: Lima y otras regiones del Perú</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl p-8 bg-gradient-to-br from-slate-900 to-[#103B5C]">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                    <Wrench className="h-5 w-5 text-amber-400 shrink-0" />
                    <span className="text-sm font-semibold text-white">Mantenimiento de Infraestructura</span>
                  </div>
                  <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                    <Wrench className="h-5 w-5 text-amber-400 shrink-0" />
                    <span className="text-sm font-semibold text-white">Pintura y Resanamiento</span>
                  </div>
                  <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                    <Wrench className="h-5 w-5 text-amber-400 shrink-0" />
                    <span className="text-sm font-semibold text-white">Mantenimiento Eléctrico</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wrench className="h-5 w-5 text-amber-400 shrink-0" />
                    <span className="text-sm font-semibold text-white">Drywall y Adecuación</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 02 · Soluciones para el mantenimiento y adecuación de infraestructura */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#103B5C] mb-4">
              Soluciones para el mantenimiento y adecuación de infraestructura
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Atendemos necesidades de mantenimiento, reparación y adecuación de infraestructura, desarrollando soluciones de acuerdo con las condiciones y requerimientos de cada espacio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-base font-bold text-[#103B5C] mb-2">Mantener</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Conservar las condiciones funcionales de la infraestructura.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-base font-bold text-[#103B5C] mb-2">Reparar</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Atender deterioros o elementos que requieren intervención.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-base font-bold text-[#103B5C] mb-2">Adecuar</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Adaptar espacios de acuerdo con nuevas necesidades.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-base font-bold text-[#103B5C] mb-2">Mejorar</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Realizar intervenciones que optimicen las condiciones del espacio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 · Servicios para tu infraestructura (Grilla 3x2) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#103B5C] mb-3">
              Servicios para tu infraestructura
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Soluciones para diferentes necesidades de mantenimiento, reparación y adecuación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Mantenimiento de infraestructura
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trabajos de mantenimiento y reparación orientados a conservar las condiciones funcionales de edificios, oficinas e instalaciones.
              </p>
            </div>

            {/* 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Pintura y resanamiento
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trabajos de pintura y resanamiento de superficies para conservar y mejorar los acabados de los espacios.
              </p>
            </div>

            {/* 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Mantenimiento eléctrico
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mantenimiento y atención de instalaciones eléctricas de acuerdo con las necesidades y condiciones de cada espacio.
              </p>
            </div>

            {/* 4 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Obras civiles
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trabajos civiles para reparación, modificación y adecuación de elementos de infraestructura según el alcance del proyecto.
              </p>
            </div>

            {/* 5 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Drywall y acabados
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Instalación y adecuación de elementos en drywall y trabajos de acabado para la configuración y mejora de espacios.
              </p>
            </div>

            {/* 6 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Adecuación de espacios
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Adecuación y mejora de espacios de acuerdo con nuevas necesidades funcionales, operativas o de distribución.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 · Evaluamos las necesidades de cada espacio */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#103B5C] mb-3">
              Evaluamos las necesidades de cada espacio
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Revisamos las condiciones del espacio y los trabajos requeridos para definir el alcance de la intervención de acuerdo con las necesidades del proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">01</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Necesidad</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Identificamos los trabajos o mejoras requeridos para la infraestructura.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">02</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Evaluación</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Revisamos las condiciones del espacio y los elementos involucrados.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">03</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Alcance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Definimos las actividades necesarias para atender el requerimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 · Planificamos cada intervención */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#103B5C] mb-3">
              Planificamos cada intervención
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Organizamos las actividades, recursos y condiciones necesarias para desarrollar los trabajos de acuerdo con el alcance definido.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-[#103B5C] mb-2">Actividades</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Definimos los trabajos necesarios para la intervención.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-[#103B5C] mb-2">Recursos</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Consideramos los materiales y recursos requeridos según el trabajo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-[#103B5C] mb-2">Coordinación</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Organizamos la secuencia y condiciones para desarrollar las actividades y establecer los tiempos correspondientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 · Ejecución de los trabajos */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#103B5C] mb-3">
              Ejecución de los trabajos
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Ejecutamos los trabajos de acuerdo con el alcance definido, coordinando las actividades, materiales y condiciones necesarias para cada intervención.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <span className="text-amber-500 font-extrabold text-sm block mb-1">01</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Preparación</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Organizamos las condiciones necesarias antes de iniciar los trabajos.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <span className="text-amber-500 font-extrabold text-sm block mb-1">02</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Ejecución</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Desarrollamos las actividades definidas para la intervención.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <span className="text-amber-500 font-extrabold text-sm block mb-1">03</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Supervisión</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Realizamos seguimiento al desarrollo de los trabajos.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <span className="text-amber-500 font-extrabold text-sm block mb-1">04</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Control</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Verificamos las condiciones de ejecución y el alcance realizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 07 · Coordinamos diferentes especialidades en una misma intervención */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Coordinamos diferentes especialidades en una misma intervención
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              Cuando un proyecto requiere diferentes tipos de trabajo, coordinamos las actividades necesarias para desarrollar la intervención de manera articulada.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-4xl">
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-200">
              <span className="px-3 py-2 bg-white/10 rounded-lg">Drywall</span>
              <span>+</span>
              <span className="px-3 py-2 bg-white/10 rounded-lg">Electricidad</span>
              <span>+</span>
              <span className="px-3 py-2 bg-white/10 rounded-lg">Resanamiento</span>
              <span>+</span>
              <span className="px-3 py-2 bg-white/10 rounded-lg">Pintura y acabados</span>
            </div>
            
            <div className="my-4 text-center text-amber-400 font-bold text-xs uppercase tracking-wider">
              ➔ Intervención coordinada
            </div>

            <p className="text-center text-xs text-slate-400 max-w-lg mx-auto">
              Articulación técnica de especialidades bajo una sola coordinación operativa.
            </p>
          </div>
        </div>
      </section>

      {/* 08 · Criterios de ejecución y seguridad */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#103B5C] mb-3">
              Criterios de ejecución y seguridad
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Desarrollamos cada intervención considerando las condiciones del proyecto, las especificaciones aplicables y las medidas de seguridad requeridas para los trabajos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-slate-900 mb-2">Especificaciones</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Consideramos los requerimientos, materiales y condiciones definidos para cada intervención.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-slate-900 mb-2">Ejecución</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Desarrollamos los trabajos de acuerdo con el alcance y las condiciones establecidas para el proyecto.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-slate-900 mb-2">Seguridad</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Aplicamos las medidas de seguridad correspondientes a las actividades y condiciones de trabajo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 09 · Proyectos realizados */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#103B5C] mb-2">
                Proyectos realizados
              </h2>
              <p className="text-xs text-slate-600">
                Conoce algunos de los trabajos desarrollados por YACHA en mantenimiento, adecuación y mejora de infraestructura.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-amber-600 tracking-wider block mb-1">Mantenimiento de Infraestructura</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Mantenimiento integral de espacio corporativo</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Adecuación de áreas de trabajo, resanado de muros y mantenimiento preventivo de instalaciones eléctricas.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-amber-600 tracking-wider block mb-1">Drywall y Acabados</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Acondicionamiento de tabiquería y divisiones</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Instalación de elementos en drywall y acabados de pintura para la distribución de ambientes comerciales.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-amber-600 tracking-wider block mb-1">Obras Civiles & Pintura</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Reparación y conservación de estructuras</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trabajos de reparación de bordes, tratamiento de superficies y aplicación de recubrimientos de pintura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 · CTA final */}
      <section className="py-16 bg-[#103B5C] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                ¿Necesitas realizar trabajos en tu infraestructura?
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Cuéntanos qué necesitas realizar. Revisaremos tu solicitud para conocer el requerimiento y definir los siguientes pasos.
              </p>

              <div className="space-y-3 mb-8 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-400 shrink-0" />
                  <span><strong>Revisamos tu solicitud:</strong> Conocemos el requerimiento.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-400 shrink-0" />
                  <span><strong>Nos comunicamos contigo:</strong> Recopilamos la información necesaria.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-400 shrink-0" />
                  <span><strong>Coordinamos la evaluación:</strong> Cuando corresponda, revisamos las condiciones del espacio.</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/cotiza-tu-proyecto?categoria=servicios-generales"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 hover:bg-amber-600 px-6 py-3.5 text-sm font-bold text-slate-950 transition shadow-md"
                >
                  <span>Cotiza tu proyecto</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 px-6 py-3.5 text-sm font-bold text-white transition"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Escríbenos por WhatsApp →</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="text-sm font-bold text-amber-400 mb-2 uppercase tracking-wider">Atención de requerimientos</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Recuerda que puedes preseleccionar tus trabajos de mantenimiento en el formulario dinámico de cotización.
                </p>
                <div className="text-[11px] text-slate-400 pt-3 border-t border-white/10">
                  Respuesta ágil y atención personalizada para proyectos en Lima y regiones.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

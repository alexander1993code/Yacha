import Metadata from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Nosotros | YACHA",
  description: "Conoce YACHA, nuestro enfoque de ingeniería, especialización en Protección Contra Incendios y capacidades complementarias para infraestructura.",
};

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* B01 — Hero / Nosotros */}
      <section className="bg-gradient-to-b from-[#103B5C] to-[#0A273E] text-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-300 mb-6">
            <Link href="/" className="hover:text-amber-400 transition">Inicio</Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="text-amber-400 font-semibold">Nosotros</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
                Nosotros
              </h1>
              <p className="text-lg font-semibold text-amber-400 mb-4">
                Ingeniería aplicada a la protección, mantenimiento y adecuación de infraestructura.
              </p>
              <p className="text-base text-slate-200 leading-relaxed mb-8 max-w-2xl">
                En YACHA desarrollamos soluciones de acuerdo con las necesidades y condiciones de cada proyecto, con especialización en Protección Contra Incendios y capacidades complementarias para la infraestructura.
              </p>
              <div>
                <Link
                  href="/sistemas-contra-incendios"
                  className="inline-flex items-center gap-2 rounded-lg bg-amber-500 hover:bg-amber-600 px-6 py-3.5 text-sm font-bold text-slate-900 transition shadow-lg hover:shadow-xl"
                >
                  <span>Conoce nuestros servicios</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800 flex items-center justify-center min-h-[280px] p-8 text-center bg-gradient-to-br from-[#103B5C] to-[#1a4a70]">
                <div>
                  <div className="h-16 w-16 mx-auto mb-4 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Especialización & Compromiso</h3>
                  <p className="text-xs text-slate-300 max-w-xs mx-auto">
                    Soluciones de ingeniería adaptadas a las requerimientos técnicos de cada proyecto.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* B02 — Enfoque de ingeniería */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#103B5C] mb-4">
              Ingeniería orientada a la protección y funcionalidad de la infraestructura
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Nuestro enfoque parte de comprender las necesidades y condiciones de cada proyecto para plantear soluciones que contribuyan a la protección y funcionalidad de la infraestructura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-slate-200 transition">
              <div className="h-10 w-10 rounded-xl bg-blue-100 text-[#103B5C] flex items-center justify-center font-bold text-lg mb-5">
                01
              </div>
              <h3 className="text-lg font-bold text-[#103B5C] mb-2">Protección</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Consideramos las necesidades de protección de la infraestructura de acuerdo con las características de cada proyecto.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-slate-200 transition">
              <div className="h-10 w-10 rounded-xl bg-blue-100 text-[#103B5C] flex items-center justify-center font-bold text-lg mb-5">
                02
              </div>
              <h3 className="text-lg font-bold text-[#103B5C] mb-2">Funcionalidad</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Consideramos el uso, las condiciones y las necesidades operativas de los espacios al definir cada intervención.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-slate-200 transition">
              <div className="h-10 w-10 rounded-xl bg-blue-100 text-[#103B5C] flex items-center justify-center font-bold text-lg mb-5">
                03
              </div>
              <h3 className="text-lg font-bold text-[#103B5C] mb-2">Criterio técnico</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Las decisiones sobre cada intervención parten de las características, condiciones y necesidades del proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* B03 — Protección Contra Incendios (Nuestra Especialidad - Alta Jerarquía) */}
      <section className="py-16 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="lg:w-7/12">
              <span className="inline-block px-3 py-1 rounded-md bg-amber-500/20 text-amber-400 text-xs font-extrabold uppercase tracking-wider mb-4 border border-amber-500/30">
                Nuestra Especialidad
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Protección Contra Incendios
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8 text-base">
                La Protección Contra Incendios constituye la principal línea de especialización de YACHA. Desarrollamos soluciones para diferentes componentes de los sistemas contra incendios de acuerdo con las necesidades de cada proyecto.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 backdrop-blur-xs p-4 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1">
                    <ShieldCheck className="h-4 w-4 shrink-0" />
                    <h3>Sistemas de detección</h3>
                  </div>
                  <p className="text-xs text-slate-300">
                    Detección y alarma de incendios de acuerdo con los requerimientos del proyecto.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-xs p-4 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1">
                    <ShieldCheck className="h-4 w-4 shrink-0" />
                    <h3>Bombas Contra Incendio</h3>
                  </div>
                  <p className="text-xs text-slate-300">
                    Sistemas de bombeo para el suministro de agua requerido por los sistemas de protección.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-xs p-4 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1">
                    <ShieldCheck className="h-4 w-4 shrink-0" />
                    <h3>Sistemas de Protección con Agua</h3>
                  </div>
                  <p className="text-xs text-slate-300">
                    Soluciones que utilizan agua para la protección y control de incendios según necesidades.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-xs p-4 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1">
                    <ShieldCheck className="h-4 w-4 shrink-0" />
                    <h3>Mantenimiento PCI</h3>
                  </div>
                  <p className="text-xs text-slate-300">
                    Servicios orientados a conservar las condiciones operativas de los sistemas de protección.
                  </p>
                </div>
              </div>

              <Link
                href="/sistemas-contra-incendios"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500 hover:bg-amber-600 px-6 py-3.5 text-sm font-bold text-slate-950 transition shadow-lg"
              >
                <span>Conoce nuestras soluciones</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="lg:w-5/12">
              <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl p-8 bg-gradient-to-br from-blue-900 to-slate-900">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                    <span className="text-amber-400 font-bold">01</span>
                    <span className="text-sm font-medium text-white">Sistemas de Detección</span>
                  </div>
                  <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                    <span className="text-amber-400 font-bold">02</span>
                    <span className="text-sm font-medium text-white">Bombas Contra Incendio</span>
                  </div>
                  <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                    <span className="text-amber-400 font-bold">03</span>
                    <span className="text-sm font-medium text-white">Sistemas de Agua</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-amber-400 font-bold">04</span>
                    <span className="text-sm font-medium text-white">Mantenimiento PCI</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* B04 — Capacidades complementarias para la infraestructura */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="inline-block px-3 py-1 rounded-md bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
              Servicios Complementarios
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#103B5C] mb-3">
              Capacidades complementarias para la infraestructura
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Complementamos nuestra especialización con servicios de mantenimiento, reparación y adecuación que permiten atender diferentes necesidades de infraestructura dentro de un mismo proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                Mantenimiento de infraestructura
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Atención de las condiciones funcionales de edificios, oficinas e instalaciones.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                Pintura y resanamiento
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trabajos para conservar y mejorar superficies y acabados.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                Mantenimiento eléctrico
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Atención y mantenimiento de instalaciones eléctricas según las necesidades del espacio.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                Obras civiles
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trabajos de reparación, modificación y adecuación de elementos de infraestructura.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                Drywall y acabados
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Instalación y adecuación de elementos en drywall y trabajos de acabado.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                Adecuación de espacios
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Adaptación de espacios de acuerdo con nuevas necesidades funcionales u operativas.
              </p>
            </div>
          </div>

          <div>
            <Link
              href="/servicios-generales"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#103B5C] hover:text-amber-600 transition"
            >
              <span>Conoce nuestros Servicios Generales</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* B05 — Cómo abordamos cada proyecto */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#103B5C] mb-3">
              Cómo abordamos cada proyecto
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Cada proyecto presenta condiciones y necesidades particulares. Por ello, partimos de comprender el requerimiento antes de definir las acciones necesarias para su desarrollo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative pl-6 border-l-2 border-amber-500 md:border-l-0 md:border-t-2 md:pt-6 md:pl-0">
              <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest block mb-1">
                01
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Entendemos el requerimiento</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Conocemos las necesidades del proyecto y recopilamos la información inicial necesaria para comprender el requerimiento.
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-slate-300 md:border-l-0 md:border-t-2 md:pt-6 md:pl-0">
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest block mb-1">
                02
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Evaluamos las condiciones</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Revisamos las condiciones relevantes del proyecto para identificar los elementos que deben considerarse en la solución.
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-slate-300 md:border-l-0 md:border-t-2 md:pt-6 md:pl-0">
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest block mb-1">
                03
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Definimos la intervención</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Definimos el alcance, las actividades y las especialidades necesarias de acuerdo con las características del proyecto.
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-slate-300 md:border-l-0 md:border-t-2 md:pt-6 md:pl-0">
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest block mb-1">
                04
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Ejecutamos y coordinamos</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Desarrollamos los trabajos definidos y coordinamos las actividades necesarias durante la intervención.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* B06 — Principios que orientan nuestro trabajo */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#103B5C] mb-3">
              Principios que orientan nuestro trabajo
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Buscamos que cada intervención se desarrolle a partir de criterios claros que permitan responder adecuadamente a las necesidades y condiciones del proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start">
              <span className="text-2xl font-black text-amber-500 shrink-0">01</span>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Claridad</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Definimos el alcance y las actividades necesarias para establecer qué requiere cada intervención.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl font-black text-amber-500 shrink-0">02</span>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Seguridad</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Consideramos criterios de seguridad de acuerdo con las características y actividades de cada intervención.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl font-black text-amber-500 shrink-0">03</span>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Orden</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Organizamos las actividades y especialidades necesarias para facilitar el desarrollo de cada intervención.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl font-black text-amber-500 shrink-0">04</span>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Responsabilidad</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Asumimos cada requerimiento considerando las condiciones, el alcance y las implicancias del trabajo definido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B07 — CTA final */}
      <section className="py-16 bg-[#103B5C] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Cuéntanos qué necesitas. Revisaremos la información de tu proyecto para conocer mejor el requerimiento y definir los siguientes pasos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
              <Link
                href="/cotiza-tu-proyecto"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 hover:bg-amber-600 px-6 py-3.5 text-sm font-bold text-slate-950 transition shadow-md"
              >
                <span>Cotiza tu proyecto</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition"
              >
                <span>Contáctanos</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

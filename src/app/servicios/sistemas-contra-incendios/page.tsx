import Image from "next/image";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import ServiceProcess from "@/components/ServiceProcess";
import AlternatingSection from "@/components/AlternatingSection";
import NormativaSection from "@/components/NormativaSection";
import ServiceCTA from "@/components/ServiceCTA";
import {
  ShieldAlert,
  ArrowRight,
  Layers,
  Wrench,
  Users,
  Compass,
  FileCheck,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Sistemas Contra Incendios en Perú | YACHA",
  description:
    "YACHA desarrolla proyectos de sistemas contra incendios en Lima y otras regiones del Perú: evaluación, ingeniería, suministro, instalación, pruebas y mantenimiento.",
};

const processSteps = [
  { label: "Evaluamos", description: "Visita técnica y diagnóstico inicial" },
  { label: "Diseñamos", description: "Conceptualización de la solución" },
  { label: "Ingeniería", description: "Cálculos y planos de detalle" },
  { label: "Suministramos", description: "Equipos y materiales aprobados" },
  { label: "Instalamos", description: "Montaje y conexiones en campo" },
  { label: "Probamos", description: "Comprobación de operatividad" },
  { label: "Puesta en marcha", description: "Entrega y puesta en funcionamiento" },
  { label: "Mantenemos", description: "Inspecciones y continuidad" },
];

const specializedServices = [
  {
    title: "Sistemas de Detección y Alarma Contra Incendios",
    description:
      "Soluciones para la detección temprana, alarma y notificación oportuna ante eventos de incendio.",
    image: "/PANEL CONTRA INCENDIO.png",
    href: "/servicios/deteccion",
  },
  {
    title: "Bombas Contra Incendio",
    description:
      "Sistemas de bombeo diseñados para suministrar el caudal y la presión requeridos por la instalación.",
    image: "/Bomba 1.png",
    href: "/servicios/bombas",
  },
  {
    title: "Sistemas de Agua Contra Incendios",
    description:
      "Redes y sistemas de distribución y aplicación de agua para la protección de edificaciones e instalaciones.",
    image: "/Sprinklers.png",
    href: "/servicios/agua",
  },
  {
    title: "Mantenimiento de Sistemas Contra Incendios",
    description:
      "Inspección, pruebas y mantenimiento preventivo y correctivo para conservar la operatividad y confiabilidad.",
    image: "/Mantenimiento.png",
    href: "/servicios/mantenimiento",
  },
];

const evaluationItems = [
  { title: "Edificación e infraestructura", description: "Evaluamos las características físicas y arquitectónicas." },
  { title: "Infraestructura existente", description: "Verificamos condiciones hidráulicas y eléctricas actuales." },
  { title: "Sistemas existentes", description: "Identificamos equipos y redes previamente implementadas." },
  { title: "Necesidades específicas", description: "Requerimientos operativos y de continuidad del cliente." },
  { title: "Requerimientos técnicos", description: "Capacidades y condiciones de suministro demandadas." },
  { title: "Normativa aplicable", description: "Marco normativo peruano (RNE / NTP) y estándares NFPA." },
];

const engineeringItems = [
  { title: "Criterios de diseño", description: "Bases técnicas adaptadas a cada tipo de edificación." },
  { title: "Cálculos de ingeniería", description: "Cálculos hidráulicos, flujos y cargas eléctricas." },
  { title: "Equipos y componentes", description: "Selección técnica de equipos con listados y aprobaciones." },
  { title: "Planos de detalle", description: "Elaboración de planos en CAD y modelos de ingeniería." },
  { title: "Especificaciones técnicas", description: "Memorias descriptivas y requerimientos de montaje." },
  { title: "Coordinación técnica", description: "Compatibilización multidisciplinaria entre especialidades." },
];

const installationItems = [
  { title: "Selección técnica", description: "Verificación de fichas técnicas y certificaciones requeridas." },
  { title: "Suministro confiable", description: "Provisión de materiales y equipos de alta calidad." },
  { title: "Instalación en campo", description: "Montaje riguroso siguiendo las especificaciones del diseño." },
  { title: "Integración de sistemas", description: "Conexión coordinada entre componentes y la edificación." },
  { title: "Control de calidad", description: "Supervisión permanente del avance y cumplimiento técnico." },
];

const testingItems = [
  { title: "Pruebas funcionales", description: "Verificación exhaustiva de cada equipo y circuito." },
  { title: "Levantamiento de observaciones", description: "Corrección oportuna de cualquier discrepancia detectada." },
  { title: "Puesta en funcionamiento", description: "Arranque y verificación del sistema en condiciones operativas." },
  { title: "Documentación técnica", description: "Dossier de calidad, protocolos de prueba y manuales." },
];

const maintenanceItems = [
  { title: "Inspeccionamos", description: "Revisión sistemática del estado de cada componente." },
  { title: "Probamos", description: "Ejecución periódica de pruebas operativas y funcionales." },
  { title: "Mantenemos", description: "Actividades preventivas y correctivas oportunas." },
  { title: "Documentamos", description: "Registros detallados e informes de cada intervención." },
  { title: "Recomendamos", description: "Identificación de mejoras para la seguridad de la instalación." },
];

const normativaList = [
  {
    code: "RNE / A.130",
    name: "Reglamento Nacional de Edificaciones",
    description: "Requisitos obligatorios de seguridad y protección contra incendios en edificaciones en el Perú.",
  },
  {
    code: "NTP",
    name: "Normas Técnicas Peruanas",
    description: "Estándares peruanos aplicables a equipos, materiales, componentes e instalaciones contra incendio.",
  },
  {
    code: "CNE",
    name: "Código Nacional de Electricidad",
    description: "Criterios normativos para instalaciones eléctricas seguras y sistemas de fuerza y control.",
  },
  {
    code: "NFPA",
    name: "Estándares Internacionales",
    description: "Criterios técnicos especializados de la National Fire Protection Association aplicables al proyecto.",
  },
];

const specialties = [
  { title: "Protección Contra Incendios", desc: "Ingenieros especialistas en diseño y normatividad PCI." },
  { title: "Ingeniería Mecánica e Hidráulica", desc: "Cálculos de caudal, presión y redes de impulsión." },
  { title: "Ingeniería Eléctrica y Electromecánica", desc: "Alimentación eléctrica, tableros y automatización." },
  { title: "Ingeniería Civil y Arquitectura", desc: "Coordinación espacial, estructural y sectorización." },
  { title: "Seguridad y Salud en el Trabajo", desc: "Control de riesgos y protocolos de seguridad en obra." },
  { title: "Personal Técnico Especializado", desc: "Técnicos certificados para montaje y calibración." },
];

const differentiators = [
  {
    title: "Solución integral",
    description: "Acompañamiento completo desde el análisis inicial hasta el mantenimiento operativo.",
  },
  {
    title: "Ingeniería especializada",
    description: "Soluciones desarrolladas a la medida de cada proyecto, sin plantillas genéricas.",
  },
  {
    title: "Capacidad multidisciplinaria",
    description: "Integración coordinada de las especialidades de ingeniería requeridas.",
  },
  {
    title: "Normativa y estándares",
    description: "Criterios técnicos y cumplimiento riguroso de normativas nacionales e internacionales.",
  },
  {
    title: "Control y documentación",
    description: "Seguimiento técnico permanente, trazabilidad y dossiers completos de calidad.",
  },
  {
    title: "Continuidad y mantenimiento",
    description: "Acompañamiento continuo durante la vida útil para garantizar la operatividad.",
  },
];

export default function SistemasContraIncendiosPage() {
  return (
    <div className="w-full text-slate-900 flex flex-col justify-between">
      
      {/* 01: Hero */}
      <ServiceHero
        title={
          <>
            Sistemas <span className="text-[#D72638]">Contra Incendios</span>
          </>
        }
        category="Solución Integral de Ingeniería"
        subheadline="Soluciones integrales de ingeniería para proteger personas, infraestructura y operaciones."
        description="Desarrollamos proyectos de sistemas contra incendios en Lima y otras regiones del Perú, desde la evaluación y el diseño hasta la implementación, pruebas y mantenimiento."
        imageSrc="/Sistema 1.png"
        imageAlt="Sistemas Contra Incendios YACHA"
        whatsappMessage="¡Hola! Deseo información y cotización para un proyecto de Sistemas Contra Incendios con YACHA."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios/sistemas-contra-incendios" },
          { label: "Sistemas Contra Incendios" },
        ]}
      />

      {/* 02: Proceso Integral */}
      <ServiceProcess
        title="Soluciones integrales de protección contra incendios"
        description="Integramos las diferentes etapas de cada proyecto para desarrollar soluciones coherentes con sus necesidades, características y requerimientos técnicos."
        steps={processSteps}
      />

      {/* 03: 4 Servicios Especializados */}
      <section className="w-full bg-slate-50 py-12 lg:py-16 border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D72638]">
              Líneas de Especialización
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-[#103B5C] mt-1">
              Soluciones especializadas de sistemas contra incendios
            </h2>
            <div className="mt-2 mx-auto w-12 h-1 bg-[#D72638] rounded-full" />
            <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
              Desarrollamos soluciones de acuerdo con las necesidades, características y requerimientos técnicos de cada proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {specializedServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex flex-col sm:flex-row overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#103B5C]"
              >
                <div className="relative h-48 sm:h-auto sm:w-2/5 overflow-hidden shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#103B5C]/50 via-transparent to-transparent sm:hidden" />
                </div>
                <div className="flex flex-col justify-between p-6 sm:w-3/5">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#103B5C] group-hover:text-[#D72638] transition-colors">
                      {service.title}
                    </h3>
                    <div className="my-2 h-[2px] w-8 bg-[#D72638]" />
                    <p className="text-xs text-gray-600 leading-relaxed mt-2">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#103B5C] group-hover:text-[#D72638]">
                    <span>Conoce más del servicio</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 04: Evaluación */}
      <AlternatingSection
        title="Cada proyecto requiere una solución específica"
        subtitle="Analizamos"
        description="Todo proyecto comienza con una evaluación y visita técnica para conocer las condiciones de la instalación, identificar sus necesidades y definir correctamente el alcance."
        items={evaluationItems}
        imageSrc="/Sistema 2.png"
        imageAlt="Evaluación técnica en campo YACHA"
      />

      {/* 05: Ingeniería y diseño */}
      <AlternatingSection
        title="Ingeniería y diseño de sistemas contra incendios"
        subtitle="Definimos"
        description="A partir de la evaluación técnica, desarrollamos la ingeniería necesaria para definir una solución adecuada a las características y requerimientos de cada proyecto."
        items={engineeringItems}
        imageSrc="/Bomba 2.png"
        imageAlt="Ingeniería y planos técnicos de sistemas contra incendios"
        reverse={true}
        bgMuted={true}
      />

      {/* 06: Suministro e instalación */}
      <AlternatingSection
        title="Suministro e instalación de sistemas contra incendios"
        subtitle="Implementamos"
        description="Integramos el suministro y la instalación de los equipos, materiales y componentes definidos para cada proyecto, manteniendo coherencia entre la ingeniería desarrollada y su ejecución en campo."
        items={installationItems}
        technicalNote="Los equipos y componentes se seleccionan considerando las especificaciones, certificaciones, listados o aprobaciones aplicables a cada proyecto."
        imageSrc="/Puertas cortafuego.png"
        imageAlt="Instalación y montaje de sistemas contra incendios"
      />

      {/* 07: Pruebas y puesta en funcionamiento */}
      <AlternatingSection
        title="Pruebas y puesta en funcionamiento"
        subtitle="Verificamos"
        description="Una instalación correctamente ejecutada debe demostrar su funcionamiento. Realizamos las verificaciones y pruebas correspondientes para comprobar la operación del sistema antes de su puesta en funcionamiento."
        items={testingItems}
        imageSrc="/Bomba Contra Incendio.png"
        imageAlt="Pruebas operativas y puesta en funcionamiento"
        reverse={true}
        bgMuted={true}
      />

      {/* 08: Mantenimiento y continuidad operativa */}
      <AlternatingSection
        title="Mantenimiento y continuidad operativa"
        subtitle="Mantenemos"
        description="La puesta en funcionamiento no representa el final del ciclo. Los sistemas requieren inspecciones, pruebas y mantenimiento para conservar su operatividad y confiabilidad en el tiempo."
        items={maintenanceItems}
        link={{
          label: "Conoce nuestro servicio de Mantenimiento de Sistemas Contra Incendios →",
          href: "/servicios/mantenimiento",
        }}
        imageSrc="/Mantenimiento 1.png"
        imageAlt="Mantenimiento e inspección de sistemas contra incendios"
      />

      {/* 09: Normativa y estándares técnicos */}
      <NormativaSection
        title="Normativa y estándares técnicos aplicables"
        description="Desarrollamos cada solución considerando el marco normativo nacional y los estándares técnicos aplicables según las características, alcance y sistemas involucrados en cada proyecto."
        items={normativaList}
      />

      {/* 10: Capacidad profesional multidisciplinaria */}
      <section className="w-full bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D72638]">
              Equipo Especializado
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-[#103B5C] mt-1">
              Capacidad profesional multidisciplinaria
            </h2>
            <div className="mt-2 mx-auto w-12 h-1 bg-[#D72638] rounded-full" />
            <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
              Integramos las especialidades profesionales y técnicas necesarias de acuerdo con las características, alcance y requerimientos de cada proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {specialties.map((spec) => (
              <div
                key={spec.title}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-xs hover:border-[#103B5C] transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#103B5C] text-white mb-3">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#103B5C]">
                  {spec.title}
                </h3>
                <p className="mt-1.5 text-xs text-gray-600 leading-relaxed">
                  {spec.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500 font-medium italic">
              Los proyectos que lo requieren cuentan con la participación de profesionales colegiados y habilitados de las especialidades correspondientes.
            </p>
          </div>
        </div>
      </section>

      {/* 11: Metodología orientada al control */}
      <section className="w-full bg-slate-50 py-10 lg:py-12 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold uppercase tracking-tight text-[#103B5C]">
            Una metodología orientada al control de cada proyecto
          </h2>
          <div className="mt-2 mx-auto w-12 h-1 bg-[#D72638] rounded-full" />
          <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
            Gestionamos cada proyecto buscando mantener continuidad y trazabilidad entre lo definido técnicamente y su ejecución.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-bold uppercase tracking-wider text-[#103B5C]">
            <span className="px-4 py-2 rounded-lg bg-white border border-slate-200 shadow-xs">Planificamos</span>
            <span className="text-[#D72638]">→</span>
            <span className="px-4 py-2 rounded-lg bg-white border border-slate-200 shadow-xs">Coordinamos</span>
            <span className="text-[#D72638]">→</span>
            <span className="px-4 py-2 rounded-lg bg-white border border-slate-200 shadow-xs">Controlamos</span>
            <span className="text-[#D72638]">→</span>
            <span className="px-4 py-2 rounded-lg bg-white border border-slate-200 shadow-xs">Verificamos</span>
            <span className="text-[#D72638]">→</span>
            <span className="px-4 py-2 rounded-lg bg-white border border-slate-200 shadow-xs">Documentamos</span>
          </div>

          <p className="mt-4 text-[11px] text-gray-500 max-w-xl mx-auto">
            Los cambios técnicos identificados durante la ejecución son evaluados y documentados de acuerdo con el alcance y las condiciones del proyecto.
          </p>
        </div>
      </section>

      {/* 12: Diferenciadores */}
      <section className="w-full bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D72638]">
              Por Qué YACHA
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-[#103B5C] mt-1">
              Ingeniería, capacidad técnica y acompañamiento integral
            </h2>
            <div className="mt-2 mx-auto w-12 h-1 bg-[#D72638] rounded-full" />
            <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
              Desarrollamos proyectos de protección contra incendios en Lima y otras regiones del Perú, integrando ingeniería, capacidad profesional y control técnico de acuerdo con las necesidades de cada proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff) => (
              <div
                key={diff.title}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-xs"
              >
                <div className="flex items-center gap-2 text-[#D72638] mb-2">
                  <CheckCircle className="h-4 w-4 shrink-0" />
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#103B5C]">
                    {diff.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed pl-6">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13: CTA Final */}
      <ServiceCTA
        title="¿Necesitas una solución contra incendios para tu proyecto?"
        description="Cuéntanos sobre tu necesidad. Nuestro equipo revisará la información inicial y se pondrá en contacto contigo para conocer las características del proyecto y coordinar la visita técnica."
        serviceName="Sistemas Contra Incendios"
        imageSrc="/Trato 1.png"
      />

    </div>
  );
}

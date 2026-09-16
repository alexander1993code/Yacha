import Image from "next/image";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import ServiceProcess from "@/components/ServiceProcess";
import AlternatingSection from "@/components/AlternatingSection";
import NormativaSection from "@/components/NormativaSection";
import ServiceCTA from "@/components/ServiceCTA";
import {
  Wrench,
  Activity,
  FileText,
  CalendarCheck,
  ShieldCheck,
  ArrowRight,
  Droplet,
  Gauge,
  BellRing,
  Layers,
} from "lucide-react";

export const metadata = {
  title: "Mantenimiento de Sistemas Contra Incendios | YACHA",
  description:
    "Mantenimiento preventivo y correctivo de sistemas contra incendios en Lima y Perú: inspección, pruebas funcionales y protocolos bajo norma NFPA 25 y NFPA 72.",
};

const maintenanceImportanceSteps = [
  { label: "Inspeccionar", description: "Revisar las condiciones generales del sistema y sus componentes.", number: "01" },
  { label: "Verificar", description: "Comprobar su funcionamiento mediante las pruebas que correspondan.", number: "02" },
  { label: "Mantener", description: "Realizar las actividades necesarias de acuerdo con el alcance del servicio.", number: "03" },
  { label: "Conservar", description: "Contribuir a mantener las condiciones de operación durante su vida útil.", number: "04" },
];

const systemsServiced = [
  {
    title: "Sistemas de Detección y Alarma",
    description: "Inspección, pruebas y mantenimiento de paneles, detectores y lazos de señalización.",
    icon: BellRing,
    href: "/servicios/deteccion",
  },
  {
    title: "Bombas Contra Incendio",
    description: "Inspección, pruebas y mantenimiento del sistema de bombeo principal, jockey y tableros.",
    icon: Gauge,
    href: "/servicios/bombas",
  },
  {
    title: "Sistemas de Agua Contra Incendios",
    description: "Inspección, pruebas y mantenimiento de redes, rociadores, válvulas, gabinetes e hidrantes.",
    icon: Droplet,
    href: "/servicios/agua",
  },
  {
    title: "Sistemas Integrados",
    description: "Atención especializada de instalaciones complejas que combinan múltiples tecnologías PCI.",
    icon: Layers,
    href: "/servicios/sistemas-contra-incendios",
  },
];

const evaluationItems = [
  { title: "Configuración del sistema", description: "Tipo de sistema, componentes principales y modo de implementación actual." },
  { title: "Condiciones generales", description: "Estado visible, corrosión o desgaste que pueda influir en la operatividad." },
  { title: "Información disponible", description: "Revisión de planos de obra, manuales de equipos y reportes previos." },
  { title: "Antecedentes del sistema", description: "Registro histórico de intervenciones, fallas previas o modificaciones." },
  { title: "Necesidades de la instalación", description: "Requerimientos de seguridad específicos de la operación del cliente." },
  { title: "Alcance requerido", description: "Sistemas, áreas e intensidad de las actividades de mantenimiento a pactar." },
];

const inspectionItems = [
  { title: "Inspección visual técnica", description: "Verificación de integridad física, soportes, cables y ausencia de daños." },
  { title: "Pruebas funcionales", description: "Comprobación de arranque, presiones de trabajo y respuesta en tiempo real." },
  { title: "Señales y alarmas", description: "Monitoreo de señales de supervisión, fallas, silenciamiento y restablecimiento." },
  { title: "Condiciones hidráulicas", description: "Verificación de presiones estáticas, residuales y estado de válvulas." },
  { title: "Componentes críticos", description: "Medición de baterías, presostatos, fusibles y contactores principales." },
  { title: "Registro de observaciones", description: "Levantamiento riguroso de cualquier anomalía identificada en campo." },
];

const maintenanceActivities = [
  { title: "Mantenimiento preventivo", description: "Rutinas planificadas para prevenir paradas imprevistas y fallas de equipos." },
  { title: "Limpieza y calibración", description: "Desempolvado de paneles, limpieza de sensores y ajuste de parámetros." },
  { title: "Ajustes y lubricación", description: "Ajuste de bornes eléctricos, empaquetaduras y lubricación de rodamientos." },
  { title: "Corrección de observaciones", description: "Atención de desajustes menores detectados durante la inspección técnica." },
  { title: "Pruebas posteriores", description: "Verificación operativa tras las actividades para certificar plena funcionalidad." },
  { title: "Verificación final", description: "Comprobación de que el sistema queda en estado automático y operativo." },
];

const methodologySteps = [
  { label: "01 — Evaluación inicial", description: "Revisión del sistema existente y recopilación de antecedentes técnicos." },
  { label: "02 — Plan de intervención", description: "Definición de las actividades, frecuencias y cronograma de mantenimiento." },
  { label: "03 — Ejecución y pruebas", description: "Desarrollo riguroso de las tareas en campo y pruebas funcionales." },
  { label: "04 — Informe técnico", description: "Entrega de reporte formal con observaciones y recomendaciones de mejora." },
];

const serviceTypes = [
  {
    title: "Mantenimiento periódico",
    description: "Visitas programadas con frecuencias periódicas para garantizar la supervisión continua del sistema.",
    icon: CalendarCheck,
  },
  {
    title: "Intervenciones correctivas",
    description: "Atención técnica especializada para solucionar averías, reparar equipos o reponer componentes dañados.",
    icon: Wrench,
  },
  {
    title: "Evaluación y diagnóstico técnico",
    description: "Inspección integral y exhaustiva del estado operativo y normativo de sistemas existentes.",
    icon: FileText,
  },
];

const normativaMantenimiento = [
  {
    code: "RNE / A.130",
    name: "Reglamento Nacional de Edificaciones",
    description: "Criterios normativos peruanos de seguridad y conservación de las instalaciones contra incendios.",
  },
  {
    code: "NTP",
    name: "Normas Técnicas Peruanas",
    description: "Normas aplicables según el tipo de sistema, sus componentes y el alcance del servicio.",
  },
  {
    code: "NFPA 25",
    name: "Inspection, Testing, and Maintenance",
    description: "Estándar internacional de referencia para la inspección, prueba y mantenimiento de sistemas a base de agua.",
  },
  {
    code: "NFPA 72 / 20",
    name: "Estándares Técnicos Complementarios",
    description: "Lineamientos especializados para la preservación operativa de sistemas de detección, alarma y bombeo.",
  },
];

export default function MantenimientoPage() {
  return (
    <div className="w-full text-slate-900 flex flex-col justify-between">
      
      {/* 01: Hero */}
      <ServiceHero
        title={
          <>
            Mantenimiento de <span className="text-[#D72638]">Sistemas Contra Incendios</span>
          </>
        }
        category="Sistemas Contra Incendios"
        subheadline="Servicios de inspección, pruebas y mantenimiento para conservar las condiciones de operación de los sistemas contra incendios."
        description="Realizamos el mantenimiento de sistemas contra incendios en Lima y otras regiones del Perú, evaluando las condiciones de cada instalación para definir y ejecutar las actividades correspondientes según el sistema y el alcance del servicio."
        imageSrc="/Mantenimiento.png"
        imageAlt="Mantenimiento de Sistemas Contra Incendios YACHA"
        whatsappMessage="¡Hola! Deseo cotizar el Mantenimiento de Sistemas Contra Incendios con YACHA."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios/sistemas-contra-incendios" },
          { label: "Mantenimiento de Sistemas" },
        ]}
      />

      {/* 02: La importancia del mantenimiento */}
      <ServiceProcess
        title="La importancia del mantenimiento"
        description="Los sistemas contra incendios requieren inspecciones, pruebas y mantenimiento durante su vida útil para conservar sus condiciones de operación e identificar oportunamente necesidades de intervención."
        steps={maintenanceImportanceSteps}
      />

      {/* 03: Sistemas que atendemos */}
      <section className="w-full bg-slate-50 py-10 lg:py-14 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D72638]">
              Cobertura de Servicios
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#103B5C] mt-1">
              Sistemas que atendemos
            </h2>
            <div className="mt-2 mx-auto w-12 h-1 bg-[#D72638] rounded-full" />
            <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
              Realizamos servicios de mantenimiento en diferentes sistemas de protección contra incendios, definiendo las actividades necesarias de acuerdo con su configuración, condiciones y alcance del servicio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {systemsServiced.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex flex-col justify-between p-5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-[#103B5C] hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#103B5C] text-white mb-4 group-hover:bg-[#D72638] transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#103B5C] group-hover:text-[#D72638] transition-colors">
                      {item.title}
                    </h3>
                    <div className="my-1.5 h-[2px] w-6 bg-[#D72638]" />
                    <p className="text-[11px] text-gray-600 leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#103B5C] group-hover:text-[#D72638]">
                    <span>Conoce más</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04: Evaluación del sistema existente */}
      <AlternatingSection
        title="Evaluación del sistema existente"
        subtitle="Evaluamos"
        description="Todo servicio comienza con una evaluación técnica para conocer la configuración y las condiciones generales del sistema existente, revisar la información disponible e identificar las necesidades que permitan definir correctamente el alcance del mantenimiento."
        items={evaluationItems}
        imageSrc="/Mantenimiento 1.png"
        imageAlt="Evaluación inicial de sistema contra incendios"
      />

      {/* 05: Inspección y verificación del sistema */}
      <AlternatingSection
        title="Inspección y verificación del sistema"
        subtitle="Verificamos"
        description="Realizamos la inspección técnica visual y comprobación operativa de los equipos y componentes para verificar el estado en que se encuentran y su respuesta ante condiciones de prueba."
        items={inspectionItems}
        imageSrc="/Mantenimiento 2.png"
        imageAlt="Inspección técnica de sistemas de protección contra incendios"
        reverse={true}
        bgMuted={true}
      />

      {/* 06: Actividades de mantenimiento */}
      <AlternatingSection
        title="Actividades de mantenimiento"
        subtitle="Ejecutamos"
        description="Ejecutamos las actividades preventivas y correctivas correspondientes de acuerdo con las condiciones del sistema y el alcance acordado para el servicio."
        items={maintenanceActivities}
        imageSrc="/Mantenimiento 3.png"
        imageAlt="Ejecución de actividades de mantenimiento en campo"
      />

      {/* 07: Observaciones y recomendaciones técnicas */}
      <AlternatingSection
        title="Observaciones y recomendaciones técnicas"
        subtitle="Informamos"
        description="Al término de la intervención técnica, documentamos las condiciones identificadas, las actividades realizadas y las recomendaciones pertinentes para preservar la seguridad y confiabilidad del sistema."
        items={[
          { title: "Informe técnico formal", description: "Reporte estructurado con el detalle de las pruebas y mediciones realizadas." },
          { title: "Condiciones identificadas", description: "Registro de observaciones y estado operativo de cada subsistema." },
          { title: "Evidencia fotográfica", description: "Registro fotográfico antes y después de las intervenciones ejecutadas." },
          { title: "Recomendaciones preventivas", description: "Pautas técnicas para corregir desviaciones y anticipar averías mayores." },
          { title: "Priorización de acciones", description: "Orientación técnica clara sobre los puntos que requieren atención prioritaria." },
          { title: "Sustento normativo", description: "Marco de referencia basado en normas técnicas peruanas y estándares NFPA." },
        ]}
        imageSrc="/Mantenimiento 4.png"
        imageAlt="Informe técnico y reporte de mantenimiento YACHA"
        reverse={true}
        bgMuted={true}
      />

      {/* 08: Metodología y documentación del servicio */}
      <ServiceProcess
        title="Metodología y documentación del servicio"
        description="Aplicamos un procedimiento estructurado para asegurar la trazabilidad, calidad y control de cada intervención realizada."
        steps={methodologySteps}
      />

      {/* 09: Tipos de atención según el alcance */}
      <section className="w-full bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D72638]">
              Modalidades de Servicio
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#103B5C] mt-1">
              Tipos de atención según el alcance
            </h2>
            <div className="mt-2 mx-auto w-12 h-1 bg-[#D72638] rounded-full" />
            <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
              Brindamos esquemas de atención flexibles y adaptados al nivel de criticidad y requerimientos operativos de sus instalaciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div
                  key={type.title}
                  className="flex flex-col p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs hover:border-[#103B5C] hover:shadow-md transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#103B5C] text-white mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#103B5C]">
                    {type.title}
                  </h3>
                  <div className="my-2 h-[2px] w-8 bg-[#D72638]" />
                  <p className="text-xs text-gray-600 leading-relaxed mt-2">
                    {type.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10: Normativa y criterios técnicos */}
      <NormativaSection
        title="Normativa y criterios técnicos aplicables"
        description="Realizamos las labores de inspección, pruebas y mantenimiento considerando el marco normativo nacional y los estándares técnicos aplicables según las características y alcance del servicio."
        items={normativaMantenimiento}
      />

      {/* 11: CTA Final */}
      <ServiceCTA
        title="¿Necesitas realizar el mantenimiento de tu sistema contra incendios?"
        description="Cuéntanos sobre tu sistema contra incendios. Nuestro equipo revisará la información inicial y se pondrá en contacto contigo para conocer sus características y coordinar la evaluación técnica."
        serviceName="Mantenimiento de Sistemas Contra Incendios"
        imageSrc="/Trato 1.png"
      />

    </div>
  );
}

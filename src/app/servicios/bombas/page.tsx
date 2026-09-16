import Image from "next/image";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import ServiceProcess from "@/components/ServiceProcess";
import AlternatingSection from "@/components/AlternatingSection";
import NormativaSection from "@/components/NormativaSection";
import ServiceCTA from "@/components/ServiceCTA";
import FeatureGrid from "@/components/FeatureGrid";
import {
  Gauge,
  Sliders,
  Activity,
  Zap,
  Flame,
  ShieldAlert,
  Cpu,
  Boxes,
} from "lucide-react";

export const metadata = {
  title: "Bombas Contra Incendio en Perú | YACHA",
  description:
    "Soluciones de ingeniería en sistemas de bombeo contra incendio en Lima y regiones del Perú: evaluación, diseño, suministro, instalación, pruebas y mantenimiento.",
};

const pressureFlowSteps = [
  { label: "Abastecimiento", description: "Disponibilidad de agua para el sistema.", number: "01" },
  { label: "Impulsión", description: "Energía necesaria para movilizar el agua.", number: "02" },
  { label: "Caudal y Presión", description: "Condición hidráulica requerida para su operación.", number: "03" },
  { label: "Protección", description: "Respuesta efectiva ante cualquier emergencia.", number: "04" },
];

const bombComponents = [
  {
    icon: Gauge,
    title: "Bomba principal",
    description: "Equipo encargado de proporcionar el caudal y la presión requeridos por el sistema.",
  },
  {
    icon: Activity,
    title: "Bomba jockey",
    description: "Ayuda a mantener la presión del sistema ante pequeñas variaciones, evitando arranques innecesarios.",
  },
  {
    icon: Cpu,
    title: "Controlador",
    description: "Gestiona el arranque, supervisión y funciones de control asociadas a la bomba.",
  },
  {
    icon: Zap,
    title: "Fuente de energía",
    description: "Suministra la energía necesaria para la operación del equipo de bombeo según su configuración.",
  },
  {
    icon: Sliders,
    title: "Elementos de conexión y control",
    description: "Permiten la conexión hidráulica, supervisión y operación del conjunto de bombeo.",
  },
  {
    icon: Boxes,
    title: "Elementos auxiliares",
    description: "Complementan la instalación y operación del sistema de acuerdo con los requerimientos del proyecto.",
  },
];

const evaluationItems = [
  { title: "Requerimientos del sistema", description: "Caudales y presiones nominales demandados por la instalación." },
  { title: "Fuente y abastecimiento", description: "Condiciones de la cisterna o fuente de agua disponible." },
  { title: "Infraestructura existente", description: "Verificación de tuberías y conexiones preexistentes." },
  { title: "Espacio y cuarto de bombas", description: "Área disponible, accesibilidad y ventilación requerida." },
  { title: "Disponibilidad de energía", description: "Suministro eléctrico, respaldo de emergencia y potencia." },
  { title: "Criterios técnicos y normativos", description: "Cumplimiento del RNE A.130 y estándares NFPA 20." },
];

const engineeringItems = [
  { title: "Condiciones de diseño", description: "Requerimientos hidráulicos que debe atender el sistema de bombeo." },
  { title: "Caudal y presión", description: "Cálculos para garantizar la curva de operación necesaria." },
  { title: "Configuración del sistema", description: "Solución de bombeo adaptada a las necesidades del proyecto." },
  { title: "Selección de equipos", description: "Equipos definidos de acuerdo con los rigurosos criterios de ingeniería." },
  { title: "Criterios de instalación", description: "Detalles de montaje para asegurar una correcta ejecución en obra." },
  { title: "Planos y especificaciones", description: "Documentación técnica detallada para orientar la ejecución." },
];

const installationItems = [
  { title: "Suministro de equipos", description: "Equipos y componentes definidos y aprobados para el proyecto." },
  { title: "Montaje electromecánico", description: "Instalación y disposición precisa de los equipos de bombeo." },
  { title: "Conexiones hidráulicas", description: "Integración hidráulica con colectores, válvulas y la red." },
  { title: "Conexiones eléctricas y de control", description: "Alimentación, sensores y cableado hacia los tableros de control." },
  { title: "Configuración de parámetros", description: "Calibración de presostatos y funciones operativas del sistema." },
  { title: "Control de ejecución", description: "Verificación permanente de la implementación según los planos." },
];

const operationSteps = [
  { label: "Condiciones", description: "Monitoreo permanente del estado hidráulico de la red.", number: "01" },
  { label: "Control", description: "Supervisión de presiones y gestión automática de arranque.", number: "02" },
  { label: "Accionamiento", description: "Operación de los equipos de acuerdo con la secuencia definida.", number: "03" },
  { label: "Bombeo continuo", description: "Suministro del caudal y presión requeridos por el sistema.", number: "04" },
];

const testingItems = [
  { title: "Inspección de equipos", description: "Revisión física y dimensional de los equipos y componentes implementados." },
  { title: "Arranque y operación", description: "Verificación de la respuesta automática y manual según la configuración." },
  { title: "Verificación de caudal y presión", description: "Comprobación de las condiciones hidráulicas en puntos de prueba." },
  { title: "Control y señalización", description: "Comprobación de alarmas, contactores y señales enviadas a la central." },
  { title: "Funcionamiento del conjunto", description: "Verificación integral de la respuesta de todo el sistema de bombeo." },
];

const normativaBombas = [
  {
    code: "RNE / A.130",
    name: "Reglamento Nacional de Edificaciones",
    description: "Requisitos de seguridad y protección contra incendios aplicables a las edificaciones en Perú.",
  },
  {
    code: "CNE",
    name: "Código Nacional de Electricidad",
    description: "Requisitos aplicables a las instalaciones eléctricas asociadas a los equipos de bombeo contra incendio.",
  },
  {
    code: "NTP",
    name: "Normas Técnicas Peruanas",
    description: "Normas técnicas aplicables según los equipos, componentes y alcance de la instalación.",
  },
  {
    code: "NFPA 20",
    name: "Standard for Stationary Pumps for Fire Protection",
    description: "Estándar especializado para la instalación y selección de bombas estacionarias contra incendios.",
  },
];

const maintenanceItems = [
  { title: "Inspección periódica", description: "Revisión de las condiciones generales de las bombas y accesorios." },
  { title: "Pruebas de funcionamiento", description: "Verificación periódica del arranque y respuesta del sistema." },
  { title: "Mantenimiento especializado", description: "Actividades orientadas a conservar la confiabilidad operativa." },
  { title: "Documentación y reportes", description: "Registro exhaustivo de las actividades y mediciones realizadas." },
  { title: "Recomendaciones técnicas", description: "Detección temprana de condiciones relevantes y mejoras preventivas." },
];

export default function BombasPage() {
  return (
    <div className="w-full text-slate-900 flex flex-col justify-between">
      
      {/* 01: Hero */}
      <ServiceHero
        title={
          <>
            Bombas <span className="text-[#D72638]">Contra Incendio</span>
          </>
        }
        category="Sistemas Contra Incendios"
        subheadline="Soluciones de ingeniería para proporcionar el caudal y la presión requeridos por los sistemas de protección contra incendios."
        description="Desarrollamos sistemas de bombeo contra incendio en Lima y otras regiones del Perú, desde la evaluación y la ingeniería hasta el suministro, instalación, pruebas y puesta en funcionamiento."
        imageSrc="/Bomba 1.png"
        imageAlt="Bombas Contra Incendio YACHA"
        whatsappMessage="¡Hola! Deseo cotizar un sistema de Bombas Contra Incendio con YACHA."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios/sistemas-contra-incendios" },
          { label: "Bombas Contra Incendio" },
        ]}
      />

      {/* 02: Presión y Caudal */}
      <ServiceProcess
        title="Presión y caudal para la protección contra incendios"
        description="El sistema de bombeo permite suministrar agua con el caudal y la presión requeridos para el funcionamiento de los sistemas de protección contra incendios que dependen de una alimentación hidráulica."
        steps={pressureFlowSteps}
      />

      {/* 03: Componentes del Sistema de Bombeo */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-10 lg:py-14 text-[#103B5C]">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D72638]">
            Arquitectura del Sistema
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#103B5C] mt-1">
            Componentes de un sistema de bombeo contra incendio
          </h2>
          <div className="mt-2 mx-auto w-12 h-1 bg-[#D72638] rounded-full" />
          <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
            Un sistema de bombeo contra incendio integra equipos y componentes destinados a proporcionar las condiciones hidráulicas requeridas por la instalación. Su configuración se define de acuerdo con las características y necesidades de cada proyecto.
          </p>
        </div>

        <FeatureGrid features={bombComponents} columns={3} />
      </section>

      {/* 04: Cada proyecto requiere una evaluación específica */}
      <AlternatingSection
        title="Cada proyecto requiere una evaluación específica"
        subtitle="Analizamos"
        description="Todo proyecto comienza con una visita y evaluación técnica para conocer las condiciones de la instalación, identificar las necesidades del sistema y recopilar la información necesaria para definir correctamente la solución de bombeo."
        items={evaluationItems}
        imageSrc="/Bomba 2.png"
        imageAlt="Inspección de cuarto de bombas YACHA"
        bgMuted={true}
      />

      {/* 05: Ingeniería y diseño */}
      <AlternatingSection
        title="Ingeniería y diseño del sistema de bombeo"
        subtitle="Definimos"
        description="A partir de la evaluación técnica, desarrollamos la ingeniería necesaria para definir las condiciones hidráulicas, la configuración y los equipos del sistema de bombeo de acuerdo con las características y requerimientos del proyecto."
        items={engineeringItems}
        imageSrc="/Bomba 1.png"
        imageAlt="Ingeniería de sistema de bombeo contra incendios"
        reverse={true}
      />

      {/* 06: Suministro e instalación */}
      <AlternatingSection
        title="Suministro e instalación del sistema de bombeo"
        subtitle="Implementamos"
        description="Implementamos la solución definida en la ingeniería mediante el suministro, instalación y configuración de los equipos y componentes correspondientes a cada proyecto."
        items={installationItems}
        technicalNote="Los equipos y componentes se seleccionan considerando las especificaciones técnicas, listados, aprobaciones y demás requisitos aplicables al proyecto."
        imageSrc="/Bomba Contra Incendio.png"
        imageAlt="Instalación de bombas contra incendios en campo"
        bgMuted={true}
      />

      {/* 07: Configuración y funcionamiento */}
      <ServiceProcess
        title="Configuración y funcionamiento del sistema"
        description="El sistema de bombeo opera de manera coordinada para responder a las condiciones hidráulicas de la instalación y proporcionar el caudal y la presión requeridos cuando el sistema lo demanda."
        steps={operationSteps}
      />

      {/* 08: Pruebas y puesta en funcionamiento */}
      <AlternatingSection
        title="Pruebas y puesta en funcionamiento"
        subtitle="Verificamos"
        description="Antes de poner el sistema en funcionamiento, verificamos la operación y el desempeño del conjunto de bombeo de acuerdo con la configuración y los requerimientos definidos para el proyecto."
        items={testingItems}
        imageSrc="/Bomba 1.png"
        imageAlt="Pruebas de caudal y presión en bombas contra incendios"
        reverse={true}
        bgMuted={true}
      />

      {/* 09: Normativa y criterios técnicos */}
      <NormativaSection
        title="Normativa y criterios técnicos aplicables"
        description="Desarrollamos los sistemas de bombeo contra incendio considerando el marco normativo nacional y los estándares técnicos aplicables según las características, alcance y requerimientos de cada proyecto."
        items={normativaBombas}
      />

      {/* 10: Mantenimiento y continuidad operativa */}
      <AlternatingSection
        title="Mantenimiento y continuidad operativa"
        subtitle="Mantenemos"
        description="Los sistemas de bombeo contra incendio requieren inspecciones, pruebas y mantenimiento para conservar su operatividad y confiabilidad durante su vida útil."
        items={maintenanceItems}
        link={{
          label: "Conoce nuestro servicio de Mantenimiento de Sistemas Contra Incendios →",
          href: "/servicios/mantenimiento",
        }}
        imageSrc="/Mantenimiento 2.png"
        imageAlt="Mantenimiento preventivo de bombas contra incendio"
      />

      {/* 11: CTA Final */}
      <ServiceCTA
        title="¿Necesitas un sistema de bombeo contra incendio para tu proyecto?"
        description="Cuéntanos sobre tu proyecto. Nuestro equipo revisará la información inicial y se pondrá en contacto contigo para conocer sus características y coordinar la visita técnica."
        serviceName="Bombas Contra Incendio"
        imageSrc="/Trato 2.png"
      />

    </div>
  );
}

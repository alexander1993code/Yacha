import Image from "next/image";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import ServiceProcess from "@/components/ServiceProcess";
import AlternatingSection from "@/components/AlternatingSection";
import NormativaSection from "@/components/NormativaSection";
import ServiceCTA from "@/components/ServiceCTA";
import FeatureGrid from "@/components/FeatureGrid";
import {
  Droplets,
  Flame,
  Network,
  Box,
  CircleDot,
  Sliders,
} from "lucide-react";

export const metadata = {
  title: "Sistemas de Agua Contra Incendios | YACHA",
  description:
    "Diseño, suministro e instalación de sistemas de agua contra incendios en Lima y Perú: rociadores automáticos, redes húmedas, gabinetes e hidrantes bajo normas NFPA.",
};

const waterFlowSteps = [
  { label: "Disponibilidad", description: "Agua disponible para atender las necesidades del sistema.", number: "01" },
  { label: "Distribución", description: "Conducción del agua a través de la infraestructura del sistema.", number: "02" },
  { label: "Aplicación", description: "Entrega del agua en los puntos de protección definidos.", number: "03" },
  { label: "Protección", description: "Respuesta hidráulica de acuerdo con la configuración del sistema.", number: "04" },
];

const waterComponents = [
  {
    icon: Network,
    title: "Red de tuberías",
    description: "Permite conducir y distribuir el agua hacia los diferentes puntos de protección del edificio.",
  },
  {
    icon: Droplets,
    title: "Rociadores automáticos",
    description: "Permiten la descarga oportuna de agua en las áreas protegidas para el control y extinción del fuego.",
  },
  {
    icon: Box,
    title: "Gabinetes contra incendio",
    description: "Integran mangueras, pitones y válvulas para facilitar la primera respuesta ante una emergencia.",
  },
  {
    icon: CircleDot,
    title: "Hidrantes",
    description: "Proporcionan puntos estratégicos de conexión y suministro de agua para bomberos y brigadistas.",
  },
  {
    icon: Sliders,
    title: "Válvulas y elementos de control",
    description: "Permiten controlar, sectorizar y supervisar de forma segura las condiciones de operación de la red.",
  },
  {
    icon: Flame,
    title: "Conexiones y elementos auxiliares",
    description: "Sistemas de purga, drenaje, manómetros y siamesas que complementan la operación del sistema.",
  },
];

const evaluationItems = [
  { title: "Características de la instalación", description: "Uso, distribución y condiciones relevantes de la edificación." },
  { title: "Áreas y necesidades de protección", description: "Espacios, cargas de fuego y tipología de riesgos a proteger." },
  { title: "Infraestructura existente", description: "Condiciones de las instalaciones preexistentes y puntos de enlace." },
  { title: "Abastecimiento de agua", description: "Fuente, reservas en cisterna y condiciones de caudal y presión." },
  { title: "Condiciones para la distribución", description: "Recorridos, pases estructurales y alturas disponibles para tuberías." },
  { title: "Requerimientos técnicos y normativos", description: "Criterios del RNE A.130 y normas NFPA aplicables al proyecto." },
];

const engineeringItems = [
  { title: "Criterios de diseño", description: "Condiciones y requerimientos técnicos que orientan la solución integral." },
  { title: "Demanda hidráulica", description: "Cálculos de caudal y presión para los puntos más desfavorables del sistema." },
  { title: "Distribución de la red", description: "Trazado isométrico y recorrido optimizado de troncales y ramales." },
  { title: "Dimensionamiento", description: "Definición de diámetros de tuberías según velocidad y pérdida de carga." },
  { title: "Selección de componentes", description: "Rociadores, válvulas y accesorios con certificaciones y listados requeridos." },
  { title: "Planos y especificaciones", description: "Documentación técnica de detalle para la correcta ejecución en obra." },
];

const installationItems = [
  { title: "Suministro de materiales", description: "Tuberías de acero al carbono ranuradas o soldadas con listados aprobados." },
  { title: "Red de tuberías", description: "Instalación y trazado de la red según las pendientes y alturas del diseño." },
  { title: "Soportes sismorresistentes", description: "Fijación y arriostramiento de acuerdo a normativas de sismicidad." },
  { title: "Componentes de protección", description: "Instalación de rociadores, rosetas y gabinetes en puntos definidos." },
  { title: "Válvulas y sectorización", description: "Montaje de válvulas de mariposa supervisadas, retención y sectorización." },
  { title: "Control de ejecución", description: "Aseguramiento de la calidad en uniones ranuradas y soldaduras en obra." },
];

const distributionSteps = [
  { label: "01 — Abastecimiento", description: "Disponibilidad permanente de agua en la cisterna o sistema de bombeo." },
  { label: "02 — Red de distribución", description: "Conducción presurizada del agua a través de montantes y colectores principales." },
  { label: "03 — Elementos de control", description: "Válvulas supervisoras y estaciones de alarma regulan la red." },
  { label: "04 — Puntos de protección", description: "Descarga automática en rociadores o toma manual en gabinetes e hidrantes." },
];

const testingItems = [
  { title: "Prueba hidrostática", description: "Pruebas de presión a 200 psi durante 2 horas para verificar total estanqueidad." },
  { title: "Lavado de tuberías (Flushing)", description: "Limpieza de sedimentos en la red previo a la colocación de rociadores." },
  { title: "Verificación de válvulas", description: "Inspección de apertura/cierre y monitoreo de interruptores de supervisión." },
  { title: "Prueba de campana de alarma", description: "Activación del flujo hidráulico para corroborar el aviso sonoro local." },
  { title: "Dossier y planos conforme a obra", description: "Entrega de manuales, certificados de prueba y planos as-built." },
];

const normativaAgua = [
  {
    code: "RNE / A.130",
    name: "Reglamento Nacional de Edificaciones",
    description: "Norma técnica obligatoria de seguridad para sistemas de rociadores y redes de agua en Perú.",
  },
  {
    code: "NTP",
    name: "Normas Técnicas Peruanas",
    description: "Normas peruanas sobre gabinetes, mangueras, conexiones siamesas e hidrantes.",
  },
  {
    code: "NFPA 13",
    name: "Standard for the Installation of Sprinkler Systems",
    description: "Estándar de referencia mundial para el diseño e instalación de sistemas de rociadores automáticos.",
  },
  {
    code: "NFPA 14 / 24",
    name: "Redes y Tuberías Verticales",
    description: "Estándares especializados para sistemas de tuberías verticales, mangueras y redes subterráneas privadas.",
  },
];

const maintenanceItems = [
  { title: "Inspección de rociadores y red", description: "Revisión del estado de las boquillas, ausencia de obstrucciones y corrosión." },
  { title: "Pruebas de válvulas y alarmas", description: "Operación de válvulas de drenaje principal y pruebas de flujo de alarma." },
  { title: "Mantenimiento de gabinetes", description: "Inspección de mangueras, pitones de descarga y verificación de sellos." },
  { title: "Documentación y registro", description: "Informes detallados conforme a los protocolos del estándar NFPA 25." },
  { title: "Recomendaciones operativas", description: "Identificación de mejoras para preservar la disponibilidad de la red." },
];

export default function AguaPage() {
  return (
    <div className="w-full text-slate-900 flex flex-col justify-between">
      
      {/* 01: Hero */}
      <ServiceHero
        title={
          <>
            Sistemas de Agua <span className="text-[#D72638]">Contra Incendios</span>
          </>
        }
        category="Sistemas Contra Incendios"
        subheadline="Soluciones de ingeniería para la distribución y aplicación de agua en sistemas de protección contra incendios."
        description="Desarrollamos sistemas de agua contra incendios en Lima y otras regiones del Perú, desde la evaluación y la ingeniería hasta el suministro, instalación, pruebas y puesta en funcionamiento."
        imageSrc="/Sprinklers.png"
        imageAlt="Sistemas de Agua Contra Incendios YACHA"
        whatsappMessage="¡Hola! Deseo cotizar un Sistema de Agua Contra Incendios con YACHA."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios/sistemas-contra-incendios" },
          { label: "Sistemas de Agua" },
        ]}
      />

      {/* 02: El agua como medio de protección */}
      <ServiceProcess
        title="El agua como medio de protección contra incendios"
        description="Los sistemas de agua contra incendios permiten disponer, distribuir y aplicar agua en los puntos de protección requeridos, de acuerdo con las características y necesidades de cada instalación."
        steps={waterFlowSteps}
      />

      {/* 03: Componentes */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-10 lg:py-14 text-[#103B5C]">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D72638]">
            Infraestructura Hidráulica
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#103B5C] mt-1">
            Componentes de un sistema de agua contra incendios
          </h2>
          <div className="mt-2 mx-auto w-12 h-1 bg-[#D72638] rounded-full" />
          <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
            Un sistema de agua contra incendios puede integrar diferentes componentes para conducir, controlar y aplicar el agua en las áreas de protección definidas.
          </p>
        </div>

        <FeatureGrid features={waterComponents} columns={3} />
      </section>

      {/* 04: Cada proyecto requiere una evaluación específica */}
      <AlternatingSection
        title="Cada proyecto requiere una evaluación específica"
        subtitle="Analizamos"
        description="Todo proyecto comienza con una visita y evaluación técnica para conocer las características de la edificación o instalación, identificar las áreas y necesidades de protección y recopilar la información necesaria para definir correctamente el sistema."
        items={evaluationItems}
        imageSrc="/RED HUMEDA.png"
        imageAlt="Evaluación técnica de redes de agua contra incendios"
        bgMuted={true}
      />

      {/* 05: Ingeniería y diseño del sistema */}
      <AlternatingSection
        title="Ingeniería y diseño del sistema"
        subtitle="Definimos"
        description="A partir de la evaluación técnica, desarrollamos la ingeniería necesaria para definir la configuración, distribución y condiciones hidráulicas del sistema de acuerdo con las características y requerimientos del proyecto."
        items={engineeringItems}
        technicalNote="Cuando corresponde al alcance del proyecto, la ingeniería considera los cálculos hidráulicos necesarios para sustentar el diseño del sistema."
        imageSrc="/Sprinklers.png"
        imageAlt="Ingeniería y cálculos hidráulicos YACHA"
        reverse={true}
      />

      {/* 06: Suministro e instalación */}
      <AlternatingSection
        title="Suministro e instalación del sistema"
        subtitle="Implementamos"
        description="Implementamos la solución definida en la ingeniería mediante el suministro, instalación e integración de las redes, equipos y componentes correspondientes a cada proyecto."
        items={installationItems}
        technicalNote="Los equipos, materiales y componentes se seleccionan considerando las especificaciones técnicas, listados, aprobaciones y demás requisitos aplicables al proyecto."
        imageSrc="/Gabinetes Contra Incendio.png"
        imageAlt="Instalación de red de agua y gabinetes contra incendios"
        bgMuted={true}
      />

      {/* 07: Distribución y funcionamiento */}
      <ServiceProcess
        title="Distribución y funcionamiento del sistema"
        description="Los diferentes elementos del sistema trabajan de manera integrada para conducir y distribuir el agua hacia los puntos de protección definidos para cada instalación."
        steps={distributionSteps}
      />

      {/* 08: Pruebas y puesta en funcionamiento */}
      <AlternatingSection
        title="Pruebas y puesta en funcionamiento"
        subtitle="Verificamos"
        description="Antes de poner el sistema en funcionamiento, realizamos las pruebas y verificaciones correspondientes para comprobar la operación y estanqueidad del conjunto de acuerdo con los requerimientos técnicos del proyecto."
        items={testingItems}
        imageSrc="/Rociadores automáticos.png"
        imageAlt="Pruebas de presión hidrostática y descarga"
        reverse={true}
        bgMuted={true}
      />

      {/* 09: Normativa y criterios técnicos */}
      <NormativaSection
        title="Normativa y criterios técnicos aplicables"
        description="Desarrollamos los sistemas de agua contra incendios considerando el marco normativo nacional y los estándares técnicos aplicables según las características, alcance y requerimientos de cada proyecto."
        items={normativaAgua}
      />

      {/* 10: Mantenimiento y continuidad operativa */}
      <AlternatingSection
        title="Mantenimiento y continuidad operativa"
        subtitle="Mantenemos"
        description="Los sistemas de agua contra incendios requieren inspecciones, pruebas y mantenimiento para conservar sus condiciones de operación y contribuir a su disponibilidad durante su vida útil."
        items={maintenanceItems}
        link={{
          label: "Conoce nuestro servicio de Mantenimiento de Sistemas Contra Incendios →",
          href: "/servicios/mantenimiento",
        }}
        imageSrc="/Mantenimiento 4.png"
        imageAlt="Inspección y mantenimiento de redes contra incendios"
      />

      {/* 11: CTA Final */}
      <ServiceCTA
        title="¿Necesitas un sistema de agua contra incendios para tu proyecto?"
        description="Cuéntanos sobre tu proyecto. Nuestro equipo revisará la información inicial y se pondrá en contacto contigo para conocer sus características y coordinar la visita técnica."
        serviceName="Sistemas de Agua Contra Incendios"
        imageSrc="/Trato 2.png"
      />

    </div>
  );
}

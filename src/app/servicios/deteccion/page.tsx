import Image from "next/image";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import ServiceProcess from "@/components/ServiceProcess";
import AlternatingSection from "@/components/AlternatingSection";
import NormativaSection from "@/components/NormativaSection";
import ServiceCTA from "@/components/ServiceCTA";
import FeatureGrid from "@/components/FeatureGrid";
import {
  Bell,
  Radio,
  SlidersHorizontal,
  Volume2,
  Cpu,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Sistemas de Detección y Alarma Contra Incendios | YACHA",
  description:
    "Ingeniería en sistemas de detección y alarma contra incendios en Lima y Perú: paneles inteligentes, detectores, notificación oportuna y cumplimiento NFPA 72.",
};

const detectionFlowSteps = [
  { label: "Detectamos", description: "Identificación de condiciones asociadas a un posible evento de incendio.", number: "01" },
  { label: "Procesamos", description: "Recepción y procesamiento de las señales del sistema en tiempo real.", number: "02" },
  { label: "Alertamos", description: "Activación de las señales de alarma sonora y visual correspondientes.", number: "03" },
  { label: "Facilitamos respuesta", description: "Información oportuna para apoyar las acciones de evacuación y brigadas.", number: "04" },
];

const detectionComponents = [
  {
    icon: Cpu,
    title: "Panel o central de alarma",
    description: "Recibe, procesa y gestiona las señales de todos los dispositivos conectados al sistema.",
  },
  {
    icon: Radio,
    title: "Detectores especializados",
    description: "Dispositivos fotoeléctricos, térmicos o multicriterio para identificar rápidamente fuego o humo.",
  },
  {
    icon: Bell,
    title: "Estaciones manuales",
    description: "Permiten al personal iniciar manualmente una señal de alarma ante una situación de emergencia.",
  },
  {
    icon: Volume2,
    title: "Dispositivos de notificación",
    description: "Generan señales audibles y luces estroboscópicas para comunicar inmediatamente la condición de alarma.",
  },
  {
    icon: SlidersHorizontal,
    title: "Módulos e interfaces",
    description: "Permiten supervisar, controlar o intercambiar señales con ascensores, bombas y sistemas relacionados.",
  },
  {
    icon: Zap,
    title: "Fuentes y auxiliares",
    description: "Proporcionan alimentación continua y respaldo de energía para garantizar la operación ininterrumpida.",
  },
];

const evaluationItems = [
  { title: "Uso de la edificación", description: "Clasificación de riesgo comercial, industrial, corporativo o residencial." },
  { title: "Distribución de ambientes", description: "Revisión de alturas, cielorrasos, áreas de almacenamiento y ductos." },
  { title: "Riesgos y entorno", description: "Evaluación de fuentes de calor, ventilación y factores ambientales." },
  { title: "Sistemas existentes", description: "Compatibilidad con infraestructura y cableado actualmente instalado." },
  { title: "Necesidades de integración", description: "Interacción requerida con HVAC, presurización de escaleras y accesos." },
  { title: "Requerimientos normativos", description: "Disposiciones del RNE A.130, CNE y lineamientos NFPA 72." },
];

const engineeringItems = [
  { title: "Arquitectura del sistema", description: "Definición técnica entre sistema convencional o direccionable según el alcance." },
  { title: "Criterios de detección", description: "Selección del método idóneo: óptico, térmico, por haz de luz o aspiración." },
  { title: "Selección de dispositivos", description: "Equipos certificados para cada zona y condición ambiental de la obra." },
  { title: "Ubicación y cobertura", description: "Distribución planimétrica asegurando radios de cobertura normativos." },
  { title: "Planos y especificaciones", description: "Diagramas unifilares, recorridos de tuberías y memorias técnicas." },
  { title: "Integración de sistemas", description: "Matrices causa-efecto para activación coordinada con otras especialidades." },
];

const installationItems = [
  { title: "Suministro de componentes", description: "Provisión de paneles, sensores y estaciones con estándares certificados." },
  { title: "Instalación en obra", description: "Montaje físico de dispositivos en ubicaciones aprobadas por la ingeniería." },
  { title: "Canalización y cableado", description: "Tendido de tubería conduit y cable contra fuego (FPL / FPLR / FPLP)." },
  { title: "Configuración y programación", description: "Programación de la central, zonas, lazos y nombres de dispositivos." },
  { title: "Integración de señales", description: "Conexión de módulos de monitoreo y control con sub-sistemas del edificio." },
  { title: "Control de ejecución", description: "Supervisión técnica de acuerdo a la documentación y planos aprobados." },
];

const integrationSteps = [
  { label: "01 — Iniciación", description: "Detectores de humo/temperatura, estaciones manuales y módulos supervisados." },
  { label: "02 — Procesamiento", description: "Panel o central de alarma procesa el evento y ejecuta la lógica de control." },
  { label: "03 — Notificación", description: "Sirenas con estrobo alertan a los ocupantes para una evacuación ordenada." },
  { label: "04 — Integración", description: "Liberación de puertas, retorno de ascensores y señales a sistemas vinculados." },
];

const testingItems = [
  { title: "Verificación de dispositivos", description: "Prueba individual de cada detector con gas/humo sintético y estación manual." },
  { title: "Supervisión de señales", description: "Comprobación de líneas abiertas, fallas a tierra y estado de baterías." },
  { title: "Alarmas y notificación", description: "Medición de niveles de presión sonora (dB) y visibilidad de estrobos." },
  { title: "Integraciones cruzadas", description: "Verificación en campo de la matriz causa-efecto con sistemas de terceros." },
  { title: "Operación del sistema", description: "Simulación de corte de energía y respuesta integral de la central." },
];

const normativaDeteccion = [
  {
    code: "RNE / A.130",
    name: "Reglamento Nacional de Edificaciones",
    description: "Requisitos de seguridad aplicables a las edificaciones y sistemas de detección y alarma.",
  },
  {
    code: "CNE",
    name: "Código Nacional de Electricidad",
    description: "Requisitos aplicables a las instalaciones eléctricas y cableado asociado al sistema de alarma.",
  },
  {
    code: "NTP",
    name: "Normas Técnicas Peruanas",
    description: "Estándares peruanos aplicables según los componentes, señalización y alcance del proyecto.",
  },
  {
    code: "NFPA 72",
    name: "National Fire Alarm and Signaling Code",
    description: "Código técnico de referencia internacional para diseño, instalación e inspección de alarmas.",
  },
];

const maintenanceItems = [
  { title: "Inspección periódica", description: "Revisión física del panel, baterías, cableados y estado de los detectores." },
  { title: "Pruebas de respuesta", description: "Verificación funcional regular de lazos de iniciación y circuitos de aviso." },
  { title: "Limpieza y calibración", description: "Mantenimiento preventivo para prevenir falsas alarmas por acumulación de polvo." },
  { title: "Documentación de registros", description: "Dossier con reporte técnico del estado de operatividad de la central." },
  { title: "Recomendaciones técnicas", description: "Identificación de mejoras, reemplazo de fuentes o ampliaciones de zona." },
];

export default function DeteccionPage() {
  return (
    <div className="w-full text-slate-900 flex flex-col justify-between">
      
      {/* 01: Hero */}
      <ServiceHero
        title={
          <>
            Sistemas de Detección y <span className="text-[#D72638]">Alarma Contra Incendios</span>
          </>
        }
        category="Sistemas Contra Incendios"
        subheadline="Soluciones de ingeniería para detectar oportunamente eventos de incendio y activar los mecanismos de alarma y notificación."
        description="Desarrollamos sistemas de detección y alarma contra incendios en Lima y otras regiones del Perú, desde la evaluación y el diseño hasta el suministro, instalación, pruebas y puesta en funcionamiento."
        imageSrc="/PANEL CONTRA INCENDIO.png"
        imageAlt="Sistemas de Detección y Alarma YACHA"
        whatsappMessage="¡Hola! Deseo cotizar un Sistema de Detección y Alarma Contra Incendios con YACHA."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios/sistemas-contra-incendios" },
          { label: "Detección y Alarma" },
        ]}
      />

      {/* 02: Detección temprana y respuesta oportuna */}
      <ServiceProcess
        title="Detección temprana y respuesta oportuna"
        description="Un sistema de detección y alarma permite identificar oportunamente condiciones asociadas a un incendio, procesar las señales recibidas y generar las alertas necesarias para facilitar una respuesta adecuada."
        steps={detectionFlowSteps}
      />

      {/* 03: Componentes */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-10 lg:py-14 text-[#103B5C]">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D72638]">
            Dispositivos & Equipamiento
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#103B5C] mt-1">
            Componentes de un sistema de detección y alarma contra incendios
          </h2>
          <div className="mt-2 mx-auto w-12 h-1 bg-[#D72638] rounded-full" />
          <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
            Los sistemas de detección y alarma integran diferentes dispositivos para identificar condiciones de incendio, procesar señales y generar las alertas correspondientes según cada proyecto.
          </p>
        </div>

        <FeatureGrid features={detectionComponents} columns={3} />
      </section>

      {/* 04: Cada instalación requiere una evaluación específica */}
      <AlternatingSection
        title="Cada instalación requiere una evaluación específica"
        subtitle="Analizamos"
        description="Todo proyecto comienza con una visita y evaluación técnica para conocer las características de la instalación, identificar sus necesidades y recopilar la información necesaria para definir correctamente el sistema de detección y alarma."
        items={evaluationItems}
        imageSrc="/Sistema de detección de incendios.png"
        imageAlt="Evaluación de sistema de detección YACHA"
        bgMuted={true}
      />

      {/* 05: Ingeniería y diseño del sistema */}
      <AlternatingSection
        title="Ingeniería y diseño del sistema de detección y alarma"
        subtitle="Definimos"
        description="A partir de la evaluación técnica, desarrollamos la ingeniería necesaria para definir la configuración, los dispositivos, su ubicación y los criterios de funcionamiento del sistema de acuerdo con las características y requerimientos del proyecto."
        items={engineeringItems}
        imageSrc="/Sistema 1.png"
        imageAlt="Diseño de planos y lazos de alarma contra incendio"
        reverse={true}
      />

      {/* 06: Suministro e instalación */}
      <AlternatingSection
        title="Suministro e instalación del sistema de detección y alarma"
        subtitle="Implementamos"
        description="Implementamos la solución definida en la ingeniería mediante el suministro, instalación y configuración de los equipos y dispositivos correspondientes a cada proyecto."
        items={installationItems}
        technicalNote="Los equipos y dispositivos se seleccionan considerando las especificaciones técnicas, listados, aprobaciones y demás requisitos aplicables al proyecto."
        imageSrc="/PANEL CONTRA INCENDIO.png"
        imageAlt="Instalación de panel contra incendio YACHA"
        bgMuted={true}
      />

      {/* 07: Integración y funcionamiento */}
      <ServiceProcess
        title="Integración y funcionamiento del sistema"
        description="Los dispositivos del sistema trabajan de manera coordinada para detectar o recibir una señal de emergencia, procesarla y activar las acciones de alarma, notificación o control definidas para el proyecto."
        steps={integrationSteps}
      />

      {/* 08: Pruebas y puesta en funcionamiento */}
      <AlternatingSection
        title="Pruebas y puesta en funcionamiento"
        subtitle="Verificamos"
        description="Antes de poner el sistema en funcionamiento, verificamos la correcta operación y respuesta de sus componentes de acuerdo con la configuración definida para el proyecto."
        items={testingItems}
        imageSrc="/Sistema de detección de incendios.png"
        imageAlt="Pruebas funcionales de detectores de humo y alarma"
        reverse={true}
        bgMuted={true}
      />

      {/* 09: Normativa y criterios técnicos */}
      <NormativaSection
        title="Normativa y criterios técnicos aplicables"
        description="Desarrollamos los sistemas de detección y alarma considerando el marco normativo nacional y los estándares técnicos aplicables según las características, alcance y requerimientos de cada proyecto."
        items={normativaDeteccion}
      />

      {/* 10: Mantenimiento y continuidad operativa */}
      <AlternatingSection
        title="Mantenimiento y continuidad operativa"
        subtitle="Mantenemos"
        description="Los sistemas de detección y alarma requieren inspecciones, pruebas y mantenimiento para conservar su operatividad y confiabilidad durante su vida útil."
        items={maintenanceItems}
        link={{
          label: "Conoce nuestro servicio de Mantenimiento de Sistemas Contra Incendios →",
          href: "/servicios/mantenimiento",
        }}
        imageSrc="/Mantenimiento 3.png"
        imageAlt="Mantenimiento de panel y detectores contra incendios"
      />

      {/* 11: CTA Final */}
      <ServiceCTA
        title="¿Necesitas un sistema de detección y alarma para tu proyecto?"
        description="Cuéntanos sobre tu proyecto. Nuestro equipo revisará la información inicial y se pondrá en contacto contigo para conocer sus características y coordinar la visita técnica."
        serviceName="Sistemas de Detección y Alarma Contra Incendios"
        imageSrc="/Trato 1.png"
      />

    </div>
  );
}

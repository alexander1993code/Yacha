"use client";

import {
  Users,
  FileText,
  ShieldCheck,
  Headphones,
  Mail,
  MessageCircle
} from "lucide-react";

const stats = [
  {
    value: "+10",
    label: "Años",
    description: "De experiencia en el sector",
    icon: Users,
  },
  {
    value: "+250",
    label: "Proyectos ejecutados",
    description: "Soluciones desarrolladas con éxito",
    icon: FileText,
  },
  {
    value: "100%",
    label: "Cumplimiento de normas",
    description: "Compromiso con los estándares de seguridad",
    icon: ShieldCheck,
  },
  {
    value: "24/7",
    label: "Soporte y mantenimiento",
    description: "Asistencia cuando la necesitás",
    icon: Headphones,
  },
  {
    value: "WhatsApp",
    label: "+51941054196",
    descption: "Atencion Inmediata",
    icon: MessageCircle,
  },
  {
    value: "Contacto",
    label: "contacto@yacha-ing.com",
    descption: "Atencion Inmediata",
    icon: Mail,
  }
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-2 px-6 py-4 sm:grid-cols-2 lg:grid-cols-6 lg:px-8">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="flex items-center gap-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Icon size={26} strokeWidth={1.8} />
              </div>

              <div>
                <div className="flex flex-col">
                  <span className="text-3xl font-extrabold text-accent">
                    {stat.value}
                  </span>

                  <span className="text-sm font-semibold text-white">
                    {stat.label}
                  </span>
                </div>

                {/* <p className="mt-1 text-sm font-normal text-white/70">
                  {stat.description}
                </p> */}
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
}
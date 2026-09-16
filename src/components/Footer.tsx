"use client";

import {
  Users,
  FileText,
  ShieldCheck,
  Headphones,
  Mail,
  MessageCircle
} from "lucide-react";
import { contactConfig } from "@/config/contact";

const stats = [
  {
    value: "Ingeniería",
    label: "Protección Contra Incendios",
    description: "Especialidad principal",
    icon: ShieldCheck,
  },
  {
    value: "Cobertura",
    label: "Lima y Regiones",
    description: "Atención a nivel nacional",
    icon: FileText,
  },
  {
    value: "WhatsApp",
    label: contactConfig.phoneDisplay,
    description: "Atención inmediata",
    icon: MessageCircle,
    href: contactConfig.getWhatsappUrl(),
  },
  {
    value: "Contacto",
    label: contactConfig.contactEmail,
    description: "Correo corporativo",
    icon: Mail,
    href: `mailto:${contactConfig.contactEmail}`,
  }
];

export default function Footer() {
  return (
    <footer className="bg-[#103B5C] text-white border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            const content = (
              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                  <Icon size={24} strokeWidth={2} />
                </div>

                <div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      {stat.value}
                    </span>
                    <span className="text-sm font-bold text-white mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-300 font-normal">
                    {stat.description}
                  </p>
                </div>
              </div>
            );

            if (stat.href) {
              return (
                <a
                  key={stat.label}
                  href={stat.href}
                  target={stat.href.startsWith("http") ? "_blank" : undefined}
                  rel={stat.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  {content}
                </a>
              );
            }

            return <div key={stat.label}>{content}</div>;
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-700/60 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} YACHA. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="/nosotros" className="hover:text-amber-400 transition">Nosotros</a>
            <a href="/sistemas-contra-incendios" className="hover:text-amber-400 transition">Protección Contra Incendios</a>
            <a href="/servicios-generales" className="hover:text-amber-400 transition">Servicios Generales</a>
            <a href="/contacto" className="hover:text-amber-400 transition">Contacto</a>
            <a href="/cotiza-tu-proyecto" className="hover:text-amber-400 transition font-medium text-amber-400">Cotiza tu proyecto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { contactConfig } from "@/config/contact";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const mainPciService = {
    label: "Protección Contra Incendios",
    href: "/sistemas-contra-incendios",
    subtitle: "Nuestra especialidad principal",
  };

  const pciSubServices = [
    { label: "Sistemas de Detección y Alarma", href: "/sistemas-deteccion-alarma-contra-incendios" },
    { label: "Bombas Contra Incendio", href: "/bombas-contra-incendio" },
    { label: "Sistemas de Agua Contra Incendios", href: "/sistemas-agua-contra-incendios" },
    { label: "Mantenimiento de Sistemas", href: "/mantenimiento-sistemas-contra-incendios" },
  ];

  const mainGeneralServices = {
    label: "Servicios Generales",
    href: "/servicios-generales",
    subtitle: "Mantenimiento y adecuación de infraestructura",
  };

  const whatsappUrl = contactConfig.getWhatsappUrl("Hola, quisiera realizar una consulta sobre los servicios de YACHA.");

  return (
    <nav className="w-full bg-white relative z-50 shadow-xs border-b border-slate-100">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/Logo YACHA borde azul.png"
            alt="Logo YACHA"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="text-sm font-medium text-slate-700 transition hover:text-[#103B5C]"
          >
            Inicio
          </Link>

          <Link
            href="/nosotros"
            className="text-sm font-medium text-slate-700 transition hover:text-[#103B5C]"
          >
            Nosotros
          </Link>

          {/* Dropdown de Servicios */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1.5 text-sm font-medium text-slate-700 transition hover:text-[#103B5C] py-2"
            >
              Servicios
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>

            {isServicesOpen && (
              <div className="absolute top-full left-0 w-96 rounded-xl bg-white p-4 shadow-xl border border-slate-100 flex flex-col gap-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {/* 1. Servicio Principal: Protección Contra Incendios */}
                <div className="flex flex-col gap-1.5">
                  <div className="px-2 text-[10px] font-bold uppercase tracking-wider text-amber-600">
                    Especialidad Principal:
                  </div>
                  <Link
                    href={mainPciService.href}
                    onClick={() => setIsServicesOpen(false)}
                    className="group flex items-center justify-between rounded-lg bg-blue-50/70 p-3 text-xs font-bold text-[#103B5C] hover:bg-[#103B5C] hover:text-white transition-all shadow-2xs"
                  >
                    <div>
                      <span className="block font-extrabold uppercase tracking-tight">
                        {mainPciService.label}
                      </span>
                      <span className="text-[11px] text-slate-500 group-hover:text-blue-200 font-normal block mt-0.5">
                        {mainPciService.subtitle}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-amber-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </Link>

                  {/* Submenús PCI */}
                  <div className="flex flex-col gap-0.5 pl-2">
                    {pciSubServices.map((service) => (
                      <Link
                        key={service.label}
                        href={service.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 hover:text-[#103B5C] transition"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                        <span>{service.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-slate-100 my-0.5" />

                {/* 2. Servicio Principal: Servicios Generales */}
                <div className="flex flex-col gap-1">
                  <div className="px-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Línea Complementaria:
                  </div>
                  <Link
                    href={mainGeneralServices.href}
                    onClick={() => setIsServicesOpen(false)}
                    className="group flex items-center justify-between rounded-lg bg-slate-50 p-3 text-xs font-bold text-slate-800 hover:bg-[#103B5C] hover:text-white transition-all shadow-2xs border border-slate-100"
                  >
                    <div>
                      <span className="block font-extrabold uppercase tracking-tight">
                        {mainGeneralServices.label}
                      </span>
                      <span className="text-[11px] text-slate-500 group-hover:text-slate-300 font-normal block mt-0.5">
                        {mainGeneralServices.subtitle}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/contacto"
            className="text-sm font-medium text-slate-700 transition hover:text-[#103B5C]"
          >
            Contacto
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-2 rounded-lg transition"
            title="Chat en WhatsApp"
          >
            <MessageCircle className="h-4 w-4 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <Link
            href="/cotiza-tu-proyecto"
            className="rounded-lg bg-amber-500 hover:bg-amber-600 px-5 py-2.5 text-sm font-semibold text-slate-900 transition shadow-xs hover:shadow"
          >
            Cotiza tu proyecto
          </Link>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-slate-700 lg:hidden"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 lg:hidden animate-in fade-in duration-150">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-slate-800 hover:text-[#103B5C]"
            >
              Inicio
            </Link>

            <Link
              href="/nosotros"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-slate-800 hover:text-[#103B5C]"
            >
              Nosotros
            </Link>

            {/* Submenú de Servicios en Mobile */}
            <div className="flex flex-col gap-3 pl-3 border-l-2 border-[#103B5C]/30 my-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Servicios</span>
              
              {/* PCI */}
              <div className="flex flex-col gap-1.5">
                <Link
                  href={mainPciService.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold text-[#103B5C] hover:underline flex items-center justify-between"
                >
                  <span>{mainPciService.label}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-900 uppercase font-semibold">
                    Especialidad
                  </span>
                </Link>

                <div className="flex flex-col gap-1.5 pl-3 border-l border-slate-200 mt-1">
                  {pciSubServices.map((service) => (
                    <Link
                      key={service.label}
                      href={service.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xs font-medium text-slate-600 hover:text-[#103B5C] py-0.5"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Servicios Generales */}
              <Link
                href={mainGeneralServices.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold text-slate-800 hover:text-[#103B5C] flex items-center justify-between pt-2 border-t border-slate-100"
              >
                <span>{mainGeneralServices.label}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 uppercase font-semibold">
                  Complementario
                </span>
              </Link>
            </div>

            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-slate-800 hover:text-[#103B5C]"
            >
              Contacto
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 rounded-lg bg-emerald-50 border border-emerald-200 px-5 py-2.5 text-sm font-semibold text-emerald-800"
            >
              <MessageCircle className="h-4 w-4 text-emerald-600" />
              <span>Escríbenos por WhatsApp</span>
            </a>

            <Link
              href="/cotiza-tu-proyecto"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-amber-500 px-5 py-3 text-center text-sm font-semibold text-slate-900 shadow-xs"
            >
              Cotiza tu proyecto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
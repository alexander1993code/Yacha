"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import Whatsapp from "./Whatsapp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const mainService = {
    label: "Sistemas Contra Incendios",
    href: "/servicios/sistemas-contra-incendios",
    subtitle: "Solución Integral de Ingeniería",
  };

  const subServices = [
    { label: "Sistemas de Detección y Alarma", href: "/servicios/deteccion" },
    { label: "Bombas Contra Incendio", href: "/servicios/bombas" },
    { label: "Sistemas de Agua Contra Incendios", href: "/servicios/agua" },
    { label: "Mantenimiento de Sistemas", href: "/servicios/mantenimiento" },
  ];

  return (
    <nav className="w-full bg-white relative z-50 shadow-xs">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/Logo YACHA borde azul.png"
            alt="Logo YACHA"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition hover:text-red-600"
          >
            Inicio
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 transition hover:text-red-600"
          >
            Nosotros
          </Link>

          {/* Dropdown de Servicios */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link
              href={mainService.href}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-red-600 py-2"
            >
              Servicios
              <ChevronDown className="h-4 w-4" />
            </Link>

            {isServicesOpen && (
              <div className="absolute top-full left-0 w-80 rounded-xl bg-white p-3 shadow-xl border border-slate-200 flex flex-col gap-2 z-50">
                {/* Servicio Principal: Sistemas Contra Incendios */}
                <Link
                  href={mainService.href}
                  className="group flex items-center justify-between rounded-lg bg-slate-50 p-3 text-xs font-bold text-[#103B5C] hover:bg-[#103B5C] hover:text-white transition-all shadow-xs"
                >
                  <div>
                    <span className="block font-extrabold uppercase tracking-tight">
                      {mainService.label}
                    </span>
                    <span className="text-[11px] text-gray-500 group-hover:text-gray-200 font-normal block mt-0.5">
                      {mainService.subtitle}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[#D72638] group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>

                <div className="px-2 pt-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Líneas Especializadas:
                </div>

                {/* Submenús */}
                <div className="flex flex-col gap-0.5">
                  {subServices.map((service) => (
                    <Link
                      key={service.label}
                      href={service.href}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D72638] shrink-0" />
                      <span>{service.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="#contacto"
            className="text-sm font-medium text-gray-700 transition hover:text-red-600"
          >
            Contacto
          </Link>

          <Whatsapp />
          
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-gray-700 lg:hidden"
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
        <div className="border-t border-gray-200 bg-white px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-red-600"
            >
              Inicio
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-red-600"
            >
              Nosotros
            </Link>

            {/* Submenú de Servicios en Mobile */}
            <div className="flex flex-col gap-2 pl-3 border-l-2 border-[#103B5C]/30">
              <Link
                href={mainService.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold text-[#103B5C] hover:text-red-600 flex items-center justify-between py-1"
              >
                <span>{mainService.label}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-50 text-[#103B5C] uppercase font-semibold">
                  Integral
                </span>
              </Link>

              <div className="flex flex-col gap-2 pl-3 border-l border-slate-200 mt-1">
                <span className="text-[11px] font-semibold uppercase text-gray-400">
                  Sub-servicios:
                </span>
                {subServices.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xs font-medium text-gray-600 hover:text-red-600 py-1"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-red-600"
            >
              Contacto
            </Link>

            <Link
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-md bg-red-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-red-700"
            >
              Cotiza tu proyecto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
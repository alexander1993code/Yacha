"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Whatsapp from "./Whatsapp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const serviceLinks = [
    { label: "Sistemas de Detección", href: "/servicios/deteccion" },
    { label: "Bombas Contra Incendio", href: "/servicios/bombas" },
    { label: "Agua y Rociadores", href: "/servicios/agua" },
    { label: "Mantenimiento de Sistemas", href: "/servicios/mantenimiento" },
  ];


  return (
    <nav className="w-full bg-white relative z-50">
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
            <button
              className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-red-600 py-2"
            >
              Servicios
              <ChevronDown className="h-4 w-4" />
            </button>

            {isServicesOpen && (
              <div className="absolute top-full left-0 w-60 rounded-md bg-white p-2 shadow-lg border border-slate-100 flex flex-col gap-1">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    className="block rounded-md px-3 py-2 text-xs font-medium text-gray-700 hover:bg-slate-50 hover:text-red-600 transition"
                  >
                    {service.label}
                  </Link>
                ))}
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
            <div className="flex flex-col gap-2 pl-3 border-l-2 border-slate-200">
              <span className="text-sm font-semibold text-gray-900">Servicios:</span>
              {serviceLinks.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-gray-600 hover:text-red-600"
                >
                  {service.label}
                </Link>
              ))}
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
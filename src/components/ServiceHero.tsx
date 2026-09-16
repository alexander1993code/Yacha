import Image from "next/image";
import Link from "next/link";
import { ShieldAlert, ChevronRight } from "lucide-react";
import React from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ServiceHeroProps {
  title: React.ReactNode;
  category?: string;
  subheadline?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  whatsappMessage?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function ServiceHero({
  title,
  category = "Nuestros Servicios",
  subheadline,
  description,
  imageSrc,
  imageAlt,
  whatsappMessage = "¡Hola! Deseo cotizar un proyecto de sistemas contra incendios con YACHA.",
  breadcrumbs = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios/sistemas-contra-incendios" },
  ],
}: ServiceHeroProps) {
  const cell = 51941054196;
  const whatsappUrl = `https://wa.me/${cell}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative w-full bg-[#103B5C] text-white overflow-hidden">
      <div className="mx-auto flex w-full flex-col lg:flex-row items-center justify-between">
        
        {/* LADO IZQUIERDO */}
        <div className="z-10 flex w-full flex-col justify-center px-6 py-6 sm:px-10 lg:w-1/2 lg:pl-16 xl:pl-24 lg:py-8">
          <div className="mb-2">
            <Link href="/" className="inline-block">
              <Image
                src="/Logo YACHA.png"
                alt="YACHA Logo"
                width={220}
                height={110}
                className="h-auto w-40 sm:w-48 object-contain"
                priority
              />
            </Link>
          </div>

          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] text-gray-300 font-medium mb-1">
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={crumb.label}>
                  {idx > 0 && <ChevronRight className="h-3 w-3 text-gray-400 shrink-0" />}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-gray-100 font-semibold">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">
            {category}
          </span>

          <h1 className="text-xl font-extrabold uppercase tracking-tight sm:text-2xl lg:text-3xl mt-1">
            {title}
          </h1>

          {subheadline && (
            <p className="mt-1 text-xs sm:text-sm font-semibold text-gray-100">
              {subheadline}
            </p>
          )}

          <p className="mt-2 text-xs sm:text-sm text-gray-200 leading-relaxed max-w-lg">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#D72638] px-5 py-2.5 text-xs sm:text-sm font-bold text-white transition-all hover:bg-red-700 shadow-sm"
            >
              Cotiza tu proyecto
            </a>

            <div className="flex items-center gap-2 text-gray-200 pl-1 sm:pl-2">
              <ShieldAlert className="h-7 w-7 text-[#D72638] shrink-0" />
              <span className="text-gray-400 font-light text-base">|</span>
              <span className="text-[11px] font-semibold tracking-wide text-gray-200 leading-tight">
                Ingeniería que protege <br /> lo que más importa
              </span>
            </div>
          </div>
        </div>

        {/* LADO DERECHO */}
        <div className="relative hidden self-stretch w-1/2 lg:block min-h-[280px] xl:min-h-[320px]">
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#103B5C]/70 via-transparent to-transparent" />
          </div>

          <svg
            className="absolute inset-0 h-full w-full pointer-events-none z-20"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <line
              x1="15"
              y1="0"
              x2="0"
              y2="100"
              stroke="#D72638"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone, Mail, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { contactConfig } from "@/config/contact";

export default function ContactoPage() {
  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneCode, setPhoneCode] = useState("+51");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);

  // Statuses
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [submittedWhatsappUrl, setSubmittedWhatsappUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      setValidationError("Ingresa tu nombre y apellido.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setValidationError("Ingresa un correo electrónico válido.");
      return;
    }
    if (!message.trim()) {
      setValidationError("Cuéntanos brevemente cómo podemos ayudarte.");
      return;
    }
    if (!privacyConsent) {
      setValidationError("Debes aceptar la política correspondiente para enviar tu mensaje.");
      return;
    }

    setValidationError(null);
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // 1. Construir mensaje con los datos completados
      const whatsappMessage = contactConfig.buildContactoMessage({
        fullName,
        phone: `${phoneCode} ${phone}`,
        email,
        message,
      });

      const finalWhatsappUrl = contactConfig.getWhatsappUrl(whatsappMessage);
      setSubmittedWhatsappUrl(finalWhatsappUrl);

      /* =========================================================================
       * MVP 2: ENVÍO AUTOMÁTICO DE EMAIL (SEGUNDA FASE)
       * -------------------------------------------------------------------------
       * Descomentar cuando configures la ruta API y el servicio de correos
       * (Resend o SMTP) en tu .env.local:
       *
       * const response = await fetch("/api/contacto", {
       *   method: "POST",
       *   headers: { "Content-Type": "application/json" },
       *   body: JSON.stringify({
       *     fullName,
       *     email,
       *     phone: `${phoneCode} ${phone}`,
       *     message,
       *   }),
       * });
       * if (!response.ok) {
       *   throw new Error("No se pudo enviar el correo de notificación.");
       * }
       * ========================================================================= */

      // 2. Abrir WhatsApp automáticamente con los datos cargados
      if (typeof window !== "undefined") {
        window.open(finalWhatsappUrl, "_blank");
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      setIsSubmitting(false);
      setSubmitError("Tu información no pudo enviarse en este momento. Tus datos se mantienen para que puedas intentarlo nuevamente.");
    }
  };

  const defaultWhatsappUrl = contactConfig.getWhatsappUrl("Hola, quisiera realizar una consulta sobre los servicios de YACHA.");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Bloque 01 — Hero Compacto */}
      <section className="bg-gradient-to-b from-[#103B5C] to-[#0A273E] text-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-300 mb-6">
            <Link href="/" className="hover:text-amber-400 transition">Inicio</Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="text-amber-400 font-semibold">Contacto</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Contacto
            </h1>
            <p className="text-base font-semibold text-amber-400 mb-3">
              Estamos disponibles para atender tus consultas y conocer las necesidades de tu proyecto.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Puedes comunicarte directamente con nosotros o enviarnos un mensaje mediante el formulario.
            </p>
          </div>
        </div>
      </section>

      {/* Bloque 02 — Canales directos */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl font-extrabold text-[#103B5C] mb-2">
              Hablemos sobre tu proyecto o consulta
            </h2>
            <p className="text-xs text-slate-600">
              Elige el canal que te resulte más conveniente para comunicarte con nosotros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between hover:border-emerald-300 transition">
              <div>
                <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">WhatsApp</h3>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Para consultas rápidas o para conversar directamente con nuestro equipo.
                </p>
                <span className="text-xs font-bold text-emerald-800 block mb-4">{contactConfig.phoneDisplay}</span>
              </div>
              <a
                href={defaultWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition"
              >
                <span>Escríbenos por WhatsApp →</span>
              </a>
            </div>

            {/* Teléfono */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between hover:border-blue-300 transition">
              <div>
                <div className="h-10 w-10 rounded-xl bg-blue-100 text-[#103B5C] flex items-center justify-center mb-4">
                  <Phone className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Teléfono</h3>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Comunícate directamente con nuestro equipo para realizar una consulta.
                </p>
                <span className="text-xs font-bold text-[#103B5C] block mb-4">{contactConfig.phoneDisplay}</span>
              </div>
              <a
                href={`tel:${contactConfig.whatsappNumber}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#103B5C] hover:underline transition"
              >
                <span>Llámanos →</span>
              </a>
            </div>

            {/* Correo electrónico */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between hover:border-amber-300 transition">
              <div>
                <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                  <Mail className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Correo electrónico</h3>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Para consultas, información o envío de documentación.
                </p>
                <span className="text-xs font-bold text-slate-900 block mb-4">{contactConfig.contactEmail}</span>
              </div>
              <a
                href={`mailto:${contactConfig.contactEmail}?subject=Consulta%20desde%20la%20web%20de%20YACHA`}
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 hover:underline transition"
              >
                <span>Escríbenos por correo →</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 03 — Formulario Envíanos un mensaje */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#103B5C] mb-2">
              Envíanos un mensaje
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Déjanos tus datos y cuéntanos brevemente cómo podemos ayudarte.
            </p>

            {validationError && (
              <div className="bg-amber-50 border border-amber-200 text-amber-800 p-3 rounded-xl mb-6 text-xs flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-amber-600 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            {submitError && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-3.5 rounded-xl mb-6 text-xs flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span>{submitError}</span>
                </div>
              </div>
            )}

            {isSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
                <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-[#103B5C] mb-1">Hemos recibido tu mensaje</h3>
                <p className="text-xs text-slate-600 mb-6 max-w-md mx-auto">
                  Gracias por comunicarte con YACHA. Revisaremos tu mensaje y nos pondremos en contacto contigo.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={submittedWhatsappUrl || defaultWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-800 hover:underline flex items-center gap-1.5"
                  >
                    <MessageCircle className="h-4 w-4 text-emerald-600" />
                    <span>¿Necesitas comunicarte directamente? WhatsApp →</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nombre y apellido *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nombre y apellido"
                    className="w-full text-xs p-3 rounded-lg border border-slate-300 focus:border-[#103B5C] focus:ring-1 focus:ring-[#103B5C]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nombre@empresa.com"
                      className="w-full text-xs p-3 rounded-lg border border-slate-300 focus:border-[#103B5C] focus:ring-1 focus:ring-[#103B5C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Teléfono / WhatsApp (opcional)
                    </label>
                    <div className="flex">
                      <select
                        value={phoneCode}
                        onChange={(e) => setPhoneCode(e.target.value)}
                        className="text-xs p-3 rounded-l-lg border border-r-0 border-slate-300 bg-slate-50 font-medium text-slate-700 focus:outline-none"
                      >
                        <option value="+51">Perú (+51)</option>
                        <option value="+54">Argentina (+54)</option>
                        <option value="+56">Chile (+56)</option>
                        <option value="+57">Colombia (+57)</option>
                      </select>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="987 654 321"
                        className="w-full text-xs p-3 rounded-r-lg border border-slate-300 focus:border-[#103B5C] focus:ring-1 focus:ring-[#103B5C]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mensaje *
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    className="w-full text-xs p-3 rounded-lg border border-slate-300 focus:border-[#103B5C] focus:ring-1 focus:ring-[#103B5C]"
                  />
                </div>

                <div>
                  <label className="flex items-start gap-2 cursor-pointer text-xs text-slate-600">
                    <input
                      type="checkbox"
                      checked={privacyConsent}
                      onChange={(e) => setPrivacyConsent(e.target.checked)}
                      className="h-4 w-4 mt-0.5 rounded border-slate-300 text-[#103B5C] focus:ring-[#103B5C]"
                    />
                    <span>
                      Acepto la Política de Privacidad de YACHA para la atención de mi consulta. *
                    </span>
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#103B5C] hover:bg-[#0d2f4a] disabled:opacity-50 text-white font-bold text-xs transition shadow-sm"
                  >
                    {isSubmitting ? "Enviando mensaje..." : "Enviar mensaje"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Bloque 04 — Derivación a cotización */}
      <section className="py-14 bg-[#103B5C] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-extrabold text-white mb-2">
                ¿Necesitas cotizar un proyecto?
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Si tienes un requerimiento de Protección Contra Incendios o Servicios Generales, envíanos la información de tu proyecto para que podamos conocer mejor tus necesidades.
              </p>
            </div>

            <Link
              href="/cotiza-tu-proyecto"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-500 hover:bg-amber-600 px-6 py-3.5 text-sm font-bold text-slate-950 transition shrink-0 shadow-md"
            >
              <span>Cotiza tu proyecto</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bloque 05 — Información de atención */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-xl font-extrabold text-[#103B5C] mb-4">
              Información de atención
            </h2>
            
            <div className="space-y-4 text-xs text-slate-700">
              <div>
                <span className="font-bold text-slate-900 block mb-0.5">Cobertura</span>
                <span className="text-slate-600">Lima y otras regiones del Perú</span>
                <p className="text-slate-500 text-[11px] mt-0.5">
                  Atendemos proyectos de acuerdo con su ubicación, características y alcance.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-6">
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">Teléfono / WhatsApp</span>
                  <span className="text-slate-600 font-semibold">+51 971 375 792</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">Correo electrónico</span>
                  <span className="text-slate-600 font-semibold">contacto@yacha-ing.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

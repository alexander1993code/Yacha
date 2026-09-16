"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChevronRight, ArrowRight, Check, AlertCircle, Upload, X, MessageCircle, FileText, CheckCircle2 } from "lucide-react";
import { contactConfig } from "@/config/contact";

const PCI_OPTIONS = [
  "Sistemas de detección",
  "Bombas",
  "Sistemas de protección con agua",
  "Mantenimiento de sistemas contra incendios",
  "No estoy seguro",
];

const SG_OPTIONS = [
  "Mantenimiento de infraestructura",
  "Pintura y resanamiento",
  "Mantenimiento eléctrico",
  "Obras civiles",
  "Drywall y acabados",
  "Adecuación de espacios",
  "Otro",
];

function CotizaForm() {
  const searchParams = useSearchParams();

  // Form State
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [category, setCategory] = useState<"pci" | "sg" | "">("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [otherServiceText, setOtherServiceText] = useState("");

  // Step 2 State
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  // Step 3 State
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [phoneCode, setPhoneCode] = useState("+51");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);

  // UI / Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [submittedWhatsappUrl, setSubmittedWhatsappUrl] = useState<string | null>(null);

  // Pre-selection via URL query params
  useEffect(() => {
    const catParam = searchParams.get("categoria") || searchParams.get("category");
    const servParam = searchParams.get("servicio") || searchParams.get("service");

    if (catParam === "servicios-generales" || catParam === "sg") {
      setCategory("sg");
    } else if (catParam === "sistemas-contra-incendios" || catParam === "pci") {
      setCategory("pci");
    }

    if (servParam) {
      const decoded = decodeURIComponent(servParam);
      if (SG_OPTIONS.includes(decoded)) {
        setCategory("sg");
        setSelectedServices([decoded]);
      } else if (PCI_OPTIONS.includes(decoded)) {
        setCategory("pci");
        setSelectedServices([decoded]);
      }
    }
  }, [searchParams]);

  // Reset sub-services when category changes
  const handleCategoryChange = (newCategory: "pci" | "sg") => {
    setCategory(newCategory);
    setSelectedServices([]);
    setOtherServiceText("");
    setValidationError(null);
  };

  const handleServiceToggle = (service: string) => {
    setValidationError(null);
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  // Step 1 validation
  const validateStep1 = () => {
    if (!category) {
      setValidationError("Selecciona una categoría de servicio para continuar.");
      return false;
    }
    if (selectedServices.length === 0) {
      setValidationError("Selecciona al menos un servicio para continuar.");
      return false;
    }
    if (category === "sg" && selectedServices.includes("Otro") && !otherServiceText.trim()) {
      setValidationError("Cuéntanos brevemente qué servicio necesitas.");
      return false;
    }
    setValidationError(null);
    return true;
  };

  // Step 2 validation
  const validateStep2 = () => {
    if (!location.trim()) {
      setValidationError("Indica dónde se encuentra el proyecto.");
      return false;
    }
    if (!description.trim()) {
      setValidationError("Cuéntanos brevemente qué necesitas realizar.");
      return false;
    }
    setValidationError(null);
    return true;
  };

  // Step 3 validation
  const validateStep3 = () => {
    if (!fullName.trim()) {
      setValidationError("Ingresa tu nombre y apellido.");
      return false;
    }
    if (!phone.trim() || phone.trim().length < 6) {
      setValidationError("Ingresa un número de teléfono válido.");
      return false;
    }
    if (!email.trim() || !email.includes("@")) {
      setValidationError("Ingresa un correo electrónico válido.");
      return false;
    }
    if (!privacyConsent) {
      setValidationError("Debes aceptar la política correspondiente para enviar tu solicitud.");
      return false;
    }
    setValidationError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // 1. Construir mensaje detallado con los datos del proyecto y contacto
      const whatsappMessage = contactConfig.buildCotizacionMessage({
        fullName,
        phone: `${phoneCode} ${phone}`,
        email,
        company: company.trim() || undefined,
        category,
        services: selectedServices,
        otherService: otherServiceText.trim() || undefined,
        location,
        description,
        filesCount: files.length,
      });

      const finalWhatsappUrl = contactConfig.getWhatsappUrl(whatsappMessage);
      setSubmittedWhatsappUrl(finalWhatsappUrl);

      /* =========================================================================
       * MVP 2: ENVÍO AUTOMÁTICO DE EMAIL (SEGUNDA FASE)
       * -------------------------------------------------------------------------
       * Descomentar cuando configures la ruta API y el servicio de correos
       * (Resend o SMTP) en tu .env.local:
       *
       * const response = await fetch("/api/cotizar", {
       *   method: "POST",
       *   headers: { "Content-Type": "application/json" },
       *   body: JSON.stringify({
       *     fullName,
       *     company,
       *     phone: `${phoneCode} ${phone}`,
       *     email,
       *     category,
       *     selectedServices,
       *     otherServiceText,
       *     location,
       *     description,
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
      setSubmitError("La información no pudo enviarse en este momento. Tus datos se mantienen. Intenta nuevamente.");
    }
  };

  const defaultWhatsappUrl = contactConfig.getWhatsappUrl("Hola, quisiera información sobre una cotización de proyecto.");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6">
          <Link href="/" className="hover:text-[#103B5C]">Inicio</Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <span className="text-[#103B5C] font-semibold">Cotiza tu proyecto</span>
        </nav>

        {/* Hero Compacto */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200/80 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#103B5C] mb-2">
            Cotiza tu proyecto
          </h1>
          <p className="text-sm font-semibold text-amber-600 mb-3">
            Cuéntanos qué necesitas y revisaremos la información para definir los siguientes pasos.
          </p>
          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            Completa la información del proyecto para que podamos conocer mejor tu requerimiento y comunicarnos contigo.
          </p>

          <div className="flex items-center gap-2 text-xs text-slate-500 pt-3 border-t border-slate-100">
            <span>¿Prefieres conversar antes de completar la solicitud?</span>
            <a
              href={defaultWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Escríbenos por WhatsApp →</span>
            </a>
          </div>
        </div>

        {/* Step Indicator */}
        {!isSuccess && (
          <div className="bg-white rounded-xl p-4 shadow-xs border border-slate-200/80 mb-8 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-600">
            <div className={`flex items-center gap-2 ${step >= 1 ? "text-[#103B5C]" : "text-slate-400"}`}>
              <span className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold ${step > 1 ? "bg-emerald-500 text-white" : step === 1 ? "bg-[#103B5C] text-white" : "bg-slate-200 text-slate-600"}`}>
                {step > 1 ? <Check className="h-3.5 w-3.5" /> : "1"}
              </span>
              <span>Servicio</span>
            </div>
            
            <div className="h-0.5 flex-1 mx-3 bg-slate-200" />

            <div className={`flex items-center gap-2 ${step >= 2 ? "text-[#103B5C]" : "text-slate-400"}`}>
              <span className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold ${step > 2 ? "bg-emerald-500 text-white" : step === 2 ? "bg-[#103B5C] text-white" : "bg-slate-200 text-slate-600"}`}>
                {step > 2 ? <Check className="h-3.5 w-3.5" /> : "2"}
              </span>
              <span>Proyecto</span>
            </div>

            <div className="h-0.5 flex-1 mx-3 bg-slate-200" />

            <div className={`flex items-center gap-2 ${step >= 3 ? "text-[#103B5C]" : "text-slate-400"}`}>
              <span className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 3 ? "bg-[#103B5C] text-white" : "bg-slate-200 text-slate-600"}`}>
                3
              </span>
              <span>Contacto</span>
            </div>
          </div>
        )}

        {/* Error State Banner */}
        {submitError && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-6 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm">No pudimos enviar tu solicitud</h4>
              <p className="text-xs text-red-600 mt-1">{submitError}</p>
              <div className="mt-3 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setSubmitError(null)}
                  className="text-xs font-bold text-red-800 underline hover:text-red-900"
                >
                  Intentar nuevamente
                </button>
                <a
                  href={defaultWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 underline"
                >
                  Escríbenos por WhatsApp →
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Validation Error Banner */}
        {validationError && (
          <div className="bg-amber-50 border border-amber-200 text-amber-800 p-3 rounded-xl mb-6 text-xs flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-amber-600 shrink-0" />
            <span>{validationError}</span>
          </div>
        )}

        {/* SUCCESS STATE */}
        {isSuccess ? (
          <div className="bg-white rounded-2xl p-8 shadow-md border border-emerald-100 text-center">
            <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h2 className="text-2xl font-extrabold text-[#103B5C] mb-2">
              Hemos recibido tu solicitud
            </h2>
            <p className="text-sm font-semibold text-slate-700 mb-2">
              Gracias por compartir la información de tu proyecto.
            </p>
            <p className="text-xs text-slate-600 max-w-lg mx-auto mb-8 leading-relaxed">
              Revisaremos los datos enviados y nos comunicaremos contigo para conocer mejor el requerimiento y coordinar los siguientes pasos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-slate-100">
              <a
                href={submittedWhatsappUrl || defaultWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Escríbenos por WhatsApp →</span>
              </a>
              <Link
                href="/"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        ) : (

          /* FORM CONTENT BY STEP */
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200/80">
            
            {/* STEP 1: SERVICIO */}
            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold text-[#103B5C] mb-2">
                  ¿Qué servicio necesitas?
                </h2>
                <p className="text-xs text-slate-500 mb-6">
                  Selecciona la categoría principal y el servicio específico requeridos para tu proyecto.
                </p>

                {/* Categoría Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <button
                    type="button"
                    onClick={() => handleCategoryChange("pci")}
                    className={`p-5 rounded-xl border text-left transition ${category === "pci" ? "border-amber-500 bg-amber-50/50 shadow-2xs" : "border-slate-200 hover:border-slate-300 bg-white"}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-extrabold text-sm text-[#103B5C]">Protección Contra Incendios</span>
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900">Especialidad</span>
                    </div>
                    <p className="text-xs text-slate-500">
                      Sistemas y servicios para la protección contra incendios.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCategoryChange("sg")}
                    className={`p-5 rounded-xl border text-left transition ${category === "sg" ? "border-amber-500 bg-amber-50/50 shadow-2xs" : "border-slate-200 hover:border-slate-300 bg-white"}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-extrabold text-sm text-slate-800">Servicios Generales</span>
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Complementario</span>
                    </div>
                    <p className="text-xs text-slate-500">
                      Mantenimiento, reparación y adecuación de infraestructura.
                    </p>
                  </button>
                </div>

                {/* Opciones dinámicas PCI */}
                {category === "pci" && (
                  <div className="space-y-3 mb-8 pt-4 border-t border-slate-100">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Selecciona una o varias opciones:
                    </label>
                    {PCI_OPTIONS.map((opt) => (
                      <label
                        key={opt}
                        className={`flex items-center gap-3 p-3.5 rounded-lg border cursor-pointer transition text-xs font-medium ${selectedServices.includes(opt) ? "border-[#103B5C] bg-blue-50/60 text-[#103B5C]" : "border-slate-200 hover:bg-slate-50 text-slate-700"}`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedServices.includes(opt)}
                          onChange={() => handleServiceToggle(opt)}
                          className="h-4 w-4 rounded border-slate-300 text-[#103B5C] focus:ring-[#103B5C]"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                )}

                {/* Opciones dinámicas SG */}
                {category === "sg" && (
                  <div className="space-y-3 mb-8 pt-4 border-t border-slate-100">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Selecciona una o varias opciones:
                    </label>
                    {SG_OPTIONS.map((opt) => (
                      <div key={opt}>
                        <label
                          className={`flex items-center gap-3 p-3.5 rounded-lg border cursor-pointer transition text-xs font-medium ${selectedServices.includes(opt) ? "border-[#103B5C] bg-blue-50/60 text-[#103B5C]" : "border-slate-200 hover:bg-slate-50 text-slate-700"}`}
                        >
                          <input
                            type="checkbox"
                            checked={selectedServices.includes(opt)}
                            onChange={() => handleServiceToggle(opt)}
                            className="h-4 w-4 rounded border-slate-300 text-[#103B5C] focus:ring-[#103B5C]"
                          />
                          <span>{opt}</span>
                        </label>
                        {opt === "Otro" && selectedServices.includes("Otro") && (
                          <div className="mt-2 pl-7">
                            <input
                              type="text"
                              value={otherServiceText}
                              onChange={(e) => setOtherServiceText(e.target.value)}
                              placeholder="Escribe brevemente el servicio que necesitas..."
                              className="w-full text-xs p-2.5 rounded-md border border-slate-300 focus:border-[#103B5C] focus:ring-1 focus:ring-[#103B5C]"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex justify-end pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => {
                      if (validateStep1()) setStep(2);
                    }}
                    className="px-6 py-3 rounded-lg bg-[#103B5C] hover:bg-[#0d2f4a] text-white font-bold text-xs flex items-center gap-2 transition"
                  >
                    <span>Continuar</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: PROYECTO */}
            {step === 2 && (
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div>
                    <h2 className="text-xl font-bold text-[#103B5C]">
                      Cuéntanos qué necesitas realizar
                    </h2>
                    <p className="text-xs text-slate-500">
                      Bríndanos algunos detalles para conocer mejor tu requerimiento.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs font-bold text-amber-600 hover:underline"
                  >
                    Editar servicio
                  </button>
                </div>

                {/* Resumen de servicios elegidos */}
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 mb-6 text-xs text-slate-700 flex items-center gap-2">
                  <span className="font-bold text-[#103B5C]">Servicios elegidos:</span>
                  <span>{selectedServices.join(", ")}</span>
                </div>

                <div className="space-y-5 mb-8">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Ubicación del proyecto *
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Distrito, ciudad o región"
                      className="w-full text-xs p-3 rounded-lg border border-slate-300 focus:border-[#103B5C] focus:ring-1 focus:ring-[#103B5C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Describe brevemente lo que necesitas *
                    </label>
                    <textarea
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder={category === "pci" ? "Ej. Necesitamos revisar e implementar el sistema contra incendios de un nuevo local." : "Ej. Necesitamos adecuar un área de oficinas y realizar trabajos de drywall, electricidad y pintura."}
                      className="w-full text-xs p-3 rounded-lg border border-slate-300 focus:border-[#103B5C] focus:ring-1 focus:ring-[#103B5C]"
                    />
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      Cuéntanos qué trabajo necesitas realizar y cualquier información que consideres importante.
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Fotografías, planos o documentos (opcional)
                    </label>
                    <div className="border-2 border-dashed border-slate-200 hover:border-slate-300 rounded-lg p-4 text-center cursor-pointer relative bg-slate-50/50">
                      <input
                        type="file"
                        multiple
                        accept="image/jpeg,image/png,application/pdf"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <Upload className="h-6 w-6 text-slate-400 mx-auto mb-1" />
                      <span className="text-xs font-semibold text-slate-600 block">Adjuntar archivos</span>
                      <span className="text-[10px] text-slate-400 block">Archivos aceptados: JPG, PNG o PDF</span>
                    </div>

                    {files.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {files.map((file, i) => (
                          <div key={i} className="flex items-center justify-between text-xs bg-slate-100 p-2.5 rounded-md text-slate-700">
                            <div className="flex items-center gap-2 truncate">
                              <FileText className="h-4 w-4 text-slate-500 shrink-0" />
                              <span className="truncate">{file.name}</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(i)}
                              className="text-slate-400 hover:text-red-500 p-1"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-5 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition"
                  >
                    ← Atrás
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (validateStep2()) setStep(3);
                    }}
                    className="px-6 py-3 rounded-lg bg-[#103B5C] hover:bg-[#0d2f4a] text-white font-bold text-xs flex items-center gap-2 transition"
                  >
                    <span>Continuar</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: CONTACTO */}
            {step === 3 && (
              <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div>
                    <h2 className="text-xl font-bold text-[#103B5C]">
                      Datos de contacto
                    </h2>
                    <p className="text-xs text-slate-500">
                      Déjanos tus datos para que podamos comunicarnos contigo sobre tu solicitud.
                    </p>
                  </div>
                </div>

                {/* Resumen editable */}
                <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 mb-6 text-xs text-slate-700 space-y-1">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-[#103B5C]">Servicios: </span>
                      <span>{selectedServices.join(", ")}</span>
                    </div>
                    <button type="button" onClick={() => setStep(1)} className="text-amber-600 font-bold text-[11px] hover:underline">Editar</button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-[#103B5C]">Ubicación: </span>
                      <span>{location}</span>
                    </div>
                    <button type="button" onClick={() => setStep(2)} className="text-amber-600 font-bold text-[11px] hover:underline">Editar</button>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
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

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Empresa (opcional)
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Nombre de la empresa"
                      className="w-full text-xs p-3 rounded-lg border border-slate-300 focus:border-[#103B5C] focus:ring-1 focus:ring-[#103B5C]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Teléfono / WhatsApp *
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
                          <option value="+52">México (+52)</option>
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
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600">
                      <input
                        type="checkbox"
                        checked={privacyConsent}
                        onChange={(e) => setPrivacyConsent(e.target.checked)}
                        className="h-4 w-4 mt-0.5 rounded border-slate-300 text-[#103B5C] focus:ring-[#103B5C]"
                      />
                      <span>
                        Acepto la <Link href="/contacto" className="underline font-semibold text-[#103B5C]">Política de Privacidad</Link> de YACHA para la atención y gestión de mi solicitud. *
                      </span>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-5 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition"
                  >
                    ← Atrás
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-slate-950 font-bold text-xs flex items-center gap-2 transition shadow-md"
                  >
                    <span>{isSubmitting ? "Enviando solicitud..." : "Enviar solicitud"}</span>
                    {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                  </button>
                </div>
              </form>
            )}

          </div>
        )}

      </div>
    </div>
  );
}

export default function CotizaTuProyectoPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-20 text-slate-500 text-sm">
        Cargando formulario de cotización...
      </div>
    }>
      <CotizaForm />
    </Suspense>
  );
}

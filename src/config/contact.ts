/**
 * Configuración centralizada de datos de contacto para YACHA.
 * 
 * Permite cambiar número de WhatsApp, teléfono, correo y nombres de forma masiva
 * desde el archivo .env o .env.local sin modificar código fuente.
 */

export const contactConfig = {
  // Número para enlaces wa.me (solo dígitos con código de país, ej: 51971375792)
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "51971375792",
  
  // Formato visual para mostrar en la interfaz (ej: +51 971 375 792)
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+51 971 375 792",
  
  // Correo de contacto principal
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto@yacha-ing.com",
  
  // Nombre comercial de la empresa
  companyName: process.env.NEXT_PUBLIC_COMPANY_NAME || "YACHA",

  /**
   * Genera el enlace de WhatsApp dinámico con mensaje opcional
   */
  getWhatsappUrl: (message?: string) => {
    const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "51971375792";
    // Elimina caracteres no numéricos como '+' o espacios por seguridad
    const cleanNumber = rawNumber.replace(/\D/g, "");
    const defaultMsg = "Hola, quisiera realizar una consulta sobre los servicios de YACHA.";
    const textToSend = message || defaultMsg;
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(textToSend)}`;
  },

  /**
   * Genera el mensaje formateado para enviar una cotización por WhatsApp
   */
  buildCotizacionMessage: (data: {
    fullName: string;
    phone: string;
    email: string;
    company?: string;
    category?: "pci" | "sg" | "";
    services?: string[];
    otherService?: string;
    location?: string;
    description?: string;
    filesCount?: number;
  }) => {
    const categoryName =
      data.category === "pci"
        ? "Protección Contra Incendios"
        : data.category === "sg"
        ? "Servicios Generales"
        : "No especificada";

    const servicesList =
      data.services && data.services.length > 0
        ? data.services.join(", ")
        : "No especificado";

    const lines = [
      `*SOLICITUD DE COTIZACIÓN - YACHA*`,
      ``,
      `👤 *Datos del Cliente:*`,
      `• *Nombre:* ${data.fullName}`,
      `• *Teléfono:* ${data.phone}`,
      `• *Correo:* ${data.email}`,
      data.company ? `• *Empresa:* ${data.company}` : null,
      ``,
      `🛠 *Detalles del Servicio:*`,
      `• *Categoría:* ${categoryName}`,
      `• *Servicio(s):* ${servicesList}`,
      data.otherService ? `• *Otro servicio:* ${data.otherService}` : null,
      ``,
      `📍 *Proyecto:*`,
      `• *Ubicación:* ${data.location || "No indicada"}`,
      `• *Descripción:* ${data.description || "Sin descripción"}`,
      data.filesCount && data.filesCount > 0
        ? `• *Archivos adjuntos:* ${data.filesCount} archivo(s) preparados para enviar`
        : null,
      ``,
      `_Enviado desde el formulario web de cotización de YACHA_`
    ].filter((line): line is string => line !== null);

    return lines.join("\n");
  },

  /**
   * Genera el mensaje formateado para consultas generales de contacto
   */
  buildContactoMessage: (data: {
    fullName: string;
    phone: string;
    email: string;
    message: string;
  }) => {
    const lines = [
      `*CONSULTA GENERAL - YACHA*`,
      ``,
      `👤 *Datos del Contacto:*`,
      `• *Nombre:* ${data.fullName}`,
      `• *Teléfono:* ${data.phone}`,
      `• *Correo:* ${data.email}`,
      ``,
      `💬 *Mensaje:*`,
      `${data.message}`,
      ``,
      `_Enviado desde el formulario de contacto web de YACHA_`
    ];

    return lines.join("\n");
  }
};

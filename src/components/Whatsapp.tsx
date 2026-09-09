export default function Whatsapp() {
    
    const message = `¡Hola!

    Deseo más *información* sobre los servicios de sistemas contra incendios.

    Muchas gracias.`;

    const cell = 51941054196

    const messageComplete = `https://wa.me/${cell}?text=${encodeURIComponent(message)}`
    
    return (
        <a
            href={messageComplete}
            className="rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            target="_blank"
          >
            Cotiza tu proyecto
        </a>
    )
}
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración para producción estática en Namecheap
  output: "export",
  images: {
    unoptimized: true,
  },

  // Esto le permite a Next.js aceptar el WebSocket y los recursos desde Ngrok en desarrollo
  allowedDevOrigins: ["*.ngrok-free.dev", "**.ngrok-free.dev", "*.ngrok-free.app"],
};

export default nextConfig;

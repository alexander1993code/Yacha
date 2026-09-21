import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/sistemas-contra-incendios",
        destination: "/servicios/sistemas-contra-incendios",
        permanent: true,
      },
      {
        source: "/servicios-contra-incendios",
        destination: "/servicios/sistemas-contra-incendios",
        permanent: true,
      },
      {
        source: "/bombas-contra-incendio",
        destination: "/servicios/bombas",
        permanent: true,
      },
      {
        source: "/servicios/bombas-contra-incendio",
        destination: "/servicios/bombas",
        permanent: true,
      },
      {
        source: "/sistemas-agua-contra-incendios",
        destination: "/servicios/agua",
        permanent: true,
      },
      {
        source: "/servicios/sistemas-agua-contra-incendios",
        destination: "/servicios/agua",
        permanent: true,
      },
      {
        source: "/sistemas-deteccion-alarma-contra-incendios",
        destination: "/servicios/deteccion",
        permanent: true,
      },
      {
        source: "/servicios/sistemas-deteccion-alarma-contra-incendios",
        destination: "/servicios/deteccion",
        permanent: true,
      },
      {
        source: "/mantenimiento-sistemas-contra-incendios",
        destination: "/servicios/mantenimiento",
        permanent: true,
      },
      {
        source: "/servicios/mantenimiento-sistemas-contra-incendios",
        destination: "/servicios/mantenimiento",
        permanent: true,
      },
      {
        source: "/servicios-generales",
        destination: "/servicios/servicios-generales",
        permanent: true,
      },
      {
        source: "/servicios",
        destination: "/servicios/sistemas-contra-incendios",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

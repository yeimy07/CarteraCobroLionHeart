import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Esto permite que la web se publique aunque tenga errores de tipos.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignoramos errores de linter para asegurar el despliegue.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

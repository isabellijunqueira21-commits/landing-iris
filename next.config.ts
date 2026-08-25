import path from 'node:path'

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Este projeto vive dentro da pasta do irisjuridico, que tem o seu próprio
  // lockfile. Sem isto o Next elege a raiz errada e rastreia arquivos de fora.
  outputFileTracingRoot: path.join(__dirname),
}

export default nextConfig

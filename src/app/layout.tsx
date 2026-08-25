import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Lora } from 'next/font/google'

import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--fonte-cormorant',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--fonte-lora',
  display: 'swap',
})

const TITULO = 'Íris — sua professora particular de Direito, 24 horas'
const DESCRICAO =
  'O Íris organiza todos os seus estudos de Direito e te guia, questão por questão, matéria por matéria — com uma professora de IA disponível 24 horas.'

/**
 * Cartão de compartilhamento. É imagem gerada — a fonte é `arte/og.html`, e o
 * README diz como refazer. Se o título da página mudar, o cartão precisa ser
 * refeito junto: o texto está dentro da imagem, não sai do `metadata`.
 */
const CARTAO = {
  url: '/midia/og-iris.jpg',
  width: 1200,
  height: 630,
  alt: 'Íris Estudos Jurídicos — sua professora particular de Direito, com a Íris ao lado do título',
} as const

export const metadata: Metadata = {
  metadataBase: new URL('https://iris-estudos.vercel.app'),
  title: TITULO,
  description: DESCRICAO,
  applicationName: 'Íris Estudos Jurídicos',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Íris Estudos Jurídicos',
    title: TITULO,
    description: DESCRICAO,
    url: '/',
    images: [CARTAO],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITULO,
    description: DESCRICAO,
    images: [CARTAO],
  },
}

export const viewport: Viewport = {
  themeColor: '#2C0A12',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${lora.variable}`}>
      <body className="overflow-x-hidden">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-dourado focus:px-5 focus:py-3 focus:font-corpo focus:text-sm focus:font-semibold focus:text-noite"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  )
}

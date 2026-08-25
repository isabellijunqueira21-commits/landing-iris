import Link from 'next/link'
import type { ReactNode } from 'react'

import { Rodape } from '@/componentes/rodape'

/**
 * Casca das duas páginas jurídicas. Fundo claro, coluna estreita e nenhuma
 * chamada de venda: quem chega aqui veio ler, não comprar.
 */
export function PaginaLegal({
  titulo,
  atualizadoEm,
  children,
}: {
  titulo: string
  atualizadoEm: string
  children: ReactNode
}) {
  return (
    <>
      <header className="border-b border-dourado/20 bg-noite">
        {/* mesma largura e mesmo respiro do rodapé: as duas faixas escuras
            emolduram a página e precisam começar na mesma coluna */}
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-6 sm:px-10">
          <Link href="/" className="flex items-baseline gap-3">
            <span className="font-display text-2xl font-bold tracking-wide text-creme">Íris</span>
            <span className="hidden font-corpo text-[10.5px] font-medium tracking-[2.5px] text-dourado uppercase sm:inline">
              Estudos Jurídicos
            </span>
          </Link>
          <Link href="/" className="font-corpo text-sm text-areia transition hover:text-dourado-claro">
            Voltar ao início
          </Link>
        </div>
      </header>

      <main id="conteudo" className="bg-creme px-5 py-14 sm:px-8 lg:py-20">
        <article className="mx-auto max-w-[68ch]">
          <h1 className="font-display text-[clamp(2.125rem,6vw,3rem)] leading-[1.1] font-semibold text-pretty text-grafite">
            {titulo}
          </h1>
          <p className="mt-4 font-corpo text-[13px] font-medium tracking-[2px] text-dourado uppercase">
            Última atualização · {atualizadoEm}
          </p>
          <div className="mt-9 h-px bg-borda-clara" />

          {/* o primeiro h2 já traz a própria linha divisória */}
          <div className="prosa mt-8 [&>h2:first-of-type]:mt-10">{children}</div>
        </article>
      </main>

      <Rodape />
    </>
  )
}

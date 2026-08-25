import Link from 'next/link'

import { links } from '@/lib/links'

/**
 * O rodapé também aparece nas páginas jurídicas, onde não existe seção
 * `#recursos` — por isso a âncora do `Sobre` sai da raiz, não do documento
 * atual.
 */
const LINKS = [
  { rotulo: 'Sobre', href: '/#recursos' },
  { rotulo: 'Contato', href: links.contato },
  { rotulo: 'Termos de uso', href: links.termos },
  { rotulo: 'Privacidade', href: links.privacidade },
] as const

/**
 * O padding mora dentro do `max-w`, como na navegação e no cabeçalho das
 * páginas jurídicas. No export ele estava fora, e o rodapé começava 40px à
 * esquerda do resto da página.
 */
export function Rodape() {
  return (
    <footer className="border-t border-dourado/20 bg-tinta py-11">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-5 px-5 sm:px-10">
        <p className="flex items-baseline gap-2.5">
          <span className="font-display text-2xl font-bold text-creme">Íris</span>
          <span className="font-corpo text-[10.5px] font-medium tracking-[2.5px] text-dourado uppercase">
            Estudos Jurídicos
          </span>
        </p>

        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap gap-x-7.5 gap-y-2">
            {LINKS.map((link) => {
              const classe = 'font-corpo text-[13.5px] text-rosa-seco transition hover:text-dourado-claro'
              const interno = link.href.startsWith('/')
              return (
                <li key={link.rotulo}>
                  {interno ? (
                    <Link href={link.href} className={classe}>
                      {link.rotulo}
                    </Link>
                  ) : (
                    <a href={link.href} className={classe}>
                      {link.rotulo}
                    </a>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        <p className="font-corpo text-[12.5px] text-[#7D6357]">© 2026 Íris Estudos Jurídicos</p>
      </div>
    </footer>
  )
}

/**
 * Contato, termos e privacidade ainda não têm destino: e-mail e páginas
 * jurídicas não foram definidos. Ficam como placeholder até existirem — não
 * invente endereço aqui.
 */
const LINKS = [
  { rotulo: 'Sobre', href: '#recursos' },
  { rotulo: 'Contato', href: '#' },
  { rotulo: 'Termos de uso', href: '#' },
  { rotulo: 'Privacidade', href: '#' },
] as const

export function Rodape() {
  return (
    <footer className="border-t border-dourado/20 bg-tinta px-5 py-11 sm:px-10">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-5">
        <p className="flex items-baseline gap-2.5">
          <span className="font-display text-2xl font-bold text-creme">Íris</span>
          <span className="font-corpo text-[10.5px] font-medium tracking-[2.5px] text-dourado uppercase">
            Estudos Jurídicos
          </span>
        </p>

        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap gap-x-7.5 gap-y-2">
            {LINKS.map((link) => (
              <li key={link.rotulo}>
                <a
                  href={link.href}
                  className="font-corpo text-[13.5px] text-rosa-seco transition hover:text-dourado-claro"
                >
                  {link.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="font-corpo text-[12.5px] text-[#7D6357]">© 2026 Íris Estudos Jurídicos</p>
      </div>
    </footer>
  )
}

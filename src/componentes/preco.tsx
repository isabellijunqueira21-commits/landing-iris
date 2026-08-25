import { BotaoContorno, BotaoDourado } from '@/componentes/botoes'
import { links } from '@/lib/links'

const INCLUI_MENSAL = [
  'Todas as matérias e módulos',
  'Professora Íris ilimitada, 24 horas',
  'Questões por IA no estilo da sua banca',
  'Diagnóstico dos seus pontos fracos',
  'IA da Claude já incluída',
] as const

const INCLUI_TRIMESTRAL = ['Tudo do plano mensal', 'Um pagamento a cada 3 meses', 'Cancele quando quiser'] as const

export function Preco() {
  return (
    <section id="preco" className="bg-creme px-5 py-20 sm:px-10 lg:py-27">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-14 text-center">
          <p className="font-corpo text-[12.5px] font-medium tracking-[3px] text-dourado uppercase">Assinatura</p>
          <h2 className="mt-3.5 font-display text-[clamp(2rem,5vw,2.875rem)] leading-[1.15] font-semibold text-pretty text-grafite">
            Menos que uma mensalidade de cursinho.
          </h2>
        </div>

        <div className="mx-auto grid max-w-[860px] items-center gap-5.5 md:grid-cols-[1.15fr_1fr]">
          {/* --------------------------- mensal --------------------------- */}
          {/* O selo flutua sobre a borda; o padding do topo abre a folga que
              ele ocupa para dentro do cartão. */}
          <div className="relative rounded-[22px] bg-linear-165 from-vinho to-vinho-fundo px-7 pt-14 pb-11 shadow-[0_34px_80px_rgba(107,26,42,.35)] sm:px-9.5 lg:pt-12">
            <p className="absolute -top-3.5 left-1/2 w-max max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-full bg-linear-120 from-dourado-luz to-dourado px-4.5 py-2 text-center font-corpo text-[11.5px] leading-[1.45] font-bold tracking-[1.5px] text-noite uppercase">
              Desconto · primeiros 50 assinantes
            </p>

            <p className="font-corpo text-[15px] font-semibold tracking-[2px] text-dourado-claro uppercase">Mensal</p>

            <p className="mt-4.5 mb-1 flex flex-wrap items-baseline gap-x-3">
              <span className="font-display text-[58px] leading-none font-bold text-creme">R$189</span>
              <span className="font-corpo text-base text-[#C7A8A0]">/mês</span>
              <span className="font-display text-[22px] text-rosa-seco line-through">R$250</span>
            </p>

            <p className="font-corpo text-[13.5px] text-dourado-claro">
              Preço de lançamento para os primeiros 50 assinantes. Depois volta para R$250/mês.
            </p>
            <p className="mt-1 font-corpo text-xs text-[#C7A8A0]">Cancele quando quiser.</p>

            <div className="my-6 h-px bg-dourado/35" />

            <ul className="flex flex-col gap-3.5 font-corpo text-[14.5px] text-[#F3E9DA]">
              {INCLUI_MENSAL.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden="true" className="text-dourado-claro">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <BotaoDourado href={links.cadastro} className="mt-7 w-full py-4 text-base">
              Começar agora
            </BotaoDourado>
          </div>

          {/* ------------------------- trimestral ------------------------- */}
          <div className="rounded-[18px] border border-borda-clara bg-white px-8 py-9">
            <p className="font-corpo text-[15px] font-semibold tracking-[2px] text-neutro uppercase">Trimestral</p>

            <p className="mt-4.5 mb-1 flex flex-wrap items-baseline gap-x-2">
              <span className="font-display text-[44px] leading-none font-bold text-grafite">R$597</span>
              <span className="font-corpo text-[15px] text-neutro">a cada 3 meses</span>
            </p>
            <p className="font-corpo text-[13px] text-neutro">equivale a R$199/mês</p>

            <div className="my-5.5 h-px bg-borda-clara" />

            <ul className="flex flex-col gap-3 font-corpo text-sm text-tinta-suave">
              {INCLUI_TRIMESTRAL.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden="true" className="text-dourado">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <BotaoContorno href={links.cadastro} className="mt-6.5">
              Assinar trimestral
            </BotaoContorno>
          </div>
        </div>
      </div>
    </section>
  )
}

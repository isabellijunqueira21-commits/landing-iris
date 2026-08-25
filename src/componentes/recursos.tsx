import type { ComponentType, SVGProps } from 'react'

import { BotaoDourado } from '@/componentes/botoes'
import { Asterisco, IconeBarras, IconeFormatura, IconeLivro, IconePasta, IconeProva } from '@/componentes/icones'
import { links } from '@/lib/links'

type Recurso = {
  Icone: ComponentType<SVGProps<SVGSVGElement>>
  titulo: string
  texto: string
}

const RECURSOS: Recurso[] = [
  {
    Icone: IconePasta,
    titulo: 'Organização em três níveis',
    texto:
      'Matéria, módulo e conteúdo — como pastas. Você monta a sua estrutura e adiciona os próprios temas do seu edital.',
  },
  {
    Icone: IconeProva,
    titulo: 'Questões no estilo da sua banca',
    texto:
      'A IA gera questões inéditas sob demanda — CESPE, FGV, FCC ou Vunesp — calibradas pelo seu histórico de erros.',
  },
  {
    Icone: IconeFormatura,
    titulo: 'Aula particular com a Íris',
    texto:
      'Tire dúvidas a qualquer hora com uma professora de IA que explica no seu ritmo, com exemplos e casos concretos.',
  },
  {
    Icone: IconeBarras,
    titulo: 'Diagnóstico dos pontos fracos',
    texto:
      'A plataforma mapeia seus erros por assunto e direciona o estudo para onde você mais perde ponto em prova.',
  },
  {
    Icone: IconeLivro,
    titulo: 'Doutrinas recomendadas',
    texto:
      'Os melhores livros de cada matéria, escolhidos para o seu edital — a Íris cita as obras nas próprias explicações.',
  },
]

export function Recursos() {
  return (
    <section id="recursos" className="bg-creme px-5 py-20 sm:px-10 lg:py-27">
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto mb-14 max-w-[680px] text-center lg:mb-16">
          <p className="font-corpo text-[12.5px] font-medium tracking-[3px] text-dourado uppercase">A plataforma</p>
          <h2 className="mt-3.5 font-display text-[clamp(2rem,5vw,2.875rem)] leading-[1.15] font-semibold text-pretty text-grafite">
            Tudo que você precisa para passar, num lugar só.
          </h2>
        </div>

        <div className="grid gap-5.5 md:grid-cols-2 lg:grid-cols-3">
          {/* o diferencial abre a grade, ocupando a linha inteira */}
          <div className="flex flex-col items-start gap-4.5 rounded-2xl border border-dourado bg-linear-120 from-[#FBF3DE] to-[#F6E8C8] px-6 py-6 shadow-[0_10px_30px_rgba(201,151,58,.18)] sm:flex-row sm:items-center sm:gap-4.5 sm:px-7.5 md:col-span-2 lg:col-span-3">
            <span className="flex h-11.5 w-11.5 shrink-0 items-center justify-center rounded-xl bg-linear-140 from-dourado-luz to-dourado font-display text-[22px] font-bold text-noite">
              <Asterisco />
            </span>
            <div>
              <p className="font-display text-xl font-semibold text-vinho sm:text-[21px]">
                A inteligência da Claude, já incluída no seu plano.
              </p>
              <p className="mt-1 font-corpo text-[13.5px] text-[#7A5C2E]">
                Sem pagar uma assinatura de IA à parte — a Professora Íris usa a Claude por dentro.
              </p>
            </div>
            <span className="rounded-full border border-dourado px-4 py-[7px] font-corpo text-[11px] font-semibold tracking-[2px] whitespace-nowrap text-vinho uppercase sm:ml-auto">
              Diferencial Íris
            </span>
          </div>

          {RECURSOS.map(({ Icone, titulo, texto }) => (
            <article
              key={titulo}
              className="rounded-2xl border border-borda-clara bg-white px-7.5 py-8.5 shadow-[0_4px_18px_rgba(36,31,32,.04)] transition duration-300 hover:-translate-y-1 hover:border-dourado hover:shadow-[0_18px_40px_rgba(107,26,42,.12)] motion-reduce:transform-none"
            >
              <span className="mb-5 flex h-12.5 w-12.5 items-center justify-center rounded-[13px] bg-linear-140 from-vinho to-vinho-fundo text-dourado-claro">
                <Icone width={22} height={22} />
              </span>
              <h3 className="font-display text-[23px] font-semibold text-grafite">{titulo}</h3>
              <p className="mt-2.5 font-corpo text-[14.5px] leading-[1.7] text-tinta-suave">{texto}</p>
            </article>
          ))}

          <article className="flex flex-col justify-center rounded-2xl bg-linear-150 from-vinho to-vinho-fundo px-7.5 py-8.5">
            <h3 className="font-display text-[26px] leading-[1.25] font-semibold text-creme">Estudar sozinho acabou.</h3>
            <p className="mt-2.5 mb-4.5 font-corpo text-sm leading-[1.7] text-areia">
              Comece hoje com a Íris ao seu lado.
            </p>
            <BotaoDourado href={links.cadastro} tamanho="pequeno" className="self-start rounded-[10px]">
              Começar agora
            </BotaoDourado>
          </article>
        </div>
      </div>
    </section>
  )
}

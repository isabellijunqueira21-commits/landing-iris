import Image from 'next/image'
import type { ComponentType, SVGProps } from 'react'

import {
  Asterisco,
  IconeBarras,
  IconeDocumento,
  IconeEvolucao,
  IconeFormatura,
  IconeLivro,
  IconePasta,
  IconeProva,
} from '@/componentes/icones'

type Beneficio = {
  Icone?: ComponentType<SVGProps<SVGSVGElement>>
  texto: string
  angulo: number
  destaque?: boolean
}

/** Anel de dentro — as quatro capacidades centrais do produto. */
const ANEL_INTERNO: Beneficio[] = [
  { Icone: IconeProva, texto: 'Questões da sua matéria e da sua banca', angulo: 0 },
  { Icone: IconeFormatura, texto: 'A Professora Íris, 24 horas', angulo: 90 },
  { Icone: IconeBarras, texto: 'Diagnóstico dos seus pontos fracos', angulo: 180 },
  { Icone: IconePasta, texto: 'Organização por matéria e módulo', angulo: 270 },
]

/** Anel de fora — o que vem junto. O diferencial da Claude entra em destaque. */
const ANEL_EXTERNO: Beneficio[] = [
  { texto: 'IA da Claude já incluída', angulo: 45, destaque: true },
  { Icone: IconeDocumento, texto: 'Resumos e slides num clique', angulo: 135 },
  { Icone: IconeLivro, texto: 'Doutrina e lei seca à mão', angulo: 225 },
  { Icone: IconeEvolucao, texto: 'Sua evolução acompanhada de perto', angulo: 315 },
]

const TODOS = [...ANEL_INTERNO, ...ANEL_EXTERNO]

export function Beneficios() {
  return (
    <section className="relative overflow-hidden bg-noite bg-[url('/midia/fundo-nebulosa.jpg')] bg-cover bg-center px-5 pt-20 pb-14 sm:px-10 lg:pt-25">
      <div aria-hidden="true" className="absolute inset-0 bg-noite/30" />

      <div className="relative z-2 text-center">
        <p className="font-corpo text-[12.5px] font-medium tracking-[3px] text-dourado uppercase">Benefícios</p>
        <h2 className="mt-3.5 font-display text-[clamp(2rem,5vw,2.875rem)] leading-[1.15] font-semibold text-creme">
          Feito pra quem vai passar.
        </h2>
      </div>

      {/* ------- desktop: os benefícios giram em volta da Íris -------
           O anel de fora fica em 390px, não nos 310px do design: a 45° isso
           dava a mesma altura do anel de dentro a 90°, e as pílulas se
           cobriam — o texto de duas delas ficava ilegível. */}
      <div
        aria-hidden="true"
        className="relative mx-auto hidden h-[830px] w-full max-w-[920px] [--raio-externo:390px] [--raio-interno:215px] lg:block"
      >
        <div className="absolute top-1/2 left-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dourado/22" />
        <div className="absolute top-1/2 left-1/2 h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-dourado/13" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="anim-brilho absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(201,151,58,.25),transparent_65%)]" />
          <Image
            src="/midia/iris-boas-vindas.png"
            alt=""
            width={630}
            height={849}
            sizes="190px"
            className="relative h-auto w-[190px] drop-shadow-[0_24px_36px_rgba(0,0,0,.5)]"
          />
        </div>

        <Anel itens={ANEL_INTERNO} raio="var(--raio-interno)" />
        <Anel itens={ANEL_EXTERNO} raio="var(--raio-externo)" />
      </div>

      {/* ------- mobile e tablet: a órbita vira lista, sem perder nada -------
           No desktop ela não some: vira leitura só de tela, porque a órbita ao
           lado é `aria-hidden` e o conteúdo precisa continuar disponível. */}
      <div className="lg:sr-only">
        <div className="relative mx-auto mt-12 max-w-lg">
        <div className="relative mx-auto mb-9 w-fit">
          <div
            aria-hidden="true"
            className="anim-brilho absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(201,151,58,.25),transparent_65%)]"
          />
          <Image
            src="/midia/iris-boas-vindas.png"
            alt=""
            width={630}
            height={849}
            sizes="160px"
            className="relative h-auto w-40 drop-shadow-[0_24px_36px_rgba(0,0,0,.5)]"
          />
        </div>
        <ul className="flex flex-col gap-3">
          {TODOS.map((beneficio) => (
            <li key={beneficio.texto}>
              <Pilula beneficio={beneficio} />
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  )
}

function Anel({ itens, raio }: { itens: Beneficio[]; raio: string }) {
  return (
    <div className="anim-orbita absolute inset-0">
      {itens.map((beneficio) => (
        <div
          key={beneficio.texto}
          className="absolute top-1/2 left-1/2"
          style={{ transform: `translate(-50%,-50%) rotate(${beneficio.angulo}deg) translateX(${raio})` }}
        >
          {/* desfaz o ângulo de posicionamento; a contra-órbita cuida do giro */}
          <div style={{ transform: `rotate(${-beneficio.angulo}deg)` }}>
            <div className="anim-contra-orbita">
              <Pilula beneficio={beneficio} semQuebra />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function Pilula({ beneficio, semQuebra = false }: { beneficio: Beneficio; semQuebra?: boolean }) {
  const { Icone, texto, destaque } = beneficio

  return (
    <span
      className={[
        'flex items-center gap-2.5 rounded-full border px-3.5 py-2 shadow-[0_10px_26px_rgba(0,0,0,.4)]',
        semQuebra ? 'whitespace-nowrap' : '',
        destaque
          ? 'border-dourado-claro/70 bg-linear-120 from-dourado/22 to-tinta/94 shadow-[0_10px_26px_rgba(0,0,0,.4),0_0_22px_rgba(201,151,58,.2)]'
          : 'border-dourado/45 bg-tinta/92',
      ].join(' ')}
    >
      {Icone ? (
        <Icone width={14} height={14} strokeWidth={1.7} className="shrink-0 text-dourado-claro" />
      ) : (
        <Asterisco className="shrink-0 font-display text-[15px] font-bold text-dourado-claro" />
      )}
      <span
        className={[
          'font-corpo text-xs',
          destaque ? 'font-semibold text-dourado-claro' : 'font-medium text-[#F3E9DA]',
        ].join(' ')}
      >
        {texto}
      </span>
    </span>
  )
}

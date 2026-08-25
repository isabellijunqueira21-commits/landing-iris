import Image from 'next/image'

import { BotaoDourado } from '@/componentes/botoes'
import { Asterisco } from '@/componentes/icones'
import { PainelMaquete } from '@/componentes/painel-maquete'
import { VideoFundo } from '@/componentes/video-fundo'
import { links } from '@/lib/links'

/** Poeira dourada do fundo — posições fixas, cada uma no seu compasso. */
const FAISCAS = [
  { top: '120px', left: '8%', tamanho: 5, duracao: '4s', atraso: '0s' },
  { top: '300px', left: '16%', tamanho: 3, duracao: '5.5s', atraso: '.8s' },
  { top: '180px', right: '12%', tamanho: 4, duracao: '4.6s', atraso: '1.6s' },
  { top: '420px', right: '24%', tamanho: 3, duracao: '6s', atraso: '2.4s' },
  { top: '520px', left: '30%', tamanho: 4, duracao: '5s', atraso: '3s' },
] as const

const NUMEROS = [
  { valor: '17', rotulo: 'dias seguidos de estudo', duracao: '5s', atraso: '0s' },
  { valor: '82%', rotulo: 'de acerto na semana', duracao: '6s', atraso: '1s' },
  { valor: 'Questões por IA', rotulo: 'geradas sob demanda', duracao: '5.5s', atraso: '2s' },
] as const

export function Hero() {
  return (
    <header id="topo" className="relative overflow-hidden bg-noite">
      <VideoFundo src="/midia/hero-iris.mp4" poster="/midia/hero-iris-poster.jpg" />
      <div className="absolute inset-0 bg-noite/35" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 -bottom-0.5 h-70 bg-[radial-gradient(ellipse_60%_100%_at_50%_100%,rgba(201,151,58,.18),transparent_70%)]" />
        {FAISCAS.map((faisca, i) => (
          <span
            key={i}
            className="anim-faisca absolute rounded-full bg-dourado-claro"
            style={{
              top: faisca.top,
              left: 'left' in faisca ? faisca.left : undefined,
              right: 'right' in faisca ? faisca.right : undefined,
              width: faisca.tamanho,
              height: faisca.tamanho,
              animationDuration: faisca.duracao,
              animationDelay: faisca.atraso,
            }}
          />
        ))}
      </div>

      <Navegacao />

      <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 px-5 pt-14 pb-14 sm:px-10 lg:grid-cols-[1.15fr_.85fr] lg:pt-21 lg:pb-15">
        <div className="entra">
          <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-dourado/45 px-4.5 py-2">
            <span className="anim-brilho h-[7px] w-[7px] shrink-0 rounded-full bg-dourado-claro shadow-[0_0_12px_#E0B45C]" />
            <span className="font-corpo text-[11px] font-medium tracking-[2.5px] text-dourado-claro uppercase sm:text-[12.5px]">
              Sua professora de IA, 24 horas
            </span>
          </p>

          <h1 className="font-display text-[clamp(2.5rem,7vw,4rem)] leading-[1.08] font-semibold text-pretty text-creme">
            Sua aprovação merece uma <em className="text-dourado-claro not-italic">professora particular</em>.
          </h1>

          <p className="mt-6 max-w-[540px] font-corpo text-[17px] leading-[1.7] text-pretty text-areia sm:text-[19px]">
            O Íris organiza todos os seus estudos de Direito e te guia, questão por questão, matéria por matéria — com
            uma professora de IA disponível 24 horas.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-5.5 gap-y-4">
            <BotaoDourado href={links.cadastro} tamanho="grande" blocoNoMobile>
              Começar agora
            </BotaoDourado>
            <span className="font-corpo text-sm text-rosa-seco">Sem fidelidade · cancele quando quiser</span>
          </div>

          <p className="mt-8 inline-flex items-center gap-3.5 rounded-2xl border border-dourado/55 bg-linear-120 from-dourado/16 to-dourado/5 px-5 py-3.5 backdrop-blur-[3px]">
            <span className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-[10px] bg-linear-140 from-dourado-luz to-dourado font-display text-lg font-bold text-noite">
              <Asterisco />
            </span>
            <span>
              <span className="block font-corpo text-[15px] font-semibold text-dourado-claro">
                A inteligência da Claude, já incluída no seu plano.
              </span>
              <span className="mt-0.5 block font-corpo text-[12.5px] text-[#D8BFB4]">
                Sem pagar uma assinatura de IA à parte — a Professora Íris usa a Claude por dentro.
              </span>
            </span>
          </p>
        </div>

        <div className="entra relative flex justify-center [animation-delay:.15s]">
          <div
            aria-hidden="true"
            className="anim-brilho absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(201,151,58,.28),transparent_65%)]"
          />
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 aspect-square w-[86%] max-w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dourado/28"
          />
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 aspect-square w-[108%] max-w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-dourado/16"
          />
          <Image
            src="/midia/iris-boas-vindas.png"
            alt="Íris, a professora de IA — um pequeno robô de porcelana creme e vinho, sorrindo"
            width={630}
            height={849}
            priority
            sizes="(min-width: 1024px) 330px, 260px"
            className="anim-flutuar relative h-auto w-[260px] drop-shadow-[0_30px_44px_rgba(0,0,0,.45)] lg:w-[330px]"
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1180px] px-5 pb-24 sm:px-10 lg:pb-27">
        <PainelMaquete />

        <ul className="mt-7 flex flex-wrap justify-center gap-5">
          {NUMEROS.map((numero) => (
            <li
              key={numero.rotulo}
              className="anim-flutuar-curto rounded-2xl border border-dourado/50 bg-tinta/92 px-6 py-4 text-center shadow-[0_16px_40px_rgba(0,0,0,.5),0_0_30px_rgba(201,151,58,.15)]"
              style={{ animationDuration: numero.duracao, animationDelay: numero.atraso }}
            >
              <p className="font-display text-3xl font-bold text-dourado-claro">{numero.valor}</p>
              <p className="mt-0.5 font-corpo text-[11px] font-medium tracking-wide text-areia uppercase">
                {numero.rotulo}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

function Navegacao() {
  return (
    <nav className="relative mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 pt-7 sm:px-10">
      <a href="#topo" className="flex items-baseline gap-3">
        <span className="font-display text-[26px] font-bold tracking-wide text-creme sm:text-3xl">Íris</span>
        <span className="hidden font-corpo text-[11px] font-medium tracking-[3px] text-dourado uppercase sm:inline">
          Estudos Jurídicos
        </span>
      </a>

      <div className="flex items-center gap-5 sm:gap-7.5">
        <a href="#recursos" className="hidden font-corpo text-sm text-areia transition hover:text-dourado-claro md:inline">
          Recursos
        </a>
        <a href="#preco" className="hidden font-corpo text-sm text-areia transition hover:text-dourado-claro md:inline">
          Preço
        </a>
        <a href={links.entrar} className="font-corpo text-sm text-areia transition hover:text-dourado-claro">
          Entrar
        </a>
        <BotaoDourado href={links.cadastro} tamanho="pequeno" className="rounded-full">
          Começar agora
        </BotaoDourado>
      </div>
    </nav>
  )
}

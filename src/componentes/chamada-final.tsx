import Image from 'next/image'

import { BotaoDourado } from '@/componentes/botoes'
import { links } from '@/lib/links'

const FAISCAS = [
  { top: '80px', left: '10%', tamanho: 4, duracao: '5s', atraso: '0s' },
  { top: '200px', right: '14%', tamanho: 3, duracao: '6s', atraso: '1.5s' },
  { bottom: '120px', left: '22%', tamanho: 3, duracao: '4.5s', atraso: '2.5s' },
] as const

export function ChamadaFinal() {
  return (
    <section className="relative overflow-hidden bg-noite bg-[url('/midia/fundo-nebulosa.jpg')] bg-cover bg-center px-5 py-20 sm:px-10 lg:py-30 lg:pb-25">
      <div aria-hidden="true" className="absolute inset-0 bg-noite/30" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {FAISCAS.map((faisca, i) => (
          <span
            key={i}
            className="anim-faisca absolute rounded-full bg-dourado-claro"
            style={{
              top: 'top' in faisca ? faisca.top : undefined,
              bottom: 'bottom' in faisca ? faisca.bottom : undefined,
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

      <div className="relative mx-auto flex max-w-[900px] flex-col items-center gap-10 text-center md:flex-row md:gap-14 md:text-left">
        <div className="relative shrink-0">
          <div
            aria-hidden="true"
            className="anim-brilho absolute -inset-6.5 rounded-full bg-[radial-gradient(circle,rgba(201,151,58,.3),transparent_68%)]"
          />
          <Image
            src="/midia/iris-dica.png"
            alt="Íris com o dedo erguido, pronta para explicar"
            width={630}
            height={849}
            sizes="(min-width: 768px) 240px, 190px"
            className="anim-flutuar relative h-auto w-[190px] drop-shadow-[0_26px_40px_rgba(0,0,0,.5)] md:w-60"
          />
        </div>

        <div>
          <h2 className="font-display text-[clamp(2.125rem,5.5vw,3.25rem)] leading-[1.12] font-semibold text-pretty text-creme">
            Seja dos primeiros a estudar com a <em className="text-dourado-claro not-italic">Íris</em>.
          </h2>
          <p className="mt-4.5 mb-8.5 font-corpo text-[17px] leading-[1.7] text-areia">
            Da faculdade ao concurso, sua professora particular de Direito já está pronta.
          </p>
          <BotaoDourado href={links.listaDeEspera} tamanho="grande" blocoNoMobile className="rounded-[13px]">
            Quero entrar na lista
          </BotaoDourado>
          <p className="mt-4 font-corpo text-[13px] text-rosa-seco">Abre em breve · garantia de 7 dias</p>
        </div>
      </div>
    </section>
  )
}

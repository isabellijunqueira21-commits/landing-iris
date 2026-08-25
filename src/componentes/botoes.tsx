import type { ReactNode } from 'react'

type Tamanho = 'pequeno' | 'medio' | 'grande'

const tamanhos: Record<Tamanho, string> = {
  pequeno: 'px-6 py-3 text-sm',
  medio: 'px-7 py-3.5 text-[15px]',
  grande: 'px-9 py-4 text-base sm:px-11 sm:py-[19px] sm:text-lg',
}

/**
 * A única ação primária da página: dourado sólido sobre fundo escuro.
 * Sempre um link — a landing não tem estado, só manda o aluno para o app.
 */
export function BotaoDourado({
  href,
  children,
  tamanho = 'medio',
  className = '',
  blocoNoMobile = false,
}: {
  href: string
  children: ReactNode
  tamanho?: Tamanho
  className?: string
  blocoNoMobile?: boolean
}) {
  return (
    <a
      href={href}
      className={[
        'inline-flex items-center justify-center rounded-xl',
        'bg-linear-120 from-dourado-luz to-dourado text-noite',
        'font-corpo font-semibold whitespace-nowrap',
        'shadow-[0_12px_36px_rgba(201,151,58,.42),inset_0_1px_0_rgba(255,255,255,.4)]',
        'transition duration-200 hover:brightness-110 hover:-translate-y-0.5',
        'active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none',
        blocoNoMobile ? 'w-full sm:w-auto' : '',
        tamanhos[tamanho],
        className,
      ].join(' ')}
    >
      {children}
    </a>
  )
}

/** Ação secundária sobre fundo claro — contorno vinho, sem preenchimento. */
export function BotaoContorno({
  href,
  children,
  className = '',
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      className={[
        'inline-flex w-full items-center justify-center rounded-[11px]',
        'border-[1.5px] border-vinho px-6 py-3.5',
        'font-corpo text-[15px] font-semibold text-vinho',
        'transition duration-200 hover:bg-vinho hover:text-creme',
        className,
      ].join(' ')}
    >
      {children}
    </a>
  )
}

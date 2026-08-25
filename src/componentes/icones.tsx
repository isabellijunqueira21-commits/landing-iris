import type { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

/**
 * Traço fino, 24×24, sem preenchimento — a cor vem do `stroke` de quem usa.
 * Todos decorativos: o significado está sempre no texto ao lado.
 */
function Base({ children, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  )
}

export function IconePasta(props: Props) {
  return (
    <Base {...props}>
      <path d="M3.5 7.2c0-1.1.9-2 2-2h4.2l2 2.4h6.8c1.1 0 2 .9 2 2v7.2c0 1.1-.9 2-2 2h-13c-1.1 0-2-.9-2-2V7.2z" />
      <path d="M3.5 10.2h17" />
    </Base>
  )
}

export function IconeProva(props: Props) {
  return (
    <Base {...props}>
      <rect x="4.5" y="5" width="15" height="16.5" rx="2" />
      <path d="M9 5V3.5h6V5" />
      <path d="M8.8 13.6l2.3 2.3 4.4-4.6" />
    </Base>
  )
}

export function IconeFormatura(props: Props) {
  return (
    <Base {...props}>
      <path d="M12 4.5L2.5 9.2l9.5 4.7 9.5-4.7L12 4.5z" />
      <path d="M6.5 11.6v4.1c0 1.5 2.5 2.8 5.5 2.8s5.5-1.3 5.5-2.8v-4.1" />
      <path d="M21.5 9.5v5" />
    </Base>
  )
}

export function IconeBarras(props: Props) {
  return (
    <Base {...props}>
      <path d="M4 20V10" />
      <path d="M10 20V4" />
      <path d="M16 20v-7" />
      <path d="M22 20H2" />
    </Base>
  )
}

export function IconeLivro(props: Props) {
  return (
    <Base {...props}>
      <path d="M12 6.6c-1.4-1.3-3.4-2.1-5.7-2.1-1 0-2 .2-2.8.5v14.5c.8-.3 1.8-.5 2.8-.5 2.3 0 4.3.8 5.7 2.1 1.4-1.3 3.4-2.1 5.7-2.1 1 0 2 .2 2.8.5V5c-.8-.3-1.8-.5-2.8-.5-2.3 0-4.3.8-5.7 2.1z" />
      <path d="M12 6.6V21" />
    </Base>
  )
}

export function IconeDocumento(props: Props) {
  return (
    <Base {...props}>
      <path d="M6 3.5h9l4 4V20.5H6V3.5z" />
      <path d="M15 3.5v4h4" />
      <path d="M9 12h7" />
      <path d="M9 15.5h7" />
    </Base>
  )
}

export function IconeEvolucao(props: Props) {
  return (
    <Base {...props}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </Base>
  )
}

/** A estrela da Claude — marca o diferencial de IA inclusa. */
export function Asterisco({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={className}>
      ✱
    </span>
  )
}

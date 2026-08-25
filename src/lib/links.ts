/**
 * Endereços do app real. A landing é um projeto separado — todo botão de ação
 * leva para fora, para o irisjuridico. Quando o domínio próprio entrar, muda
 * só o APP aqui.
 */
const APP = 'https://irisjuridico.vercel.app'

/** O e-mail publicado nos Termos e na Política — os três lugares citam o mesmo. */
export const CONTATO = 'contato@irisjuridico.com.br'
export const contatoHref = `mailto:${CONTATO}`

export const links = {
  cadastro: `${APP}/cadastro`,
  entrar: `${APP}/entrar`,
  termos: '/termos',
  privacidade: '/privacidade',
  contato: contatoHref,
} as const

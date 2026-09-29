/**
 * Endereços do app real. A landing é um projeto separado — o "Entrar" leva
 * para fora, para o irisjuridico.
 */
const APP = 'https://app.irisjuridico.com.br'

/** O e-mail publicado nos Termos e na Política — os três lugares citam o mesmo. */
export const CONTATO = 'contato@irisjuridico.com.br'
export const contatoHref = `mailto:${CONTATO}`

/**
 * Enquanto o pagamento não existe, todo botão de assinatura vira pedido de
 * lista de espera por e-mail. Mandar para o /cadastro daria acesso sem pagar.
 * Quando o checkout entrar, os botões voltam a apontar para ele.
 */
const LISTA_DE_ESPERA = 'agentyx.ia@gmail.com'
const listaDeEsperaHref =
  `mailto:${LISTA_DE_ESPERA}` +
  `?subject=${encodeURIComponent('Lista de espera — Íris')}` +
  `&body=${encodeURIComponent('Oi! Quero entrar na lista de espera do Íris.\n\nNome:\nEstudo para (faculdade, OAB ou concurso):\n')}`

export const links = {
  listaDeEspera: listaDeEsperaHref,
  entrar: `${APP}/entrar`,
  termos: '/termos',
  privacidade: '/privacidade',
  contato: contatoHref,
} as const

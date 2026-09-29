/**
 * Endereços do app real. A landing é um projeto separado — o "Entrar" leva
 * para fora, para o irisjuridico.
 */
const APP = 'https://app.irisjuridico.com.br'

/**
 * O e-mail publicado nos Termos, na Política e no rodapé — os três lugares
 * citam o mesmo. É também para onde vão os pedidos de lista de espera.
 */
export const CONTATO = 'gravitta.ia@gmail.com'
export const contatoHref = `mailto:${CONTATO}`

/**
 * Enquanto o pagamento não existe, todo botão de assinatura vira pedido de
 * lista de espera por e-mail. Mandar para o /cadastro daria acesso sem pagar.
 * Quando o checkout entrar, os botões voltam a apontar para ele.
 */
const listaDeEsperaHref =
  `mailto:${CONTATO}` +
  `?subject=${encodeURIComponent('Lista de espera — Íris')}` +
  `&body=${encodeURIComponent('Oi! Quero entrar na lista de espera do Íris.\n\nNome:\nEstudo para (faculdade, OAB ou concurso):\n')}`

export const links = {
  listaDeEspera: listaDeEsperaHref,
  entrar: `${APP}/entrar`,
  termos: '/termos',
  privacidade: '/privacidade',
  contato: contatoHref,
} as const

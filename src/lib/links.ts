/**
 * Endereços do app real. A landing é um projeto separado — todo botão de ação
 * leva para fora, para o irisjuridico. Quando o domínio próprio entrar, muda
 * só o APP aqui.
 */
const APP = 'https://irisjuridico.vercel.app'

export const links = {
  cadastro: `${APP}/cadastro`,
  entrar: `${APP}/entrar`,
} as const

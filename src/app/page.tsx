import { Bancas } from '@/componentes/bancas'
import { Beneficios } from '@/componentes/beneficios'
import { ChamadaFinal } from '@/componentes/chamada-final'
import { ComoFunciona } from '@/componentes/como-funciona'
import { Hero } from '@/componentes/hero'
import { Preco } from '@/componentes/preco'
import { Recursos } from '@/componentes/recursos'
import { Rodape } from '@/componentes/rodape'

export default function Pagina() {
  return (
    <>
      <Hero />
      <main id="conteudo">
        <Bancas />
        <Recursos />
        <ComoFunciona />
        <Beneficios />
        <Preco />
        <ChamadaFinal />
      </main>
      <Rodape />
    </>
  )
}

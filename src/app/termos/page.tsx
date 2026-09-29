import type { Metadata } from 'next'

import { PaginaLegal } from '@/componentes/pagina-legal'
import { CONTATO, contatoHref } from '@/lib/links'

/** Troque na hora de publicar — é a data que o documento declara ao leitor. */
const ATUALIZADO_EM = '29 de setembro de 2026'

export const metadata: Metadata = {
  title: 'Termos de Uso — Íris',
  description:
    'Termos de Uso da plataforma de estudos jurídicos Íris: assinatura, cancelamento, garantia de 7 dias, limites de uso e os limites da professora de IA.',
  alternates: { canonical: '/termos' },
}

export default function Termos() {
  return (
    <PaginaLegal titulo="Termos de Uso" atualizadoEm={ATUALIZADO_EM}>
      <p>
        Estes Termos de Uso regem o uso da plataforma de estudos jurídicos Íris (&ldquo;Plataforma&rdquo;), disponível
        em irisjuridico.com.br. Ao criar uma conta ou usar a Plataforma, você concorda com estes Termos. Se não
        concordar, não use a Plataforma.
      </p>
      <p>
        A Plataforma é oferecida por <strong>Isabelli Pajuaba Junqueira</strong>, pessoa física, na cidade de
        Uberlândia/MG, com contato pelo e-mail{' '}
        <a href={contatoHref}>
          <strong>{CONTATO}</strong>
        </a>
        .
      </p>

      <h2>1. O que é a Íris</h2>
      <p>
        A Íris é uma plataforma de apoio aos estudos de Direito. Ela reúne organização de matérias, uma professora
        virtual (a &ldquo;Íris&rdquo;) que conversa e explica conteúdos, geração de questões e acompanhamento de
        desempenho. A Plataforma é destinada a <strong>maiores de 18 anos</strong>.
      </p>

      <h2>2. A professora Íris e os limites da inteligência artificial</h2>
      <p>
        A professora Íris utiliza inteligência artificial (a tecnologia da Anthropic/Claude) para explicar conteúdos e
        gerar questões. Você entende e concorda que:
      </p>
      <ul>
        <li>
          <strong>A Íris é uma ferramenta de estudo, não presta consultoria jurídica.</strong> Ela não substitui um(a)
          advogado(a) e não deve ser usada para decidir sobre casos reais da sua vida.
        </li>
        <li>
          <strong>As respostas podem conter erros.</strong> A legislação e a jurisprudência mudam.{' '}
          <strong>Confira sempre a letra da lei e a jurisprudência em fontes oficiais</strong> antes de usar qualquer
          informação em provas, trabalhos ou situações reais.
        </li>
        <li>As respostas são geradas automaticamente e não representam a opinião de um profissional.</li>
      </ul>

      <h2>3. Conta</h2>
      <p>
        Para usar a Plataforma, você cria uma conta com dados verdadeiros e é responsável por manter a sua senha em
        sigilo. A conta é <strong>pessoal e intransferível</strong> — você não deve compartilhar o seu acesso. Você é
        responsável pelas atividades realizadas na sua conta.
      </p>

      <h2>4. Assinatura, pagamento e cancelamento</h2>
      <ul>
        <li>
          A Plataforma é oferecida por <strong>assinatura</strong>, nos planos e preços informados na página de vendas
          (mensal e trimestral).
        </li>
        <li>
          A cobrança é <strong>recorrente</strong>, processada pelo <strong>Mercado Pago</strong>, renovada
          automaticamente ao fim de cada ciclo até que você cancele.
        </li>
        <li>
          Você pode <strong>cancelar a qualquer momento</strong>; o cancelamento encerra a renovação seguinte, e o
          acesso permanece até o fim do período já pago.
        </li>
        <li>
          <strong>Reembolso/garantia:</strong> garantia de 7 dias — se você cancelar em até 7 (sete) dias contados da
          sua primeira assinatura, devolvemos o valor pago, sem burocracia.
        </li>
        <li>
          Preços podem mudar; alterações não afetam o ciclo já contratado e serão comunicadas com antecedência.
        </li>
      </ul>

      <h2>5. Cota de uso</h2>
      <p>
        O uso da professora Íris e da geração de questões possui <strong>limites por ciclo</strong> (por exemplo,
        número de mensagens e de questões por mês), informados na Plataforma. Os limites existem para manter o serviço
        sustentável e evitar uso abusivo.
      </p>

      <h2>6. Uso aceitável</h2>
      <p>
        Você concorda em <strong>não</strong>:
      </p>
      <ul>
        <li>compartilhar a sua conta ou revender o acesso;</li>
        <li>usar a Plataforma para fins ilícitos;</li>
        <li>tentar burlar limites, segurança ou o isolamento entre contas;</li>
        <li>extrair conteúdo em massa de forma automatizada.</li>
      </ul>
      <p>O descumprimento pode levar à suspensão ou ao encerramento da conta.</p>

      <h2>7. Propriedade intelectual</h2>
      <ul>
        <li>
          A Plataforma, a marca <strong>Íris</strong>, o design e os textos são de titularidade de Isabelli Pajuaba
          Junqueira e não podem ser copiados sem autorização.
        </li>
        <li>
          <strong>O conteúdo que você cria</strong> (as suas anotações, a sua biblioteca) é seu. Ao usar a Plataforma,
          você nos concede uma licença limitada para armazenar e processar esse conteúdo com a finalidade de prestar o
          serviço.
        </li>
        <li>
          A menção à tecnologia da Anthropic/Claude é meramente informativa e não implica parceria ou endosso.
        </li>
      </ul>

      <h2>8. Limitação de responsabilidade</h2>
      <p>
        A Plataforma é oferecida &ldquo;no estado em que se encontra&rdquo;. Na máxima extensão permitida em lei, não
        nos responsabilizamos por decisões tomadas com base em respostas da Íris, por indisponibilidades temporárias,
        nem por danos indiretos. Reforçamos: <strong>confira sempre as fontes oficiais</strong>.
      </p>

      <h2>9. Suspensão e encerramento</h2>
      <p>
        Podemos suspender ou encerrar contas que violem estes Termos. Você pode encerrar a sua conta a qualquer
        momento.
      </p>

      <h2>10. Alterações destes Termos</h2>
      <p>
        Podemos atualizar estes Termos. Mudanças relevantes serão comunicadas pela Plataforma ou por e-mail. O uso
        continuado após a atualização significa concordância.
      </p>

      <h2>11. Lei aplicável e foro</h2>
      <p>
        Estes Termos são regidos pela lei brasileira. Fica eleito o foro da comarca de <strong>Uberlândia/MG</strong>,
        salvo disposição legal em contrário aplicável ao consumidor.
      </p>

      <h2>12. Contato</h2>
      <p>
        Dúvidas sobre estes Termos: <a href={contatoHref}>{CONTATO}</a>.
      </p>
    </PaginaLegal>
  )
}

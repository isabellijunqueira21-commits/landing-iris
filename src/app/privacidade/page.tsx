import type { Metadata } from 'next'

import { PaginaLegal } from '@/componentes/pagina-legal'
import { CONTATO, contatoHref } from '@/lib/links'

/** Troque na hora de publicar — é a data que o documento declara ao leitor. */
const ATUALIZADO_EM = '25 de agosto de 2026'

export const metadata: Metadata = {
  title: 'Política de Privacidade — Íris',
  description:
    'Como a Íris coleta, usa, compartilha e protege os seus dados pessoais, conforme a LGPD — incluindo o envio de perguntas à IA da Anthropic e os seus direitos como titular.',
  alternates: { canonical: '/privacidade' },
}

export default function Privacidade() {
  return (
    <PaginaLegal titulo="Política de Privacidade" atualizadoEm={ATUALIZADO_EM}>
      <p>
        Esta Política de Privacidade explica como a Íris (&ldquo;Íris&rdquo;, &ldquo;nós&rdquo;) coleta, usa,
        compartilha e protege os seus dados pessoais quando você usa a plataforma de estudos jurídicos disponível em
        irisjuridico.com.br (&ldquo;Plataforma&rdquo;). Ela segue a Lei Geral de Proteção de Dados (Lei nº 13.709/2018
        — &ldquo;LGPD&rdquo;).
      </p>
      <p>
        <strong>Isabelli Pajuaba Junqueira</strong>, pessoa física, na cidade de Uberlândia/MG, é a{' '}
        <strong>controladora</strong> dos seus dados pessoais e pode ser contatada pelo e-mail{' '}
        <a href={contatoHref}>
          <strong>{CONTATO}</strong>
        </a>
        .
      </p>
      <p>
        Ao criar uma conta e usar a Plataforma, você declara ter lido e compreendido esta Política. A Plataforma é
        destinada a <strong>maiores de 18 anos</strong>.
      </p>

      <h2>1. Quais dados coletamos</h2>
      <h3>Dados que você fornece</h3>
      <ul>
        <li>
          <strong>Cadastro:</strong> nome, e-mail e senha.
        </li>
        <li>
          <strong>Conteúdo de estudo:</strong> as matérias, módulos e conteúdos que você organiza; as suas conversas
          com a professora Íris; as questões geradas e as suas respostas.
        </li>
      </ul>

      <h3>Dados coletados automaticamente</h3>
      <ul>
        <li>
          <strong>Dados de uso e técnicos:</strong> registros de acesso (data, hora), tipo de dispositivo e navegador,
          e cookies necessários ao funcionamento.
        </li>
      </ul>

      <h3>Dados de pagamento</h3>
      <ul>
        <li>
          O pagamento é processado pelo <strong>Mercado Pago</strong>. Os dados do seu cartão são inseridos e tratados
          diretamente por eles — <strong>nós não armazenamos os dados do seu cartão</strong>. Recebemos apenas a
          confirmação do pagamento e informações da sua assinatura.
        </li>
      </ul>

      <h2>2. Para que usamos os seus dados</h2>
      <ul>
        <li>Criar e manter a sua conta e a sua assinatura;</li>
        <li>
          Fornecer as funcionalidades da Plataforma, inclusive{' '}
          <strong>personalizar as respostas da professora Íris com base no que você tem na sua biblioteca</strong>;
        </li>
        <li>Gerar questões e acompanhar o seu desempenho;</li>
        <li>Processar cobranças e gerenciar a sua assinatura;</li>
        <li>Melhorar a Plataforma e a qualidade das respostas;</li>
        <li>Prevenir fraudes e cumprir obrigações legais.</li>
      </ul>
      <p>
        <strong>Bases legais (LGPD, art. 7):</strong> execução do contrato (para prestar o serviço que você
        contratou), cumprimento de obrigação legal, legítimo interesse (segurança e melhoria) e, quando aplicável, o
        seu consentimento.
      </p>

      <h2>3. Inteligência artificial e compartilhamento de dados</h2>
      <p>
        Para responder às suas perguntas, a professora Íris utiliza a inteligência artificial da{' '}
        <strong>Anthropic (Claude)</strong>. Isso significa que{' '}
        <strong>o texto das suas perguntas e o conteúdo que você anexar são enviados à API da Anthropic</strong> para
        gerar a resposta. A Anthropic trata esses dados conforme os próprios termos e não os utiliza, sob os termos
        comerciais aplicáveis, para treinar seus modelos.
      </p>
      <p>Além da Anthropic, compartilhamos dados com prestadores que viabilizam a Plataforma:</p>
      <ul>
        <li>
          <strong>Mercado Pago</strong> — processamento de pagamentos;
        </li>
        <li>
          <strong>Provedores de infraestrutura</strong> (hospedagem e banco de dados) — para operar a Plataforma com
          segurança.
        </li>
      </ul>
      <p>Não vendemos os seus dados pessoais.</p>
      <p>
        <strong>Transferência internacional:</strong> alguns desses prestadores podem processar dados fora do Brasil.
        Nesses casos, buscamos que o tratamento observe padrões de proteção compatíveis com a LGPD.
      </p>

      <h2>4. Por quanto tempo guardamos</h2>
      <p>
        Mantemos os seus dados enquanto a sua conta estiver ativa e pelo prazo necessário para cumprir obrigações
        legais (por exemplo, fiscais). Encerrada a conta, os dados são eliminados ou anonimizados, salvo quando a lei
        exigir a guarda por prazo maior.
      </p>

      <h2>5. Os seus direitos (LGPD, art. 18)</h2>
      <p>Você pode, a qualquer momento, solicitar:</p>
      <ul>
        <li>
          Confirmação da existência de tratamento e <strong>acesso</strong> aos seus dados;
        </li>
        <li>
          <strong>Correção</strong> de dados incompletos ou desatualizados;
        </li>
        <li>
          <strong>Anonimização, bloqueio ou eliminação</strong> de dados desnecessários ou tratados em
          desconformidade;
        </li>
        <li>
          <strong>Portabilidade</strong> dos dados;
        </li>
        <li>Informação sobre com quem compartilhamos;</li>
        <li>
          <strong>Revogação do consentimento</strong>.
        </li>
      </ul>
      <p>
        Para exercer qualquer direito, escreva para{' '}
        <a href={contatoHref}>
          <strong>{CONTATO}</strong>
        </a>
        . Responderemos no prazo previsto na LGPD.
      </p>

      <h2>6. Segurança</h2>
      <p>
        Adotamos medidas técnicas e organizacionais para proteger os seus dados — entre elas, o{' '}
        <strong>isolamento dos dados de cada aluno</strong> (o material de um usuário não é acessível por outro) e o
        controle de acesso às informações. Nenhum sistema é 100% infalível, mas trabalhamos para reduzir riscos.
      </p>

      <h2>7. Cookies</h2>
      <p>
        Usamos cookies estritamente necessários para manter você conectado(a) e para o funcionamento da Plataforma.
        Você pode gerenciar cookies nas configurações do seu navegador; desabilitar os essenciais pode impedir o uso da
        Plataforma.
      </p>

      <h2>8. Alterações desta Política</h2>
      <p>
        Podemos atualizar esta Política. Quando houver mudança relevante, avisaremos pela Plataforma ou por e-mail. A
        data no topo indica a última atualização.
      </p>

      <h2>9. Contato</h2>
      <p>
        Dúvidas sobre privacidade ou sobre esta Política: <a href={contatoHref}>{CONTATO}</a>.
      </p>
    </PaginaLegal>
  )
}

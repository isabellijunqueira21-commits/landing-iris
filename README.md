# Landing Íris

Página única de venda do **Íris — Estudos Jurídicos**. Projeto separado do app:
nasce, constrói e sobe sozinho. A única ligação com o produto são os links de
`src/lib/links.ts`, que mandam o visitante para o app real.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run lint
npm run typecheck
```

## Stack

Next.js 15 (App Router) · TypeScript estrito · Tailwind CSS v4 · fontes por
`next/font`. Sem banco, sem API, sem estado — a página inteira é estática
(`○ Static` no build).

## Onde mexer

| Quero mudar | Arquivo |
|---|---|
| Para onde vão os botões | [src/lib/links.ts](src/lib/links.ts) |
| Cores e fontes | bloco `@theme` de [src/app/globals.css](src/app/globals.css) |
| Ordem das seções | [src/app/page.tsx](src/app/page.tsx) |
| Termos e privacidade | [src/app/termos/](src/app/termos/) e [src/app/privacidade/](src/app/privacidade/) |
| E-mail de contato | `CONTATO` em [src/lib/links.ts](src/lib/links.ts) — os três lugares citam a mesma constante |
| Uma seção específica | [src/componentes/](src/componentes/) — um arquivo por seção |
| Título e descrição no Google | `metadata` em [src/app/layout.tsx](src/app/layout.tsx) |
| O cartão que aparece ao compartilhar | [arte/og.html](arte/og.html), e depois regerar (abaixo) |

**Nunca escreva um hex direto no componente.** Se a cor não existe como token
no `@theme`, o token é que está faltando.

## Mídia

Tudo em [public/midia/](public/midia/):

| Arquivo | O que é | Origem |
|---|---|---|
| `hero-iris.mp4` | fita dourada do fundo do hero, 7 s | reencodado sem áudio, 3,9 MB → 290 kB |
| `hero-iris-poster.jpg` | primeiro quadro do vídeo | segura a cena antes do vídeo tocar e quando o sistema pede menos movimento |
| `iris-boas-vindas.png` | Íris sorrindo — hero e centro da órbita | `public/iris/iris-sorrindo.png` do app |
| `iris-dica.png` | Íris com o dedo erguido — chamada final | `public/iris/iris-explicando.png` do app |
| `fundo-nebulosa.jpg` | fundo das duas seções escuras | PNG de 1 MB convertido para 17 kB |
| `og-iris.jpg` | cartão de compartilhamento, 1200x630 | gerado de [arte/og.html](arte/og.html) — ver abaixo |

Os PNGs da Íris são os mesmos do app, onde o canal alpha foi reconstruído por
script. Se um dia chegar arte com alpha de verdade do fornecedor, ela substitui
os dois arquivos aqui também.

## Regerar o cartão de compartilhamento

O texto do cartão está **dentro da imagem**, não no `metadata`. Mudou o título,
o cartão precisa ser refeito — senão o link compartilhado passa a dizer uma
coisa e a página outra.

1. Edite [arte/og.html](arte/og.html).
2. `cp arte/og.html public/_og-temp.html` e `npm run build && npm start`.
3. Abra `http://localhost:3000/_og-temp.html` no Chrome, viewport de 1200×630,
   e capture a página em 2× (2400×1260).
4. Reduza para 1200×630 e salve como JPEG:
   `ffmpeg -i captura.png -vf "scale=1200:630:flags=lanczos" -q:v 3 public/midia/og-iris.jpg`
5. Apague o `public/_og-temp.html`.

Capturar em 2× e reduzir depois não é capricho: a serifa da Cormorant sai suja
se a captura for feita direto no tamanho final. E JPEG, não PNG — o mesmo
cartão dá 86 kB em JPEG contra 467 kB em PNG, sem diferença visível.

A página precisa ser servida por HTTP, não aberta por `file://` — nesse
protocolo a fonte do Google não carrega e o cartão sai com a fonte errada, sem
avisar. Confira que a Cormorant apareceu antes de aceitar a captura.

## Diferenças em relação ao design aprovado

O design de origem é o export do Claude Design (`Landing Íris.dc.html`). Três
mudanças de conteúdo pedidas pela Isabelli, e duas de layout que a reconstrução
exigiu:

**Conteúdo**

1. A seção de depoimentos saiu — os três eram exemplos inventados. Volta quando
   houver depoimento real.
2. A oferta acaba por número de assinantes, não por data: o selo diz
   `Desconto · primeiros 50 assinantes`, e não mais "até 18/08 / mais 5 dias".
3. Todo botão de ação vai para o app real (`/cadastro`), e o menu ganhou
   `Entrar` (`/entrar`).

**Layout**

4. O anel externo da órbita foi de 310 px para 390 px. A 45° o raio original
   dava quase a mesma altura do anel interno a 90°, e duas pílulas cobriam o
   texto uma da outra.
5. Abaixo de 1024 px a órbita vira lista. No desktop a lista não some: fica
   como leitura de tela, porque a órbita é `aria-hidden` e o conteúdo precisa
   continuar disponível para quem usa leitor.
6. O padding do rodapé passou para dentro do `max-width`. No export ele estava
   fora, e o rodapé começava 40 px à esquerda da navegação — medido: 130 px
   contra 170 px. Agora as três faixas (navegação, cabeçalho jurídico, rodapé)
   começam na mesma coluna.

## As páginas jurídicas

`/termos` e `/privacidade` são estáticas, com casca própria
([src/componentes/pagina-legal.tsx](src/componentes/pagina-legal.tsx)): faixa
escura em cima, coluna de leitura de 68 caracteres e o mesmo rodapé da home.
Nenhuma chamada de venda — quem chega ali veio ler.

O texto é da Isabelli, transcrito. Duas decisões na transcrição:

- **A data de atualização ficou em `25 de agosto de 2026`**, numa constante no
  topo de cada página. O original trazia um placeholder entre colchetes; deixar
  colchete numa página jurídica no ar é pior que uma data. **Troque na
  publicação.**
- **Os parágrafos finais em itálico não foram publicados** — os que dizem "este
  documento é um ponto de partida" e "recomenda-se revisão jurídica antes da
  publicação". São recado para a autora, não texto para o leitor: numa página no
  ar, aquilo anuncia ao cliente que os termos não foram revisados.

## Pendências

- **O e-mail `contato@irisjuridico.com.br` precisa existir de verdade.** Ele
  está publicado nos Termos, na Política e no rodapé — e a Política promete
  resposta no prazo da LGPD. Se a caixa não estiver configurada no domínio, o
  compromisso fica no ar sem ninguém do outro lado.
- **Revisão jurídica:** os dois documentos ainda não passaram por advogado(a),
  como a própria autora anotou. Vale antes de publicar, sobretudo reembolso,
  limitação de responsabilidade e a relação de consumo (CDC).
- **Domínio nos textos:** os dois documentos dizem `irisjuridico.com.br`, que
  não é onde a landing nem o app estão hoje. Alinhar antes de publicar.
- **Domínio:** `metadataBase` em `layout.tsx` está em
  `https://iris-estudos.vercel.app`, que é um palpite. **Isto precisa bater com
  o domínio real antes do deploy:** `og:image` é uma URL absoluta montada a
  partir dele, e se o domínio estiver errado o scraper busca a imagem no lugar
  errado e o link sai sem cartão. Trocar de novo quando o domínio próprio
  entrar.

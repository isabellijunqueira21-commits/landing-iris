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
| Uma seção específica | [src/componentes/](src/componentes/) — um arquivo por seção |
| Título e descrição no Google | `metadata` em [src/app/layout.tsx](src/app/layout.tsx) |

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

Os PNGs da Íris são os mesmos do app, onde o canal alpha foi reconstruído por
script. Se um dia chegar arte com alpha de verdade do fornecedor, ela substitui
os dois arquivos aqui também.

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

## Pendências

- **Rodapé:** `Contato`, `Termos de uso` e `Privacidade` estão como `#`. Não
  há e-mail nem páginas jurídicas definidos — não invente endereço, peça.
- **Domínio:** `metadataBase` em `layout.tsx` aponta para o domínio provisório
  da Vercel. Trocar quando o domínio próprio entrar.
- **Imagem de compartilhamento:** não há `og:image`. Link colado no WhatsApp ou
  no Instagram sai sem cartão visual.

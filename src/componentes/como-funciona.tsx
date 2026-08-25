const PASSOS = [
  {
    titulo: 'Assine e crie seu acesso',
    texto: 'Em dois minutos você está dentro — sem instalação, direto do navegador.',
  },
  {
    titulo: 'Organize suas matérias',
    texto: 'Monte a estrutura do seu edital em matérias, módulos e conteúdos próprios.',
  },
  {
    titulo: 'Deixe a Íris te guiar até a aprovação',
    texto: 'Aulas, questões e diagnóstico contínuo — a rota se ajusta a cada resposta sua.',
  },
] as const

/**
 * Aqui a numeração não é enfeite: é a ordem real em que o aluno percorre os
 * passos. Por isso a lista é ordenada e o fio dourado só aparece quando os
 * três ficam lado a lado.
 */
export function ComoFunciona() {
  return (
    <section className="bg-creme-morno px-5 py-20 sm:px-10 lg:py-25">
      <div className="mx-auto max-w-[1080px]">
        <div className="mb-12 text-center lg:mb-15">
          <p className="font-corpo text-[12.5px] font-medium tracking-[3px] text-dourado uppercase">Como funciona</p>
          <h2 className="mt-3.5 font-display text-[clamp(1.875rem,4.5vw,2.75rem)] leading-[1.15] font-semibold text-pretty text-grafite">
            Três passos até a sua rotina ideal de estudo.
          </h2>
        </div>

        <ol className="relative grid gap-12 md:grid-cols-3 md:gap-0">
          <div
            aria-hidden="true"
            className="absolute top-[33px] right-[16%] left-[16%] hidden h-px bg-linear-to-r from-transparent via-dourado to-transparent md:block"
          />
          {PASSOS.map((passo, i) => {
            const ultimo = i === PASSOS.length - 1
            return (
              <li key={passo.titulo} className="relative px-6 text-center">
                <span
                  className={[
                    'inline-flex h-16.5 w-16.5 items-center justify-center rounded-full border-[1.5px] border-dourado font-display text-[26px] font-bold',
                    ultimo
                      ? 'bg-linear-140 from-vinho to-vinho-fundo text-dourado-claro shadow-[0_8px_22px_rgba(107,26,42,.3)]'
                      : 'bg-creme text-vinho shadow-[0_8px_22px_rgba(201,151,58,.22)]',
                  ].join(' ')}
                >
                  {i + 1}
                </span>
                <h3 className="mt-5 mb-2 font-display text-2xl font-semibold text-grafite">{passo.titulo}</h3>
                <p className="font-corpo text-[14.5px] leading-[1.7] text-tinta-suave">{passo.texto}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

const MATERIAS = [
  { sigla: 'C', nome: 'Constitucional', progresso: 74 },
  { sigla: 'A', nome: 'Administrativo', progresso: 58 },
  { sigla: 'P', nome: 'Penal', progresso: 41 },
  { sigla: 'PC', nome: 'Proc. Civil', progresso: 33 },
  { sigla: 'CV', nome: 'Civil', progresso: 66 },
  { sigla: 'PP', nome: 'Proc. Penal', progresso: 22 },
  { sigla: 'T', nome: 'Tributário', progresso: 15 },
] as const

const MENU = ['Painel', 'Matérias', 'Chat de Estudo', 'Questões', 'Professora Íris', 'Doutrinas'] as const

/**
 * Retrato do produto dentro de uma janela de navegador. É ilustração, não
 * captura de tela — por isso todo o conteúdo é estático e fica fora da árvore
 * de acessibilidade, com uma legenda descrevendo o que ela mostra.
 */
export function PainelMaquete() {
  return (
    <figure className="relative mx-auto max-w-[880px]">
      <div
        aria-hidden="true"
        className="overflow-hidden rounded-2xl border border-dourado/35 bg-tinta shadow-[0_40px_90px_rgba(0,0,0,.55),0_0_60px_rgba(201,151,58,.12)]"
      >
        {/* barra da janela */}
        <div className="flex items-center gap-2 border-b border-dourado/20 bg-noite px-4 py-3">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-vinho" />
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#8A2A3A]" />
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-dourado" />
          <span className="mx-4 flex-1 truncate rounded-md bg-creme/6 py-1 text-center font-corpo text-[11px] text-rosa-seco sm:mx-16 sm:text-xs">
            app.iris.jur.br/painel
          </span>
        </div>

        <div className="flex bg-creme">
          {/* menu lateral — some no celular, onde não cabe */}
          <div className="hidden w-[150px] shrink-0 flex-col gap-2 bg-linear-172 from-[#631E29] to-[#46141C] px-3.5 py-4.5 sm:flex">
            <div className="font-display text-base font-bold tracking-wide text-dourado-claro">Íris</div>
            <div className="mb-1.5 h-px bg-linear-to-r from-transparent via-dourado/50 to-transparent" />
            {MENU.map((item, i) => (
              <div
                key={item}
                className={
                  i === 0
                    ? 'rounded-md bg-[#F3E9DA]/14 px-2.5 py-[7px] font-corpo text-[9.5px] font-semibold text-dourado-claro'
                    : 'px-2.5 py-[7px] font-corpo text-[9.5px] text-[#D8C0A8]'
                }
              >
                {item}
              </div>
            ))}
          </div>

          <div className="min-w-0 flex-1 p-4 sm:px-6 sm:py-5.5">
            <div className="font-display text-lg font-semibold text-grafite sm:text-xl">Bom dia, Marina.</div>
            <div className="mt-0.5 font-corpo text-[10.5px] text-neutro">Suas matérias</div>

            <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
              {MATERIAS.map((materia) => (
                <div
                  key={materia.nome}
                  className="rounded-[9px] border border-borda-morna border-t-[2.5px] border-t-vinho bg-white p-3"
                >
                  <div className="font-display text-[15px] font-semibold text-vinho">{materia.sigla}</div>
                  <div className="mt-1.5 font-corpo text-[10px] font-semibold text-grafite">{materia.nome}</div>
                  <div className="mt-2 h-[3px] rounded-full bg-[#F0E9DC]">
                    <div
                      className="h-[3px] rounded-full bg-linear-to-r from-dourado to-dourado-claro"
                      style={{ width: `${materia.progresso}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-center rounded-[9px] border border-dashed border-[#C9BBA4] p-3 font-corpo text-[10px] text-neutro">
                + Nova matéria
              </div>
            </div>
          </div>
        </div>
      </div>

      <figcaption className="sr-only">
        O painel do Íris mostrando as matérias de Marina — Constitucional, Administrativo, Penal, Processo Civil,
        Civil, Processo Penal e Tributário — cada uma com a sua barra de progresso.
      </figcaption>
    </figure>
  )
}

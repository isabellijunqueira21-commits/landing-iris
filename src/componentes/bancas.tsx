const BANCAS = ['CESPE / Cebraspe', 'FGV', 'FCC', 'Vunesp'] as const

export function Bancas() {
  return (
    <section
      aria-label="Bancas contempladas"
      className="border-y border-dourado/20 bg-tinta px-5 py-8 sm:px-10"
    >
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-center gap-x-14 gap-y-5 text-center">
        <p className="font-corpo text-xs font-medium tracking-[3px] text-rosa-seco uppercase">
          Preparação para as principais bancas
        </p>
        <p className="rounded-full border border-dourado/45 px-4.5 py-2 font-corpo text-[12.5px] font-medium text-dourado-claro">
          Para quem estuda Direito — da graduação ao concurso.
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-14 gap-y-4">
          {BANCAS.map((banca) => (
            <li key={banca} className="font-display text-xl font-semibold tracking-[2px] text-areia/65">
              {banca}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

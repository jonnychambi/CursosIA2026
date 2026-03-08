import { useMemo, useState } from 'react';
import { LeadModal } from '../components/LeadModal';
import { ProgramCard } from '../components/ProgramCard';
import { programs } from '../data/programs';
import { exportLeadsCsv } from '../utils/leads';

export const HomePage = () => {
  const [query, setQuery] = useState('');
  const [countryFilter, setCountryFilter] = useState('Todos');
  const [modalityFilter, setModalityFilter] = useState('Todas');
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string>();
  const [exportMsg, setExportMsg] = useState('');

  const countries = ['Todos', ...new Set(programs.map((program) => program.country))];
  const modalities = ['Todas', ...new Set(programs.map((program) => program.modality))];

  const filteredPrograms = useMemo(() => {
    return programs.filter((program) => {
      const textMatch = `${program.title} ${program.institution} ${program.category}`.toLowerCase().includes(query.toLowerCase());
      const countryMatch = countryFilter === 'Todos' || program.country === countryFilter;
      const modalityMatch = modalityFilter === 'Todas' || program.modality === modalityFilter;
      return textMatch && countryMatch && modalityMatch;
    });
  }, [query, countryFilter, modalityFilter]);

  const onLeadClick = (programTitle?: string) => {
    setSelectedProgram(programTitle);
    setLeadModalOpen(true);
  };

  const onExport = () => {
    const ok = exportLeadsCsv();
    setExportMsg(ok ? 'CSV descargado correctamente.' : 'No hay leads aún para exportar.');
  };

  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-gradient-to-r from-brand-slate to-brand-blue p-10 text-white shadow-premium">
        <p className="mb-4 text-sm uppercase tracking-[0.24em] text-brand-mint">Studia · Data-driven decisions</p>
        <h1 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
          Elige tu próximo programa con datos reales, no con promesas.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-blue-100">
          Compara contenido, docentes, modalidad y precio en un solo lugar.
        </p>
        <button className="mt-8 rounded-xl bg-brand-mint px-6 py-3 font-semibold text-brand-slate" onClick={() => onLeadClick()} type="button">
          Solicitar asesoría
        </button>
      </section>

      <section className="rounded-2xl border border-brand-gray bg-white p-6">
        <div className="grid gap-4 md:grid-cols-3">
          <input
            className="rounded-xl border border-brand-gray px-4 py-3"
            placeholder="Buscar por programa, institución o categoría"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <select className="rounded-xl border border-brand-gray px-4 py-3" value={countryFilter} onChange={(event) => setCountryFilter(event.target.value)}>
            {countries.map((country) => <option key={country}>{country}</option>)}
          </select>
          <select className="rounded-xl border border-brand-gray px-4 py-3" value={modalityFilter} onChange={(event) => setModalityFilter(event.target.value)}>
            {modalities.map((modality) => <option key={modality}>{modality}</option>)}
          </select>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Programas comparables</h2>
          <button className="rounded-xl border border-brand-slate px-4 py-2 text-sm font-medium" onClick={onExport} type="button">
            Exportar leads a CSV
          </button>
        </div>
        {exportMsg ? <p className="mb-4 text-sm text-brand-blue">{exportMsg}</p> : null}

        <div className="grid gap-5 md:grid-cols-2">
          {filteredPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} onLeadClick={onLeadClick} />
          ))}
        </div>

        {filteredPrograms.length === 0 ? <p className="mt-6 text-slate-600">No encontramos programas para esos filtros.</p> : null}
      </section>

      <section className="rounded-2xl border border-brand-gray bg-slate-50 p-8 text-center">
        <h2 className="text-2xl font-semibold">¿Listo para elegir con confianza?</h2>
        <p className="mt-2 text-slate-600">Recibe una recomendación rápida basada en tus objetivos y tu momento ideal para empezar.</p>
        <button className="mt-5 rounded-xl bg-brand-mint px-6 py-3 font-semibold text-brand-slate" onClick={() => onLeadClick()} type="button">
          Quiero mi recomendación
        </button>
      </section>

      <LeadModal isOpen={leadModalOpen} onClose={() => setLeadModalOpen(false)} preselectedProgram={selectedProgram} />
    </div>
  );
};

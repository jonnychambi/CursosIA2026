import { Link } from 'react-router-dom';
import type { Program } from '../types';

interface ProgramCardProps {
  program: Program;
  onLeadClick: (programTitle: string) => void;
}

export const ProgramCard = ({ program, onLeadClick }: ProgramCardProps) => {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-brand-gray bg-white p-6 shadow-premium transition hover:-translate-y-0.5">
      <div>
        <p className="mb-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{program.category}</p>
        <h3 className="text-xl font-semibold text-brand-slate">{program.title}</h3>
        <p className="mt-1 text-sm text-slate-600">{program.institution} · {program.country}</p>

        <dl className="mt-5 grid grid-cols-2 gap-y-2 text-sm">
          <dt className="text-slate-500">Modalidad</dt>
          <dd className="font-medium">{program.modality}</dd>
          <dt className="text-slate-500">Duración</dt>
          <dd className="font-medium">{program.durationWeeks} semanas</dd>
          <dt className="text-slate-500">Nivel</dt>
          <dd className="font-medium">{program.level}</dd>
          <dt className="text-slate-500">Precio</dt>
          <dd className="font-medium text-brand-blue">USD {program.priceUsd.toLocaleString()}</dd>
        </dl>
      </div>

      <div className="mt-6 flex gap-3">
        <Link
          className="flex-1 rounded-xl border border-brand-blue px-4 py-2 text-center text-sm font-semibold text-brand-blue transition hover:bg-blue-50"
          to={`/programa/${program.id}`}
        >
          Ver detalle
        </Link>
        <button
          className="flex-1 rounded-xl bg-brand-mint px-4 py-2 text-sm font-semibold text-brand-slate transition hover:brightness-95"
          onClick={() => onLeadClick(program.title)}
          type="button"
        >
          Quiero info
        </button>
      </div>
    </article>
  );
};

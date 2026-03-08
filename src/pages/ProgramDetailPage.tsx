import { Link, useParams } from 'react-router-dom';
import { programs } from '../data/programs';

export const ProgramDetailPage = () => {
  const { id } = useParams();
  const program = programs.find((item) => item.id === id);

  if (!program) {
    return (
      <div className="rounded-2xl border border-brand-gray bg-white p-8">
        <h1 className="text-2xl font-semibold">Programa no encontrado</h1>
        <Link className="mt-4 inline-block text-brand-blue underline" to="/">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link className="text-sm text-brand-blue underline" to="/">← Volver</Link>
      <section className="rounded-2xl border border-brand-gray bg-white p-8 shadow-premium">
        <h1 className="text-3xl font-semibold">{program.title}</h1>
        <p className="mt-2 text-slate-600">{program.institution} · {program.country}</p>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <Metric label="Precio" value={`USD ${program.priceUsd.toLocaleString()}`} />
          <Metric label="Duración" value={`${program.durationWeeks} semanas`} />
          <Metric label="Modalidad" value={program.modality} />
          <Metric label="Nivel" value={program.level} />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-brand-gray bg-white p-6">
          <h2 className="text-xl font-semibold">Contenido clave</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
            {program.syllabusHighlights.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
        <article className="rounded-2xl border border-brand-gray bg-white p-6">
          <h2 className="text-xl font-semibold">Docentes</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
            {program.teachers.map((teacher) => <li key={teacher}>{teacher}</li>)}
          </ul>
          <p className="mt-4 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">{program.outcome}</p>
        </article>
      </section>
    </div>
  );
};

const Metric = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <p className="text-xs uppercase tracking-widest text-slate-500">{label}</p>
      <p className="mt-1 text-lg font-semibold text-brand-slate">{value}</p>
    </div>
  );
};

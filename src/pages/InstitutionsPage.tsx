import { institutions } from '../data/programs';

export const InstitutionsPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold">Instituciones aliadas</h1>
      <p className="mt-3 max-w-2xl text-slate-600">Red mock de partners académicos y escuelas especializadas en tecnología y negocios digitales.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {institutions.map((institution) => (
          <article key={institution} className="rounded-2xl border border-brand-gray bg-white p-6 shadow-premium">
            <p className="text-lg font-semibold">{institution}</p>
            <p className="mt-2 text-sm text-slate-500">Partner verificado LATAM</p>
          </article>
        ))}
      </div>
    </div>
  );
};

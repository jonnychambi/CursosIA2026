export const AboutPage = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-semibold">Nosotros</h1>
      <section className="grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-brand-gray bg-white p-6 shadow-premium">
          <h2 className="text-xl font-semibold">Misión</h2>
          <p className="mt-3 text-slate-600">Ayudar a profesionales de LATAM a elegir programas tech con métricas comparables y transparentes.</p>
        </article>
        <article className="rounded-2xl border border-brand-gray bg-white p-6 shadow-premium">
          <h2 className="text-xl font-semibold">Visión</h2>
          <p className="mt-3 text-slate-600">Ser la plataforma de referencia para decisiones educativas data-driven en la región.</p>
        </article>
        <article className="rounded-2xl border border-brand-gray bg-white p-6 shadow-premium">
          <h2 className="text-xl font-semibold">Propuesta de valor</h2>
          <p className="mt-3 text-slate-600">Unificamos contenido, docentes, formato y precio para que compares sin fricción y actúes rápido.</p>
        </article>
      </section>
    </div>
  );
};

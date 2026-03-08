import { Link, NavLink, Outlet } from 'react-router-dom';

const navClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium transition ${isActive ? 'text-brand-blue' : 'text-slate-700 hover:text-brand-blue'}`;

export const Layout = () => {
  return (
    <div className="min-h-screen bg-brand-white text-brand-slate">
      <header className="border-b border-brand-gray bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-2xl font-bold tracking-tight text-brand-slate">
            Studia
          </Link>
          <nav className="flex gap-5">
            <NavLink to="/" className={navClass} end>
              Home
            </NavLink>
            <NavLink to="/nosotros" className={navClass}>
              Nosotros
            </NavLink>
            <NavLink to="/instituciones" className={navClass}>
              Instituciones aliadas
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <Outlet />
      </main>

      <footer className="mt-8 border-t border-brand-gray bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Studia. Comparador tech en LATAM.</p>
          <p className="font-medium text-brand-slate">Datos para decidir mejor.</p>
        </div>
      </footer>
    </div>
  );
};

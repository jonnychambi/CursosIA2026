import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { InstitutionsPage } from './pages/InstitutionsPage';
import { ProgramDetailPage } from './pages/ProgramDetailPage';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<HomePage />} index />
          <Route element={<AboutPage />} path="nosotros" />
          <Route element={<InstitutionsPage />} path="instituciones" />
          <Route element={<ProgramDetailPage />} path="programa/:id" />
          <Route element={<Navigate replace to="/" />} path="*" />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;

import { PeoplePage } from './pages/PeoplePage';
import { Navbar } from './components/Navbar';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import './App.scss';
import { HomePage } from './pages/HomePage';
import { NotfoundPage } from './pages/NotFoundPage';

export const App = () => {
  const { pathname, search } = useLocation();

  return (
    <div data-cy="app">
      <p>{pathname}</p>
      <p>{search}</p>
      {/* <p className="title is-5 has-text-info">
        {pathname}
      </p>

      <p className="title is-6">
        {search && search.replaceAll('&', ' &')}
      </p> */}
      <Navbar />

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/people/:slug" element={<PeoplePage />} />
            <Route path="/home" element={<Navigate to="/" replace />}></Route>
            <Route path="*" element={<NotfoundPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

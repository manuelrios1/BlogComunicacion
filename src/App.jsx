import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BookOpen, Users, FileText, Brain, Mail } from 'lucide-react';
import { BlogProvider } from './context/BlogContext';

import Inicio from './pages/Inicio';
import Evidencias from './pages/Evidencias';
import Reto from './pages/Reto';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';

function App() {
  return (
    <BlogProvider>
      <Router>
        <div className="min-h-screen bg-emerald-50 font-sans text-gray-800">
          {/* Navegación */}
          <nav className="bg-emerald-700 text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold flex items-center gap-2">
                <BookOpen size={28} />
                Blog de Comunicación
              </Link>
              <div className="flex gap-6 font-medium">
                <Link to="/" className="hover:text-emerald-200 transition">Inicio</Link>
                <Link to="/evidencias" className="hover:text-emerald-200 transition flex items-center gap-1"><FileText size={18}/> Evidencias</Link>
                <Link to="/reto" className="hover:text-emerald-200 transition flex items-center gap-1"><Brain size={18}/> Reto</Link>
                <Link to="/nosotros" className="hover:text-emerald-200 transition flex items-center gap-1"><Users size={18}/> Nosotros</Link>
                <Link to="/contacto" className="hover:text-emerald-200 transition flex items-center gap-1"><Mail size={18}/> Contacto</Link>
              </div>
            </div>
          </nav>

          {/* Contenido Principal */}
          <main className="max-w-6xl mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/evidencias" element={<Evidencias />} />
              <Route path="/reto" element={<Reto />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="bg-emerald-900 text-emerald-100 text-center py-6 mt-12">
            <p>© 2023 - Formación en Comunicaciones. Manuel, David y Sebastian.</p>
          </footer>
        </div>
      </Router>
    </BlogProvider>
  );
}

export default App;
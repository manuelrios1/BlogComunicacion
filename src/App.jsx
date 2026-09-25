import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BookOpen, Users, PenTool, MessageSquare, Home } from 'lucide-react';
import Inicio from './pages/Inicio';
import Tematicas from './pages/Tematicas';
import Taller from './pages/Taller';
import Reto from './pages/Reto';
import Equipo from './pages/Equipo';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-green-50 text-gray-800 font-sans">
        {/* Navbar */}
        <nav className="bg-emerald-700 text-white shadow-lg sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <span className="text-2xl font-bold tracking-wider">BlogCom<span className="text-emerald-300">.</span></span>
              <div className="flex space-x-6">
                <Link to="/" className="hover:text-emerald-200 flex items-center gap-1 transition"><Home size={18}/> Inicio</Link>
                <Link to="/tematicas" className="hover:text-emerald-200 flex items-center gap-1 transition"><BookOpen size={18}/> Temáticas</Link>
                <Link to="/taller" className="hover:text-emerald-200 flex items-center gap-1 transition"><PenTool size={18}/> Taller</Link>
                <Link to="/reto" className="hover:text-emerald-200 flex items-center gap-1 transition"><MessageSquare size={18}/> Reto</Link>
                <Link to="/equipo" className="hover:text-emerald-200 flex items-center gap-1 transition"><Users size={18}/> Equipo</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Contenido Principal */}
        <main className="max-w-6xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/tematicas" element={<Tematicas />} />
            <Route path="/taller" element={<Taller />} />
            <Route path="/reto" element={<Reto />} />
            <Route path="/equipo" element={<Equipo />} />
          </Routes>
        </main>
        
        <footer className="bg-emerald-900 text-center py-6 text-emerald-200 mt-12">
          <p>© 2026 - Proyecto de Comunicaciones | Manuel Ríos, David Restrepo, Sebastián Ramírez</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
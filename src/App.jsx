import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, BookOpen, Image as ImageIcon, Users } from 'lucide-react';
import Inicio from './pages/Inicio';
import Taller from './pages/Taller';
import Evidencias from './pages/Evidencias';
import Reflexiones from './pages/Reflexiones';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-green-900">
        {/* Navbar */}
        <nav className="bg-green-700 text-white shadow-lg sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
            <h1 className="text-2xl font-bold tracking-wider">Blog Comunicaciones</h1>
            <div className="flex gap-4 sm:gap-6 mt-4 sm:mt-0 font-medium">
              <Link to="/" className="flex items-center gap-1 hover:text-green-300 transition-colors"><Home size={18}/> Inicio</Link>
              <Link to="/taller" className="flex items-center gap-1 hover:text-green-300 transition-colors"><BookOpen size={18}/> Taller</Link>
              <Link to="/evidencias" className="flex items-center gap-1 hover:text-green-300 transition-colors"><ImageIcon size={18}/> Evidencias</Link>
              <Link to="/reflexiones" className="flex items-center gap-1 hover:text-green-300 transition-colors"><Users size={18}/> Reflexiones</Link>
            </div>
          </div>
        </nav>

        {/* Contenido Dinámico */}
        <main className="flex-grow max-w-6xl mx-auto px-4 py-8 w-full">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/taller" element={<Taller />} />
            <Route path="/evidencias" element={<Evidencias />} />
            <Route path="/reflexiones" element={<Reflexiones />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-green-800 text-green-100 py-6 text-center">
          <p>© 2026 - Proyecto de Comunicaciones. SENA.</p>
          <p className="text-sm mt-2">Integrantes: Manuel Rios, David Alejander, Sebastian Ramirez</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
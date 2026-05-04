import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'glass backdrop-blur-xl border-b border-slate-200/50  bg-white/70  shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-3xl font-extrabold tracking-tighter text-blue-600  flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white text-xl">C</div>
              ODLITE
            </Link>
          </div>
          <div className="hidden md:flex space-x-1 items-center">
            <Link to="/" className="text-slate-600 hover:text-blue-600   px-4 py-2 rounded-full text-sm font-semibold transition-all">Home</Link>
            <Link to="/about" className="text-slate-600 hover:text-blue-600   px-4 py-2 rounded-full text-sm font-semibold transition-all">About</Link>
            <Link to="/verify" className="text-slate-600 hover:text-blue-600   px-4 py-2 rounded-full text-sm font-semibold transition-all">Verify Cert</Link>
            <Link to="/contact" className="text-slate-600 hover:text-blue-600   px-4 py-2 rounded-full text-sm font-semibold transition-all">Contact</Link>
            <div className="pl-4">
                <Link to="/apply" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow-lg shadow-blue-500/30 transition-all transform hover:scale-105 active:scale-95">
                  Apply Now
                </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
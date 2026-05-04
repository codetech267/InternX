import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-slate-200  bg-slate-50  py-12 px-4 mt-auto">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
            <Link to="/" className="text-2xl font-extrabold tracking-tighter text-blue-600 flex items-center gap-2 mb-2 group">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white text-xs overflow-hidden relative">
                <span className="relative z-10 group-hover:animate-pulse">X</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                InternX
              </span>
            </Link>
            <p className="text-sm text-slate-500  text-center md:text-left">Empowering students with real-world skills.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600 ">
            <Link to="/about" className="hover:text-blue-600 :text-cyan-400 transition-colors">About Us</Link>
            <Link to="/apply" className="hover:text-blue-600 :text-cyan-400 transition-colors">Apply Now</Link>
            <Link to="/verify" className="hover:text-blue-600 :text-cyan-400 transition-colors">Verify Certificate</Link>
            <Link to="/contact" className="hover:text-blue-600 :text-cyan-400 transition-colors">Contact</Link>
        </div>
    </div>
    <div className="max-w-7xl mx-auto mt-8 text-center text-xs text-slate-400 border-t border-slate-200  pt-6">
        &copy; {new Date().getFullYear()} InternX. All rights reserved.
    </div>
  </footer>
);

export default Footer;
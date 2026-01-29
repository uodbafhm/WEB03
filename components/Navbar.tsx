
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'خدماتنا', path: '/services' },
    { name: 'اتصل بنا', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-900/95 backdrop-blur-lg py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex justify-between items-center">
          
          {/* Left Side: CTA Button */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/contact"
              className="bg-sky-500 hover:bg-sky-400 text-white px-8 py-3 rounded-xl text-lg font-black transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3 shadow-lg shadow-sky-500/20"
            >
              <Calendar size={20} />
              احجز موعدك
            </Link>
          </div>

          {/* Center: Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-lg font-bold tracking-tight transition-all hover:text-sky-400 ${isActive(link.path) ? 'text-white border-b-2 border-white pb-1' : 'text-slate-200'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side: Logo (Clinic Name) */}
          <div className="flex items-center">
            <Link to="/" className="flex flex-col items-end text-right">
              <span className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tighter">د. مابصو للأسنان</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-sky-400 font-bold">EXCELLENCE & DENTISTRY</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white">
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-slate-950 z-50 flex flex-col p-10 space-y-8 animate-in fade-in duration-300">
          <button onClick={() => setIsOpen(false)} className="self-end text-white"><X size={40} /></button>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-black text-white"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full bg-sky-500 text-white py-5 rounded-2xl text-center text-2xl font-black"
          >
            احجز موعدك
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

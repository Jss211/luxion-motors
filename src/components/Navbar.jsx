import React, { useState, useEffect } from 'react';
import { PhoneCall, Menu, X, Shield, Sparkles } from 'lucide-react';

export function Navbar({ activeSection, setActiveSection, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'catalogo', label: 'Catálogo' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'galeria', label: 'Galería' },
    { id: 'testimonios', label: 'Testimonios' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'contacto', label: 'Contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-[#B8860B]/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Jaguar Logo & Brand Name (Ferrari style top left logo) */}
        <div 
          onClick={() => handleNavClick('inicio')}
          className="flex items-center gap-3 cursor-pointer group shrink-0"
        >
          <div className="relative">
            <img
              src="/jaguar.png"
              alt="Jaguar Luxion"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain relative z-10 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-extrabold tracking-[0.2em] text-white uppercase transition-colors">
              LUXION
            </span>
            <span className="text-[9px] tracking-[0.35em] text-[#B8860B] font-semibold uppercase -mt-1">
              MOTORS
            </span>
          </div>
        </div>

        {/* Center: Perfectly Centered Navigation Links */}
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-8 lg:space-x-12">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-1 text-base lg:text-lg font-medium transition-all duration-300 tracking-wider ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
                {/* Underline indicator */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-amber-400 to-[#B8860B] transition-all duration-300 origin-center ${
                    isActive ? 'scale-x-100 shadow-[0_0_8px_#B8860B]' : 'scale-x-0 hover:scale-x-50'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Right: Mobile Menu Toggle Only (Removed CTA for desktop) */}
        <div className="flex items-center gap-3 sm:gap-4 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-[#B8860B] focus:outline-none"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-[#B8860B]/30 px-6 pt-4 pb-6 mt-3 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left py-2.5 text-base font-medium tracking-wider transition-colors border-b border-white/5 ${
                activeSection === link.id ? 'text-[#B8860B] font-bold pl-2 border-[#B8860B]/40' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-amber-500 to-[#B8860B] text-black font-bold uppercase text-xs tracking-widest"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contactar Asesor VIP</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

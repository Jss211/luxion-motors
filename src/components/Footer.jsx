import React from 'react';
import { MapPin, Phone, Mail, Camera, Video, Globe, ShieldCheck, FileText } from 'lucide-react';
import { Typewriter } from './ui/typewriter';

export function Footer({ onOpenContact, setActiveSection }) {
  const handleNavClick = (id) => {
    if (setActiveSection) {
      setActiveSection(id);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contacto" className="bg-[#040507] text-white pt-20 pb-10 border-t border-[#B8860B]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Col 1: Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/jaguar.png" alt="Jaguar Luxion" className="w-12 h-12 object-contain" />
              <div>
                <span className="text-xl font-extrabold tracking-[0.2em] text-white uppercase block">LUXION</span>
                <span className="text-[10px] tracking-[0.35em] text-[#B8860B] font-semibold uppercase -mt-1 block">MOTORS</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              Ingeniería y carrocería de precisión. La marca definitiva en hiperdeportivos y atención VIP.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-[#B8860B] hover:text-black transition-colors" title="Instagram">
                <Camera className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-[#B8860B] hover:text-black transition-colors" title="YouTube">
                <Video className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-[#B8860B] hover:text-black transition-colors" title="Facebook">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#B8860B] mb-6">Navegación</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><button onClick={() => handleNavClick('inicio')} className="hover:text-white transition-colors">Inicio</button></li>
              <li><button onClick={() => handleNavClick('catalogo')} className="hover:text-white transition-colors">Catálogo</button></li>
              <li><button onClick={() => handleNavClick('servicios')} className="hover:text-white transition-colors">Servicios</button></li>
              <li><button onClick={() => handleNavClick('galeria')} className="hover:text-white transition-colors">Galería</button></li>
              <li><button onClick={() => handleNavClick('testimonios')} className="hover:text-white transition-colors">Testimonios</button></li>
              <li><button onClick={() => handleNavClick('nosotros')} className="hover:text-white transition-colors">Nosotros</button></li>
              <li><button onClick={() => handleNavClick('contacto')} className="hover:text-white transition-colors">Contacto</button></li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#B8860B] mb-6 flex items-center gap-1.5 flex-wrap">
              Contacto <Typewriter words={['VIP', 'Exclusivo', 'Directo']} delayBetweenWords={5000} className="text-white block font-extrabold" />
            </h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-center gap-3 group">
                <MapPin className="w-5 h-5 text-[#B8860B] group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 group-hover:text-white transition-colors">Av. José Pardo 1200, Miraflores, Lima - Perú</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-[#B8860B] group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 group-hover:text-white transition-colors">+51 986 182 856</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-[#B8860B] group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 group-hover:text-white transition-colors">jordanpmrojasbazan@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Luxion Motors. Todos los derechos reservados.</p>
          <button onClick={() => handleNavClick('terminos')} className="flex items-center gap-2 hover:text-white transition-colors group">
            <FileText className="w-4 h-4 text-[#B8860B] group-hover:scale-110 transition-transform" />
            <span>Términos y Condiciones</span>
          </button>
        </div>

      </div>
    </footer>
  );
}

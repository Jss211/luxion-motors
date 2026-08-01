import React from 'react';
import { MapPin, Phone, Mail, Share2, Globe, Camera, ShieldCheck } from 'lucide-react';
import { TextWordCarousel } from './ui/text-word-carousel';

export function Footer({ onOpenContact }) {
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
              <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-[#B8860B] hover:text-black transition-colors" title="Instagram">
                <Camera className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-[#B8860B] hover:text-black transition-colors" title="Website">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-[#B8860B] hover:text-black transition-colors" title="Social Share">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#B8860B] mb-6">Navegación</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><button className="hover:text-white transition-colors">Inicio</button></li>
              <li><button className="hover:text-white transition-colors">Catálogo</button></li>
              <li><button className="hover:text-white transition-colors">Servicios</button></li>
              <li><button className="hover:text-white transition-colors">Nosotros</button></li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#B8860B] mb-6 flex items-center gap-1.5 flex-wrap">
              Contacto <TextWordCarousel words={['VIP', 'Exclusivo', 'Directo']} interval={3} className="text-white block font-extrabold" />
            </h4>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                <span>Av. Los Carroceros 880, Lima - Perú</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B8860B] shrink-0" />
                <span>+51 (1) 780-9000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#B8860B] shrink-0" />
                <span>contacto@luxionmotors.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Luxion Motors. Todos los derechos reservados.</p>
          <p className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B8860B]" />
            <span>Ingeniería & Carrocería de Precisión</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

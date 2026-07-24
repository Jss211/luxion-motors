import React from 'react';
import { MapPin, Phone, Mail, Share2, Globe, Camera, ShieldCheck } from 'lucide-react';

export function Footer({ onOpenContact }) {
  return (
    <footer id="contacto" className="bg-[#040507] text-white pt-20 pb-10 border-t border-[#B8860B]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/jaguar.png" alt="Jaguar Luxion" className="w-12 h-12 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.7)]" />
              <div>
                <span className="text-xl font-extrabold tracking-[0.2em] text-white uppercase block">LUXION</span>
                <span className="text-[10px] tracking-[0.35em] text-[#B8860B] font-semibold uppercase -mt-1 block">MOTORS</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              La marca definitiva en diseño de carrocerías hiperdeportivas, aleaciones de carbono espacial y atención VIP personalizada.
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
            <ul className="space-y-3 text-xs text-gray-400">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio & Showroom</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">Catálogo de Superdeportivos</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios de Carrocería</a></li>
              <li><a href="#galeria" className="hover:text-white transition-colors">Galería de Trabajos</a></li>
              <li><a href="#nosotros" className="hover:text-white transition-colors">Historia & Filosofía</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#B8860B] mb-6">Especialidades</h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li>Monocasco de Carbono Bespoke</li>
              <li>Pintura Tricapa & Acabados Matte</li>
              <li>Blindaje Ligero Balístico BR6</li>
              <li>Pruebas en Túnel de Viento</li>
              <li>Restauración Restomod</li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#B8860B] mb-6">Contacto VIP</h4>
            <div className="space-y-4 text-xs text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                <span>Av. Los Carroceros 880, Distrito de Lujo, Lima - Perú</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B8860B] shrink-0" />
                <span>+51 (1) 780-9000 / VIP WhatsApp</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#B8860B] shrink-0" />
                <span>contacto@luxionmotors.com</span>
              </div>
              <button
                onClick={onOpenContact}
                className="w-full mt-4 py-3 rounded-xl bg-[#B8860B]/20 border border-[#B8860B]/40 text-[#B8860B] hover:bg-[#B8860B] hover:text-black font-bold uppercase text-[10px] tracking-widest transition-all"
              >
                Agendar Visita al Taller
              </button>
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

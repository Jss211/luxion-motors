import React from 'react';
import { Hammer, Sparkles, ShieldCheck, Flame, Wrench, ShieldAlert } from 'lucide-react';

export function Services({ onSelectService }) {
  const servicesList = [
    {
      icon: Hammer,
      title: 'Carrocería Bespoke Hecha a Mano',
      description: 'Fabricación y modelado exclusivo de paneles en aluminio de alta densidad y fibra de carbono autoclave.',
    },
    {
      icon: Flame,
      title: 'Pintura Tricapa & Acabados Matte',
      description: 'Cabina de pintura termocontrolada de última generación para acabados hiperbrillantes y pigmentos dorados.',
    },
    {
      icon: ShieldCheck,
      title: 'Blindaje Ligero para Superdeportivos',
      description: 'Protección balística discreta sin comprometer la relación peso/potencia ni la aerodinámica.',
    },
    {
      icon: Wrench,
      title: 'Optimización Aerodinámica en Túnel de Viento',
      description: 'Diseño e instalación de alerones activos, difusores traseros y splitters de carbono real.',
    },
    {
      icon: Sparkles,
      title: 'Restauración Classiche Restomod',
      description: 'Devolvemos el esplendor original a clásicos legendarios combinándolos con motores modernos.',
    },
    {
      icon: ShieldAlert,
      title: 'Mantenimiento & Detailing Cerámico 9H',
      description: 'Protección de superficie auto-curativa contra arañazos, corrosión y calor extremo.',
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-[#06070a] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#B8860B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#B8860B] text-xs font-semibold uppercase tracking-[0.3em] block mb-2">
            INGENIERÍA & ARTESANÍA DE ALTA GAMA
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
            Servicios de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#B8860B] to-amber-400">Carrocería</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base mt-3">
            Dominamos las técnicas más avanzadas para transformar, proteger y personalizar hiperdeportivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-gradient-to-b from-white/5 to-black/60 border border-white/10 hover:border-[#B8860B]/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-[#B8860B]/10 border border-[#B8860B]/30 flex items-center justify-center text-[#B8860B] mb-6 group-hover:scale-110 group-hover:bg-[#B8860B] group-hover:text-black transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#B8860B] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="mt-8 text-xs font-bold uppercase tracking-widest text-[#B8860B] flex items-center gap-2 group-hover:translate-x-2 transition-transform"
                >
                  <span>Consultar Servicio</span>
                  <span>→</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

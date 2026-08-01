import React from 'react';
import { TextWordCarousel } from './ui/text-word-carousel';

export function Services({ onSelectService }) {
  const servicesList = [
    {
      image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=80',
      title: 'Carrocería Bespoke Hecha a Mano',
      description: 'Fabricación y modelado exclusivo de paneles en aluminio de alta densidad y fibra de carbono autoclave.',
    },
    {
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
      title: 'Pintura Tricapa & Acabados Matte',
      description: 'Cabina de pintura termocontrolada de última generación para acabados hiperbrillantes y pigmentos dorados.',
    },
    {
      image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80',
      title: 'Blindaje Ligero para Superdeportivos',
      description: 'Protección balística discreta sin comprometer la relación peso/potencia ni la aerodinámica.',
    },
    {
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
      title: 'Optimización Aerodinámica en Túnel de Viento',
      description: 'Diseño e instalación de alerones activos, difusores traseros y splitters de carbono real.',
    },
    {
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80',
      title: 'Restauración Classiche Restomod',
      description: 'Devolvemos el esplendor original a clásicos legendarios combinándolos con motores modernos.',
    },
    {
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=800&q=80',
      title: 'Mantenimiento & Detailing Cerámico 9H',
      description: 'Protección de superficie auto-curativa contra arañazos, corrosión y calor extremo.',
    },
  ];

  return (
    <section id="servicios" className="pt-12 pb-24 bg-[#06070a] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#B8860B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
            Servicios de <TextWordCarousel words={['Carrocería', 'Restauración', 'Personalización', 'Mantenimiento']} interval={3} className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#B8860B] to-amber-400" />
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base mt-3">
            Dominamos las técnicas más avanzadas para transformar, proteger y personalizar hiperdeportivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className="group relative h-[22rem] rounded-2xl overflow-hidden border border-white/10 hover:border-[#B8860B]/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl flex flex-col justify-end p-6"
            >
              <div className="absolute inset-0 z-0">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
              </div>

              <div className="relative z-10 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#B8860B] transition-colors line-clamp-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-6 line-clamp-3">
                  {service.description}
                </p>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="text-xs font-bold uppercase tracking-widest text-[#B8860B] flex items-center gap-2 group-hover:translate-x-2 transition-transform w-fit"
                >
                  <span>Consultar Servicio</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

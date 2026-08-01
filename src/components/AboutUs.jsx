import React from 'react';
import { Award, ShieldCheck, Zap, Globe } from 'lucide-react';
import { TextWordCarousel } from './ui/text-word-carousel';

export function AboutUs() {
  const stats = [
    { label: 'Años de Experiencia', value: '18+' },
    { label: 'Carrocerías Bespoke', value: '350+' },
    { label: 'Garantía en Fibra', value: '10 Años' },
    { label: 'Satisfacción VIP', value: '100%' },
  ];

  return (
    <section id="nosotros" className="py-24 bg-[#090a0f] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Jaguar Logo & Craftsmanship Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#B8860B]/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80"
                alt="Luxion Motors Workshop"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              {/* Overlay Jaguar Badge */}
              <div className="absolute bottom-6 left-6 flex items-center gap-4 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-[#B8860B]/40">
                <img src="/jaguar.png" alt="Jaguar" className="w-14 h-14 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.7)]" />
                <div>
                  <h4 className="text-sm font-extrabold text-white tracking-widest uppercase">LUXION MOTORS</h4>
                  <p className="text-[10px] text-[#B8860B] font-semibold tracking-wider">PASIÓN POR LA PERFECCIÓN</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Details */}
          <div>
            <span className="text-[#B8860B] text-xs font-semibold uppercase tracking-[0.3em] block mb-2">
              NUESTRA FILOSOFÍA
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-6 leading-tight flex flex-wrap gap-x-3 gap-y-2">
              Ingeniería Automotriz sin <TextWordCarousel words={['Límites', 'Compromisos', 'Precedentes']} interval={3} className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#B8860B] to-amber-400 block" />
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              En <strong className="text-white">Luxion Motors</strong> fusionamos la pasión de la alta competición con las técnicas tradicionales de los carroceros italianos. Cada modelo que sale de nuestro taller es una obra de arte única y numerada.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
              Especialistas en aleaciones ligeras, fibra de carbono en autoclave, acabados de pintura multicapa y blindaje discreto para superdeportivos de alto valor.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#B8860B] block">
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-gray-400 uppercase tracking-wider block mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

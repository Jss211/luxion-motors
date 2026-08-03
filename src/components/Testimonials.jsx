import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Typewriter } from './ui/typewriter';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Carlos Alberto V.',
      title: 'Coleccionista de Superdeportivos',
      comment: 'La carrocería personalizada en fibra de carbono para mi Ferrari superó todas mis expectativas. El nivel de acabado de Luxion Motors es comparable al de las casas de diseño de Italia.',
      stars: 5,
      car: 'Ferrari 812 Custom Monocoque',
    },
    {
      name: 'Dr. Fernando M.',
      title: 'Propietario de Hypercar',
      comment: 'El trabajo de blindaje ligero BR6 y la pintura tricapa champán dejaron mi vehículo con una presencia impecable. Insuperables en atención VIP.',
      stars: 5,
      car: 'Jaguar Luxion Roadster',
    },
    {
      name: 'Empresario Rodrigo S.',
      title: 'Entusiasta de la Velocidad',
      comment: 'La optimización aerodinámica en su túnel de viento redujo drásticamente el drag de mi vehículo en pista. Son verdaderos artesanos de la automoción.',
      stars: 5,
      car: 'Luxion Urus Carbon Widebody',
    },
  ];

  return (
    <section id="testimonios" className="py-24 bg-[#06070a] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-[#B8860B] text-xs font-semibold uppercase tracking-[0.3em] block mb-2">
            EXPERIENCIAS DE CLIENTES VIP
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white flex flex-wrap justify-center gap-x-3 gap-y-2">
            Lo que dicen <Typewriter words={['Nuestros Clientes', 'Coleccionistas', 'Expertos']} delayBetweenWords={2000} className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#B8860B] to-amber-400 block" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-black/80 border border-white/10 relative hover:border-[#B8860B]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-[#B8860B]/30 mb-4" />
                <div className="flex gap-1 mb-4 text-[#B8860B]">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B8860B]" />
                  ))}
                </div>
                <p className="text-sm text-gray-300 italic leading-relaxed mb-6">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-base font-bold text-white">{item.name}</h4>
                <p className="text-xs text-[#B8860B]">{item.title}</p>
                <span className="text-[10px] text-gray-500 block mt-1">{item.car}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

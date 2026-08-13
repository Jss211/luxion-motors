import React from 'react';
import { Typewriter } from './ui/typewriter';
import { ImageExpansionSlider } from './ui/ImageExpansionSlider';

export function Gallery({ onSelectCar }) {
  return (
    <section id="galeria" className="py-24 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-[#B8860B] text-xs font-semibold uppercase tracking-[0.3em] block mb-2">
            CATÁLOGO EXCLUSIVO
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white flex flex-wrap justify-center gap-x-3 gap-y-2">
            Descubre nuestros <Typewriter words={['Modelos Destacados', 'Obras de Arte', 'Hiperdeportivos']} delayBetweenWords={2500} className="text-[#B8860B]" />
          </h2>
        </div>

        <ImageExpansionSlider onSelectCar={onSelectCar} />

      </div>
    </section>
  );
}

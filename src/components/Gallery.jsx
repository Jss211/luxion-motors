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
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            Descubre nuestros <Typewriter words={['Superdeportivos', 'SUVs de Lujo', 'Modelos Clásicos', 'Hypercars']} delayBetweenWords={2000} className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#B8860B] to-amber-400" />
          </h2>
        </div>

        <ImageExpansionSlider onSelectCar={onSelectCar} />

      </div>
    </section>
  );
}

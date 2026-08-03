import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Typewriter } from './ui/typewriter';
import { ChevronRight } from 'lucide-react';

export function HeroVideo({ onOpenContact, onExploreCatalog }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRefs = useRef([]);

  const slides = useMemo(() => [
    {
      id: 0,
      videoSrc: '/hero-video.mp4',
      category: 'CARROCERÍA DE ÉLITE',
      title: 'LUXION HYPERSPORT',
      typewriterText: [
        'Carrocerías Bespoke de Fibra de Carbono',
        'Transformamos Sueños en Obras Maestras',
        'Ingeniería Aerodinámica de Alta Gama',
        'El Arte de la Perfección Automotriz'
      ],
      description: 'Diseño exclusivo, modelado en túnel de viento y acabados artesanales sin concesiones.',
      ctaText: 'DESCUBRIR CARROCERÍA',
      action: onExploreCatalog
    },
    {
      id: 1,
      videoSrc: '/hypertorque.mp4',
      category: 'HIGH PERFORMANCE & TORQUE',
      title: 'HYPERTORQUE ENGINE',
      typewriterText: [
        'Potencia y Fuerza Sin Límites',
        'Restauración & Modificación de Superdeportivos',
        'Blindaje Ligero de Alta Resistencia',
        'Ajuste Mecánico de Nivel Competición'
      ],
      description: 'Optimización extrema de carrocería y tren motriz para una dinámica de conducción pura.',
      ctaText: 'EXPLORAR HYPERTORQUE',
      action: onExploreCatalog
    },
    {
      id: 2,
      videoSrc: '/Grabación de pantalla 2026-07-24 013512.mp4',
      category: 'PERSONALIZACIÓN VIP',
      title: 'BESPOKE COACHBUILDING',
      typewriterText: [
        'Pintura Tricapa Champagne & Obsidian',
        'Kits Aerodinámicos a Medida',
        'Luxion Motors: La Cumbre de la Automoción',
        'Exclusividad Absoluta para Coleccionistas'
      ],
      description: 'Personaliza cada milímetro de tu superdeportivo con nuestros maestros artesanos.',
      ctaText: 'SOLICITAR CITA VIP',
      action: onOpenContact
    }
  ], [onExploreCatalog, onOpenContact]);

  // Handle slide changes
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0);
    slides.forEach((_, idx) => {
      const v = videoRefs.current[idx];
      if (v) {
        if (idx === index) {
          v.currentTime = 0;
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      }
    });
  };

  // Video auto slide transition when current video ends
  const handleVideoEnded = () => {
    const nextSlide = (currentSlide + 1) % slides.length;
    goToSlide(nextSlide);
  };

  // Track progress of the currently playing video
  const handleTimeUpdate = (e) => {
    const video = e.target;
    if (video.duration) {
      const currentProgress = (video.currentTime / video.duration) * 100;
      setProgress(currentProgress);
    }
  };

  return (
    <section id="inicio" className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background Videos */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={slide.videoSrc}
            autoPlay={index === 0}
            muted={true}
            playsInline
            onEnded={handleVideoEnded}
            onTimeUpdate={index === currentSlide ? handleTimeUpdate : undefined}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Dark overlay for perfect text contrast (Ferrari aesthetic) */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/35 to-black/60 pointer-events-none" />

      {/* Hero Content Overlay */}
      <div className="relative z-30 flex flex-col justify-end h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        
        {/* Category tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs sm:text-sm tracking-[0.35em] text-[#B8860B] font-semibold uppercase">
            {slides[currentSlide].category}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase mb-4 drop-shadow-xl">
          {slides[currentSlide].title}
        </h1>

        {/* Typewriter Component displaying dynamic random text about bodywork */}
        <div className="h-16 sm:h-20 flex items-center mb-4">
          <div className="text-xl sm:text-3xl font-medium text-amber-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] max-w-3xl">
            <Typewriter
              key={`typewriter-${currentSlide}`}
              words={slides[currentSlide].typewriterText}
              speed={70}
              delayBetweenWords={2000}
              cursor={true}
              cursorChar="|"
              className="font-light tracking-wide text-white drop-shadow-lg"
            />
          </div>
        </div>

        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mb-8 font-normal leading-relaxed drop-shadow-md">
          {slides[currentSlide].description}
        </p>

        {/* Action Button - Ferrari Style CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={slides[currentSlide].action}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B8860B] via-amber-300 to-[#B8860B] text-black font-bold uppercase text-xs sm:text-sm tracking-[0.2em] shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.8)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>{slides[currentSlide].ctaText}</span>
            <div className="w-6 h-6 rounded-full bg-black text-[#B8860B] flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Bottom Bar: Slide Indicators & Control Buttons (Ferrari Style) */}
        <div className="absolute bottom-6 left-4 right-4 sm:left-8 sm:right-8 flex items-center justify-between z-40">
          
          {/* Spacer for flex balance */}
          <div className="w-24 hidden sm:block"></div>

          {/* Slide Dots / Indicators with Progress Bar (Centered) */}
          <div className="flex items-center justify-center gap-4 flex-1">
            {slides.map((s, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={s.id}
                  onClick={() => goToSlide(idx)}
                  className="group flex items-center gap-2 focus:outline-none"
                >
                  <div
                    className={`relative overflow-hidden transition-all duration-300 rounded-full ${
                      isActive
                        ? 'w-10 h-2.5 bg-white/20'
                        : 'w-2.5 h-2.5 bg-white/40 group-hover:bg-white/80'
                    }`}
                  >
                    {isActive && (
                      <div 
                        className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-amber-400 to-[#B8860B] shadow-[0_0_8px_#B8860B]"
                        style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
                      />
                    )}
                  </div>
                  <span className={`text-[10px] tracking-widest font-mono hidden sm:inline ${
                    isActive ? 'text-[#B8860B] font-bold' : 'text-gray-400 opacity-60'
                  }`}>
                    0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Empty spacer to keep dots centered */}
          <div className="w-24 hidden sm:block"></div>

        </div>

      </div>
    </section>
  );
}

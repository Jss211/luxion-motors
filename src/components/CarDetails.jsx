import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, PhoneCall, Mail } from 'lucide-react';
import { useCars } from '../hooks/useCars';
import { GradientButton } from './ui/gradient-button';
import { ShineBorder } from './ui/shine-border';
import { WordmarkFooter } from './ui/wordmark-footer';

export function CarDetails({ car, onBack, onOpenContact, onSelectCar }) {
  const { cars } = useCars();

  // scroll to top on mount/change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [car]);

  if (!car) return null;

  const similarCars = cars.filter(c => (c.category || '').toLowerCase().trim() === (car.category || '').toLowerCase().trim() && c.id !== car.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver
        </button>
      </div>

      {/* Hero Image Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <ShineBorder 
          className="relative w-full h-[50vh] min-h-[400px] rounded-2xl overflow-hidden !p-0"
          color={["rgba(184,134,11,0.0)", "rgba(184,134,11,0.35)", "rgba(184,134,11,0.0)"]} // Very subtle, semi-transparent gold
          borderRadius={16} // rounded-2xl is 16px
          borderWidth={1}
          duration={12} // Slow animation
        >
          <img 
            src={car.image} 
            alt={car.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8 z-10">
            {car.badge && (
              <span className="inline-block px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#B8860B]/40 text-[#B8860B] text-xs font-bold uppercase tracking-wider mb-2">
                {car.badge}
              </span>
            )}
            
            <WordmarkFooter brandName={car.name} />

            <p className="text-xl text-gray-300 font-light mt-1">
              {car.year || '2026'}
            </p>
          </div>
        </ShineBorder>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Descripción */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4">
                Descripción
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                {car.description || `${car.material}. Elegancia y rendimiento excepcional se fusionan en este modelo. Cada vehículo es un testamento de precisión, combinando tecnología de vanguardia con el lujo más exquisito, desafiando los límites del rendimiento automotriz.`}
              </p>
            </div>

            {/* Especificaciones Técnicas (Screenshot 1) */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6">
                Especificaciones Técnicas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-zinc-950 p-4 rounded-xl border border-white/5">
                  <span className="text-gray-500 text-xs block mb-1">Motor</span>
                  <span className="text-white font-bold">{car.motor || 'V12 5.2L Twin-Turbo'}</span>
                </div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-white/5">
                  <span className="text-gray-500 text-xs block mb-1">Potencia</span>
                  <span className="text-white font-bold">{car.power}</span>
                </div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-white/5">
                  <span className="text-gray-500 text-xs block mb-1">Velocidad Máxima</span>
                  <span className="text-white font-bold">{car.top_speed || '340 km/h'}</span>
                </div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-white/5">
                  <span className="text-gray-500 text-xs block mb-1">0-100 km/h</span>
                  <span className="text-white font-bold">{car.speed ? car.speed.replace('0-100 en ', '').replace('0-100 km/h en ', '') : '-'}</span>
                </div>
                <div className="md:col-span-2 bg-zinc-950 p-4 rounded-xl border border-white/5">
                  <span className="text-gray-500 text-xs block mb-1">Transmisión</span>
                  <span className="text-white font-bold">{car.transmission || '8-Speed Automatic Dual-Clutch'}</span>
                </div>
              </div>
            </div>

            {/* Características Destacadas (Screenshot 2) */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6">
                Características Destacadas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {(car.features || [
                  "Cuero Premium de Alta Gama",
                  "Sistema de Sonido Bespoke 3D",
                  "Techo Panorámico Inteligente",
                  "Aerodinámica Activa Avanzada",
                  "Llantas Forjadas Ultraligeras",
                  "Suspensión Adaptativa Pro"
                ]).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#B8860B] shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Floating Price & CTA & Datos Rápidos */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              
              {/* Card 1: Price and Contact */}
              <ShineBorder 
                className="bg-zinc-950 rounded-3xl p-8 shadow-[0_10px_40px_rgba(184,134,11,0.15)] flex flex-col w-full"
                color={["#B8860B", "#F5D061", "#B8860B"]}
                borderRadius={24}
                borderWidth={2}
                duration={6}
              >
                <div className="z-10 relative">
                  <span className="text-gray-400 text-sm uppercase tracking-widest block mb-2">Precio Estimado</span>
                  <div className="text-4xl font-black text-white mb-8">
                    {typeof car.price === 'number' 
                      ? new Intl.NumberFormat("es-PE", { style: "currency", currency: "PEN", maximumFractionDigits: 0 }).format(car.price)
                      : car.price}
                  </div>

                  <div className="space-y-4 mb-8">
                    <GradientButton 
                      variant="variant"
                      onClick={() => onOpenContact(car.name)}
                      className="w-full uppercase tracking-widest font-bold h-auto py-4 rounded-xl"
                    >
                      Solicitar Información
                    </GradientButton>
                  </div>

                  <div className="border-t border-white/10 pt-6 space-y-4 text-sm">
                    <div className="flex items-center gap-4 text-gray-400">
                      <PhoneCall className="w-5 h-5 text-[#B8860B]" />
                      <div>
                        <span className="block text-xs uppercase opacity-70">Llámanos</span>
                        <span className="text-white font-medium">985182856</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400">
                      <Mail className="w-5 h-5 text-[#B8860B]" />
                      <div>
                        <span className="block text-xs uppercase opacity-70">Email</span>
                        <span className="text-white font-medium">jordapmrojasbazan@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ShineBorder>

              {/* Card 2: Datos Rápidos */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-6">Datos Rápidos</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-gray-400">Marca</span>
                    <span className="font-semibold text-white">Luxion Motors</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-gray-400">Modelo</span>
                    <span className="font-semibold text-white">{car.name}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-gray-400">Año</span>
                    <span className="font-semibold text-white">{car.year || '2026'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-400">Categoría</span>
                    <span className="font-semibold text-[#B8860B] uppercase">{car.category}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Vehículos Similares (Screenshot 3) */}
      {similarCars.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10 pt-16">
          <h2 className="text-3xl font-bold text-white mb-8">Vehículos Similares</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarCars.map((simCar) => (
              <div 
                key={simCar.id} 
                onClick={() => {
                  onSelectCar(simCar);
                }}
                className="group cursor-pointer bg-black rounded-2xl overflow-hidden transition-all shadow-xl relative"
              >
                <div className="h-48 relative rounded-t-2xl overflow-hidden transform-gpu">
                  <img src={simCar.image} alt={simCar.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <span className="text-xs text-gray-500 uppercase block mb-1">Luxion Motors</span>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#B8860B] transition-colors line-clamp-1">{simCar.name}</h3>
                  <div className="text-xl font-black text-[#B8860B]">
                    {typeof simCar.price === 'number' 
                      ? new Intl.NumberFormat("es-PE", { style: "currency", currency: "PEN", maximumFractionDigits: 0 }).format(simCar.price)
                      : simCar.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

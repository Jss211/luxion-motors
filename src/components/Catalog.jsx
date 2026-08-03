import React, { useState } from 'react';
import { Eye, Shield, Zap, Sparkles, Filter } from 'lucide-react';
import { useCars } from '../hooks/useCars';
import { Typewriter } from './ui/typewriter';

export function Catalog({ onSelectCar }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const { cars, loading, error } = useCars();

  const categories = [
    { id: 'all', label: 'Todos los Modelos' },
    { id: 'supercars', label: 'Supercars' },
    { id: 'hiperdeportivos', label: 'Hiperdeportivos' },
    { id: 'Grand Tourer', label: 'Grand Tourer' },
    { id: 'SUV de lujo', label: 'SUV de lujo' },
  ];

  const filteredCars = activeCategory === 'all'
    ? cars
    : cars.filter((c) => (c.category || '').toLowerCase().trim() === (activeCategory || '').toLowerCase().trim());

  if (error) {
    return (
      <div className="py-24 bg-[#090a0f] text-center text-red-500">
        Error cargando el catálogo. Por favor verifique los permisos de Firebase.
      </div>
    );
  }

  return (
    <section id="catalogo" className="py-24 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            Catálogo <Typewriter words={['Exclusivo', 'Premium', 'de Lujo', 'V.I.P']} delayBetweenWords={2000} className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#B8860B] to-amber-400" />
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Cada vehículo es moldeado con especificaciones personalizadas, aleaciones de carbono aeroespacial y acabados de pintura artesanal.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-amber-400 to-[#B8860B] text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#B8860B]"></div>
            <span className="ml-4 text-[#B8860B] font-bold uppercase tracking-widest animate-pulse">Cargando catálogo...</span>
          </div>
        ) : (
          /* Cars Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <div
                key={car.id}
              className="group relative rounded-2xl overflow-hidden bg-[#0c0d12] border border-transparent hover:border-[#B8860B]/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl flex flex-col"
            >
              {/* Image Container */}
              <div 
                className="relative h-64 overflow-hidden cursor-pointer bg-black"
                onClick={() => onSelectCar(car)}
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                
                {/* Badge */}
                {car.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#B8860B]/40 text-[#B8860B] text-[10px] font-bold uppercase tracking-wider">
                      {car.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between relative -mt-[1px] bg-[#0c0d12] z-10">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#B8860B] transition-colors mb-2">
                    {car.name}
                  </h3>
                  {car.material && (
                    <p className="text-xs text-gray-400 mb-4 flex items-center gap-2">
                      <Shield className="w-3.5 h-3.5 text-[#B8860B]" />
                      {car.material}
                    </p>
                  )}

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-3 py-3 px-4 rounded-xl bg-white/5 border border-white/5 mb-6">
                    <div className="flex flex-col justify-end">
                      <span className="text-[10px] uppercase text-gray-500 block mb-1">Potencia</span>
                      <span className="text-sm font-bold text-white leading-none">{car.power}</span>
                    </div>
                    <div className="flex flex-col justify-end">
                      <span className="text-[10px] uppercase text-gray-500 block mb-1">Aceleración</span>
                      <span className="text-sm font-bold text-[#B8860B] leading-none">{car.speed || '-'}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase block">Precio Referencial</span>
                    <span className="text-lg font-extrabold text-[#B8860B]">
                      {typeof car.price === 'number' 
                        ? new Intl.NumberFormat("es-PE", { style: "currency", currency: "PEN", maximumFractionDigits: 0 }).format(car.price)
                        : car.price}
                    </span>
                  </div>
                </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

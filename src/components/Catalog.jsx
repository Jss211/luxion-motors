import React, { useState } from 'react';
import { Eye, Shield, Zap, Sparkles, Filter } from 'lucide-react';

export function Catalog({ onSelectCar }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todos los Modelos' },
    { id: 'hypercars', label: 'Hypercars' },
    { id: 'custom', label: 'Carrocería Bespoke' },
    { id: 'suv', label: 'SUVs de Lujo' },
  ];

  const cars = [
    {
      id: 1,
      name: 'Luxion Spectre Carbon GT',
      category: 'hypercars',
      price: '$1,850,000 USD',
      power: '1020 HP',
      speed: '0-100 en 2.4s',
      material: 'Carrocería de Carbono Monocasco',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
      badge: 'Edición Limitada 1/5',
    },
    {
      id: 2,
      name: 'Jaguar Luxion Bespoke Roadster',
      category: 'custom',
      price: '$1,400,000 USD',
      power: '850 HP',
      speed: '0-100 en 2.7s',
      material: 'Carrocería Hecha a Mano',
      image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80',
      badge: 'Carrocería Exclusiva',
    },
    {
      id: 3,
      name: 'Luxion Apex SUV Armored',
      category: 'suv',
      price: '$920,000 USD',
      power: '780 HP',
      speed: '0-100 en 3.5s',
      material: 'Blindaje Nivel BR6 Light',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      badge: 'Blindado V.I.P',
    },
    {
      id: 4,
      name: 'Luxion Carbon Aero RS',
      category: 'hypercars',
      price: '$2,100,000 USD',
      power: '1200 HP',
      speed: '0-100 en 2.1s',
      material: 'Aerodinámica Activa 2.0',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      badge: 'Hypercar de Pista',
    },
    {
      id: 5,
      name: 'Jaguar Heritage Restomod',
      category: 'custom',
      price: '$880,000 USD',
      power: '650 HP',
      speed: '0-100 en 3.2s',
      material: 'Restauración Tricapa Champán',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80',
      badge: 'Restomod de Lujo',
    },
    {
      id: 6,
      name: 'Luxion Urus Carbon Widebody',
      category: 'suv',
      price: '$750,000 USD',
      power: '820 HP',
      speed: '0-100 en 3.0s',
      material: 'Widebody Carbon Kit',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
      badge: 'Widebody Custom',
    },
  ];

  const filteredCars = activeCategory === 'all'
    ? cars
    : cars.filter((c) => c.category === activeCategory);

  return (
    <section id="catalogo" className="py-24 bg-[#090a0f] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B8860B]/10 border border-[#B8860B]/30 text-[#B8860B] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Colección & Carrocerías Exclusivas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            Catálogo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#B8860B] to-amber-400">Superdeportivos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Cada vehículo es moldeado con especificaciones personalizadas, aleaciones de carbono aeroespacial y acabados de pintura artesanal.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
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

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-white/5 to-black/80 border border-white/10 hover:border-[#B8860B]/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#B8860B]/40 text-[#B8860B] text-[10px] font-bold uppercase tracking-wider">
                    {car.badge}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#B8860B] transition-colors mb-2">
                    {car.name}
                  </h3>
                  <p className="text-xs text-gray-400 mb-4 flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5 text-[#B8860B]" />
                    {car.material}
                  </p>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-3 py-3 px-4 rounded-xl bg-white/5 border border-white/5 mb-6">
                    <div>
                      <span className="text-[10px] uppercase text-gray-500 block">Potencia</span>
                      <span className="text-sm font-bold text-white">{car.power}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-gray-500 block">Aceleración</span>
                      <span className="text-sm font-bold text-amber-300">{car.speed}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase block">Precio Referencial</span>
                    <span className="text-lg font-extrabold text-[#B8860B]">{car.price}</span>
                  </div>
                  <button
                    onClick={() => onSelectCar(car)}
                    className="p-3 rounded-full bg-[#B8860B]/20 border border-[#B8860B]/50 text-[#B8860B] hover:bg-[#B8860B] hover:text-black transition-all"
                    title="Ver detalles / Cotizar"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

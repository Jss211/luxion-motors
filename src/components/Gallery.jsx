import React, { useState } from 'react';
import { Camera, Maximize2 } from 'lucide-react';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      title: 'Monocasco de Carbono Expuesto',
      subtitle: 'Taller de Ensamblaje Luxion',
      image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Acabado Tricapa Champán Gold',
      subtitle: 'Cabina de Pintura Termocontrolada',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Difusor Trasero Aerodinámico',
      subtitle: 'Túnel de Viento Aerotest',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Interiores en Cuero Napa & Alcantara',
      subtitle: 'Costuras Doradas a Mano',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Pruebas de Alta Velocidad',
      subtitle: 'Circuito Privado Luxion',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Kit Widebody Carbon Monocoque',
      subtitle: 'Edición Custom VIP',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  return (
    <section id="galeria" className="py-24 bg-[#090a0f] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-[#B8860B] text-xs font-semibold uppercase tracking-[0.3em] block mb-2">
            GALERÍA DE PROYECTOS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            Excelencia en <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#B8860B] to-amber-400">Imágenes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#B8860B]/60 transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10">
                <div>
                  <span className="text-[10px] text-[#B8860B] uppercase tracking-widest font-bold block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="p-3 rounded-full bg-black/60 border border-[#B8860B]/40 text-[#B8860B] group-hover:scale-110 transition-transform">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Image Modal Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl w-full bg-black border border-[#B8860B]/30 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[75vh] object-cover"
            />
            <div className="p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
              <span className="text-xs text-[#B8860B] font-bold uppercase tracking-widest block mb-1">
                {selectedImage.subtitle}
              </span>
              <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

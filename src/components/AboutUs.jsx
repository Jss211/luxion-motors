import React, { useState, useEffect } from 'react';
import { Award, ShieldCheck, Zap, Globe, Trophy, CheckCircle, Flame } from 'lucide-react';
import { Typewriter } from './ui/typewriter';

export function AboutUs() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const carouselImages = [
    'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const team = [
    {
      name: 'Alessandro Di Rossi',
      role: 'Fundador & Master Coachbuilder',
      bio: 'Tercera generación de carroceros italianos. Fusiona el diseño a mano con la precisión aeroespacial.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Elena Kovač',
      role: 'Directora de Ingeniería Aerodinámica',
      bio: 'Ex-ingeniera de F1. Especialista en reducción de drag y dinámica de fluidos para hiperdeportivos.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Marcus Thorne',
      role: 'Jefe de Materiales y Carbono',
      bio: 'Pionero en el curado de fibra de carbono en autoclave para carrocerías ultraligeras.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const certifications = [
    { icon: ShieldCheck, title: 'Certificación Balística BR6', desc: 'Blindaje ultraligero nivel militar' },
    { icon: Award, title: 'ISO 9001:2015', desc: 'Estándar de calidad en manufactura' },
    { icon: Trophy, title: 'Pebble Beach Concours', desc: 'Galardonados en diseño bespoke' },
    { icon: Globe, title: 'Homologación Global', desc: 'Certificados para rodar a nivel mundial' }
  ];

  return (
    <section id="nosotros" className="py-24 bg-black text-white relative overflow-hidden">
      
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#B8860B]/5 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- PART 1: The Story --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          
          {/* Left Column - Story Text */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-6">
            <span className="block mb-2">El Arte de la</span>
            <span className="block"><Typewriter words={['Ingeniería', 'Velocidad', 'Perfección']} delayBetweenWords={2500} className="text-[#B8860B] block" /></span>
          </h2>
            
            <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Fundada en las raíces de la carrocería tradicional europea, <strong className="text-white">Luxion Motors</strong> nació con una sola obsesión: llevar los superdeportivos más allá de los límites establecidos por sus fabricantes originales.
              </p>
              <p>
                No somos simples modificadores. Somos escultores de metal, alquimistas de la fibra de carbono y puristas de la velocidad. Cada proyecto que ingresa a nuestro laboratorio secreto es desmantelado hasta su núcleo y reconstruido utilizando materiales de grado aeroespacial.
              </p>
              <p>
                Nuestra filosofía es simple: <span className="italic text-[#B8860B]">"Si no mejora el rendimiento, la estética o la seguridad, no pertenece al vehículo."</span> Desde pinturas multicapa formuladas con polvo de diamante, hasta blindajes imperceptibles que salvan vidas a más de 300 km/h.
              </p>
            </div>
          </div>

          {/* Right Column - Hero Carousel Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(184,134,11,0.15)] group transform-gpu h-[600px] w-full">
              {carouselImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Luxion Motors Auto ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
            </div>
          </div>
        </div>

        {/* --- PART 2: Certifications --- */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold uppercase tracking-widest text-white mb-2">Respaldo Internacional</h3>
            <div className="w-12 h-1 bg-[#B8860B] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-zinc-950 border border-white/5 p-6 rounded-2xl hover:border-[#B8860B]/30 transition-colors flex flex-col items-center text-center group">
                <div className="w-14 h-14 bg-black border border-[#B8860B]/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <cert.icon className="w-6 h-6 text-[#B8860B]" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{cert.title}</h4>
                <p className="text-xs text-gray-400">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- PART 3: The Team --- */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <span className="text-[#B8860B] text-xs font-semibold uppercase tracking-[0.3em] block mb-2">
              EL TALENTO OCULTO
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mb-4">
              Nuestros Maestros Artesanos
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Un equipo selecto de ingenieros, diseñadores y técnicos que tratan cada vehículo como un lienzo en blanco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="group relative rounded-2xl bg-zinc-950 border border-white/10 overflow-hidden hover:border-[#B8860B]/40 transition-all duration-500">
                <div className="h-72 overflow-hidden relative transform-gpu">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover scale-[1.01] group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                </div>
                
                <div className="p-6 relative z-10 -mt-16">
                  <div className="bg-black/80 backdrop-blur-sm p-4 rounded-xl border border-white/5 shadow-xl">
                    <h4 className="text-lg font-bold text-white uppercase tracking-wide mb-1">{member.name}</h4>
                    <p className="text-xs text-[#B8860B] font-semibold tracking-wider mb-4">{member.role}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      "{member.bio}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

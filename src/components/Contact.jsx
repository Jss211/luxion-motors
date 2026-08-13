import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Typewriter } from './ui/typewriter';
import { PhoneInput } from './ui/phone-input';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    asunto: 'Información General',
    mensaje: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Convert form to FormData
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            nombre: '',
            apellido: '',
            email: '',
            telefono: '',
            asunto: 'Información General',
            mensaje: ''
          });
        }, 3000);
      } else {
        console.error("Error from Web3Forms:", data);
        alert("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Hubo un error de conexión. Por favor intenta de nuevo.");
    }
  };

  return (
    <section id="contacto-section" className="pt-16 pb-24 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white flex flex-wrap justify-center gap-x-3 gap-y-2">
            Contacto <Typewriter words={['VIP', 'Exclusivo', 'Directo']} delayBetweenWords={2500} className="text-[#B8860B] block" />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column - Contact Form */}
          <div className="bg-[#111] p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8860B]/5 rounded-full blur-[80px] pointer-events-none" />

            <h3 className="text-2xl font-bold uppercase tracking-wide text-white mb-8">Envíanos un Mensaje</h3>

            {submitted ? (
              <div className="py-16 text-center flex flex-col items-center animate-fadeIn">
                <h3 className="text-2xl font-extrabold uppercase tracking-wide text-[#B8860B] mb-4">
                  Mensaje Enviado
                </h3>
                <p className="text-gray-400">
                  Gracias por escribirnos. Nuestro equipo VIP te contactará a la brevedad.
                </p>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className="space-y-6 relative z-10"
              >
                <input type="hidden" name="access_key" value="75a795ad-7389-45c6-917a-1a5d626d63cd" />
                <input type="hidden" name="subject" value="Nuevo Mensaje de Contacto - Luxion Motors" />
                <input type="hidden" name="from_name" value="Luxion Motors Web" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Nombre</label>
                    <input type="text" name="Nombre" required value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} placeholder="Tu nombre" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] outline-none transition-all placeholder-gray-700" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Apellido</label>
                    <input type="text" name="Apellido" required value={formData.apellido} onChange={e => setFormData({...formData, apellido: e.target.value})} placeholder="Tu apellido" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] outline-none transition-all placeholder-gray-700" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</label>
                  <input type="email" name="Email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="tu@email.com" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] outline-none transition-all placeholder-gray-700" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Teléfono</label>
                  <PhoneInput 
                    name="Teléfono"
                    required
                    value={formData.telefono}
                    onChange={e => setFormData({...formData, telefono: e.target.value})}
                    defaultCountry="PE"
                    showValidation={true}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Asunto</label>
                  <select name="Asunto" value={formData.asunto} onChange={e => setFormData({...formData, asunto: e.target.value})} className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-gray-300 focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] outline-none transition-all appearance-none cursor-pointer">
                    <option>Información General</option>
                    <option>Cotización de Proyecto Bespoke</option>
                    <option>Servicio de Mantenimiento VIP</option>
                    <option>Agendar Visita al Taller</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Mensaje</label>
                  <textarea name="Mensaje" required rows="4" value={formData.mensaje} onChange={e => setFormData({...formData, mensaje: e.target.value})} placeholder="Cuéntanos cómo podemos ayudarte..." className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] outline-none transition-all resize-none placeholder-gray-700"></textarea>
                </div>

                <button type="submit" className="w-full bg-white text-black hover:bg-[#B8860B] hover:text-white font-bold uppercase tracking-widest text-sm py-4 rounded-lg transition-colors duration-300">
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>

          {/* Right Column - Info & Map */}
          <div className="flex flex-col space-y-8">
            
            {/* Contact Info Card */}
            <div className="bg-[#111] p-8 rounded-2xl border border-white/10 shadow-lg">
              <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0 border border-white/5">
                    <Phone className="w-4 h-4 text-[#B8860B]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Teléfono</p>
                    <p className="text-white text-sm font-medium">+51 986 182 856</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0 border border-white/5">
                    <Mail className="w-4 h-4 text-[#B8860B]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Email</p>
                    <p className="text-white text-sm font-medium">jordanpmrojasbazan@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0 border border-white/5">
                    <MapPin className="w-4 h-4 text-[#B8860B]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Dirección</p>
                    <p className="text-white text-sm font-medium">Av. José Pardo 1200</p>
                    <p className="text-gray-400 text-xs mt-0.5">Miraflores, Lima - Perú</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0 border border-white/5">
                    <Clock className="w-4 h-4 text-[#B8860B]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Horario de Atención</p>
                    <p className="text-white text-sm font-medium">Lun - Vie: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-400 text-xs mt-0.5">Sáb - Dom: Previa cita VIP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Card */}
            <div className="bg-[#111] p-2 rounded-2xl border border-white/10 shadow-lg h-64 overflow-hidden relative">
              <iframe 
                src="https://maps.google.com/maps?q=Miraflores,Lima&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                className="w-full h-full rounded-xl"
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 pointer-events-none">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#B8860B]" /> Luxion Motors Lab
                </p>
              </div>
            </div>

            {/* Immediate Help Banner */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-8 rounded-2xl border border-[#B8860B]/30 shadow-[0_0_30px_rgba(184,134,11,0.1)]">
              <h3 className="text-xl font-extrabold text-white mb-2">¿Atención personalizada?</h3>
              <p className="text-sm text-gray-400 mb-6">Contáctanos por WhatsApp para una asesoría directa sin interrupciones telefónicas.</p>
              
              <a href="https://wa.me/51986182856" target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#1ebd5a] font-bold uppercase tracking-wider text-xs py-4 rounded-lg transition-colors shadow-lg shadow-[#25D366]/20">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                Enviar Mensaje por WhatsApp
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

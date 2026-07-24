import React, { useState } from 'react';
import { X, Send, Phone, Mail, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export function ContactModal({ isOpen, onClose, selectedItem }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: selectedItem || 'Carrocería Bespoke',
    mensaje: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-xl bg-gradient-to-b from-[#10121a] to-[#07080c] border border-[#B8860B]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(212,175,55,0.25)] text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/20 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <CheckCircle2 className="w-16 h-16 text-[#B8860B] mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold uppercase tracking-wide text-white mb-2">
              ¡Solicitud Recibida!
            </h3>
            <p className="text-sm text-gray-300 max-w-md">
              Un asesor personal de <strong className="text-[#B8860B]">Luxion Motors</strong> se pondrá en contacto contigo a la brevedad.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <img src="/jaguar.png" alt="Jaguar" className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.7)]" />
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-white">
                  Reserva & Cotización VIP
                </h3>
                <p className="text-xs text-[#B8860B]">Atención exclusiva para clientes exigentes</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-400 mb-1">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  placeholder="Ej. Roberto De La Vega"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#B8860B] text-sm transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-400 mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="vip@ejemplo.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#B8860B] text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-400 mb-1">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    placeholder="+51 987 654 321"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#B8860B] text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-gray-400 mb-1">
                  Interés de Servicio / Vehículo
                </label>
                <input
                  type="text"
                  value={formData.servicio}
                  onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                  placeholder="Ej. Carrocería de Carbono para Ferrari"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#B8860B] text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-gray-400 mb-1">
                  Mensaje o Especificaciones Adicionales
                </label>
                <textarea
                  rows="3"
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  placeholder="Describe las modificaciones o detalles que deseas cotizar..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#B8860B] text-sm transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-[#B8860B] to-amber-500 text-black font-bold uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] transition-all flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Solicitud VIP</span>
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
}

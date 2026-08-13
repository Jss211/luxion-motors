import React, { useState, useEffect } from 'react';
import { X, Crosshair, ChevronDown } from 'lucide-react';

const COUNTRY_CODES = [
  "+1", "+20", "+27", "+31", "+32", "+33", "+34", "+39", "+41", "+44", 
  "+45", "+46", "+47", "+48", "+49", "+51", "+52", "+53", "+54", "+55", 
  "+56", "+57", "+58", "+60", "+61", "+62", "+63", "+64", "+65", "+66", 
  "+81", "+82", "+84", "+86", "+90", "+91", "+92", "+93", "+94", "+95", 
  "+98", "+212", "+213", "+216", "+218", "+220", "+254", "+255", "+351", 
  "+353", "+358", "+375", "+380", "+381", "+420", "+421", "+500", "+501", 
  "+502", "+503", "+504", "+505", "+506", "+507", "+591", "+593", "+595", 
  "+597", "+598", "+852", "+886", "+966", "+971", "+972"
].sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));

export function ContactModal({ isOpen, onClose, selectedItem }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    tratamiento: 'Sr.',
    nombre: '',
    apellidos: '',
    email: '',
    codigoPais: '+51',
    telefono: '',
    idioma: 'Español',
    concesionario: 'Luxion Motors Lima (PE)',
    mensaje: selectedItem ? `Me interesa: ${selectedItem}` : '',
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    // No usamos e.preventDefault() para que el form se envíe al iframe
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({
        ...formData,
        nombre: '',
        apellidos: '',
        email: '',
        telefono: '',
        mensaje: selectedItem ? `Me interesa: ${selectedItem}` : ''
      });
    }, 3000);
  };

  const handleGetLocation = () => {
    if ("geolocation" in navigator) {
      setFormData({ ...formData, concesionario: 'Buscando tu ubicación...' });
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setTimeout(() => {
            setFormData({ ...formData, concesionario: 'Luxion Motors VIP - Localizado' });
          }, 800);
        },
        (error) => {
          setFormData({ ...formData, concesionario: 'No se pudo obtener la ubicación' });
        }
      );
    } else {
      alert("Tu navegador no soporta geolocalización.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0 bg-black/90">
      <div className="relative w-full max-w-4xl max-h-[100vh] overflow-y-auto bg-white text-black p-6 sm:p-8 shadow-2xl">
        
        {/* Close Header */}
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-gray-500 transition-colors"
          >
            Cerrar <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hidden Iframe to prevent page redirection */}
        <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>

        {submitted && (
          <div className="py-16 text-center flex flex-col items-center">
            <h3 className="text-3xl font-extrabold uppercase tracking-wide text-black mb-4">
              Solicitud Recibida
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Gracias. Un representante de Luxion Motors se pondrá en contacto contigo en breve para brindarte una atención exclusiva.
            </p>
          </div>
        )}

        <div className={`max-w-2xl mx-auto ${submitted ? 'hidden' : ''}`}>
          {/* Title */}
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-extrabold uppercase tracking-widest text-black">
              Contacto
            </h3>
          </div>

            <form 
              action="https://api.web3forms.com/submit" 
              method="POST"
              target="hidden_iframe"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "75a795ad-7389-45c6-917a-1a5d626d63cd"} />
              <input type="hidden" name="subject" value={`Cotización VIP - ${selectedItem || 'Luxion Motors'}`} />
              <input type="hidden" name="from_name" value="Luxion Motors VIP" />
              
              {/* Tratamiento (Radio) */}
              <div className="flex items-center gap-6 mb-1">
                <label className="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="radio"
                    name="Tratamiento"
                    value="Sr."
                    checked={formData.tratamiento === 'Sr.'}
                    onChange={(e) => setFormData({ ...formData, tratamiento: e.target.value })}
                    className="w-4 h-4 text-black focus:ring-black border-gray-400"
                  />
                  Sr.
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="radio"
                    name="Tratamiento"
                    value="Sra."
                    checked={formData.tratamiento === 'Sra.'}
                    onChange={(e) => setFormData({ ...formData, tratamiento: e.target.value })}
                    className="w-4 h-4 text-black focus:ring-black border-gray-400"
                  />
                  Sra.
                </label>
              </div>

              {/* Nombre & Apellidos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative border border-gray-300 group focus-within:border-black transition-colors">
                  <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-gray-500 font-medium">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="Nombre"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-4 py-2.5 bg-transparent text-sm focus:outline-none"
                  />
                </div>
                <div className="relative border border-gray-300 group focus-within:border-black transition-colors">
                  <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-gray-500 font-medium">
                    Apellidos *
                  </label>
                  <input
                    type="text"
                    name="Apellidos"
                    required
                    value={formData.apellidos}
                    onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
                    className="w-full px-4 py-2.5 bg-transparent text-sm focus:outline-none"
                  />
                </div>
              </div>

              {/* Email & Teléfono */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative border border-gray-300 group focus-within:border-black transition-colors">
                  <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-gray-500 font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-transparent text-sm focus:outline-none"
                  />
                </div>

                <div className="flex gap-2">
                  {/* Code Selector */}
                  <div className="relative border border-gray-300 group focus-within:border-black transition-colors w-28 shrink-0 flex items-center">
                    <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-gray-500 font-medium">
                      +00
                    </label>
                    <select
                      name="Codigo_Pais"
                      value={formData.codigoPais}
                      onChange={(e) => setFormData({ ...formData, codigoPais: e.target.value })}
                      className="w-full pl-3 pr-8 py-2.5 bg-transparent text-sm focus:outline-none appearance-none cursor-pointer"
                    >
                      {COUNTRY_CODES.map((code) => (
                        <option key={code} value={code}>{code}</option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-3 pointer-events-none text-black" />
                  </div>

                  {/* Phone Number */}
                  <div className="relative border border-gray-300 group focus-within:border-black transition-colors flex-1">
                    <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-gray-500 font-medium">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="Telefono"
                      required
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full px-4 py-2.5 bg-transparent text-sm focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Idioma */}
              <div className="relative border border-gray-300 group focus-within:border-black transition-colors flex items-center">
                <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-gray-500 font-medium">
                  Idioma *
                </label>
                <select
                  name="Idioma"
                  value={formData.idioma}
                  onChange={(e) => setFormData({ ...formData, idioma: e.target.value })}
                  className="w-full pl-4 pr-10 py-2.5 bg-transparent text-sm focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="Español">Español</option>
                  <option value="Inglés">Inglés</option>
                  <option value="Italiano">Italiano</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-4 pointer-events-none text-black" />
              </div>

              {/* Concesionario Preferido */}
              <div className="relative border border-gray-300 group focus-within:border-[#B8860B] transition-colors flex items-center">
                <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-gray-500 font-medium">
                  Concesionario preferido *
                </label>
                <input
                  type="text"
                  name="Concesionario"
                  required
                  value={formData.concesionario}
                  onChange={(e) => setFormData({ ...formData, concesionario: e.target.value })}
                  className="w-full pl-4 pr-12 py-2.5 bg-transparent text-sm focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleGetLocation}
                  className="absolute right-3 p-1.5 hover:bg-gray-100 rounded-full transition-colors text-black hover:text-[#B8860B]"
                  title="Usar mi ubicación actual"
                >
                  <Crosshair className="w-4 h-4" />
                </button>
              </div>

              {/* Mensaje Adicional */}
              <div className="relative border border-gray-300 group focus-within:border-black transition-colors">
                <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-gray-500 font-medium">
                  Descripción / Detalles
                </label>
                <textarea
                  name="Mensaje"
                  rows="2"
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="w-full px-4 py-2.5 bg-transparent text-sm focus:outline-none resize-none"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-black text-white font-bold uppercase tracking-widest text-xs hover:bg-[#B8860B] transition-colors flex items-center justify-center"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
      </div>
    </div>
  );
}

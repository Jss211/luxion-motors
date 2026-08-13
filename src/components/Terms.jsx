import React from 'react';
import { ShieldCheck, FileText, AlertCircle } from 'lucide-react';

export function Terms() {
  return (
    <section className="pt-32 pb-24 bg-black text-white relative min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-[#B8860B] text-xs font-semibold uppercase tracking-[0.3em] block mb-2">
            LEGAL
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-6">
            Términos y <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#B8860B] to-amber-400">Condiciones</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Última actualización: 12 de Agosto, 2026
          </p>
        </div>

        <div className="space-y-12 text-gray-300 leading-relaxed text-sm sm:text-base">
          
          <div className="bg-[#0c0d12] border border-white/5 p-8 rounded-2xl shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-6 h-6 text-[#B8860B]" />
              <h2 className="text-2xl font-bold text-white uppercase tracking-wide">1. Aceptación de los Términos</h2>
            </div>
            <p className="mb-4">
              Al acceder y utilizar los servicios de <strong className="text-white">Luxion Motors</strong> (en adelante, "la Empresa"), usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá utilizar nuestros servicios de carrocería, diseño bespoke o rendimiento extremo.
            </p>
            <p>
              Estos términos rigen el uso del sitio web, consultas de catálogo, cotizaciones VIP y todos los proyectos de modificación o restauración de hiperdeportivos contratados.
            </p>
          </div>

          <div className="bg-[#0c0d12] border border-white/5 p-8 rounded-2xl shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-[#B8860B]" />
              <h2 className="text-2xl font-bold text-white uppercase tracking-wide">2. Cotizaciones y Contratos Bespoke</h2>
            </div>
            <p className="mb-4">
              Cada proyecto de modificación en Luxion Motors es único. Las cotizaciones mostradas en el sitio web (marcadas como "Precio Referencial") son puramente indicativas y pueden variar significativamente basándose en las especificaciones exactas del cliente.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li>Se requiere un depósito inicial no reembolsable del 30% antes de comenzar cualquier trabajo de ingeniería o diseño.</li>
              <li>Los tiempos de entrega son estimados y están sujetos a la disponibilidad de materiales aeroespaciales exóticos (fibra de carbono, titanio, aleaciones).</li>
              <li>Cualquier cambio en el diseño original después de la firma del contrato incurrirá en costos adicionales.</li>
            </ul>
          </div>

          <div className="bg-[#0c0d12] border border-white/5 p-8 rounded-2xl shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold text-white uppercase tracking-wide">3. Garantía y Responsabilidad Limitada</h2>
            </div>
            <p className="mb-4">
              Nuestros trabajos están respaldados por una garantía de 2 años en pintura tricapa y fibra de carbono contra defectos de fabricación bajo condiciones normales de uso en calle o circuito controlado.
            </p>
            <p>
              <strong className="text-red-400">Atención:</strong> Modificaciones extremas de rendimiento (Hypertorque Engine) pueden anular la garantía original de fábrica del vehículo. Luxion Motors no se hace responsable por daños al tren motriz resultantes del abuso sostenido en pistas, negligencia o falta de mantenimiento apropiado del vehículo.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

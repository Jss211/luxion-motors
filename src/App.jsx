import React, { useState } from 'react';
import { SplashIntro } from './components/SplashIntro';
import { Navbar } from './components/Navbar';
import { HeroVideo } from './components/HeroVideo';
import { Catalog } from './components/Catalog';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { AboutUs } from './components/AboutUs';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenContactWithItem = (item) => {
    setSelectedItem(typeof item === 'string' ? item : item?.name || 'Consulta de Carrocería');
    setIsContactOpen(true);
  };

  const handleExploreCatalog = () => {
    const el = document.getElementById('catalogo');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#06070a] text-white selection:bg-[#B8860B] selection:text-black">
      
      {/* 1. Simple Jaguar Loading Screen */}
      <SplashIntro />

      {/* 2. Fixed Centered Navbar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* 3. Hero Section with 3 Videos & Typewriter Overlay */}
      <HeroVideo
        onOpenContact={() => setIsContactOpen(true)}
        onExploreCatalog={handleExploreCatalog}
      />

      {/* 4. Main Content Sections */}
      <main>
        {/* Catálogo de Autos y Carrocerías */}
        <Catalog onSelectCar={handleOpenContactWithItem} />

        {/* Servicios de Carrocería */}
        <Services onSelectService={handleOpenContactWithItem} />

        {/* Galería de Trabajos */}
        <Gallery />

        {/* Testimonios */}
        <Testimonials />

        {/* Sobre Luxion Motors */}
        <AboutUs />
      </main>

      {/* 5. Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* 6. Contact & Quote Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => {
          setIsContactOpen(false);
          setSelectedItem(null);
        }}
        selectedItem={selectedItem}
      />

    </div>
  );
}

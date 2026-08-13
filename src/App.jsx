import React, { useState } from 'react';
import { SplashIntro } from './components/SplashIntro';
import { Navbar } from './components/Navbar';
import { HeroVideo } from './components/HeroVideo';
import { Catalog } from './components/Catalog';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { AboutUs } from './components/AboutUs';
import { Contact } from './components/Contact';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { CarDetails } from './components/CarDetails';
import { Terms } from './components/Terms';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCarDetails, setSelectedCarDetails] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [splashKey, setSplashKey] = useState(0);

  const handleOpenContactWithItem = (item) => {
    setSelectedItem(typeof item === 'string' ? item : item?.name || 'Consulta de Carrocería');
    setIsContactOpen(true);
  };

  const handleExploreCatalog = () => {
    setActiveSection('catalogo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCarDetails = (car) => {
    setSelectedCarDetails(car);
    setIsTransitioning(true);
    setSplashKey(prev => prev + 1);
    setActiveSection('car-details');
    window.scrollTo({ top: 0 });
  };

  const handleTransitionFinish = () => {
    setIsTransitioning(false);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'inicio':
        return (
          <>
            <HeroVideo
              onOpenContact={() => setIsContactOpen(true)}
              onExploreCatalog={handleExploreCatalog}
            />
            {/* Inicio shows a summary: Catalog and Testimonials */}
            <Catalog onSelectCar={handleSelectCarDetails} />
            <Testimonials />
          </>
        );
      case 'catalogo':
        return (
          <div className="pt-20">
            <Catalog onSelectCar={handleSelectCarDetails} />
          </div>
        );
      case 'car-details':
        return (
          <CarDetails 
            car={selectedCarDetails} 
            onBack={() => {
              setActiveSection('catalogo');
              window.scrollTo({ top: 0 });
            }} 
            onOpenContact={handleOpenContactWithItem} 
          />
        );
      case 'servicios':
        return (
          <div className="pt-20">
            <Services onSelectService={handleOpenContactWithItem} />
          </div>
        );
      case 'galeria':
        return (
          <div className="pt-20">
            <Gallery onSelectCar={handleSelectCarDetails} />
          </div>
        );
      case 'testimonios':
        return (
          <div className="pt-20">
            <Testimonials />
          </div>
        );
      case 'nosotros':
        return (
          <div className="pt-20">
            <AboutUs />
          </div>
        );
      case 'contacto':
        return (
          <div className="pt-20">
            <Contact />
          </div>
        );
      case 'terminos':
        return (
          <div className="pt-20">
            <Terms />
          </div>
        );
      default:
        return (
          <>
            <HeroVideo
              onOpenContact={() => setIsContactOpen(true)}
              onExploreCatalog={handleExploreCatalog}
            />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#B8860B] selection:text-black">
      
      {/* 1. Simple Jaguar Loading Screen */}
      <SplashIntro 
        key={`splash-${splashKey}`} 
        onFinish={isTransitioning ? handleTransitionFinish : undefined} 
      />

      {/* 2. Fixed Centered Navbar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* 3. Main Content Conditionally Rendered */}
      <main className="min-h-screen">
        {renderContent()}
      </main>

      {/* 4. Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} setActiveSection={setActiveSection} />

      {/* 5. Contact & Quote Modal */}
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

import React, { useState, useRef, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.js";

export function ImageExpansionSlider({ onSelectCar }) {
  const [activeTab, setActiveTab] = useState("");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [slides, setSlides] = useState([]);
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  const fallbackSlides = [
    {
      id: "fallback-1",
      badge: "Superdeportivos",
      title: "Lamborghini Huracán Evo",
      buttonText: "Ver Detalles",
      image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "fallback-2",
      badge: "Superdeportivos",
      title: "McLaren 720S Spider",
      buttonText: "Ver Detalles",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "fallback-3",
      badge: "Superdeportivos",
      title: "Ferrari F8 Tributo",
      buttonText: "Ver Detalles",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "fallback-4",
      badge: "SUV de Lujo",
      title: "Rolls-Royce Cullinan",
      buttonText: "Ver Detalles",
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "fallback-5",
      badge: "SUV de Lujo",
      title: "Mercedes-AMG G 63",
      buttonText: "Ver Detalles",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "fallback-6",
      badge: "Edición Limitada",
      title: "Bugatti Chiron Pur Sport",
      buttonText: "Ver Detalles",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  useEffect(() => {
    const fetchCatalog = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "cars"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          title: doc.data().name || "Auto Sin Nombre",
          badge: doc.data().category || "General",
          buttonText: "Ver Detalles",
        }));

        if (data.length > 0) {
          setSlides(data);
          // Extract unique categories (badges) dynamically
          const uniqueTabs = Array.from(new Set(data.map(item => item.badge)));
          setTabs(uniqueTabs);
          setActiveTab(uniqueTabs[0]);
        } else {
          // Fallback if collection doesn't exist or is empty
          setSlides(fallbackSlides);
          setTabs(["Superdeportivos", "SUV de Lujo", "Edición Limitada"]);
          setActiveTab("Superdeportivos");
        }
      } catch (error) {
        console.error("Error fetching catalog from Firebase:", error);
        setSlides(fallbackSlides);
        setTabs(["Superdeportivos", "SUV de Lujo", "Edición Limitada"]);
        setActiveTab("Superdeportivos");
      } finally {
        setLoading(false);
      }
    };

    fetchCatalog();
  }, []);

  // Filter slides based on active tab
  const filteredSlides = slides.filter(
    (slide) => slide.badge === activeTab
  );

  const totalDots = filteredSlides.length;

  const handleNext = () => {
    if (currentIdx < totalDots - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setCurrentIdx(0);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    } else {
      setCurrentIdx(totalDots - 1);
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      const card = sliderRef.current.children[0];
      if (card) {
        const cardWidth = card.clientWidth + 24; 
        sliderRef.current.scrollTo({
          left: currentIdx * cardWidth,
          behavior: "smooth",
        });
      }
    }
  }, [currentIdx]);

  useEffect(() => {
    setCurrentIdx(0);
  }, [activeTab]);

  if (loading) {
    return (
      <div className="w-full h-80 flex items-center justify-center bg-black rounded-2xl border border-white/10">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#B8860B]"></div>
      </div>
    );
  }

  return (
    <div className="w-full p-6 md:p-10 rounded-2xl border shadow-2xl overflow-hidden font-sans select-none transition-all duration-300 bg-black text-white border-white/10">
      
      <div className="flex flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#B8860B] text-black shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: 'none' }}
      >
        <style>{`.scrollbar-none::-webkit-scrollbar { display: none; }`}</style>
        {filteredSlides.map((slide, idx) => (
          <div
            key={slide.id}
            onClick={() => setSelectedImageIndex(idx)}
            className="min-w-[100%] sm:min-w-[48%] lg:min-w-[31.8%] snap-start group relative aspect-[1.5/1] rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/40 hover:border-[#B8860B]/60 transition-all duration-500 cursor-pointer"
          >
            <div className="absolute inset-0 z-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="absolute top-4 left-4 z-10 flex items-center px-3 py-1.5 bg-black/60 backdrop-blur-md border border-[#B8860B]/30 rounded-full text-[10px] font-bold text-zinc-200">
              {slide.badge}
            </div>

            <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-4 leading-tight tracking-tight truncate max-w-[95%]" title={slide.title}>
                {slide.title}
              </h3>
              <button 
                onClick={(e) => {
                  e.stopPropagation(); // Prevenir que se abra la imagen en pantalla completa
                  if (onSelectCar) {
                    onSelectCar({ 
                      ...slide, 
                      name: slide.title, 
                      category: slide.badge 
                    });
                  }
                }}
                className="w-fit px-3.5 py-1.5 bg-[#B8860B] text-black font-bold text-[10px] tracking-tight rounded-[5px] transition-all duration-300 hover:bg-yellow-500 active:scale-95 shadow-md shadow-black/20"
              >
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {totalDots > 0 && (
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalDots }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIdx === idx 
                    ? "w-8 bg-[#B8860B]" 
                    : "w-2 bg-zinc-700 hover:bg-zinc-500"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full border border-white/10 bg-black/50 hover:bg-[#B8860B]/20 hover:border-[#B8860B]/50 flex items-center justify-center transition-all duration-200 active:scale-95 text-zinc-400 hover:text-[#B8860B]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full border border-white/10 bg-black/50 hover:bg-[#B8860B]/20 hover:border-[#B8860B]/50 flex items-center justify-center transition-all duration-200 active:scale-95 text-zinc-400 hover:text-[#B8860B]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button 
            className="absolute top-6 right-6 w-10 h-10 bg-black/50 hover:bg-[#B8860B]/20 rounded-full flex items-center justify-center text-white border border-white/10 hover:border-[#B8860B]/50 transition-all duration-200 z-[101] shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex(null);
            }}
          >
            ✕
          </button>

          <button 
            className="absolute left-4 md:left-12 w-12 h-12 bg-black/80 hover:bg-[#B8860B]/20 rounded-full flex items-center justify-center text-white border border-white/10 hover:border-[#B8860B]/50 transition-all duration-200 z-[101] shadow-lg active:scale-95"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex(prev => prev !== null && prev > 0 ? prev - 1 : totalDots - 1);
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          </button>

          <div 
            className="relative max-w-full max-h-full flex flex-col items-center justify-center z-[100]"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={filteredSlides[selectedImageIndex].image} 
              alt={filteredSlides[selectedImageIndex].title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white mb-2">{filteredSlides[selectedImageIndex].title}</h3>
              <p className="text-sm text-[#B8860B]">{selectedImageIndex + 1} de {totalDots}</p>
            </div>
          </div>

          <button 
            className="absolute right-4 md:right-12 w-12 h-12 bg-black/80 hover:bg-[#B8860B]/20 rounded-full flex items-center justify-center text-white border border-white/10 hover:border-[#B8860B]/50 transition-all duration-200 z-[101] shadow-lg active:scale-95"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex(prev => prev !== null && prev < totalDots - 1 ? prev + 1 : 0);
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      )}
    </div>
  );
}

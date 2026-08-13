import React, { useState, useEffect } from 'react';
import { Typewriter } from './ui/typewriter';
import { Testimonial } from './ui/testimonial-card';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const q = query(collection(db, 'testimonials'), orderBy('order', 'asc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials: ", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTestimonials();
  }, []);

  return (
    <section id="testimonios" className="py-24 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-[#B8860B] text-xs font-semibold uppercase tracking-[0.3em] block mb-2">
            EXPERIENCIAS DE CLIENTES VIP
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white flex flex-wrap justify-center gap-x-3 gap-y-2">
            Lo que dicen <Typewriter words={['Nuestros Clientes', 'Nuestros Socios', 'Nuestros Pilotos']} delayBetweenWords={2500} className="text-[#B8860B]" />
          </h2>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="w-8 h-8 border-2 border-[#B8860B] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <Testimonial
                key={item.id}
                name={item.name}
                role={item.title}
                company={item.car}
                testimonial={item.comment}
                rating={item.stars}
                image={item.image}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

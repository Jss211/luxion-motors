import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpiW_Sg0xRMqS51Eyd1pnG_BMH-EC-_z0",
  authDomain: "luxion-motors.firebaseapp.com",
  projectId: "luxion-motors",
  storageBucket: "luxion-motors.firebasestorage.app",
  messagingSenderId: "572716025142",
  appId: "1:572716025142:web:23f125f2f5679564651f97"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const testimonials = [
  {
    name: 'Carlos Alberto V.',
    title: 'Coleccionista de Superdeportivos',
    comment: 'La carrocería personalizada en fibra de carbono para mi Ferrari superó todas mis expectativas. El nivel de acabado de Luxion Motors es comparable al de las casas de diseño de Italia.',
    stars: 5,
    car: 'Ferrari 812 Custom Monocoque',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
    order: 1
  },
  {
    name: 'Dr. Fernando M.',
    title: 'Propietario de Hypercar',
    comment: 'El trabajo de blindaje ligero BR6 y la pintura tricapa champán dejaron mi vehículo con una presencia impecable. Insuperables en atención VIP.',
    stars: 5,
    car: 'Jaguar Luxion Roadster',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
    order: 2
  },
  {
    name: 'Rodrigo S.',
    title: 'Entusiasta de la Velocidad',
    comment: 'La optimización aerodinámica en su túnel de viento redujo drásticamente el drag de mi vehículo en pista. Son verdaderos artesanos de la automoción.',
    stars: 5,
    car: 'Luxion Urus Carbon Widebody',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    order: 3
  }
];

async function seed() {
  const colRef = collection(db, 'testimonials');
  for (const t of testimonials) {
    await addDoc(colRef, t);
    console.log('Added:', t.name);
  }
  console.log('Done seeding testimonials!');
  process.exit(0);
}

seed();

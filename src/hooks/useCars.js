import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export function useCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCars() {
      try {
        const querySnapshot = await getDocs(collection(db, 'cars'));
        const carsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCars(carsData);
      } catch (err) {
        console.error("Error fetching cars: ", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  return { cars, loading, error };
}

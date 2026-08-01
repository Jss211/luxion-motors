import { useState, useEffect } from "react";

export function useWordCarousel({ words, interval = 2 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval * 1000);
    return () => clearInterval(timer);
  }, [words, interval]);

  return { currentWord: words[index], key: index };
}

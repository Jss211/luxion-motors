import React, { useState, useEffect } from 'react';

export function SplashIntro({ onFinish }) {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show splash screen for 2.5 seconds then fade out smoothly
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setVisible(false);
        if (onFinish) onFinish();
      }, 800); // fade out transition time
    }, 2500); // display time

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-800 pointer-events-none ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <img
        src="/jaguar.png"
        alt="Luxion Motors Loading..."
        className="w-16 h-16 sm:w-20 sm:h-20 object-contain animate-pulse"
      />
    </div>
  );
}

import React, { useEffect, useState } from 'react';

const BackgroundAnimation = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random stars on mount
    const numStars = 80;
    const newStars = Array.from({ length: numStars }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
      {/* Animated star particle background */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-60"
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `pulse-slow ${star.duration}s infinite alternate ${star.delay}s`,
          }}
        />
      ))}

      {/* Soft purple radial glow behind the heading */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]"></div>

      {/* Subtle blur gradient blobs */}
      <div className="absolute top-20 left-[15%] w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[100px]"></div>
    </div>
  );
};

export default BackgroundAnimation;

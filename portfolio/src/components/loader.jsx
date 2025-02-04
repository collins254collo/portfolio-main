import { useState, useEffect } from "react";

const Loader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
    }, 1800); // Fade out before removing loader
  }, []);

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 animate-bgMove"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 flex justify-center items-center">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-white opacity-50 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Bouncing Dots Loader */}
      <div className="relative z-10 flex space-x-2">
        <div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-white rounded-full animate-bounce delay-150"></div>
        <div className="w-4 h-4 bg-white rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
};

export default Loader;

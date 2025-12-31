
import React from "react";
import "../App.css";

// Generate random stars for a galaxy effect
const STAR_COUNT = 80;
const stars = Array.from({ length: STAR_COUNT }).map((_, i) => {
  const size = Math.random() * 2.2 + 0.8;
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  const duration = 2.5 + Math.random() * 2.5;
  return (
    <span
      key={i}
      className="star"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}vh`,
        left: `${left}vw`,
        animationDuration: `${duration}s`,
      }}
    />
  );
});

const AnimatedBackground = () => (
  <div className="animated-bg">
    {stars}
  </div>
);

export default AnimatedBackground;

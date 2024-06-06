import React, { useEffect, useRef } from "react";
import Image from "next/image";

const StarrySky = ({ numStars = 300 }) => {
  const starfieldRef = useRef(null);

  const colors = ['white', 'white', 'white', '#FFA', '#AFA', '#FAA', '#AAF'];

  useEffect(() => {
    const starfield = starfieldRef.current;
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      const size = Math.random() * 3 + 1; // Stars with sizes between 1px and 3px
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      star.style.opacity = `${Math.random() * 50 + 50}%`;
      starfield.appendChild(star);
    }
  }, [numStars]);

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: -1,
        top: 0,
        left: 0,
      }}
    >
      <div ref={starfieldRef} className="starfield"></div>
    </div>
  );

  /* (
    <div style={{ position: 'fixed', width: '100%', height: '100%', overflow: 'hidden', zIndex: -1, top: 0, left: 0 }}>
      <Image src="/img/starry-sky.jpg" alt="Starry Sky" layout='fill' objectFit='cover' />
    </div>
  );*/
};

export default StarrySky;

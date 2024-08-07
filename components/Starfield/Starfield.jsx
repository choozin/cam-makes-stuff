import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Starfield = ({ numStars = 300, starScale = 1 }) => {
  const starfieldRef = useRef(null);

  const [isRendered, setIsRendered] = useState(false);

  const colors = [
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "#F88",
    "#88F",
    "#BFB",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    /*"#FF8",
    "#F44",
    "#4F4",
    "#8F4",
    "#FDD",
    "#44F",*/
  ];

  useEffect(() => {
    if (!isRendered) {
    const starfield = starfieldRef.current;
    for (let i = 0; i < numStars; i++) {
      let starColor = colors[Math.floor(Math.random() * colors.length)];
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      const size = Math.random() * 1 + starScale;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.backgroundColor = starColor;
      star.style.opacity = `${Math.random() * 50 + 50}%`;
      //star.style.zIndex = `100`;
      starfield.appendChild(star);

      setIsRendered(true);
    }
  }
  }, [numStars, colors, starScale]);

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        top: 0,
        left: 0,
      }}
    >
      <div ref={starfieldRef} className="starfield"></div>
    </div>
  );
};

export default Starfield;

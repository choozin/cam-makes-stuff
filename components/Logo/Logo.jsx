import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MoonCycle from "../MoonCycle/MoonCycle";

import CamMakesStuffLogo from "../../public/img/cammakesstuff.svg";

const WhiteBackground = ({ toggleCentered }) => {
  const [isOpen, setIsOpen] = useState(true);

  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  const enterBtnClick = () => {
    setIsOpen(false);
    toggleCentered(false);
  };

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 1, delay: 0.3, spring: 10 }}
      style={{
        position: "absolute",
        top: "-3vh",
        left: "-3vw",
        width: "106vw",
        height: "106vh",
        zIndex: "95",
        backgroundImage: "url('/textures/graphy.png')",
        backgroundColor: "#004",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "10vh",
      }}
    >
      <div style={{ transform: 'scale(2.4)', marginTop: '10%'}}><MoonCycle /></div>
      <div />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, spring: 0.1 }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.5 },
          color: "#FD8",
        }}
        whileTap={{ scale: 0.1, transition: { duration: 2 } }}
        onClick={() => enterBtnClick()}
        style={{
          zIndex: 100,
          backgroundColor: "black",
          color: "white",
          fontWeight: "bold",
          fontSize: "8vh",
          padding: "0px 10px 4px 10px",
          borderRadius: "1rem",
          fontFamily: "Silkscreen",
          cursor: "pointer",
          userSelect: "none",
          position: "absolute",
          bottom: "30vh",
          boxShadow: '0rem 1rem 0.5rem rgba(40,40,40,0.8)',
        }}
      >
        Enter
      </motion.div>
    </motion.div>
  );
};

const Logo = () => {
  const [isCentered, setIsCentered] = useState(true);

  const variants = {
    centered: { width: "100vw", height: "100vh", scale: 1, y: 0 },
    top: { width: "100vw", height: "256px", scale: 0.3, top: -80, zIndex: "100" },
  };

  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        ZIndex: "99",
        overflow: "hidden",
      }}
      initial={"centered"}
      animate={isCentered ? "centered" : "top"}
      variants={variants}
      transition={{ duration: 1, delay: 1, spring: 10 }}
    >
      <WhiteBackground toggleCentered={() => setIsCentered()} />
      <motion.div
        style={{
          zIndex: "99",
          width: "280px",
          height: "280px",
          maxHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        whileHover={{ scale: !isCentered && 1.05 }}
        whileTap={{ scale: !isCentered && 0.9 }}
        onClick={() => location.href = 'http://cammakesstuff.com'}
      >
        <CamMakesStuffLogo />
      </motion.div>
    </motion.div>
  );
};

export default Logo;

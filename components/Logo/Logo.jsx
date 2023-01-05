import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MoonCycle from "../MoonCycle/MoonCycle";

import CamMakesStuffLogo from '../../public/img/cammakesstuff.svg'

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
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <MoonCycle style={{ width: "128px", height: "128px" }} />
      <div />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, spring: 0.1 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
        onClick={() => enterBtnClick()}
        style={{
          zIndex: 100,
          backgroundColor: "black",
          color: "white",
          fontWeight: "bold",
          fontSize: "2rem",
          marginTop: "20vh",
          padding: "0px 10px 4px 10px",
          borderRadius: "1rem",
          fontFamily: "Silkscreen",
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
    top: { width: "100vw", height: "256px", scale: 0.3, y: -64, zIndex: "100" },
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
      <motion.div style={{ zIndex: '100', width: '350px', height: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }} whileHover={{ scale: !isCentered && 1.05 }} whileTap={{ scale: !isCentered && 0.9 }}>
        <CamMakesStuffLogo/>
      </motion.div>
    </motion.div>
  );
};

export default Logo;

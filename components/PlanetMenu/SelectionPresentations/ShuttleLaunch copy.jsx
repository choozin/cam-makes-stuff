import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SpaceShuttle from "../../../public/svg/space-shuttle.svg";

const MenuItem = ({ itemTitle, itemFont, url }) => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div
      style={{
        minWidth: "340px",
        height: "120px",
        fontFamily: itemFont,
        fontSize: "3rem",
        color: "white",
        textAlign: "center",
        verticalAlign: "middle",
      }}
      variants={item}
    >
      {itemTitle}
    </motion.div>
  );
};

const ShuttleLaunch = ({ title, itemTitles, font, setPlanet }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 5
      },
    },
  };
  return (
    <AnimatePresence>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: "91",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <motion.div
          style={{
            width: "100%",
            maxWidth: "800px",
            height: "230vh",
            padding: "2rem",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            background: "rgb(2,0,36)",
            background:
              "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(29,29,29,1) 93%, rgba(255,255,255,1) 100%)",
            backgroundImage: "url('/textures/fresh-snow.png')",
            boxShadow: "inset 0 0 4rem 1rem #B40, 0 0 1rem 1rem #B40",
          }}
          initial={{
            y: "160vh",
            borderTopLeftRadius: "1500vw 3880vh",
            borderTopRightRadius: "1500vw 3880vh",
            maxWidth: "100px",
            boxShadow: "inset 0 0 4rem 1rem #B40, 0 0 1rem 1rem #B40",
            opacity: "0.4",
          }}
          animate={{
            y: "-100vh",
            backgroundColor: "#000",
            borderTopLeftRadius: "0vh 0vh",
            borderTopRightRadius: "0vh 0vh",
            maxWidth: "100%",
            boxShadow: "inset 0 0 0rem 0rem #000, 0 0 0rem 0rem #000",
            opacity: "1",
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 3,
            damping: 0.5,
            style: "tween",
          }}
        >
          <SpaceShuttle
            style={{
              position: "absolute",
              top: "-200px",
              width: "200px",
              height: "200px",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "97",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <motion.div
            style={{
              width: "100%",
              maxWidth: "1000px",
              marginTop: "5%",
              minHeight: "80%",
              display: "flex",
              flexWrap: "wrap",
              verticalAlign: "center",
              alignItems: "center",
              justifyContent: "space-around",
            }}
            variants={container}
          >
            {itemTitles &&
              itemTitles.map((itemTitle) => (
                <MenuItem
                  key={itemTitle}
                  itemTitle={itemTitle}
                  itemFont={font}
                />
              ))}
          </motion.div>
        </motion.div>
        <div style={{ position: "absolute", top: 0, left: 0 }}>
          <button onClick={() => setPlanet("None")}>Back</button>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ShuttleLaunch;

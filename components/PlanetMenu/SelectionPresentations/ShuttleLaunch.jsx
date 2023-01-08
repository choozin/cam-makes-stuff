import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Items from "./Items";

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

const ShuttleLaunch = ({ title, itemTitles, font, urls, setPlanet }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 5,
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
          <div
            style={{
              zIndex: "-10",
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "10vw",
                color: "rgba(0,0,0,0.0",
                textShadow: "0 0 1vw #AAA",
                fontWeight: "bold",
                fontFamily: font,
                transform: "rotate(-20deg)",
                cursor: "pointer",
              }}
            >
              {title}
            </span>
          </div>
          <Items
            title={title}
            itemTitles={itemTitles}
            font={font}
            urls={urls}
          />
        </motion.div>
        <div
          style={{
            position: "absolute",
            top: "0.5rem",
            left: "0.5rem",
            zIndex: "100",
            fontFamily: font,
          }}
        >
          <div onClick={() => setPlanet("None")}>
            <motion.span
              style={{
                color: "white",
                fontSize: "1.7rem",
                boxShadow: "0 0 1rem black",
                background: "rgba(0,0,0,0.4 ",
                padding: "0 0.4rem",
                cursor: "pointer",
              }}
              whileHover={{ color: "#FD8", scale: 1.05 }}
              whileTap={{ color: "#FD8", scale: 1.1 }}
            >
              Back
            </motion.span>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ShuttleLaunch;

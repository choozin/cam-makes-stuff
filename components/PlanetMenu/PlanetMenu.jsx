import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ShuttleLaunch from "../../components/PlanetMenu/SelectionPresentations/ShuttleLaunch";
import ExamplesMenu from "../../components/Examples/Menu";

import ScreenSizePopup from "../Popups/ScreenSize";

import useWindowSize from "../../utilities/useWindowSize";

import PlanetEarth from "../../public/svg/planet-earth.svg";
import Mars from "../../public/svg/mars.svg";
import Saturn from "../../public/svg/ringed-planet.svg";
import Asteroid from "../../public/svg/asteroid.svg";
import Comet from "../../public/svg/comet.svg";
import SpaceStation from "../../public/svg/space-station.svg";
import Moon from "../../public/svg/moon.svg";
import Sun from "../../public/svg/sun.svg";
import Satellite from "../../public/svg/satellite.svg";
import SpaceShip from "../../public/svg/spaceship1.svg";

const Planet = ({ position, planet, title, font, setPlanet }) => {
  const variants = {
    front: { x: "0", y: "4vh", zIndex: "90", scale: 1.7 },
    frontLeft: { x: "-24vw", y: "-3vh", zIndex: "85", scale: 0.8 },
    left: { x: "-16vw", y: "-9vh", zIndex: "80", scale: 0.5 },
    backLeft: { x: "-8vw", y: "-12vh", zIndex: "70", scale: 0.3 },
    backRight: { x: "8vw", y: "-12vh", zIndex: "70", scale: 0.3 },
    right: { x: "16vw", y: "-9vh", zIndex: "80", scale: 0.5 },
    frontRight: { x: "24vw", y: "-3vh", zIndex: "85", scale: 0.8 },
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        ZIndex: "10",
        overflow: "hidden",
      }}
      onClick={() => setPlanet(planet)}
    >
      <motion.div
        initial={
          position === 0
            ? "front"
            : position === 1
            ? "frontLeft"
            : position === 2
            ? "left"
            : position === 3
            ? "backLeft"
            : position === 4
            ? "backRight"
            : position === 5
            ? "right"
            : "frontRight"
        }
        animate={
          position === 0
            ? "front"
            : position === 1
            ? "frontLeft"
            : position === 2
            ? "left"
            : position === 3
            ? "backLeft"
            : position === 4
            ? "backRight"
            : position === 5
            ? "right"
            : "frontRight"
        }
        variants={variants}
        transition={{
          bounce: "10",
          mass: "1",
          damping: "7",
        }}
        whileHover={{ scale: 1.9 }}
      >
        {(planet === "Earth" && (
          <PlanetEarth style={{ width: "100px", height: "100px" }} />
        )) ||
          (planet === "Mars" && (
            <Mars style={{ width: "100px", height: "100px" }} />
          )) ||
          (planet === "Saturn" && (
            <div style={{ width: "100px", height: "100px" }}>
              <Saturn
                style={{
                  transform: "scale(1.45)",
                  marginLeft: "-15px",
                  marginTop: "-15px",
                }}
              />
            </div>
          )) ||
          (planet === "Moon" && (
            <Moon style={{ width: "100px", height: "100px" }} />
          )) ||
          (planet === "Asteroid" && (
            <div style={{ width: "100px", height: "100px" }}>
              <Asteroid style={{ transform: "scale(1)" }} />
            </div>
          )) ||
          (planet === "Comet" && (
            <div style={{ width: "100px", height: "100px" }}>
              <Comet style={{ transform: "scale(0.9)", marginTop: "-25px" }} />
            </div>
          )) ||
          (planet === "SpaceStation" && (
            <div style={{ width: "100px", height: "100px" }}>
              <SpaceStation style={{ transform: "scale(1.1)" }} />
            </div>
          ))}
        {position === 0 && (
          <motion.div
            style={{
              width: "200%",
              marginLeft: "-50%",
              textAlign: "center",
              marginTop: "0.5rem",
              position: "absolute",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.17 }}
          >
            <span
              style={{
                color: "#FFF",
                fontFamily: font,
                textShadow: "0 0 0.5rem #000, 0 0 0.5rem #000",
                fontSize: "1rem",
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              {title}
            </span>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 7 }}
            >
              <span
                style={{
                  fontFamily: font,
                  color: "white",
                  fontSize: "0.5rem",
                  textShadow:
                    "1px 1px 4px black, -1px -1px 4px black, 1px -1px 4px black, -1px 1px 4px black",
                  position: "relative",
                  top: -70,
                }}
              >
                Click to Proceed
              </span>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

const PlanetMenu = ({ selectedPlanet, setSelectedPlanet }) => {
  const windowSize = useWindowSize();
  
  const [isExampleMenuVisible, setIsExampleMenuVisible] = useState('hidden');

  const [earthPos, setEarthPos] = useState(0);
  const [saturnPos, setSaturnPos] = useState(6);
  const [marsPos, setMarsPos] = useState(5);
  const [moonPos, setMoonPos] = useState(4);
  const [cometPos, setCometPos] = useState(3);
  const [asteroidPos, setAsteroidPos] = useState(2);
  const [spaceStationPos, setSpaceStationPos] = useState(1);

  const rotateRight = () => {
    setEarthPos(earthPos < 6 ? earthPos + 1 : 0);
    setMarsPos(marsPos < 6 ? marsPos + 1 : 0);
    setSaturnPos(saturnPos < 6 ? saturnPos + 1 : 0);
    setMoonPos(moonPos < 6 ? moonPos + 1 : 0);
    setAsteroidPos(asteroidPos < 6 ? asteroidPos + 1 : 0);
    setCometPos(cometPos < 6 ? cometPos + 1 : 0);
    setSpaceStationPos(spaceStationPos < 6 ? spaceStationPos + 1 : 0);
  };
  const rotateLeft = () => {
    setEarthPos(earthPos > 0 ? earthPos - 1 : 6);
    setMarsPos(marsPos > 0 ? marsPos - 1 : 6);
    setSaturnPos(saturnPos > 0 ? saturnPos - 1 : 6);
    setMoonPos(moonPos > 0 ? moonPos - 1 : 6);
    setAsteroidPos(asteroidPos > 0 ? asteroidPos - 1 : 6);
    setCometPos(cometPos > 0 ? cometPos - 1 : 6);
    setSpaceStationPos(spaceStationPos > 0 ? spaceStationPos - 1 : 6);
  };

  const learnTitles = [
    "A Breif History of Cam",
    "Contact Cam",
    "Interests & Hobbies",
    "Experience",
  ];
  const calcTitles = [
    "Calculators",
    "Quote Generators",
    "Automated Evaluations",
    "3rd-Party Data Processing",
    "Data Charting",
  ];
  const sitesTitles = [
    "Landing Pages",
    "Duplication",
    "Marketplaces",
    "Social Networks",
  ];
  const formsTitles = [
    "Dynamic Forms",
    "Paperwork Expediting",
    "Quizzes & Analysis",
    "Questionnaires",
  ];
  const appsTitles = [
    "Custom Website Add-ons",
    "Custom APIs",
    "API Integration",
    "Plugins",
    "Data Management Tools",
  ];
  const buildersTitles = ["Shopify", "WordPress", "Wix"];
  const techTitles = [
    "Databases",
    "APIs",
    "GPT3 / AIs",
    "Serverless Static Sites",
    "Interactive / Animated",
  ];

  const buttonStyle = {
    fontSize: "3rem",
    width: "20vw",
    padding: "0.75rem",
    background: "#ffe254",
    border: "none",
    borderRadius: "1rem",
    margin: "0.5rem",
  };

  return (
    <div style={{ overflow: "hidden", width: "100%", height: "100%" }}>
      <AnimatePresence>
        {selectedPlanet === "Earth" && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ delay: 0.25, duration: 1 }}
          >
            <ShuttleLaunch
              title="Learn About Cam"
              itemTitles={learnTitles}
              font="Marcellus SC"
              setPlanet={setSelectedPlanet}
              isExampleMenuVisible={isExampleMenuVisible}
              setIsExampleMenuVisible={() => setIsExampleMenuVisible()}
            />
          </motion.div>
        )}
        {selectedPlanet === "Saturn" && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ delay: 0.25, duration: 1 }}
          >
            <ShuttleLaunch
              title="Custom Calculators"
              itemTitles={calcTitles}
              font="Orbitron"
              setPlanet={setSelectedPlanet}
              isExampleMenuVisible={isExampleMenuVisible}
              setIsExampleMenuVisible={() => setIsExampleMenuVisible()}
            />
          </motion.div>
        )}
        {selectedPlanet === "Moon" && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ delay: 0.25, duration: 1 }}
          >
            <ShuttleLaunch
              title="Forms & Data Analysis"
              itemTitles={formsTitles}
              font="Special Elite"
              setPlanet={setSelectedPlanet}
              isExampleMenuVisible={isExampleMenuVisible}
              setIsExampleMenuVisible={() => setIsExampleMenuVisible()}
            />
          </motion.div>
        )}
        {selectedPlanet === "Mars" && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ delay: 0.25, duration: 1 }}
          >
            <ShuttleLaunch
              title="Pages & Sites"
              itemTitles={sitesTitles}
              font="Im Fell DW Pica SC"
              setPlanet={setSelectedPlanet}
              isExampleMenuVisible={isExampleMenuVisible}
              setIsExampleMenuVisible={() => setIsExampleMenuVisible()}
            />
          </motion.div>
        )}
        {selectedPlanet === "Asteroid" && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ delay: 0.25, duration: 1 }}
          >
            <ShuttleLaunch
              title="Website Builders"
              itemTitles={buildersTitles}
              font="Permanent Marker"
              setPlanet={setSelectedPlanet}
              isExampleMenuVisible={isExampleMenuVisible}
              setIsExampleMenuVisible={() => setIsExampleMenuVisible()}
            />
          </motion.div>
        )}
        {selectedPlanet === "Comet" && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ delay: 0.25, duration: 1 }}
          >
            <ShuttleLaunch
              title="Apps & Web Components"
              itemTitles={appsTitles}
              font="Codystar"
              setPlanet={setSelectedPlanet}
              isExampleMenuVisible={isExampleMenuVisible}
              setIsExampleMenuVisible={() => setIsExampleMenuVisible()}
            />
          </motion.div>
        )}
        {selectedPlanet === "SpaceStation" && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ delay: 0.25, duration: 1 }}
          >
            <ShuttleLaunch
              title="Technologies"
              itemTitles={techTitles}
              font="Silkscreen"
              setPlanet={setSelectedPlanet}
              isExampleMenuVisible={isExampleMenuVisible}
              setIsExampleMenuVisible={() => setIsExampleMenuVisible()}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div>
        <Sun
          style={{
            position: "absolute",
            left: "43vw",
            top: "38vh",
            width: "14vw",
            height: "14vw",
            zIndex: "75",
          }}
        />
        <motion.div
          drag="x"
          dragSnapToOrigin
          dragConstraints={{ left: 20, right: 20 }}
          dragElastic={0.1}
          onDragEnd={(event, info) =>
            info.offset.x > 30
              ? rotateLeft()
              : info.offset.x < -30
              ? rotateRight()
              : null
          }
        >
          <Planet
            planet="Earth"
            position={earthPos}
            title="Learn About Cam"
            font="Marcellus SC"
            setPlanet={setSelectedPlanet}
          />
        </motion.div>
        <motion.div
          drag="x"
          dragSnapToOrigin
          dragConstraints={{ left: 20, right: 20 }}
          dragElastic={0.1}
          onDragEnd={(event, info) =>
            info.offset.x > 30
              ? rotateLeft()
              : info.offset.x < -30
              ? rotateRight()
              : null
          }
        >
          <Planet
            planet="Saturn"
            position={saturnPos}
            title="Custom Calculators"
            font="Orbitron"
            setPlanet={setSelectedPlanet}
          />
        </motion.div>
        <motion.div
          drag="x"
          dragSnapToOrigin
          dragConstraints={{ left: 20, right: 20 }}
          dragElastic={0.1}
          onDragEnd={(event, info) =>
            info.offset.x > 30
              ? rotateLeft()
              : info.offset.x < -30
              ? rotateRight()
              : null
          }
        >
          <Planet
            planet="Moon"
            position={moonPos}
            title="Forms & Data Analysis"
            font="Special Elite"
            setPlanet={setSelectedPlanet}
          />
        </motion.div>
        <motion.div
          drag="x"
          dragSnapToOrigin
          dragConstraints={{ left: 20, right: 20 }}
          dragElastic={0.1}
          onDragEnd={(event, info) =>
            info.offset.x > 30
              ? rotateLeft()
              : info.offset.x < -30
              ? rotateRight()
              : null
          }
        >
          <Planet
            planet="Mars"
            position={marsPos}
            title="Pages & Sites"
            font="Im Fell DW Pica SC"
            setPlanet={setSelectedPlanet}
          />
        </motion.div>
        <motion.div
          drag="x"
          dragSnapToOrigin
          dragConstraints={{ left: 20, right: 20 }}
          dragElastic={0.1}
          onDragEnd={(event, info) =>
            info.offset.x > 30
              ? rotateLeft()
              : info.offset.x < -30
              ? rotateRight()
              : null
          }
        >
          <Planet
            planet="Asteroid"
            position={asteroidPos}
            title="Website Builders"
            font="Permanent Marker"
            setPlanet={setSelectedPlanet}
          />
        </motion.div>
        <motion.div
          drag="x"
          dragSnapToOrigin
          dragConstraints={{ left: 20, right: 20 }}
          dragElastic={0.1}
          onDragEnd={(event, info) =>
            info.offset.x > 30
              ? rotateLeft()
              : info.offset.x < -30
              ? rotateRight()
              : null
          }
        >
          <Planet
            planet="Comet"
            position={cometPos}
            title="Apps & Web Components"
            font="Codystar"
            setPlanet={setSelectedPlanet}
          />
        </motion.div>
        <motion.div
          drag="x"
          dragSnapToOrigin
          dragConstraints={{ left: 20, right: 20 }}
          dragElastic={0.1}
          onDragEnd={(event, info) =>
            info.offset.x > 30
              ? rotateLeft()
              : info.offset.x < -30
              ? rotateRight()
              : null
          }
        >
          <Planet
            planet="SpaceStation"
            position={spaceStationPos}
            title="Technologies"
            font="Silkscreen"
            setPlanet={setSelectedPlanet}
          />
        </motion.div>
      </div>
      <div
        style={{
          position: "absolute",
          zIndex: "90",
          width: "100%",
          bottom: 0,
          display: "flex",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        <motion.button
          style={buttonStyle}
          onClick={() => rotateLeft()}
          initial={{ opacity: 0.75, scale: 0.95 }}
          whileHover={{ opacity: 1, scale: 1 }}
          whileTap={{ opacity: 1, scale: 1.05 }}
        >
          &#8592;
        </motion.button>
        <motion.button
          style={buttonStyle}
          onClick={() => rotateRight()}
          initial={{ opacity: 0.75, scale: 0.95 }}
          whileHover={{ opacity: 1, scale: 1 }}
          whileTap={{ opacity: 1, scale: 1.05 }}
        >
          &#8594;
        </motion.button>
      </div>
      <div
        style={{
          position: "absolute",
          zIndex: "89",
          width: "100%",
          height: "100%",
          bottom: 0,
          display: "flex",
          justifyContent: "space-between",
          opacity: 0,
          margin: "0 auto",
        }}
      >
        <motion.button style={{ width: "25vw" }} onClick={() => rotateLeft()} />
        <motion.button
          style={{ width: "25vw" }}
          onClick={() => rotateRight()}
        />
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 90,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <motion.div
          initial={{ x: "-20vw", y: "10vh" }}
          animate={{ x: "120vw", y: "80vh" }}
          transition={{
            delay: "15",
            duration: "5",
            stiffness: "10000",
          }}
        >
          <Satellite
            style={{
              width: "75px",
              height: "75px",
              transform: "rotate(64deg)",
            }}
          />
          \
        </motion.div>
        <motion.div
          initial={{ x: "120vw", y: "-10vh" }}
          animate={{ x: "-20vw", y: "0vh" }}
          transition={{
            delay: "35",
            duration: "15",
            stiffness: "10000",
            ease: "linear",
          }}
          style={{ zIndex: "-50" }}
        >
          <SpaceShip
            style={{
              width: "25px",
              height: "25px",
              transform: "rotate(-64deg)",
            }}
          />
          \
        </motion.div>
      </div>
      <ExamplesMenu isMenuVisible={isExampleMenuVisible} setIsMenuVisible={() => setIsExampleMenuVisible()}/>
      <ScreenSizePopup size={windowSize} />
    </div>
  );
};

export default PlanetMenu;

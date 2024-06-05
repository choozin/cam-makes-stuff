import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { GeneralContext } from "../../contexts/generalContext";

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

import Starfield from "../../components/Starfield/Starfield";

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
        whileTap={{ scale: 1.4 }}
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
  const { term, setTerm, updateTerm } = useContext(GeneralContext);
  const windowSize = useWindowSize();

  const [isExampleMenuVisible, setIsExampleMenuVisible] = useState("hidden");
  const [isIntroductionOpen, setIsIntroductionOpen] = useState(false);

  const [earthPos, setEarthPos] = useState(0);
  const [saturnPos, setSaturnPos] = useState(6);
  const [marsPos, setMarsPos] = useState(5);
  const [moonPos, setMoonPos] = useState(4);
  const [cometPos, setCometPos] = useState(3);
  const [asteroidPos, setAsteroidPos] = useState(2);
  const [spaceStationPos, setSpaceStationPos] = useState(1);

  const [menuMotion, setMenuMotion] = useState(null);

  useEffect(() => {
    if (menuMotion !== null) {
      const timer = setTimeout(() => {
        setMenuMotion(null);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [menuMotion]);

  const rotateRight = () => {
    setEarthPos(earthPos < 6 ? earthPos + 1 : 0);
    setMarsPos(marsPos < 6 ? marsPos + 1 : 0);
    setSaturnPos(saturnPos < 6 ? saturnPos + 1 : 0);
    setMoonPos(moonPos < 6 ? moonPos + 1 : 0);
    setAsteroidPos(asteroidPos < 6 ? asteroidPos + 1 : 0);
    setCometPos(cometPos < 6 ? cometPos + 1 : 0);
    setSpaceStationPos(spaceStationPos < 6 ? spaceStationPos + 1 : 0);
    setMenuMotion("right");
  };
  const rotateLeft = () => {
    setEarthPos(earthPos > 0 ? earthPos - 1 : 6);
    setMarsPos(marsPos > 0 ? marsPos - 1 : 6);
    setSaturnPos(saturnPos > 0 ? saturnPos - 1 : 6);
    setMoonPos(moonPos > 0 ? moonPos - 1 : 6);
    setAsteroidPos(asteroidPos > 0 ? asteroidPos - 1 : 6);
    setCometPos(cometPos > 0 ? cometPos - 1 : 6);
    setSpaceStationPos(spaceStationPos > 0 ? spaceStationPos - 1 : 6);
    setMenuMotion("left");
  };

  const checkForSpecialComponent = (title) => {
    title === "Introduction"
      ? setIsIntroductionOpen(true)
      : setIsIntroductionOpen(false);
    return title === "Introduction" ? true : false;

    return title === "Society - the Boardgame" ? true : false;
  };

  const learnTitles = [
    "Introduction",
    "A Brief History of Cam",
    "Cam's Interests & Hobbies",
    "Cam's Experience",
  ];
  const toolsTitles = [
    "Calculators",
    "Quote Generators",
    "Questionnaires",
    "Data Processing & Charting",
    "Dynamic Forms & Paperwork Expediting",
  ];
  const sitesTitles = [
    "Landing Pages",
    "Duplication",
    "Website Upgrades",
    "Full Sites & eCommerce",
  ];
  const contactTitles = ["Facebook", "LinkedIn", "Email"];
  const otherCoolStuffTitles = [
    "Society - the Boardgame",
    "Trip Blog",
    "Upcoming Projects",
  ];
  const otherDigitalServicesTitles = [
    "Custom Plugins",
    "Graphics & Design",
    "APIs",
    "Artificial Intelligence",
    "SEO & Page Insights",
    "CMS & Page Builders",
    "Hosting & Site Management",
  ];
  const techTitles = [
    "NextJS & Jamstack",
    "ReactJS",
    "Realtime NoSQL Databases",
    "Animations & Interactivity",
  ];

  const buttonStyle = {
    fontSize: "3rem",
    width: "20vw",
    padding: "0.75rem",
    backgroundImage: "url('/textures/real-carbon-fibre.png')",
    backgroundColor: "#ffe254",
    border: "none",
    borderRadius: "1rem",
    margin: "0.5rem",
    boxShadow:
      "8px 8px 4px rgba(255, 235, 128, 0.8) inset, -8px -8px 4px rgba(180, 140, 60, 0.8) inset",
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
              checkForSpecialComponent={checkForSpecialComponent}
            />
          </motion.div>
        )}
        {selectedPlanet === "Saturn" && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ delay: 0.25, duration: 1 }}
          >
            <ShuttleLaunch
              title="Custom Business Tools"
              itemTitles={toolsTitles}
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
              title="Contact Cam"
              itemTitles={contactTitles}
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
              title="Other Digital Services"
              itemTitles={otherDigitalServicesTitles}
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
              title="Cool Stuff"
              itemTitles={otherCoolStuffTitles}
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
        <div style={{
          position: 'absolute',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <motion.div
          animate={{
            rotate: [180, 0, 90, 0, 170, 0, 90, 0],
          }}
          transition={{
            duration: 88,
            repeat: "infinity",
            repeatType: "loop",
          }}
          style={{
            width: "14vw",
            minWidth: '150px',
            height: "14vw",
            minHeight: '150px',
            zIndex: "75",
          }}
        >
          <Sun
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </motion.div>
        </div>
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
            title="Custom Business Tools"
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
            title="Contact Cam"
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
            title="Other Digital Services"
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
            title="Cool Stuff"
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
          whileTap={{ opacity: 1, scale: 0.9 }}
        >
          &#8592;
        </motion.button>
        <motion.button
          style={buttonStyle}
          onClick={() => rotateRight()}
          initial={{ opacity: 0.75, scale: 0.95 }}
          whileHover={{ opacity: 1, scale: 1 }}
          whileTap={{ opacity: 1, scale: 0.9 }}
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
      <ExamplesMenu
        isMenuVisible={isExampleMenuVisible}
        setIsMenuVisible={() => setIsExampleMenuVisible()}
      />
      <ScreenSizePopup size={windowSize} />
      <motion.div
        animate={{
          x: ["-4%", "4%"],
        }}
        transition={{
          duration: 180,
          repeat: "Infinity",
          repeatType: "reverse",
          ease: [0.2, 0, 0.8, 1],
        }}
        style={{
          zIndex: 1,
          width: "200%",
          height: "100%",
          left: "-50%",
          position: "absolute",
        }}
      >
        <Starfield numStars={windowSize.width / 7} starScale={1} />
      </motion.div>
      <motion.div
        animate={{
          x: ["-7%", "7%"],
        }}
        transition={{
          duration: 180,
          repeat: "Infinity",
          repeatType: "reverse",
          ease: [0.2, 0, 0.8, 1],
        }}
        style={{
          zIndex: 1,
          width: "200%",
          height: "100%",
          left: "-50%",
          position: "absolute",
        }}
      >
        <Starfield numStars={windowSize.width / 8} starScale={2} />
      </motion.div>
      <motion.div
        animate={{
          x: ["-12%", "12%"],
        }}
        transition={{
          duration: 180,
          repeat: "Infinity",
          repeatType: "reverse",
          ease: [0.2, 0, 0.8, 1],
        }}
        style={{
          zIndex: 1,
          width: "200%",
          height: "100%",
          left: "-50%",
          position: "absolute",
        }}
      >
        <Starfield numStars={windowSize.width / 4} starScale={1} />
      </motion.div>
      <motion.div
        animate={{
          x: ["-17%", "17%"],
        }}
        transition={{
          duration: 180,
          repeat: "Infinity",
          repeatType: "reverse",
          ease: [0.2, 0, 0.8, 1],
        }}
        style={{
          zIndex: 1,
          width: "200%",
          height: "100%",
          left: "-50%",
          position: "absolute",
        }}
      >
        <Starfield numStars={windowSize.width / 12} starScale={3} />
      </motion.div>
      <motion.div
        animate={{
          x: ["-25%", "25%"],
        }}
        transition={{
          duration: 180,
          repeat: "Infinity",
          repeatType: "reverse",
          ease: [0.2, 0, 0.8, 1],
        }}
        style={{
          zIndex: 1,
          width: "200%",
          height: "100%",
          left: "-50%",
          position: "absolute",
        }}
      >
        <Starfield numStars={windowSize.width / 7} starScale={3} />
      </motion.div>
    </div>
  );
};

export default PlanetMenu;

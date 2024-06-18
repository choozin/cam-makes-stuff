import { useState, useEffect, useContext } from "react";

import { motion } from "framer-motion";

import { GeneralContext } from '../../contexts/generalContext';

import useWindowSize from "../../utilities/useWindowSize";

import Terms from "./Terms";

import Astronaut from "../../public/svg/astronaut-happy.svg";

const Guide = ({ requestLocation, setPlanet }) => {

  const { term, setTerm, updateTerm, cookiesAccepted, setCookiesAccepted, createCookie, deleteCookies, checkIfCookieExists, acceptCookies } = useContext(GeneralContext);
  const windowSize = useWindowSize();
  
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const [currentTerm, setCurrentTerm] = useState(term ? term : 'Default');
  const [previousTerm, setPreviousTerm] = useState();

  const [chapter, setChapter] = useState();

  useEffect(() => {});

  useEffect(() => {
    setChapter(1);
  }, [currentTerm]);


  return (
    <>
      <motion.div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%', position: 'absolute', }}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: isGuideOpen ? 1 : 1,
            y: isGuideOpen ? "10px" : "100px",
          }}
          
          whileHover={{ scale: 1.1 }}
          transition={{ delay: 0, duration: 0.5, times: [0, 1.5, 2] }}
          style={{
            width: "140px",
            height: "140px",
            zIndex: "95",
            position: "fixed",
            bottom: "0px",
          }}
        >
          <Astronaut
            style={{
              width: "140px",
              height: "140px",
              stroke: "white",
              strokeWidth: "0.1px",
            }}
            onClick={() => setIsGuideOpen(true)}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: isGuideOpen ? 0 : 1,
            }}
            style={{
              position: "absolute",
              width: "100%",
              textAlign: "center",
              color: "#777",
              top: "5.5px",
              fontSize: "17px",
              fontFamily: "Silkscreen",
              fontWeight: "bold",
              pointerEvents: "none",
            }}
          >
            Guide
          </motion.div>
        </motion.div>
      </motion.div>
      {isGuideOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: "0",
            left: "0",
            display: "flex",
            justifyContent: "center",
            zIndex: isGuideOpen ? "95" : "10",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isGuideOpen ? 1 : 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            id="speech_bubble_master_container"
            style={{
              width: "800px",
              maxWidth: "96vw",
              height: windowSize.height - 150 + "px",
              marginTop: "40px",
              backgroundColor: "#FFF",
              padding: "0rem",
              borderRadius: "4.8rem",
              position: "relative",
            }}
          >
            <div
              id="scrollable_area"
              style={{
                width: "97%",
                height: "100%",
                overflowY: "auto",
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(0,0,0,1) rgba(0,0,0,0)",
                paddingLeft: '2%',
              }}
            >
              <div
                id="top_edge_fog"
                style={{
                  boxShadow: "8px 8px 4px rgba(255,255,255,1) inset",
                  pointerEvents: "none",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "4.8rem",
                }}
              />
              <div
                id="bottom_edge_fog"
                style={{
                  boxShadow: "-8px -8px 4px rgba(255,255,255,1) inset",
                  pointerEvents: "none",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "4.8rem",
                }}
              />

              <Terms term={term} setTerm={setTerm} />
              <div
                id="bottom_search_area
            "
                style={{
                  display: "flex",
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <input className="searchbar" placeholder="Search for a Term"></input>
                <br/>
                <button className="purpleBtn" onClick={() => setIsGuideOpen(false)}>
                  Tell me more about this part of the website, and how it works.
                </button>
                <button className="closeGuideBtn" onClick={() => setIsGuideOpen(false)}>
                  Close Guide
                </button>
              </div>
            </div>
            <div
              id="speech_bubble_triangle_container"
              style={{
                position: "absolute",
                width: "100px",
                height: "100px",
                left: "55%",
                zIndex: "100",
              }}
            >
              <div
                id="speech_bubble_triangle"
                style={{
                  position: "absolute",
                  top: "-0px",
                  width: "50px",
                  height: "40px",
                  transform: "skew(-28deg, 0deg) rotate(90deg)",
                  background:
                    "linear-gradient(220deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1) 50%)",
                  zIndex: "100",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Guide;

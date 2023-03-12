import { useState, useEffect, useContext } from "react";

import { motion } from "framer-motion";

import { MenuContext } from "../../../contexts/MenuContext";

import useWindowSize from "../../../utilities/useWindowSize";

import content from "../../../content/content";

const RightArm = ({ time }) => {
  return (
    <motion.div
      style={{
        width: "50vw",
        height: "3vh",
        top: "6.5vh",
        position: "relative",
        left: "100%",
        background: "url('/textures/office.png')",
        backgroundColor: "#DDD",
        boxShadow: "inset 0 -0.5vh 1vh #000, inset 0 0.5vh 1vh #BBB",
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
      }}
      initial={{ x: 0 }}
      animate={{ x: "70vh" }}
      transition={{ delay: time, duration: "1" }}
    >
      <div
        style={{
          height: "5vh",
          width: "16px",
          background: "url('/textures/real-carbon-fibre.png')",
          backgroundColor: "#000",
          boxShadow: "inset 0 0.5vh 1vh #AAA",
          borderTopRightRadius: "0.25rem",
          borderBottomRightRadius: "0.25rem",
        }}
      />
    </motion.div>
  );
};

const LeftArm = ({ time }) => {
  return (
    <motion.div
      style={{
        width: "50vw",
        height: "3vh",
        top: "6.5vh",
        position: "relative",
        left: "-50vw",
        background: "url('/textures/office.png')",
        backgroundColor: "#DDD",
        boxShadow: "inset 0 -0.5vh 1vh #000, inset 0 0.5vh 1vh #BBB",
        display: "flex",
        alignItems: "center",
        justifyContent: "right",
      }}
      initial={{ x: 0 }}
      animate={{ x: "-70vh" }}
      transition={{ delay: time, duration: "1" }}
    >
      <div
        style={{
          height: "5vh",
          width: "16px",
          background: "url('/textures/real-carbon-fibre.png')",
          backgroundColor: "#000",
          boxShadow: "inset 0 0.5vh 1vh #AAA",
          borderTopLeftRadius: "0.25rem",
          borderBottomLeftRadius: "0.25rem",
        }}
      />
    </motion.div>
  );
};

const MiddleGrid = ({ side }) => {
  return (
    <div
      style={{
        backgroundColor: "#040",
        height: "18vh",
        marginTop: "-3.5vh",
        marginLeft: side === "left" ? "3vw" : 0,
        marginRight: side === "right" ? "3vw" : 0,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "url('textures/3px-tile.png')",
        }}
      ></div>
    </div>
  );
};

const ContentContainer = ({
  contentTitle,
  font,
}) => {
  
  const { selectedExampleMenu, setSelectedExampleMenu } =
    useContext(MenuContext);

  const [sect0IsOpen, setSect0IsOpen] = useState(true);
  const [sect1IsOpen, setSect1IsOpen] = useState(false);
  const [sect2IsOpen, setSect2IsOpen] = useState(false);
  const [sect3IsOpen, setSect3IsOpen] = useState(false);
  const [sect4IsOpen, setSect4IsOpen] = useState(false);
  const [sect5IsOpen, setSect5IsOpen] = useState(false);
  const [sect6IsOpen, setSect6IsOpen] = useState(false);

  const resetSectionsToBeginning = () => {
    setSect0IsOpen(true);
    setSect1IsOpen(false);
    setSect2IsOpen(false);
    setSect3IsOpen(false);
    setSect4IsOpen(false);
    setSect5IsOpen(false);
    setSect6IsOpen(false);
  };

  const checkSectOpen = (pos) => {
    switch (pos) {
      case 0:
        return sect0IsOpen;
        break;
      case 1:
        return sect1IsOpen;
        break;
      case 2:
        return sect2IsOpen;
        break;
      case 3:
        return sect3IsOpen;
        break;
      case 4:
        return sect4IsOpen;
        break;
      case 5:
        return sect5IsOpen;
        break;
      case 6:
        return sect6IsOpen;
        break;
    }
  };

  const openSection = (pos) => {
    switch (pos) {
      case 0:
        setSect0IsOpen(true);
        break;
      case 1:
        setSect1IsOpen(true);
        break;
      case 2:
        setSect2IsOpen(true);
        break;
      case 3:
        setSect3IsOpen(true);
        break;
      case 4:
        setSect4IsOpen(true);
        break;
      case 5:
        setSect5IsOpen(true);
        break;
      case 6:
        setSect6IsOpen(true);
        break;
    }
  };

  const closeSection = (pos) => {
    switch (pos) {
      case 0:
        setSect0IsOpen(false);
        break;
      case 1:
        setSect1IsOpen(false);
        break;
      case 2:
        setSect2IsOpen(false);
        break;
      case 3:
        setSect3IsOpen(false);
        break;
      case 4:
        setSect4IsOpen(false);
        break;
      case 5:
        setSect5IsOpen(false);
        break;
      case 6:
        setSect6IsOpen(false);
        break;
    }
  };

  const dropdownBtn = {
    width: "90%",
    marginBottom: "1.2rem",
    padding: "1rem",
    border: "solid 1px #0D0",
    borderRadius: "24px",
    textAlign: "center",
    background: "rgba(0,0,0,0.4)",
    color: "#0D0",
  };

  return (
    <motion.div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        left: "50vw",
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.3, 0, 0.6, 0, 0.8, 0, 0, 0.3, 0.6, 0.8, 0.6, 0.8, 1],
      }}
      transition={{ delay: 3 }}
    >
      <div
        style={{
          width: "70%",
          maxWidth: "640px",
          height: "50vh",
          margin: "0 auto",
          marginTop: "27vh",
          color: "#0D0",
          padding: "0rem 1rem",
          overflow: "hidden",
          fontFamily: font,
        }}
      >
        <div
          style={{
            overflow: "auto",
            width: "100%",
            height: "100%",
            paddingTop: " 1rem",
            paddingRight: "4vw",
            paddingLeft: "1vw",
            overflowX: "hidden",
            overflowY: "scroll",
            fontFamily: "Tahoma",
          }}
        >
          {content.map((item) => {
            return item.title === contentTitle
              ? item.sections.map((section, i) => {
                  return (
                    <motion.div
                      style={dropdownBtn}
                      key={i}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "2rem",
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "120%",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          checkSectOpen(i) ? closeSection(i) : openSection(i)
                        }
                      >
                        <div style={{ margin: "0 1rem" }} />
                        {section.sectionTitle}
                        <div style={{ marginRight: "1rem" }}>
                          {checkSectOpen(i) ? (
                            <span>&#11165;</span>
                          ) : (
                            <span>&#11167;</span>
                          )}
                        </div>
                      </div>
                      {checkSectOpen(i) ? (
                        <>
                          <div
                            style={{
                              fontSize: "0.9rem",
                              width: "100%",
                            }}
                          >
                            {section.sectionContent
                              ? section.sectionContent.map((paragraph, j) => {
                                  return <p key={j}>{paragraph}</p>;
                                })
                              : null}
                          </div>
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "space-around",
                            }}
                          >
                            {section.sectionButtons &&
                              section.sectionButtons.map((button, k) => {
                                return (
                                  <motion.div
                                    key={k}
                                    style={{
                                      maxWidth: "100px",
                                      height: "40px",
                                      border: "solid 1px #0D0",
                                      borderRadius: "8px",
                                      background: "rgba(0,0,0,0)",
                                      color: "#0D0",
                                      cursor: "pointer",
                                    }}
                                    whileHover={{
                                      background: "rgba(128,255,128, 0.8)",
                                      color: "#040",
                                    }}
                                    whileTap={{
                                      background: "rgba(128,255,128, 0.8)",
                                      color: "#040",
                                      scale: 1.05,
                                    }}
                                  >
                                    {button.buttonText}
                                  </motion.div>
                                );
                              })}
                          </div>
                        </>
                      ) : null}
                    </motion.div>
                  );
                })
              : null;
          })}
          <div style={{ marginBottom: "2rem" }}>
            <motion.div
              style={{
                width: "90%",
                maxWidth: "400px",
                height: "40px",
                border: "solid 3px #0D0",
                borderRadius: "8px",
                background: "rgba(0,0,0,0)",
                color: "#0D0",
                cursor: "pointer",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              whileHover={{
                background: "rgba(128,255,128, 0.8)",
                color: "#040",
              }}
              whileTap={{
                background: "rgba(128,255,128, 0.8)",
                color: "#040",
                scale: 1.05,
              }}
              onClick={() => setSelectedExampleMenu("examples")}
            >
              <span>
                Click here to check out some examples!{selectedExampleMenu}!
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TitleContainer = ({ font, itemTitle }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        left: "50vw",
      }}
    >
      <motion.div
        style={{
          width: "79vw",
          maxWidth: "640px",
          height: "12vh",
          margin: "0 auto",
          marginTop: "16vh",
          color: "#BB8",
          fontFamily: font,
          fontSize: "1.2rem",
          textAlign: "center",
          textShadow: "1px 1px #440, -1px -1px #FFB, -1px 1px #440",
        }}
      >
        <h2>{itemTitle}</h2>
      </motion.div>
    </div>
  );
};

const ContentViewer = ({
  itemTitle,
  font,
  setPlanet,
  setContentViewerOpen,
}) => {
  const { selectedExampleMenu, setSelectedExampleMenu } =
    useContext(MenuContext);
  const size = useWindowSize();

  return (
    <div
      style={{
        width: "200vw",
        height: "100vh",
        margin: "0 auto",
        position: "absolute",
        zIndex: "97",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <TitleContainer font={font} itemTitle={itemTitle} />
      <ContentContainer
        contentTitle={itemTitle}
        font={font}
      />
      <div
        id="layer1"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingTop: "2vh",
        }}
      >
        <div
          style={{
            width: "45vw",
            maxWidth: "400px",
            height: "14vh",
            background: "url('/textures/brushed-alum.png')",
            backgroundColor: "#A80",
            marginTop: "10vh",
            borderTopLeftRadius: "3vw",
            boxShadow: "inset 1vw 0 0vw rgba(96,96,0,0.2)",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: "3vw",
              boxShadow: "inset 0vw 1vw 0vw rgba(255,255,255,0.2)",
            }}
          >
            <LeftArm time="4" />
          </div>
        </div>
        <motion.div
          style={{
            height: "14vh",
            zIndex: "95",
            textAlign: "center",
          }}
          initial={{
            width: "110vw",
          }}
          animate={{
            width: "0",
          }}
          transition={{
            delay: "1",
            duration: "1",
            ease: "anticipate",
          }}
        ></motion.div>
        <div
          style={{
            width: "45vw",
            maxWidth: "400px",
            height: "14vh",
            background: "url('/textures/brushed-alum.png')",
            backgroundColor: "#A80",
            marginTop: "10vh",
            borderTopRightRadius: "3vw",
            boxShadow: "inset -1vw 1vw 0vw rgba(255,255,255,0.2)",
          }}
        >
          <RightArm time="4" />
        </div>
      </div>

      <div
        id="layer2"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "45vw",
            maxWidth: "400px",
            height: "18vh",
            background: "url('/textures/brushed-alum.png')",
            backgroundColor: "#A80",
            boxShadow: "inset 1vw 0 0vw rgba(96,96,0,0.2)",
          }}
        >
          <LeftArm time="3.9" />
          <MiddleGrid side="left" />
        </div>
        <motion.div
          style={{
            height: "18vh",
          }}
          initial={{
            width: "110vw",
          }}
          animate={{
            width: "0",
          }}
          transition={{
            delay: "1.25",
            duration: "1",
            ease: "anticipate",
          }}
        ></motion.div>
        <div
          style={{
            width: "45vw",
            maxWidth: "400px",
            height: "18vh",
            background: "url('/textures/brushed-alum.png')",
            backgroundColor: "#A80",
            boxShadow: "inset -1vw 0 0vw rgba(255,255,255,0.2)",
          }}
        >
          <RightArm time="3.9" />
          <MiddleGrid side="right" />
        </div>
      </div>

      <div
        id="layer3"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "45vw",
            maxWidth: "400px",
            height: "18vh",
            background: "url('/textures/brushed-alum.png')",
            backgroundColor: "#A80",
            boxShadow: "inset 1vw 0 0vw rgba(96,96,0,0.2)",
          }}
        >
          <LeftArm time="3.8" />
          <MiddleGrid side="left" />
        </div>
        <motion.div
          style={{
            height: "18vh",
          }}
          initial={{
            width: "110vw",
          }}
          animate={{
            width: "0",
          }}
          transition={{
            delay: "1.5",
            duration: "1",
            ease: "anticipate",
          }}
        ></motion.div>
        <div
          style={{
            width: "45vw",
            maxWidth: "400px",
            height: "18vh",
            background: "url('/textures/brushed-alum.png')",
            backgroundColor: "#A80",
            boxShadow: "inset -1vw 0 0vw rgba(255,255,255,0.2)",
          }}
        >
          <RightArm time="3.8" />
          <MiddleGrid side="right" />
        </div>
      </div>

      {size.height > 320 ? (
        <div
          id="layer4"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "45vw",
              maxWidth: "400px",
              height: "18vh",
              background: "url('/textures/brushed-alum.png')",
              backgroundColor: "#A80",
              boxShadow: "inset 1vw 0 0vw rgba(96,96,0,0.2)",
            }}
          >
            <LeftArm time="3.7" />
            <MiddleGrid side="left" />
          </div>
          <motion.div
            style={{
              height: "18vh",
            }}
            initial={{
              width: "110vw",
            }}
            animate={{
              width: "0",
            }}
            transition={{
              delay: "1.75",
              duration: "1",
              ease: "anticipate",
            }}
          ></motion.div>
          <div
            style={{
              width: "45vw",
              maxWidth: "400px",
              height: "18vh",
              background: "url('/textures/brushed-alum.png')",
              backgroundColor: "#A80",
              boxShadow: "inset -1vw 0 0vw rgba(255,255,255,0.2)",
            }}
          >
            <RightArm time="3.7" />
            <MiddleGrid side="right" />
          </div>
        </div>
      ) : null}

      <div
        id="layer5"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "45vw",
            maxWidth: "400px",
            height: "12vh",
            background: "url('/textures/brushed-alum.png')",
            backgroundColor: "#A80",
            marginBottom: "6vh",
            borderBottomLeftRadius: "3vw",
            boxShadow: "inset 1vw -1vw 0 rgba(96,96,0,0.2)",
            zIndex: 96,
          }}
        >
          <LeftArm time="3.6" />
          <div
            style={{
              float: "right",
              height: "80%",
              width: "100px",
              maxWidth: "100%",
              background: "#B00",
              marginTop: "-3vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "0.25rem",
              borderRadius: "0.25rem",
              fontFamily: font,
              fontWeight: "bold",
              color: "white",
              zIndex: "96",
            }}
            onClick={() => setContentViewerOpen(false)}
          >
            Back
          </div>
        </div>
        <motion.div
          style={{
            height: "12vh",
          }}
          initial={{
            width: "110vw",
          }}
          animate={{
            width: "0",
          }}
          transition={{
            delay: "2",
            duration: "1",
            ease: "anticipate",
          }}
        ></motion.div>
        <div
          style={{
            width: "45vw",
            maxWidth: "400px",
            height: "12vh",
            background: "url('/textures/brushed-alum.png')",
            backgroundColor: "#A80",
            marginBottom: "6vh",
            borderBottomRightRadius: "3vw",
            boxShadow: "inset -1vw 0 0 rgba(255,255,255,0.2)",
            zIndex: 96,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderBottomRightRadius: "3vw",
              boxShadow: "inset 0vw -1vw 0vw rgba(96,96,0,0.2)",
            }}
          >
            <RightArm time="3.6" />
            <div
              style={{
                height: "80%",
                width: "100px",
                maxWidth: "100%",
                background: "#040",
                marginTop: "-3vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "0.25rem",
                borderRadius: "0.25rem",
              }}
            >
              Proceed
            </div>
          </div>
        </div>
      </div>
      <motion.div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "#000",
          zIndex: -1,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{}}
      />
    </div>
  );
};

export default ContentViewer;

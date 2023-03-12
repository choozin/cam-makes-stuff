import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";

import { MenuContext } from "../../contexts/MenuContext";

const GoBackButton = ({
  hoveredExample,
  setHoveredExample,
  selectedExample,
}) => {

  const { selectedExampleMenu, setSelectedExampleMenu } =
    useContext(MenuContext);

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={childVariants}
      initial="hidden"
      animate={selectedExampleMenu ? "visible" : "hidden"}
      whileHover={selectedExampleMenu ? { opacity: 1, scale: 1.05 } : null}
      whileTap={{}}
      onMouseEnter={() => setHoveredExample("goback")}
      onMouseLeave={() => setHoveredExample(null)}
      key="goback"
      style={{
        flexGrow: "1",
        minWidth: "300px",
        height: 'auto',
        margin: "2vw",
        boxShadow: "0 0 0.15rem 0.15rem rgba(0,0,0,0.4) inset",
        background: "#333",
        position: "relative",
        border: "solid #B33 0.3rem",
        borderRadius: "17px",
        overflow: "hidden",
      }}
      onClick={() => setSelectedExampleMenu(null)}
    >
      <motion.div
        initial={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        animate={hoveredExample === "goback" ? { opacity: 0 } : { opacity: 1 }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor:
            hoveredExample === "goback"
              ? "rgba(255,255,255,1)"
              : "rgba(0,0,0,0.2)",
        }}
      >
        <span
          style={{
            fontSize: "4rem",
            fontFamily: "Tahoma",
            color: "#B33",
            textShadow:
              "1px 1px black, -1px 1px black, 1px -1px black, -1px =1px black, ",
            paddingBottom: "10%",
            textAlign: "center",
          }}
        >
          Go <br /> Back
        </span>
      </motion.div>
    </motion.div>
  );
};

const ExamplesMenu = () => {
  const { selectedExampleMenu, setSelectedExampleMenu } =
    useContext(MenuContext);

  const examples = [
    {
      title: "title one",
      imgPath: "boardgame-receipt.png",
      url: "url",
      description: "description",
    },
    {
      title: "title two",
      imgPath: "click-n-grow.jpg",
      url: "url",
      description: "description",
    },
    {
      title: "title three",
      imgPath: "flexbox.png",
      url: "url",
      description: "description",
    },
    {
      title: "title four",
      imgPath: "boardgame-receipt.png",
      url: "url",
      description: "description",
    },
    {
      title: "title five",
      imgPath: "click-n-grow.jpg",
      url: "url",
      description: "description",
    },
    {
      title: "title six",
      imgPath: "flexbox.png",
      url: "url",
      description: "description",
    },
  ];

  const parentVariants = {
    visible: {
      transition: {
        delay: 4,
        staggerChildren: 0.17,
      },
    },
    /*hidden: {
        opacity: '0', 
    }*/
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const [hoveredExample, setHoveredExample] = useState(null);
  const [selectedExample, setSelectedExample] = useState(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobile(/Mobi/i.test(userAgent));
  }, []);

  return (
    <motion.div
      variants={childVariants}
      animate={selectedExampleMenu ? "visible" : "hidden"}
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        zIndex: "99",
        top: 0,
        left: 0,
        display: selectedExampleMenu ? 'flex' : 'none',
        flexWrap: "wrap",
        overflow: "scroll",
        backdropFilter: isMobile ? null : "blur(9px)",
      }}
    >
      <GoBackButton
        hoveredExample
        setHoveredExample={() => setHoveredExample()}
      />
      {examples.map((example) => {
        return (
          <motion.div
            variants={childVariants}
            animate={selectedExampleMenu ? "visible" : "hidden"}
            whileHover={
              selectedExampleMenu ? { opacity: 1, scale: 1.05 } : null
            }
            whileTap={{}}
            onMouseEnter={() => setHoveredExample(example.title)}
            onMouseLeave={() => setHoveredExample(null)}
            key={example.title}
            style={{
              flexGrow: "1",
              minWidth: "300px",
              minHeight: "200px",
              margin: "2vw",
              boxShadow: "0 0 0.15rem 0.15rem rgba(0,0,0,0.4) inset",
              backgroundImage: "url('/img/examples/" + example.imgPath + "')",
              backgroundSize: "auto auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              position: "relative",
              borderRadius: "17px",
              overflow: "hidden",
            }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={
                hoveredExample === example.title
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
              style={{
                color: "white",
                textShadow:
                  "1px 1px 0 black, -1px 1px 0 black, 1px -1px 0 black, -1px -1px 0 black",
                fontSize: "4rem",
                fontFamily: "Tahoma",
                position: "absolute",
                top: "30%",
                width: "100%",
                textAlign: "center",
              }}
            >
              {example.title}{window.navigator.userAgent.toString()}
            </motion.span>
            <motion.div
              initial={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
              animate={
                hoveredExample === example.title
                  ? { opacity: 0 }
                  : { opacity: 1 }
              }
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "right",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.2)",
                backdropFilter: "blur(1px)",
              }}
            >
              <span
                style={{
                  fontSize: "2rem",
                  fontFamily: "Tahoma",
                  color: "white",
                  textShadow:
                    "1px 1px black, -1px 1px black, 1px -1px black, -1px =1px black, ",
                  opacity: 0.7,
                  margin: "0.5rem",
                }}
              >
                {example.title}
              </span>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ExamplesMenu;

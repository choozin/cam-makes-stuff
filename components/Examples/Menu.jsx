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
        boxShadow: "0 0 0.5rem 0.5rem rgba(0,0,0,1) inset",
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
      title: "Interior Painting Quote Calculator",
      keywords: ['calculator', 'quote', 'materialUI', 'dynamic', 'form'],
      imgPath: "boardgame-receipt.png",
      url: "url",
      description: "This app provides a quick quote based on a number of variables, and includes some basic styling upgrades.",
    },
    {
      title: "Business Card Generator",
      keywords: ['framermotion', 'quote', 'materialUI', 'dynamic', 'form', 'fancy'],
      imgPath: "boardgame-receipt.png",
      url: "url",
      description: "This fancy app allows users to customize a business card, and send the specs to a printing company.",
    },
    {
      title: "Construction Material Cost Calculator",
      keywords: ['calculator', 'quote', 'dynamic', 'form', 'backend'],
      imgPath: "click-n-grow.jpg",
      url: "url",
      description: "This simple app quickly gives the user a cost breakdown for materials, and includes a back-end where values can be edited by the admin.",
    },
    {
      title: "Solar Parts List Generator",
      keywords: ['calculator', 'materialUI', 'dynamic'],
      imgPath: "flexbox.png",
      url: "url",
      description: "This app generates a list of parts required to build an off-grid solar setup, according to user requirements.",
    },
    {
      title: "Zip/Postal Code Lookup",
      keywords: ['API', 'Maps',],
      imgPath: "boardgame-receipt.png",
      url: "url",
      description: "This app connects to the Google Maps API to retrieve data based on user inputs.",
    },
    {
      title: "Magician's Landing Page",
      keywords: ['landingpage', 'framermotion', 'dynamic', 'serverless'],
      imgPath: "click-n-grow.jpg",
      url: "url",
      description: "This webpage offers fans a quick and fun way to buy tickets & learn more about the magician.",
    },
    {
      title: "Travel Blog Landing Page",
      keywords: ['landingpage', 'video', 'serverless'],
      imgPath: "flexbox.png",
      url: "url",
      description: "This simple landing page funnels users toward a call to action.",
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
        backdropFilter: "blur(9px)",
      }}
    >
      <GoBackButton
        hoveredExample
        setHoveredExample={() => setHoveredExample()}
      />
      {examples.sort((a, b) => (a.title > b.title) ? 1 : -1).map((example) => {
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
            onClick={() => setSelectedExample(example.title)}
            key={example.title}
            style={{
              flexGrow: "1",
              minWidth: "300px",
              minHeight: "300px",
              margin: "1.5vw",
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
                  "1px 1px 1px black, -1px 1px 1px black, 1px -1px 1px black, -1px -1px 1px black",
                fontSize: "3rem",
                fontFamily: "Tahoma",
                position: "absolute",
                left: '2%',
                top: '2%',
                width: "96%",
                height: '96%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: "center",
              }}
            >
              {example.title}<br/>
              <span style={{fontSize: '1rem'}}>{example.description}</span><br/>
              <div style={{
                minWidth: '100px',
                minHeight: '50px',
                background: 'white',
                border: 'solid 2px black',
                borderRadius: '1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.5rem',
                padding: '0 0.5rem',
                marginTop: '-3rem',
                cursor: 'pointer',
                zIndex: 1,
              }}
              onClick={() => alert('Going to: '+ example.url +'!')}>
                <span>Proceed</span>
              </div>
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
                backdropFilter: isMobile ? null : "blur(1px)",
              }}
            >
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "Tahoma",
                  fontWeight: 'bold',
                  color: "#FFF",
                  textShadow:
                    "1px 1px black, -1px 1px black, 1px -1px black, -1px -1px black",
                  opacity: 0.8,
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

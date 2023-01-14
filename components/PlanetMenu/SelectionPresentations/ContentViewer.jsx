import { useState, useEffect } from "react";

import { motion } from "framer-motion";

const RightArm = ({ time }) => {
  return (
    <motion.div
      style={{
        width: "50vw",
        height: "3vh",
        top: "8.5vh",
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
      transition={{ delay: time }}
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
        top: "8.5vh",
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
      transition={{ delay: time }}
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

const ContentViewer = () => {
  return (
    <div
      style={{
        width: "200vw",
        height: "100vh",
        margin: "0 auto",
        position: "absolute",
        zIndex: "98",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div
        id="layer1"
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
            height: "14vh",
            background: "url('/textures/brushed-alum.png')",
            backgroundColor: "#A80",
            marginTop: "6vh",
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
            height: "20vh",
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
            marginTop: "6vh",
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
            height: "20vh",
            background: "url('/textures/brushed-alum.png')",
            backgroundColor: "#A80",
            boxShadow: "inset 1vw 0 0vw rgba(96,96,0,0.2)",
          }}
        >
          <LeftArm time="3.9" />
        </div>
        <motion.div
          style={{
            height: "20vh",
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
            height: "20vh",
            background: "url('/textures/brushed-alum.png')",
            backgroundColor: "#A80",
            boxShadow: "inset -1vw 0 0vw rgba(255,255,255,0.2)",
          }}
        >
          <RightArm time="3.9" />
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
            height: "20vh",
            background: "url('/textures/brushed-alum.png')",
            backgroundColor: "#A80",
            boxShadow: "inset 1vw 0 0vw rgba(96,96,0,0.2)",
          }}
        >
          <LeftArm time="3.8" />
        </div>
        <motion.div
          style={{
            height: "20vh",
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
            height: "20vh",
            background: "url('/textures/brushed-alum.png')",
            backgroundColor: "#A80",
            boxShadow: "inset -1vw 0 0vw rgba(255,255,255,0.2)",
          }}
        >
          <RightArm time="3.8" />
        </div>
      </div>

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
            height: "20vh",
            background: "url('/textures/brushed-alum.png')",
            backgroundColor: "#A80",
            boxShadow: "inset 1vw 0 0vw rgba(96,96,0,0.2)",
          }}
        >
          <LeftArm time="3.7" />
        </div>
        <motion.div
          style={{
            height: "20vh",
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
            height: "20vh",
            background: "url('/textures/brushed-alum.png')",
            backgroundColor: "#A80",
            boxShadow: "inset -1vw 0 0vw rgba(255,255,255,0.2)",
          }}
        >
          <RightArm time="3.7" />
        </div>
      </div>

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
            height: "19vh",
            background: "url('/textures/brushed-alum.png')",
            backgroundColor: "#A80",
            marginBottom: "1vh",
            borderBottomLeftRadius: "3vw",
            boxShadow: "inset 1vw -1vw 0 rgba(96,96,0,0.2)",
          }}
        >
          <LeftArm time="3.6" />
        </div>
        <motion.div
          style={{
            height: "20vh",
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
            height: "19vh",
            background: "url('/textures/brushed-alum.png')",
            backgroundColor: "#A80",
            marginBottom: "1vh",
            borderBottomRightRadius: "3vw",
            boxShadow: "inset -1vw 0 0 rgba(255,255,255,0.2)",
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
          </div>
        </div>
      </div>
      <motion.div style={{ position: 'absolute', width: '100%', height: '100%', background: '#000', zIndex: -1}}
      initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ }}/>
    </div>
  );
};

export default ContentViewer;

import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import useWindowSize from "../../../utilities/useWindowSize";

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

const ContentContainer = ({ font }) => {
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
          width: "79vw",
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
            paddingRight: "10vw",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Landing Pages</h3>
          <p>
            Landing pages are standalone web pages that are designed to capture
            a visitor&apos;s attention and convert them into a lead or customer. They
            are typically used as part of a marketing campaign and are designed
            to be highly targeted, relevant and focused on a specific action.
          </p>
          <p>
            One of the key benefits of landing pages is that they can help
            brands and campaigns attract attention by providing a clear and
            compelling call-to-action. This can be in the form of a sign-up
            form, a purchase button, or a contact form. By providing a clear and
            direct path for the visitor to take, landing pages can increase the
            likelihood of conversion.
          </p>
          <p>
            Being memorable is also an important factor in making a landing page
            effective. A memorable landing page can stand out from the
            competition and leave a lasting impression on the visitor. This can
            be achieved through a unique and compelling design, engaging copy,
            and a clear and consistent message.
          </p>
          <p>
            In summary, landing pages are an effective tool for attracting
            attention and converting visitors into leads or customers. By
            providing a clear call-to-action and being memorable, landing pages
            can help brands and campaigns achieve their goals.
          </p>
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

const ContentViewer = ({ itemTitle, font, setPlanet, setContentViewerOpen }) => {
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
      <ContentContainer font={font} />
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
              fontWeight: 'bold',
              color: 'white',
              zIndex: '100',
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

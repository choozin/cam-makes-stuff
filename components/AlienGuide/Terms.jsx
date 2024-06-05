import { useState, useEffect, useContext } from "react";

import { motion } from "framer-motion";

import { GeneralContext } from '../../contexts/generalContext';

const Buttons = ({ btns, setTerm }) => {
    
  const btn3D = {
    alignItems: 'center',
    //background-color: initial;
    backgroundImage: 'linear-gradient(rgba(179, 132, 201, .84), rgba(57, 31, 91, .84) 50%)',
    borderRadius: '42px',
    border: 'solid 1px #333',
    boxShadow: 'rgba(64, 64, 64, 0.24) 0 2px 2px,rgba(196, 196, 196, 0.4) 0 8px 12px',
    color: '#FFFFFF',
    cursor: 'pointer',
    display: 'flex',
    fontFamily: 'Quicksand,sans-serif',
    fontSize: '18px',
    fontWeight: '700',
    justifyContent: 'center',
    letterSpacing: '.04em',
    lineHeight: '16px',
    margin: '0.5rem',
    padding: '18px 18px',
    textAlign: 'center',
    textDecoration: 'none',
    textShadow: 'rgba(255, 255, 255, 0.4) 0 0 4px,rgba(255, 255, 255, 0.2) 0 0 12px,rgba(57, 31, 91, 0.6) 1px 1px 4px,rgba(57, 31, 91, 0.32) 4px 4px 16px',
  }

  const standardBtn = {
    padding: '9px',
    border: 'solid 3px #888',
    borderRadius: '10px',
    backgroundColor: '#EEE', color: '#333',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    margin: '0.25rem',

  }

  const standardBtnClicked = {
    padding: '9px',
    border: 'solid 3px #888',
    borderRadius: '10px',
    backgroundColor: '#333', color: '#EEE',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    margin: '0.25rem',

  }
  
    const [btnHovered, setBtnHovered] = useState(null);

    //'linear-gradient(#BBB, #222 50%)' : 'linear-gradient(#EEE, #555 50%)'

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'middle',
            flexWrap: 'wrap',
        }}>
            {btns.map((btn) => {
                return <div key={btn.label} onClick={() =>  setTerm(btn.term) } onMouseEnter={() => setBtnHovered(btn.label)} onMouseLeave={() => setBtnHovered(null)} style={btnHovered === btn.label ? standardBtnClicked : standardBtn}>{btn.label}</div>
            })}
        </div> 
    )
}

const Section = ({ children, header, btns, }) => {
  const { term, setTerm, updateTerm, cookiesAccepted, setCookiesAccepted, createCookie, deleteCookies, checkIfCookieExists, acceptCookies } = useContext(GeneralContext);

  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: 'center',
        fontFamily: 'Arial',
      }}
    >
        <h3 style={{
            
        }}>{header}</h3>
      {children}
      <Buttons btns={btns} setTerm={setTerm}/>
    </motion.div>
  );
};

const Terms = ({ term, setTerm }) => {
  const [termButtons, setTermButtons] = useState([]);

  switch (term) {
    
    case "Welcome":
      let btns = [
        {
          label: "More Tips For Browsing This Website",
          color: 'purple',
          term: "Tips",
          function: null,
          url: null,
        },
        {
          label: "Improving Your Workflow Efficiency",
          color: 'white',
          term: 'Workflow',
          function: null,
          url: null,
        },
        {
          label: "Providing A Great User Experience",
          color: 'white',
          term: 'User Experience',
          function: null,
          url: null,
        },
        {
          label: "Leaving A Lasting Impression",
          color: 'white',
          term: "Lasting Impression",
          function: null,
          url: null,
        },
        {
          label: "Contacting Cam",
          color: 'grey',
          term: "Contact",
          function: null,
          url: null,
        },
        {
          label: "Let me browse around on my own.",
          color: 'green',
          term: null,
          function: null,
          url: null,
        },
        {
          label: "Take me to the menu, already!",
          color: 'orange',
          term: 'Antagonize',
          function: null,
          url: null,
        },
      ];

      return (
        <Section header="Welcome to Cam's Cosmic Code" btns={btns} setTerm={setTerm}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Thanks for visiting!
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            I'm Cam, a Web Developer from Canada who specializes in developing
            custom digital products for businesses & organizations who are looking to take their operations to the next level.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            This website is meant to showcase a range of my skills - and hopefully inspire you to think a bit about how creative structure and design can help improve your own workflow.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            You can <span style={{ fontWeight: 'bold' }} >click on my space helmet</span> at any time if you need help or want some clarification on something.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            How can I help you today?
          </motion.p>
        </Section>
      );

      case "Cookies":
        let cookiesBtns = [
          {
            label: "Accept Cookies",
            color: null,
            term: null,
            function: "Accept Cookies",
            url: null,
          },
          {
            label: "Don't Accept Cookies",
            color: null,
            term: null,
            function: "Don't Accept Cookies",
            url: null,
          },
          {
            label: "I don't care about cookies!",
            color: null,
            term: null,
            function: "Don't Accept Cookies",
            url: null,
          },
        ];
  
        return (
          <Section header="First Timer, eh?" btns={btns} setTerm={setTerm}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Thanks for 
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              I'm Cam, a Web Developer from Canada who specializes in developing
              custom digital products for small and medium-sized businesses.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
            >
              How can I help you today?
            </motion.p>
          </Section>
        );
  
      default : 
    let btns1 = [
        {
          label: "View the Introduction",
          color: null,
          term: "Welcome",
          function: null,
          url: null,
        },
        {
          label: "Tips for Browsing this Website",
          color: null,
          term: "Tips",
          function: null,
          url: null,
        },
      ];
      return (
        <Section header="How can I be of assistance?" btns={btns1} setTerm={setTerm}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Select one of the options below or use the searchbar to find a specific page.
          </motion.p>
        </Section>
      );
  }
};

export default Terms;
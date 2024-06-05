import React, { createContext, useState } from "react";

const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {
    
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

    const createCookie = () => {

    }

    const deleteCookies = () => {

    }

    const checkIfCookieExists = () => {

    }

    const acceptCookies = () => {

    }


  const [term, setTerm] = useState(null);

  const updateTerm = (newTerm) => {
    setTerm(newTerm);
  };

  return (
    <GeneralContext.Provider value={{ term, setTerm, updateTerm, cookiesAccepted, setCookiesAccepted, createCookie, deleteCookies, checkIfCookieExists, acceptCookies }}>
      {children}
    </GeneralContext.Provider>
  );
};

export { GeneralContext, GeneralProvider };

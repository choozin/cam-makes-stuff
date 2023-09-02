import { useState, useEffect } from "react";
import Image from "next/image";

import TextField from "@mui/material/TextField";
import Button, { ButtonProps } from "@mui/material/Button";
import Box from "@mui/material/Box";

import { motion } from "framer-motion";

import HIExpressCardFront from "../../../public/img/examples/businesscards/HIExpressCardFront.png";
import HIExpressCardBack from "../../../public/img/examples/businesscards/HIExpressCardBack.png";

import logo from "../../../public/img/examples/businesscards/logo.png";
import SpaceShuttle from "../../../public/svg/space-shuttle.svg";

import wood from "../../../public/textures/purty-wood.png";
import cardboard from "../../../public/textures/cardboard-flat.png";
import leather from "../../../public/textures/leather.png";
import aluminum from "../../../public/textures/light-aluminum.png";
import paper from "../../../public/textures/paper-2.png";
import pooltable from "../../../public/textures/pool-table.png";

import "@fontsource/roboto";
import "@fontsource/manrope";
import "@fontsource/maven-pro";
import "@fontsource/bakbak-one";
import "@fontsource/great-vibes";

import MenuIcon from "@mui/icons-material/Menu";

const CardPreview = ({
  name,
  position,
  company,
  locator,
  address,
  city,
  province,
  postalCode,
  phoneNumber,
  extension,
  cellNumber,
  faxNumber,
  email,
  website,
  zoomLevel,
  frontBackgroundColor,
  backBackgroundColor,
  logo,
}) => {
  const [showCardFront, setShowCardFront] = useState(true);

  return (
    <motion.div
      drag
      dragConstraints={{ left: -200, right: 200, bottom: 120, top: -120 }}
      dragElastic={0.1}
      dragMomentum={false}
      animate={{ scale: zoomLevel }}
      transition={{ duration: 0.8 }}
      style={{
        width: "336px",
        height: "192px",
        backgroundColor: frontBackgroundColor,
        borderRadius: "0px",
        boxShadow: "0rem 1rem 2rem rgba(16, 16, 16, 0.8)",
      }}
      onDoubleClick={() => setShowCardFront(!showCardFront)}
    >
      <div
        style={{
          width: "336px",
          height: "192px",
          backgroundImage: 'url("/textures/paper-2.png")',
          opacity: "0.4",
          position: "absolute",
        }}
      ></div>
      {showCardFront ? (
        <motion.div>
          <div
            style={{
              position: "relative",
              display: "inline",
              left: "22.5px",
              top: "11px",
              color: "#1E4E90",
            }}
          >
            <span
              style={{
                fontSize: "29px",
                fontFamily: "Maven Pro",
                fontweight: "bold",
              }}
            >
              NICE TO
            </span>
            <br />
            <span
              style={{
                fontSize: "32px",
                fontFamily: "Bakbak One",
                lineHeight: "22px",
                color: "#2EA4D7",
                marginLeft: "1px",
              }}
            >
              GREET
            </span>
            <br />
            <span
              style={{
                fontSize: "29px",
                fontFamily: "Maven Pro",
                lineHeight: "26px",
                marginLeft: "3px",
              }}
            >
              YOU
            </span>
            <br />
          </div>
          <div
            style={{
              fontSize: "9.5px",
              fontFamily: "Verdana",
              margin: "24px",
              marginLeft: "155px",
              marginTop: "-75px",
              color: "#1E4E90",
              opacity: "1",
            }}
          >
            <span style={{ fontWeight: "bold", letterSpacing: "-0.4px" }}>
              {name}
            </span>
            <br />
            <span style={{ lineHeight: "14px", letterSpacing: "-0.3px" }}>
              {position}
            </span>
            <br />
            <span style={{ fontWeight: "bold", lineHeight: "24px" }}></span>
            <br />
            <span
              style={{
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "-0.4px",
              }}
            >
              {company}
            </span>
            <br />
            <span
              style={{
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "-0.4px",
              }}
            >
              {locator}
            </span>
            <br />
            <span
              style={{
                letterSpacing: "-0.2px",
                lineHeight: "16px",
                letterSpacing: "-0.1px",
              }}
            >
              {address}
            </span>
            <br />
            <span
              style={{
                display: "block",
                lineHeight: "7px",
                letterSpacing: "-0.3px",
              }}
            >
              {city}, {province}{" "}
              {[
                postalCode
                  .replace(/[^a-z0-9]/gi, "")
                  .slice(0, 3)
                  .toUpperCase(),
                " ",
                postalCode
                  .replace(/[^a-z0-9]/gi, "")
                  .slice(3, 6)
                  .toUpperCase(),
              ].join("")}
            </span>
            <br />
            <div style={{ height: "5px" }} />
            <span
              style={{
                display: "block",
                lineHeight: "1px",
                letterSpacing: "-0.3px",
              }}
            >
              T:{" "}
              {"(" +
                [
                  phoneNumber.replace(/[^0-9]/gi, "").slice(0, 3),
                  ") ",
                  phoneNumber.replace(/[^0-9]/gi, "").slice(3, 6),
                  " ",
                  phoneNumber.replace(/[^0-9]/gi, "").slice(6, 10),
                ].join("")}{" "}
              {extension &&
                "Ext. " + extension.replace(/[^0-9]/gi, "").slice(0, 6)}
            </span>
            <br />
            <span
              style={{
                display: "block",
                lineHeight: "1px",
                letterSpacing: "-0.3px",
              }}
            >
              {cellNumber &&
                "C: " +
                  "(" +
                  [
                    cellNumber.replace(/[^0-9]/gi, "").slice(0, 3),
                    ") ",
                    cellNumber.replace(/[^0-9]/gi, "").slice(3, 6),
                    " ",
                    cellNumber.replace(/[^0-9]/gi, "").slice(6, 10),
                  ].join("")}
            </span>
            {cellNumber && <br />}
            <span
              style={{
                display: "block",
                lineHeight: "1px",
                letterSpacing: "-0.3px",
              }}
            >
              {faxNumber &&
                "F: " +
                  "(" +
                  [
                    faxNumber.replace(/[^0-9]/gi, "").slice(0, 3),
                    ") ",
                    faxNumber.replace(/[^0-9]/gi, "").slice(3, 6),
                    " ",
                    faxNumber.replace(/[^0-9]/gi, "").slice(6, 10),
                  ].join("")}
            </span>
            {faxNumber && <br />}
            <span
              style={{
                display: "block",
                lineHeight: "1px",
                letterSpacing: "-0.3px",
              }}
            >
              {email}
            </span>
            <br />
            <span
              style={{
                display: "block",
                lineHeight: "1px",
                letterSpacing: "-0.3px",
              }}
            >
              {website}
            </span>
            <br />
          </div>
        </motion.div>
      ) : (
        <motion.div>
          <div
            style={{
              width: "336px",
              height: "192px",
              background: backBackgroundColor,
            }}
          >
            <div
              style={{
                width: "336px",
                height: "192px",
                zIndex: "10",
                position: "absolute",
                backgroundImage: 'url("/textures/brushed-alum.png")',
                opacity: "0.1 ",
              }}
            ></div>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div style={{ border: 'dashed 0.1rem #EEF', width: '100px', height: '100px', color: '#EEF', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'Maven Pro' }} >
                <span>Your<br/>Logo<br/>Here</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const CardEditor = ({
  name,
  position,
  company,
  locator,
  address,
  city,
  province,
  postalCode,
  phoneNumber,
  extension,
  cellNumber,
  faxNumber,
  email,
  website,
  setName,
  setPosition,
  setCompany,
  setLocator,
  setAddress,
  setCity,
  setProvince,
  setPostalCode,
  setPhoneNumber,
  setExtension,
  setCellNumber,
  setFaxNumber,
  setEmail,
  setWebsite,
  setPersonalizationMenuOpen,
  setShowConfirmDesignButton,
  setZoomLevel,
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "0 1rem",
        background: "#FFF",
        backgroundImage: 'url("/textures/cardboard.png")',
        backgroundAttachment: "local",
        fontFamily: "Roboto",
      }}
    >
      <h3
        style={{
          width: "100%",
          textAlign: "center",
          fontFamily: "Great Vibes",
          fontSize: "2rem",
          lineHeight: "1rem",
        }}
      >
        Create Your Card
      </h3>
      <span>
        Enter your information into the input boxes below, and your personalized
        business card will automatically be generated. <br />
        <br />
        You will be able to confirm that it looks correct, and place your order
        information on the next page.
        <br />
        <br />* denotes a required field
      </span>
      <br />
      <TextField
        required
        label="Staff Name"
        defaultValue={name}
        variant="filled"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <TextField
        required
        label="Position Title"
        defaultValue={position}
        variant="filled"
        onChange={(e) => setPosition(e.target.value)}
      />
      <br />

      <TextField
        required
        label="Company Name"
        defaultValue={company}
        variant="filled"
        onChange={(e) => setCompany(e.target.value)}
      />
      <br />

      <TextField
        required
        label="Locator"
        defaultValue={locator}
        variant="filled"
        onChange={(e) => setLocator(e.target.value)}
      />
      <br />

      <TextField
        required
        label="Address"
        defaultValue={address}
        variant="filled"
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />

      <TextField
        required
        label="City"
        defaultValue={city}
        variant="filled"
        onChange={(e) => setCity(e.target.value)}
      />
      <br />

      <TextField
        required
        label="Province"
        defaultValue={province}
        variant="filled"
        onChange={(e) => setProvince(e.target.value)}
      />
      <br />

      <TextField
        required
        label="Postal Code"
        defaultValue={postalCode}
        variant="filled"
        onChange={(e) => setPostalCode(e.target.value)}
      />
      <br />

      <TextField
        required
        label="Phone Number"
        defaultValue={phoneNumber}
        variant="filled"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <br />

      <TextField
        label="Extension"
        defaultValue={extension}
        variant="filled"
        onChange={(e) => setExtension(e.target.value)}
      />
      <br />

      <TextField
        label="Cellphone Number"
        defaultValue={cellNumber}
        variant="filled"
        onChange={(e) => setCellNumber(e.target.value)}
      />
      <br />

      <TextField
        label="Fax Number"
        defaultValue={faxNumber}
        variant="filled"
        onChange={(e) => setFaxNumber(e.target.value)}
      />
      <br />

      <TextField
        required
        label="Email"
        defaultValue={email}
        variant="filled"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <TextField
        label="Website Address"
        defaultValue={website}
        variant="filled"
        onChange={(e) => setWebsite(e.target.value)}
      />
      <br />
      <Button
        variant="contained"
        size="large"
        color="success"
        onClick={() => {
          setPersonalizationMenuOpen(false);
          setShowConfirmDesignButton(true);
          setZoomLevel(2);
        }}
      >
        Ready for the Next Step
      </Button>
      <br />
    </div>
  );
};

const BusinessCards = () => {
  const [name, setName] = useState("Staff Name");
  const [position, setPosition] = useState("Staff Position");
  const [company, setCompany] = useState("Holiday Inn Express");
  const [locator, setLocator] = useState("London");
  const [address, setAddress] = useState("123 Fake St.");
  const [city, setCity] = useState("City");
  const [province, setProvince] = useState("ON");
  const [postalCode, setPostalCode] = useState("N5Y 1A1");
  const [phoneNumber, setPhoneNumber] = useState("555 555 5555");
  const [extension, setExtension] = useState();
  const [cellNumber, setCellNumber] = useState(null);
  const [faxNumber, setFaxNumber] = useState(null);
  const [email, setEmail] = useState("name@hiexpress.com");
  const [website, setWebsite] = useState("www.hiexpress.com");

  const [frontBackgroundColor, setFrontBackgroundColor] = useState("#99CCFA");
  const [backBackgroundColor, setBackBackgroundColor] = useState("#22B");

  const [documentMenuOpen, setDocumentMenuOpen] = useState(false);
  const [personalizationMenuOpen, setPersonalizationMenuOpen] = useState(true);
  const [orderDetailsMenuOpen, setOrderDetailsMenuOpen] = useState(false);

  const [zoomLevel, setZoomLevel] = useState(1);
  const [showConfirmDesignButton, setShowConfirmDesignButton] = useState(false);
  const [tipOpen, setTipOpen] = useState(true);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        backgroundImage: 'url("/textures/leather.png")',
        backgroundColor: "#080000",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
          zIndex: "10",
          paddingTop: "5px",
        }}
      >
        <div
          style={{
            marginLeft: "10px",
          }}
        >
          <span
            style={{
              fontSize: "28px",
              fontFamily: "Great Vibes",
              color: "#D0AD6C",
              textShadow: "0 0 1rem black, 0 0 1rem black",
              fontWeight: "light",
              marginLeft: "10px",
            }}
          >
            Custom Business Cards
          </span>
        </div>
        <div
          style={{
            cursor: "pointer",
            fontSize: "2.7rem",
            marginRight: "10px",
            color: "#D0AD6C",
            textShadow: "-1px -1px 0px rgba(255, 255, 255, 0.3), 1px 1px 0px rgba(0, 0, 0, 0.8)",
          }}
        >
          <MenuIcon color="inherit" fontSize="inherit" />
        </div>
      </div>

      {/*DOCUMENT MENU*/}
      <motion.div
        animate={{ x: documentMenuOpen ? -380 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          background: "#222",
          backgroundImage: "url('/textures/purty-wood.png')",
          boxShadow: "-24px 0px 12px rgba(48,48,48,0.4) inset",
          color: "#BBB",
          border: "none",
          height: documentMenuOpen ? "88vh" : "30vh",
          width: "24px",
          borderTopLeftRadius: "1rem",
          borderBottomLeftRadius: "0.25rem",
          cursor: "pointer",
          writingMode: "vertical-lr",
          textAlign: "left",
          paddingTop: "1rem",
          verticalAlign: "middle",
          position: "absolute",
          top: documentMenuOpen ? "10vh" : "10vh",
          right: "0px",
          paddingLeft: "4px",
          zIndex: "80",
          fontFamily: "Roboto",
        }}
        onClick={() => setDocumentMenuOpen(!documentMenuOpen)}
      >
        <span>{documentMenuOpen ? "Minimize" : "Document"}</span>
      </motion.div>

      <motion.div
        animate={{ x: documentMenuOpen ? -380 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          width: "380px",
          height: "88vh",
          backgroundColor: "rgba(250,250,250,1)",
          position: "absolute",
          right: "-380px",
          top: "10vh",
          zIndex: "100",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span>Document</span>
      </motion.div>

      {/*PERSONALIZATION MENU*/}
      <motion.div
        animate={{ x: personalizationMenuOpen ? -380 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          background: "#EEE",
          backgroundImage: 'url("/textures/purty-wood.png")',
          boxShadow: "-24px 0px 12px rgba(48,48,48,0.4) inset",
          color: "#444",
          border: "none",
          height: personalizationMenuOpen ? "88vh" : "30vh",
          width: "24px",
          borderTopLeftRadius: "1rem",
          borderBottomLeftRadius: "0.25rem",
          cursor: "pointer",
          writingMode: "vertical-lr",
          textAlign: "left",
          paddingTop: "1rem",
          verticalAlign: "middle",
          position: "absolute",
          top: personalizationMenuOpen ? "10vh" : "35vh",
          right: "0px",
          paddingLeft: "4px",
          zIndex: "80",
          fontFamily: "Roboto",
        }}
        onClick={() => setPersonalizationMenuOpen(!personalizationMenuOpen)}
      >
        <span>{personalizationMenuOpen ? "Minimize" : "Personalization"}</span>
      </motion.div>

      <motion.div
        animate={{ x: personalizationMenuOpen ? -380 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          width: "380px",
          height: "88vh",
          backgroundColor: "rgba(250,250,250,1)",
          position: "absolute",
          right: "-380px",
          top: "10vh",
          zIndex: "100",
          display: "flex",
          alignItems: "center",
        }}
      >
        <CardEditor
          setName={setName}
          setPosition={setPosition}
          setCompany={setCompany}
          setLocator={setLocator}
          setAddress={setAddress}
          setCity={setCity}
          setProvince={setProvince}
          setPostalCode={setPostalCode}
          setPhoneNumber={setPhoneNumber}
          setExtension={setExtension}
          setCellNumber={setCellNumber}
          setFaxNumber={setFaxNumber}
          setEmail={setEmail}
          setWebsite={setWebsite}
          setPersonalizationMenuOpen={setPersonalizationMenuOpen}
          setShowConfirmDesignButton={setShowConfirmDesignButton}
          setZoomLevel={setZoomLevel}
        />
      </motion.div>

      {/*ORDER DETAILS MENU*/}
      <motion.div
        animate={{ x: orderDetailsMenuOpen ? -380 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          background: "#222",
          backgroundImage: 'url("/textures/purty-wood.png")',
          boxShadow: "-24px 0px 12px rgba(48,48,48,0.4) inset",
          color: "#BBB",
          border: "none",
          height: orderDetailsMenuOpen ? "88vh" : "30vh",
          width: "24px",
          borderTopLeftRadius: "1rem",
          borderBottomLeftRadius: "0.25rem",
          cursor: "pointer",
          writingMode: "vertical-lr",
          textAlign: "left",
          paddingTop: "1rem",
          verticalAlign: "middle",
          position: "absolute",
          top: orderDetailsMenuOpen ? "10vh" : "60vh",
          right: "0px",
          paddingLeft: "4px",
          zIndex: "80",
          fontFamily: "Roboto",
        }}
        onClick={() => setOrderDetailsMenuOpen(!orderDetailsMenuOpen)}
      >
        <span>{orderDetailsMenuOpen ? "Minimize" : "Order Details"}</span>
      </motion.div>

      <motion.div
        animate={{ x: orderDetailsMenuOpen ? -380 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          width: "380px",
          height: "88vh",
          backgroundColor: "rgba(250,250,250,1)",
          position: "absolute",
          right: "-380px",
          top: "10vh",
          zIndex: "100",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span>Order Details</span>
      </motion.div>

      {
        // card preview area
      }
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "100vh",
          backgroundImage: 'url("/textures/pool-table.png")',
          backgroundColor: "#464",
          boxShadow:
            "1rem 0rem 1rem rgba(0,0,0,0.7) inset, -1rem 0rem 1rem rgba(0,0,0,0.7) inset, 0.5rem 0rem 0.5rem rgba(0,0,0,0.4), -0.5rem 0rem 0.5rem rgba(0,0,0,0.4)",
          margin: "0 auto",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {tipOpen && (
          <div
            style={{
              color: "black",
              position: "absolute",
              bottom: "4.5rem",
              left: "3rem",
              backgroundColor: "white",
              padding: "1rem",
              paddingTop: "0.8rem",
              boxShadow: "-0.5rem 1rem 3rem rgba(32,32,32,0.8)",
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: "128%" }}>Tip:</span>
            <span
              style={{
                float: "right",
                cursor: "pointer",
                fontFamily: "Roboto",
              }}
              onClick={() => setTipOpen(false)}
            >
              X
            </span>
            <br />
            <br />
            <span>
              Drag the card to move it around.
              <br />
              Double click to flip it over.
            </span>
          </div>
        )}
        <CardPreview
          name={name}
          position={position}
          company={company}
          locator={locator}
          address={address}
          city={city}
          province={province}
          postalCode={postalCode}
          phoneNumber={phoneNumber}
          extension={extension}
          cellNumber={cellNumber}
          faxNumber={faxNumber}
          email={email}
          website={website}
          zoomLevel={zoomLevel}
          frontBackgroundColor={frontBackgroundColor}
          backBackgroundColor={backBackgroundColor}
          logo={logo}
        />
      </div>
      {showConfirmDesignButton && (
        <div
          style={{
            position: "fixed",
            bottom: "10rem",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ y: -500 }}
            animate={{ y: 0, scale: 2 }}
            transition={{ duration: 2 }}
            style={{
              boxShadow: "0.4rem 1.6rem 1rem rgba(0,0,0,0.7)",
            }}
          >
            <Button variant="contained" size="large" color="success">
              Confirm Design & Text
            </Button>
          </motion.div>
        </div>
      )}
      <div
        style={{
          position: "relative",
          bottom: "4rem",
          width: "100px",
          margin: "0 auto",
          height: "30px",
          backgroundColor: "white",
          borderRadius: "3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#333",
          fontWeight: "bold",
          fontFamily: "Roboto",
          cursor: "pointer",
        }}
      >
        <div
          onClick={() =>
            zoomLevel < 4 ? setZoomLevel(zoomLevel * 2) : setZoomLevel(1)
          }
        >
          {zoomLevel == 4 ? "Zoom Out" : "Zoom In"}
        </div>
      </div>
    </div>
  );
};

export default BusinessCards;

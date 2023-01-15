import { useState, useEffect } from "react";

const ScreenSizePopup = ({ size }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    size.height < 320 && setIsPopupOpen(true)
  }, [size]);

  return (
    <>
      {isPopupOpen ? (
        <div
          style={{
            position: "absolute",
            zIndex: "100",
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <div
            style={{
              padding: "1rem",
              background: "#AAA",
              border: "solid 4px #D02",
              borderRadius: "16px",
              textAlign: "center",
              maxWidth: "530px",
              fontFamily: "Arial",
            }}
          >
            <p
              style={{ color: "#D02", fontWeight: "bold", fontSize: "1.2rem" }}
            >
              Heads up!
            </p>
            <p>
              Your screen height on this device is currently {size.height}px, which may
              prevent some parts of the website from being fully visible.
            </p>
            <p>
              I recommend you turn your mobile device to{" "}
              <i style={{ fontWeight: "bold" }}>portrait orientation</i> for a
              better experience, or use a device with a screen height of at least 320px.
            </p>
            <button
              onClick={() => setIsPopupOpen(false)}
              style={{ border: "none", padding: "0.5rem" }}
            >
              Dismiss
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ScreenSizePopup;

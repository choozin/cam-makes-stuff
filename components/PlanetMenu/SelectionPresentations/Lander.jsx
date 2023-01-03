import { useState, useEffect } from "react";

const ShuttleLaunch = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: '91',
      }}
    >
        <div style={{ width: '100%', height: '100%', padding: '2rem', background: '#DDF'}}>
            <span>Shuttle Launch Selection Presentation</span>
        </div>
    </div>
  );
};

export default ShuttleLaunch;

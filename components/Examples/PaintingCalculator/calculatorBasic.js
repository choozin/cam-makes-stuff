import { useState, useEffect } from "react"; //295 [dependencies]
import "@fontsource/roboto";

const PaintingCalculator = ({ containerHeight }) => {
  // to prevent code from further running
  // until client has loaded
  // for local storage
  const [hasMounted, setHasMounted] = useState(false);

  const [roomId, setRoomId] = useState("1");

  const [sqft, setSqft] = useState(100);
  const [height, setHeight] = useState(9);
  const [numRooms, setNumRooms] = useState(1);
  const [numDoors, setNumDoors] = useState(1);
  const [numWindows, setNumWindows] = useState(1);

  const [crownMoulding, setCrownMoulding] = useState(false);
  const [trim, setTrim] = useState(false);
  const [twoTone, setTwoTone] = useState(false);

  const [paintType, setPaintType] = useState("Provided");
  const [startingColor, setStartingColor] = useState("Gray");
  const [finalColor, setFinalColor] = useState("Gray");

  const [furniture, setFurniture] = useState(false);
  const [wallpaper, setWallpaper] = useState(false);
  const [repair, setRepair] = useState(0);

  const [notes, setNotes] = useState(null);

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [unit, setUnit] = useState(null);
  const [address, setAddress] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [zip, setZip] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);

  const [baseRate, setBaseRate] = useState(35);
  const [roomSetupRate, setRoomSetupRate] = useState(25);

  const [tapePricePerFootOfWall, setTapePricePerFootOfWall] = useState(0.4);
  const [paintPricePerPaintedSqFt, setPaintPricePerPaintedSqFt] = useState(0.3);
  const [crownMouldingPricePerFoot, setCrownMouldingPricePerFoot] = useState(2);
  const [trimPricePerFoot, setTrimPricePerFoot] = useState(2);
  const [furnitureRemovalPrice, setFurnitureRemovalCost] = useState(0.75); // per SqFt
  const [wallpaperRemovalPrice, setWallpaperRemovalCost] = useState(4); // per foot
  const [repairsPrice, setRepairsCost] = useState(40); // per hour
  const [totalPaintArea, setTotalPaintArea] = useState(0);

  const [total, setTotal] = useState(0);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(0);
  const [marginOfError, setMarginOfError] = useState(10);

  const [backendIsDisplayed, setBackendIsDisplayed] = useState(false);

  const saveState = () => {
    let stateObj = {
      sqft: sqft,
      height: height,
      numRooms: numRooms,
      numDoors: numDoors,
      numWindows: numWindows,
      crownMoulding: crownMoulding,
      trim: trim,
      twoTone: twoTone,
      paintType: paintType,
      startingColor: startingColor,
      finalColor: finalColor,
      furniture: furniture,
      wallpaper: wallpaper,
      repair: repair,
      notes: notes,
      baseRate: baseRate,
      roomSetupRate: roomSetupRate,
      tapePricePerFootOfWall: tapePricePerFootOfWall,
      paintPricePerPaintedSqFt: paintPricePerPaintedSqFt,
      crownMouldingPricePerFoot: crownMouldingPricePerFoot,
      trimPricePerFoot: trimPricePerFoot,
      furnitureRemovalPrice: furnitureRemovalPrice,
      wallpaperRemovalPrice: wallpaperRemovalPrice,
      repairsPrice: repairsPrice,
      totalPaintArea: totalPaintArea,
      total: total,
      low: low,
      high: high,
      marginOfError: marginOfError,
    };
    window.localStorage.setItem(
      "paint-calc" + roomId,
      JSON.stringify(stateObj)
    );
  };

  const loadState = (obj) => {
    setSqft(obj.sqft);
    setHeight(obj.height);
    setNumRooms(obj.numRooms);
    setNumDoors(obj.numDoors);
    setNumWindows(obj.numWindows);

    setCrownMoulding(obj.crownMoulding);
    setTrim(obj.trim);
    setTwoTone(obj.twoTone);

    setPaintType(obj.paintType);
    setStartingColor(obj.startingColor);
    setFinalColor(obj.finalColor);

    setFurniture(obj.furniture);
    setWallpaper(obj.wallpaper);
    setRepair(obj.repair);

    setNotes(obj.notes);

    setBaseRate(obj.baseRate);
    setRoomSetupRate(obj.roomSetupRate);

    setTapePricePerFootOfWall(obj.tapePricePerFootOfWall);
    setPaintPricePerPaintedSqFt(obj.paintPricePerPaintedSqFt);
    setCrownMouldingPricePerFoot(obj.crownMouldingPricePerFoot);
    setTrimPricePerFoot(obj.trimPricePerFoot);
    setFurnitureRemovalCost(obj.furnitureRemovalPrice); // per SqFt
    setWallpaperRemovalCost(obj.wallpaperRemovalPrice); // per foot
    setRepairsCost(obj.repairsPrice); // per hour
    setTotalPaintArea(obj.totalPaintArea);

    setTotal(obj.total);
    setLow(obj.low);
    setHigh(obj.high);
    setMarginOfError(obj.marginOfError);
  };

  const saveContact = () => {
    let stateObj = {
      firstName: firstName,
      lastName: lastName,
      unit: unit,
      address: address,
      city: city,
      state: state,
      zip: zip,
      phone: phone,
      email: email,
    };
    window.localStorage.setItem(
      "paint-calc" + roomId,
      JSON.stringify(stateObj)
    );
  };

  const loadContact = (obj) => {
    setFirstName(obj.firstName);
    setLastName(obj.lastName);
    setUnit(obj.unit);
    setAddress(obj.address);
    setCity(obj.city);
    setState(obj.state);
    setZip(obj.zip);
    setPhone(obj.phone);
    setEmail(obj.email);
  };

  /*if(typeof window !== 'undefined') {
        loadState(JSON.parse(window.localStorage.getItem('paint-calc' + roomId)))
    }*/

  const startingDifficulty = [
    { color: "White or Near White", coats: 0.5 },
    { color: "Yellow", coats: 1.5 },
    { color: "Light Green or Light Blue", coats: 1 },
    { color: "Dark Green or Dark Blue", coats: 2 },
    { color: "Light Red or Light Orange", coats: 1.5 },
    { color: "Dark Red or Dark Orange", coats: 2.5 },
    { color: "Purple or Brown", coats: 2.5 },
    { color: "Gray", coats: 1.5 },
    { color: "Black or Near Black", coats: 2.5 },
  ];

  const finishingDifficulty = [
    { color: "White or Near White", coats: 1 },
    { color: "Yellow", coats: 2 },
    { color: "Light Green or Light Blue", coats: 1 },
    { color: "Dark Green or Dark Blue", coats: 2 },
    { color: "Light Red or Light Orange", coats: 1 },
    { color: "Dark Red or Dark Orange", coats: 2 },
    { color: "Purple or Brown", coats: 2 },
    { color: "Gray", coats: 1 },
    { color: "Black or Near Black", coats: 2 },
  ];

  // per 100sqft of paint
  const paintCostsArray = [
    { quality: "Provided", price: 0 },
    { quality: "Low End", price: 12 },
    { quality: "Standard", price: 18 },
    { quality: "High End", price: 24 },
    { quality: "Premium", price: 30 },
  ];

  const [paintQualityProvided, setPaintQualityProvided] = useState(0)
  const [paintQualityLowEnd, setPaintQualityLowEnd] = useState(12)
  const [paintQualityStandard, setPaintQualityStandard] = useState(18)
  const [paintQualityHighEnd, setPaintQualityHighEnd] = useState(24)
  const [paintQualityPremium, setPaintQualityPremium] = useState(30)

  useEffect(() => {
    let wallLength = Math.sqrt(sqft / numRooms) * 4 * numRooms;
    setTotalPaintArea(wallLength * height);

    let startDifObj = startingDifficulty.find((e) => e.color === startingColor);
    let finishDifObj = finishingDifficulty.find((e) => e.color === finalColor);
    let coats =
      Math.sqrt(startDifObj ? startDifObj.coats : 1) *
      Math.sqrt(finishDifObj ? finishDifObj.coats : 2);
    coats =
      startDifObj && finishDifObj && startDifObj.color === finishDifObj.color
        ? 1
        : coats;
    coats =
      startDifObj &&
      finishDifObj &&
      finishDifObj.color === "Black or Near Black" &&
      startDifObj.color ===
        ("Dark Green or Dark Blue" ||
          "Dark Red or Dark Orange" ||
          "Purple or Brown" ||
          "Gray")
        ? 1.5
        : coats;
    let margin = coats * 4;

    let paintCostObj = paintCostsArray.find((e) => e.quality === paintType);
    let paintCost = paintCostObj ? paintCostObj.price : 0;
    margin += paintCost * 0.34;
    margin += ((numWindows + numDoors) / (numRooms * 2)) * 0.34;
    crownMoulding && (margin += 7);
    trim && (margin += 3);
    furniture && (margin += 7);
    wallpaper && (margin += 5);

    setTotal(
      baseRate + // base rate
        numRooms * roomSetupRate + // room setup price
        wallLength * tapePricePerFootOfWall + // tape price
        wallLength * height * paintPricePerPaintedSqFt * coats + // labour
        (paintCost * wallLength * height) / 100 + // paint cost
        (twoTone ? wallLength * tapePricePerFootOfWall : 0) + // two tone
        numDoors * tapePricePerFootOfWall * 10 + // doors
        numWindows * tapePricePerFootOfWall * 15 + // windows
        (crownMoulding ? wallLength * crownMouldingPricePerFoot : 0) + // crown moulding
        (trim ? wallLength * trimPricePerFoot : 0) + // crown moulding
        (furniture ? sqft * furnitureRemovalPrice : 0) + // furniture removal
        (wallpaper ? wallLength * wallpaperRemovalPrice : 0) + // furniture removal
        repair * repairsPrice // furniture removal
    );
    setMarginOfError(margin);
    //saveState()
  }, [
    baseRate,
    crownMoulding,
    crownMouldingPricePerFoot,
    finalColor,
    finishingDifficulty,
    furniture,
    furnitureRemovalPrice,
    height,
    numDoors,
    numRooms,
    numWindows,
    paintCostsArray,
    paintPricePerPaintedSqFt,
    paintType,
    repair,
    repairsPrice,
    roomSetupRate,
    sqft,
    startingColor,
    startingDifficulty,
    tapePricePerFootOfWall,
    trim,
    trimPricePerFoot,
    twoTone,
    wallpaper,
    wallpaperRemovalPrice,
  ]);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  const classes = {
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      fontFamily: "Arial",
      height: containerHeight,
      overflowY: "scroll",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: "110%",
      backgroundColor: "#FFF",
    },
    section: {
      marginBottom: "1rem",
      paddingLeft: "2%",
      paddingRight: "2%",
      width: "92%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      border: "solid 1px black",
      borderRadius: "4rem",
      paddingBottom: "2rem",
    },
    line: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      flexWrap: "wrap",
    },
    item: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      marginBottom: "1rem",
      padding: "0 1rem",
      width: "300px",
    },
    contactItem: {
      display: "flex",
      width: "100%",
      maxWidth: "400px",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "1rem",
      padding: "0 1rem",
      margin: "0 auto",
    },
    input: {
      margin: "0.5rem",
      marginLeft: "0.75rem",
      width: "3rem",
      textAlign: "right",
      fontSize: "100%",
    },
    inputMedium: {
      margin: "1em",
      width: "10rem",
      fontSize: "100%",
    },
    inputLarge: {
      margin: "1em",
      width: "16rem",
      fontSize: "100%",
    },
    checkbox: {
      marginLeft: "1em",
      fontSize: "120%",
    },
    dropdown: {
      fontSize: "100%",
      maxWidth: "100px",
      marginLeft: "2rem",
    },
    dropdownWide: {
      fontSize: "100%",
      maxWidth: "140px",
      marginLeft: "2rem",
    },
    oneLineItem: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "1rem",
    },
    suffix: {
      fontSize: "0.8rem",
      opacity: 0.8,
      marginLeft: "-0.3rem",
      textAlign: "left",
    },
  };

  return (
    <div style={classes.container}>
      <h3 style={{ color: "#555" }}>Professional Paint Co.</h3>
      <h1 style={{ color: "#888", marginTop: 0 }}>Instant Quote Generator</h1>
      <div style={{ maxWidth: "400px" }}>
        <div style={classes.oneLineItem}>
          <span id="loadState-label">Switch Style</span>
          <select
            labelId="loadState-label"
            id="loadState"
            style={classes.dropdownWide}
            onChange={(event) => {
              setRoomId(event.target.value);
              window.localStorage.getItem("paint-calc" + event.target.value) !==
              null
                ? loadState(
                    JSON.parse(
                      window.localStorage.getItem(
                        "paint-calc" + event.target.value
                      )
                    )
                  )
                : alert("No save file found in this slot.");
            }}
          >
            <option style={classes.option} value="">
              <em>Please select One</em>
            </option>
            <option style={classes.option} value={1}>
              Style 1
            </option>
            <option style={classes.option} value={2}>
              Style 2
            </option>
            <option style={classes.option} value={3}>
              Style 3
            </option>
            <option style={classes.option} value={4}>
              Style 4
            </option>
          </select>
        </div>
        <div style={classes.oneLineItem}>
          <span id="saveAs-label">Save Style As</span>
          <select
            labelId="saveAs-label"
            id="saveAs"
            style={classes.dropdown}
            value={roomId}
            onChange={(event) => {
              setRoomId(event.target.value);
            }}
          >
            <option style={classes.option} value="">
              <em>Please select One</em>
            </option>
            <option style={classes.option} value={1}>
              Style 1
            </option>
            <option style={classes.option} value={2}>
              Style 2
            </option>
            <option style={classes.option} value={3}>
              Style 3
            </option>
            <option style={classes.option} value={4}>
              Style 4
            </option>
          </select>
          <button
            variant="contained"
            color="primary"
            style={{ fontSize: "100%" }}
            onClick={() => saveState()}
          >
            Save
          </button>
        </div>
        <div
          style={{
            marginTop: "-0.75rem",
            fontSize: "0.8rem",
            opacity: 0.8,
            width: "100%",
            textAlign: "center",
          }}
        >
          (Saving uses cookies.)
        </div>
      </div>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <button
          style={{
            color: "white",
            background: "#333",
            borderRadius: "1rem",
            padding: "0.5rem",
            fontSize: "100%",
          }}
          onClick={() => setBackendIsDisplayed(true)}
        >
          Go to Backend
        </button>
        {backendIsDisplayed ? (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                background: "rgba(0,0,0,0.5)",
                width: "100%",
                height: "100%",
              }}
              onClick={() => setBackendIsDisplayed(false)}
            />
            <div
              style={{
                width: "90%",
                maxWidth: "600px",
                maxheight: "95%",
                overflowY: "scroll",
                padding: "2rem",
                background: "white",
                zIndex: "100",
              }}
            >
              <h3>Backend</h3>
              <p>
                Use this page to edit the value of all the variables that go
                into producing this quote.
              </p>
              <p>
                Fancier versions should include ability to modify the variance
                (+/-) of each variable, and modification of door/window sizes.
              </p>
              <button style={{ fontSize: '100%', marginBottom: '1rem' }}
              onClick={() => setBackendIsDisplayed(false)}>Close Backend</button>
              <table style={{ width: '100%' }}>
                <tr>
                  <td>Base Rate</td>
                  <td>
                    <input
                      style={classes.input}
                      value={baseRate}
                      onChange={(e) => setBaseRate(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Base Rate per Room</td>
                  <td>
                    <input
                      style={classes.input}
                      value={roomSetupRate}
                      onChange={(e) => setRoomSetupRate(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Tape Cost per ft.</td>
                  <td>
                    <input
                      style={classes.input}
                      value={tapePricePerFootOfWall}
                      onChange={(e) => setTapePricePerFootOfWall(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Low-End Paint Cost per 100sqft. of wallspace</td>
                  <td>
                    <input
                      style={classes.input}
                      value={paintQualityLowEnd}
                      onChange={(e) => setPaintQualityLowEnd(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Standard Paint Cost per 100sqft. of wallspace</td>
                  <td>
                    <input
                      style={classes.input}
                      value={paintQualityStandard}
                      onChange={(e) => setPaintQualityStandard(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>High-End Paint Cost per 100sqft. of wallspace</td>
                  <td>
                    <input
                      style={classes.input}
                      value={paintQualityHighEnd}
                      onChange={(e) => setPaintQualityHighEnd(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Premium Paint Cost per 100sqft. of wallspace</td>
                  <td>
                    <input
                      style={classes.input}
                      value={paintQualityPremium}
                      onChange={(e) => setPaintQualityPremium(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Labor Cost per sqft. of wallspace</td>
                  <td>
                    <input
                      style={classes.input}
                      value={paintPricePerPaintedSqFt}
                      onChange={(e) => setPaintPricePerPaintedSqFt(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Cost of Wallpaper Removal by sqft. of wallspace</td>
                  <td>
                    <input
                      style={classes.input}
                      value={wallpaperRemovalPrice}
                      onChange={(e) => setWallpaperRemovalCost(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Cost of Crown Moulding by ft. of wallspace</td>
                  <td>
                    <input
                      style={classes.input}
                      value={crownMouldingPricePerFoot}
                      onChange={(e) => crownMouldingPricePerFoot(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Cost of Trim by ft. of wallspace</td>
                  <td>
                    <input
                      style={classes.input}
                      value={trimPricePerFoot}
                      onChange={(e) => setTrimPricePerFoot(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Cost of Furniture Removal by sqft. of floorspacce</td>
                  <td>
                    <input
                      style={classes.input}
                      value={furnitureRemovalPrice}
                      onChange={(e) => setFurnitureRemovalCost(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Cost of Damage Repair by hour</td>
                  <td>
                    <input
                      style={classes.input}
                      value={repairsPrice}
                      onChange={(e) => setRepairsCost(e.target.value)}
                    />
                  </td>
                </tr>
              </table>
              <button style={{ fontSize: '100%', marginTop: '2rem', marginBottom: '2rem' }}
              onClick={() => setBackendIsDisplayed(false)}>Close Backend</button>
              {/*
              const [baseRate, setBaseRate] = useState(35);
  const [roomSetupRate, setRoomSetupRate] = useState(25);

  const [tapePricePerFootOfWall, setTapePricePerFootOfWall] = useState(0.4);
  const [paintPricePerPaintedSqFt, setPaintPricePerPaintedSqFt] = useState(0.3);
  const [crownMouldingPricePerFoot, setCrownMouldingPricePerFoot] = useState(2);
  const [trimPricePerFoot, setTrimPricePerFoot] = useState(2);
  const [furnitureRemovalPrice, setFurnitureRemovalCost] = useState(0.75); // per SqFt
  const [wallpaperRemovalPrice, setWallpaperRemovalCost] = useState(4); // per foot
  const [repairsPrice, setRepairsCost] = useState(40); // per hour
            */}
            </div>
          </div>
        ) : null}
      </div>
      <div style={classes.oneLineItem}>
        <p
          style={{ margin: "0 auto", paddingTop: "1rem", textAlign: "center" }}
        >
          <span style={{ fontWeight: "bold" }}>Expected Total:</span> $
          {total ? total.toFixed(2) : "0.00"} (+/- $
          {total ? ((total / 100) * marginOfError).toFixed(2) : "0.00"})
          <br />
          <span style={{ fontSize: "0.8rem", opacity: 0.8 }}>
            (This number will update as you modify the specifications of the
            job.)
          </span>
        </p>
      </div>
      <div style={classes.section}>
        <h3 style={{ textAlign: "center", width: "100%" }}>
          Job Specifications
        </h3>
        <div style={classes.line}>
          <div style={classes.item}>
            <label for="Number of Rooms">Number of Rooms</label>
            <input
              id="numRooms"
              style={classes.input}
              label="Number of Rooms"
              helperText="Including large closets."
              suffix="Rooms"
              value={numRooms}
              onChange={(e) => setNumRooms(e.target.value)}
            />
            <span style={classes.suffix}>Room(s)</span>
          </div>
          <div style={classes.item}>
            <label for="Total Floor Area">Total Floor Area</label>
            <input
              id="floorArea"
              style={classes.input}
              label="Total Floor Area"
              helperText="For all rooms with this color."
              suffix="sqft."
              value={sqft}
              onChange={(e) => setSqft(e.target.value)}
            />
            <span style={classes.suffix}>Sqft.</span>
          </div>
          <div style={classes.item}>
            <label for="Ceiling Height">Ceiling Height</label>
            <input
              id="height"
              style={classes.input}
              label="Ceiling Height"
              helperText="Measured from floor to ceiling."
              suffix="ft."
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <span style={classes.suffix}>ft.</span>
          </div>
        </div>
        <div style={classes.line}>
          <div style={classes.item}>
            <label for="Number of Doors">Number of Doors</label>
            <input
              id="numDoors"
              style={classes.input}
              label="Number of Doors"
              helperText="If taping both sides then count twice."
              suffix="Doorways"
              value={numDoors}
              onChange={(e) => setNumDoors(e.target.value)}
            />
          </div>
          <div style={classes.item}>
            <label for="Number of Windows">Number of Windows</label>
            <input
              id="numWindows"
              style={classes.input}
              label="Number of Windows"
              helperText="Only count those to be taped."
              suffix="Windows"
              value={numWindows}
              onChange={(e) => setNumWindows(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div style={classes.section}>
        <h3 style={{ textAlign: "center", width: "100%" }}>
          Styles & Features
        </h3>
        <div style={classes.line}>
          <div style={classes.item}>
            <label for="Crown Moulding">Crown Moulding</label>
            <input
              type="checkbox"
              label="Crown Moulding"
              style={classes.checkbox}
              checked={crownMoulding}
              onChange={() => setCrownMoulding(!crownMoulding)}
              name="crownMoulding"
              color="primary"
            />
          </div>
          <div style={classes.item}>
            <label for="Trim">Trim</label>
            <input
              type="checkbox"
              style={classes.checkbox}
              checked={trim}
              onChange={() => setTrim(!trim)}
              label="trim"
              name="trim"
              color="primary"
            />
          </div>
          <div style={classes.item}>
            <label for="Two Tone">Two Tone</label>
            <input
              type="checkbox"
              style={classes.checkbox}
              checked={twoTone}
              onChange={() => setTwoTone(!twoTone)}
              label="Two Tone"
              name="twoTone"
              color="primary"
            />
          </div>
        </div>
      </div>
      <div style={classes.section}>
        <h3 style={{ textAlign: "center", width: "100%" }}>Paint Attributes</h3>
        <div style={classes.line}>
          <div style={classes.item}>
            <label for="Paint Quality">Paint Quality</label>
            <select
              label="Paint Quality"
              id="paintType"
              style={classes.dropdown}
              value={paintType}
              onChange={(event) => setPaintType(event.target.value)}
            >
              <option style={classes.option} value="">
                <em>Please select One</em>
              </option>
              <option style={classes.option} value={"Provided"}>
                Provided
              </option>
              <option style={classes.option} value={"Low End"}>
                Low End
              </option>
              <option style={classes.option} value={"Standard"}>
                Standard
              </option>
              <option style={classes.option} value={"High End"}>
                High End
              </option>
              <option style={classes.option} value={"Premium"}>
                Premium
              </option>
            </select>
          </div>
        </div>
        <div style={classes.line}>
          <div style={classes.item}>
            <label for="startingColor-label">Starting Color</label>
            <select
              label="startingColor-label"
              id="startingColor"
              value={startingColor}
              style={classes.dropdown}
              onChange={(event) => setStartingColor(event.target.value)}
            >
              <option style={classes.option} value="">
                <em>Please select a Color</em>
              </option>
              <option style={classes.option} value={"White or Near White"}>
                White or Near White
              </option>
              <option style={classes.option} value={"Yellow"}>
                Yellow
              </option>
              <option
                style={classes.option}
                value={"Light Green or Light Blue"}
              >
                Light Green or Light Blue
              </option>
              <option style={classes.option} value={"Dark Green or Dark Blue"}>
                Dark Green or Dark Blue
              </option>
              <option
                style={classes.option}
                value={"Light Red or Light Orange"}
              >
                Light Red or Light Orange
              </option>
              <option style={classes.option} value={"Dark Red or Dark Orange"}>
                Dark Red or Dark Orange
              </option>
              <option style={classes.option} value={"Purple or Brown"}>
                Purple or Brown
              </option>
              <option style={classes.option} value={"Gray"}>
                Gray
              </option>
              <option style={classes.option} value={"Black or Near Black"}>
                Black or Near Black
              </option>
            </select>
          </div>
          <div style={classes.item}>
            <label for="finalColor-label">Final Color</label>
            <select
              label="finalColor-label"
              id="finalColor"
              value={finalColor}
              style={classes.dropdown}
              onChange={(event) => setFinalColor(event.target.value)}
            >
              <option style={classes.option} value="">
                <em>Please select a Color</em>
              </option>
              <option style={classes.option} value={"White or Near White"}>
                White or Near White
              </option>
              <option style={classes.option} value={"Yellow"}>
                Yellow
              </option>
              <option
                style={classes.option}
                value={"Light Green or Light Blue"}
              >
                Light Green or Light Blue
              </option>
              <option style={classes.option} value={"Dark Green or Dark Blue"}>
                Dark Green or Dark Blue
              </option>
              <option
                style={classes.option}
                value={"Light Red or Light Orange"}
              >
                Light Red or Light Orange
              </option>
              <option style={classes.option} value={"Dark Red or Dark Orange"}>
                Dark Red or Dark Orange
              </option>
              <option style={classes.option} value={"Purple or Brown"}>
                Purple or Brown
              </option>
              <option style={classes.option} value={"Gray"}>
                Gray
              </option>
              <option style={classes.option} value={"Black or Near Black"}>
                Black or Near Black
              </option>
            </select>
          </div>
        </div>
      </div>
      <div style={classes.section}>
        <h3 style={{ textAlign: "center", width: "100%" }}>
          Additional Factors
        </h3>
        <div style={classes.line}>
          <div style={classes.item}>
            <label for="Furniture">Move Furniture</label>
            <input
              type="checkbox"
              style={classes.checkbox}
              checked={furniture}
              onChange={() => setFurniture(!furniture)}
              label="furniture"
              name="furniture"
              color="primary"
            />
          </div>
          <div style={classes.item}>
            <label for="wallpaper">Remove Wallpaper</label>
            <input
              type="checkbox"
              style={classes.checkbox}
              checked={wallpaper}
              onChange={() => setWallpaper(!wallpaper)}
              label="wallpaper"
              name="wallpaper"
              color="primary"
            />
          </div>
          <div style={classes.item}>
            <label for="Repair Damage">Repair Damage</label>
            <input
              id="repair"
              style={classes.input}
              label="Repair Damage"
              helperText="Best estimate of time anticipated."
              suffix="Hours"
              value={repair}
              onChange={(e) => setRepair(e.target.value)}
            />
            <span style={classes.suffix}>Hours</span>
          </div>
        </div>
        <div style={classes.line}>
          <textarea
            id="specialNotes"
            type=""
            style={{
              width: "90%",
              maxWidth: "500px",
              margin: "0 auto",
              fontSize: "100%",
            }}
            label="Notes"
            multiline
            rows={4}
            placeholder="Add any extra notes here..."
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
          />
        </div>
      </div>
      <div style={classes.section}>
        <h3 style={{ textAlign: "center", width: "100%" }}>
          Contact Information
        </h3>

        <div style={classes.line}>
          <div style={classes.contactItem}>
            <label for="First Name">First Name</label>
            <input
              id="firstName"
              style={classes.inputMedium}
              label="First Name"
              spanProps={{
                shrink: true,
              }}
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div style={classes.contactItem}>
            <label for="Last Name">Last Name</label>
            <input
              id="lastName"
              style={classes.inputMedium}
              label="Last Name"
              spanProps={{
                shrink: true,
              }}
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
        </div>
        <div style={classes.line}>
          <div style={classes.contactItem}>
            <label for="Unit">Unit</label>
            <input
              id="unit"
              style={classes.input}
              label="Unit"
              spanProps={{
                shrink: true,
              }}
              value={unit}
              onChange={(event) => setUnit(event.target.value)}
            />
          </div>
          <div style={classes.contactItem}>
            <label for="Address">Address</label>
            <input
              fullWidth
              id="address"
              label="Address"
              style={classes.inputLarge}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              spanProps={{
                shrink: true,
              }}
            />
          </div>
        </div>
        <div style={classes.line}>
          <div style={classes.contactItem}>
            <label for="City">City</label>
            <input
              id="city"
              style={classes.inputMedium}
              label="City"
              spanProps={{
                shrink: true,
              }}
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
          <div style={classes.contactItem}>
            <span id="state-label">State</span>
            <select
              labelId="state-label"
              id="state"
              value={state}
              style={classes.dropdownWide}
              onChange={(event) => setState(event.target.value)}
              spanProps={{
                shrink: true,
              }}
            >
              <option style={classes.option} value="">
                <em>Please select a Color</em>
              </option>
              <option style={classes.option} value={"CT"}>
                CT
              </option>
              <option style={classes.option} value={"MA"}>
                MA
              </option>
              <option style={classes.option} value={"ME"}>
                ME
              </option>
              <option style={classes.option} value={"NH"}>
                NH
              </option>
              <option style={classes.option} value={"RI"}>
                RI
              </option>
              <option style={classes.option} value={"VA"}>
                VA
              </option>
            </select>
          </div>
          <div style={classes.contactItem}>
            <label for="Zip Code">Zip Code</label>
            <input
              id="zip"
              style={classes.inputMedium}
              label="Zip Code"
              spanProps={{
                shrink: true,
              }}
              value={zip}
              onChange={(event) => setZip(event.target.value)}
            />
          </div>
        </div>
        <div style={classes.line}>
          <div style={classes.contactItem}>
            <label for="Phone Number">Phone Number</label>
            <input
              id="phone"
              style={classes.inputMedium}
              label="Phone Number"
              spanProps={{
                shrink: true,
              }}
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div style={classes.contactItem}>
            <label for="Email Address">Email Address</label>
            <input
              id="email"
              style={classes.inputLarge}
              label="Email Address"
              spanProps={{
                shrink: true,
              }}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div style={classes.section}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h3 style={{ textAlign: "center", width: "100%", marginTop: "3rem" }}>
            Quote Details
          </h3>
          <p>
            Expected Total:{" "}
            <span style={{ fontWeight: "bold" }}>
              ${total ? total.toFixed(2) : "0.00"}
            </span>
          </p>
          <p>
            Low Range:{" "}
            <span style={{ fontWeight: "bold" }}>
              $
              {total
                ? (total - (total / 100) * marginOfError).toFixed(2)
                : "0.00"}
            </span>
          </p>
          <p>
            High Range:{" "}
            <span style={{ fontWeight: "bold" }}>
              $
              {total
                ? (total + (total / 100) * marginOfError).toFixed(2)
                : "0.00"}
            </span>
          </p>
          <p>
            Labor Costs:{" "}
            <span style={{ fontWeight: "bold" }}>
              $
              {paintType
                ? (
                    total -
                    (paintCostsArray.find((e) => e.quality === paintType)
                      .price *
                      (Math.sqrt(sqft / numRooms) * 4 * numRooms) *
                      height) /
                      100
                  ).toFixed(2)
                : "0.00"}
            </span>
          </p>
          <p>
            Paint Costs:{" "}
            <span style={{ fontWeight: "bold" }}>
              $
              {paintType
                ? (
                    (paintCostsArray.find((e) => e.quality === paintType)
                      .price *
                      (Math.sqrt(sqft / numRooms) * 4 * numRooms) *
                      height) /
                    100
                  ).toFixed(2)
                : "0.00"}
            </span>
            {paintType === "Provided" && " - Provided by Customer"}
          </p>
          <br />
          <button
            variant="contained"
            color="primary"
            style={{
              fontSize: "120%",
              borderRadius: "0.75rem",
              width: "100%",
              maxWidth: "80%",
              margin: "0 auto",
            }}
            onClick={() =>
              alert(
                "Now the quote details would be sent to both you and your customer in an email and/or stored in a database, if desired."
              )
            }
          >
            Process Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaintingCalculator;

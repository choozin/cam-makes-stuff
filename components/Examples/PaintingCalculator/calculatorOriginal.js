import { useState, useEffect } from "react"; //295 [dependencies]
import "@fontsource/roboto";

const PaintingCalculator = () => {
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
  const [roomSetupRate, setRoomSetupRate] = useState(15);

  const [tapePricePerFootOfWall, setTapePricePerFootOfWall] = useState(0.3);
  const [paintPricePerPaintedSqFt, setPaintPricePerPaintedSqFt] = useState(0.2);
  const [crownMouldingPricePerFoot, setCrownMouldingPricePerFoot] =
    useState(1.5);
  const [trimPricePerFoot, setTrimPricePerFoot] = useState(1.5);
  const [furnitureRemovalPrice, setFurnitureRemovalCost] = useState(0.5); // per SqFt
  const [wallpaperRemovalPrice, setWallpaperRemovalCost] = useState(3); // per foot
  const [repairsPrice, setRepairsCost] = useState(40); // per hour
  const [totalPaintArea, setTotalPaintArea] = useState(0);

  const [total, setTotal] = useState(0);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(0);
  const [marginOfError, setMarginOfError] = useState(10);

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
    { quality: "Low End", price: 8 },
    { quality: "Standard", price: 12 },
    { quality: "High End", price: 16 },
    { quality: "Luxury", price: 20 },
  ];

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
      border: "solid red 1px",
      height: "90vh",
      overflowY: "scroll",
    },
    section: {
      marginBottom: "1rem",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    line: {
      width: "800px",
      maxWidth: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
    item: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: 'center',
      marginBottom: '1rem',
    },
    input: {
      margin: "1em",
      width: "3rem",
    },
    inputSmall: {
      margin: "1em",
      width: "3rem",
    },
    inputLarge: {
      margin: "1em",
      width: "32rem",
    },
    inputFullWidth: {
      margin: "1em",
      width: "92%",
    },
    checkbox: {
      marginLeft: "1em",
    },
    oneLineItem: {
      width: "100%",
      maxWidth: "300px",
      display: "flex",
      justifyContent: "space-between",
      marginBottom: '1rem',
    },
  };

  return (
    <div style={classes.container}>
      <h3 style={{ color: "#555" }}>
        Professional Paint Co.
        <br />
        Instant Quote Generator
      </h3>
      <p>
        Expected Total: ${total ? total.toFixed(2) : "0.00"} (+/- $
        {total ? ((total / 100) * marginOfError).toFixed(2) : "0.00"})
      </p>

      <div style={classes.oneLineItem}>
        <span id="loadState-label">Switch Style</span>
        <select
          labelId="loadState-label"
          id="loadState"
          style={classes.select}
          onChange={(event) => {
            setRoomId(event.target.value);
            window.localStorage.getItem("paint-calc" + event.target.value) !==
              null &&
              loadState(
                JSON.parse(
                  window.localStorage.getItem("paint-calc" + event.target.value)
                )
              );
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
          style={classes.select}
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
        <button variant="contained" color="primary" onClick={() => saveState()}>
          Save
        </button>
      </div>
      <div style={classes.section}>
        <h3>Style Specifications</h3>
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
        <div style={classes.line}>
          <div style={classes.item}>
            <label for="Paint Quality">Paint Quality</label>
            <select
              label="Paint Quality"
              id="paintType"
              style={classes.select}
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
              <option style={classes.option} value={"Luxury"}>
                Luxury
              </option>
            </select>
          </div>
          <div style={classes.item}>
            <label for="startingColor-label">Starting Color</label>
            <select
              label="startingColor-label"
              id="startingColor"
              value={startingColor}
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
          </div>
        </div>
        <div style={classes.line}>
          <div style={classes.item}>
            <input
              id="specialNotes"
              style={classes.fullwidth}
              label="Notes"
              multiline
              rows={4}
              placeholder="Add any extra information here..."
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div style={classes.section}>
        <h3>Contact Information</h3>

        <div style={classes.item}>
          <label for="Last Name">Last Name</label>
          <input
            id="lastName"
            style={classes.input}
            label="Last Name"
            spanProps={{
              shrink: true,
            }}
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div style={classes.item}>
          <label for="First Name">First Name</label>
          <input
            id="firstName"
            style={classes.input}
            label="First Name"
            spanProps={{
              shrink: true,
            }}
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div style={classes.item}>
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
        <div style={classes.item}>
          <label for="Address">Address</label>
          <input
            fullWidth
            id="address"
            label="Address"
            style={classes.inputFullWidth}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            spanProps={{
              shrink: true,
            }}
          />
        </div>
        <div style={classes.item}>
          <label for="City">City</label>
          <input
            id="city"
            style={classes.input}
            label="City"
            spanProps={{
              shrink: true,
            }}
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <div style={classes.item}>
          <span id="state-label">State</span>
          <select
            labelId="state-label"
            id="state"
            value={state}
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
        <div style={classes.item}>
          <label for="Zip Code">Zip Code</label>
          <input
            id="zip"
            style={classes.input}
            label="Zip Code"
            spanProps={{
              shrink: true,
            }}
            value={zip}
            onChange={(event) => setZip(event.target.value)}
          />
        </div>
        <div style={classes.item}>
          <label for="Phone Number">Phone Number</label>
          <input
            id="phone"
            style={classes.input}
            label="Phone Number"
            spanProps={{
              shrink: true,
            }}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div style={classes.item}>
          <label for="Email Address">Email Address</label>
          <input
            id="email"
            style={classes.input}
            label="Email Address"
            spanProps={{
              shrink: true,
            }}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <p>Expected Total: ${total ? total.toFixed(2) : "0.00"}</p>
        <p>
          Low Range: $
          {total ? (total - (total / 100) * marginOfError).toFixed(2) : "0.00"}
        </p>
        <p>
          High Range: $
          {total ? (total + (total / 100) * marginOfError).toFixed(2) : "0.00"}
        </p>
        <p>
          Labor: $
          {paintType
            ? (
                total -
                (paintCostsArray.find((e) => e.quality === paintType).price *
                  (Math.sqrt(sqft / numRooms) * 4 * numRooms) *
                  height) /
                  100
              ).toFixed(2)
            : "0.00"}
        </p>
        <p>
          Paint: $
          {paintType
            ? (
                (paintCostsArray.find((e) => e.quality === paintType).price *
                  (Math.sqrt(sqft / numRooms) * 4 * numRooms) *
                  height) /
                100
              ).toFixed(2)
            : "0.00"}
        </p>
        <br />
        <button
          variant="contained"
          color="primary"
          onClick={() => alert("Submitted")}
          disabled
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PaintingCalculator;

import React, { useEffect, useState } from "react";

export default function ColorSelector() {
  const [colType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function generateHexColor() {
    // # ****** (6 numbers and from a-f)
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexCol = "#";

    for (let i = 0; i < 6; i++) {
      hexCol += hex[randomColorUtility(hex.length)];
    }
    setColor(hexCol);
  }

  function generateRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (colType === "rgb") generateRgbColor();
    else generateHexColor();
  }, [colType]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setColorType("hex")}>Generate HEX Color</button>
      <button onClick={() => setColorType("rgb")}>Generate RGB Color</button>
      <button onClick={colType === "hex" ? generateHexColor : generateRgbColor}>
        Generate Random Button
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
        }}
      >
        <h3>{colType === "hex" ? "HEX Color" : "RGB Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";

import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
const arraycontext = createContext();
let NUMBER_OF_ARRAY_BARS = 25;
const PRIMARY_COLOR = "turquoise";
const SECONDARY_COLOR = "red";

const ArrayContext = ({ children }) => {
  const [array, setArray] = useState([]);
  const [ANIMATION_SPEED_MS, setSpeed] = useState(20);
  useEffect(() => {
    resetArray();
    setSpeed(20);
  }, []);
  function resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 700));
    }
    setArray(array);
  }

  return (
    <arraycontext.Provider
      value={{
        setSpeed,
        array,
        setArray,
        resetArray,
        ANIMATION_SPEED_MS,
        PRIMARY_COLOR,
        SECONDARY_COLOR,
      }}
    >
      {children}
    </arraycontext.Provider>
  );
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
};

export default ArrayContext;
export const ArrayState = () => {
  return useContext(arraycontext);
};

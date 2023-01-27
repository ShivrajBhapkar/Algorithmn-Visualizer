import React from "react";

import "./SortingVisualizer.css";
import Navbar from "../Component/Navbar";
import { ArrayState } from "../ArrayContext.js";

export default function Example() {
  const { array, PRIMARY_COLOR } = ArrayState();

  return (
    <div className="Container">
      <Navbar />
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}
          ></div>
        ))}
        <div className="bars">
          {array.map((value, idx) => (
            <div
              className="array-value"
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
              }}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

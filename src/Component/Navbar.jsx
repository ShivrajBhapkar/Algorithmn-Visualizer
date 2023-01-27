import React from "react";
// import { useEffect, useState } from "react";
import { ArrayState } from "../ArrayContext.js";
import { getMergeSortAnimations } from "../sortingAlgorithms/MergeSortingAlgorithm.js";
import { bubbleSortAlgorithmn } from "../sortingAlgorithms/BubbleSortAlgorithmn.js";
import { QuickSortAlgo } from "../sortingAlgorithms/QuickSortAlgorithmn.js";
import "./Navbar.css";
const Navbar = () => {
  const {
    setSpeed,
    array,
    resetArray,
    ANIMATION_SPEED_MS,
    PRIMARY_COLOR,
    SECONDARY_COLOR,
  } = ArrayState();
  function mergeSort() {
    const newArray = array.slice();
    const animations = getMergeSortAnimations(newArray);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const arrayvalue = document.getElementsByClassName("array-value");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const barOneValueStyle = arrayvalue[barOneIdx].style;
        const barTwoValueStyel = arrayvalue[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
          barOneValueStyle.backgroundColor = color;
          barTwoValueStyel.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          arrayvalue[barOneIdx].textContent = newHeight;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  function quickSort() {
    const animations = QuickSortAlgo(array);
    let i = 0;
    const arrayBars = document.getElementsByClassName("array-bar");
    const arrayvalue = document.getElementsByClassName("array-value");
    while (i < animations.length) {
      if (animations[i].length === 2) {
        let j = 0;
        while (i < animations.length && animations[i].length === 2) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const barOneValueStyle = arrayvalue[barOneIdx].style;
          const barTwoValueStyel = arrayvalue[barTwoIdx].style;
          const color = j % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            barOneValueStyle.backgroundColor = color;
            barTwoValueStyel.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS * 2);
          j++;
          i++;
        }
      } else {
        if (i < animations.length - 1 && animations[i + 1].length === 4) {
          let k = 0;
          while (i < animations.length && k < 2) {
            const [barOneIdx, barTwoIdx, barOneValue, barTwoValue] =
              animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const barOneValueStyle = arrayvalue[barOneIdx].style;
            const barTwoValueStyel = arrayvalue[barTwoIdx].style;
            const color = k % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
              barOneValueStyle.backgroundColor = color;
              barTwoValueStyel.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS * 2);

            i++;
            k++;
          }
        } else {
          const [barOneIdx, barTwoIdx, barOneValue, barTwoValue] =
            animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;

          setTimeout(() => {
            barOneStyle.height = `${barTwoValue}px`;
            barTwoStyle.height = `${barOneValue}px`;
            arrayvalue[barOneIdx].textContent = barTwoValue;
            arrayvalue[barTwoIdx].textContent = barOneValue;
          }, i * ANIMATION_SPEED_MS * 2);

          i++;
        }
      }
    }
    console.log(animations);
  }
  function bubbleSort() {
    let newArray = array.slice();
    const animations = bubbleSortAlgorithmn(newArray);
    console.log(animations);

    for (let i = 0; i < animations.length; i++) {
      const barArray = document.getElementsByClassName("array-bar");
      const barArrayValues = document.getElementsByClassName("array-value");

      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = barArray[barOneIdx].style;
        const barTwoStyle = barArray[barTwoIdx].style;
        const barOneValueStyle = barArrayValues[barOneIdx].style;
        const barTwoValueStyle = barArrayValues[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
          barOneValueStyle.backgroundColor = color;
          barTwoValueStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [barOneIdx, barTwoIdx, barOneValue, barTwoValue] = animations[i];
        const barOneStyle = barArray[barOneIdx].style;
        const barTwoStyle = barArray[barTwoIdx].style;
        if (barOneValue > barTwoValue) {
          setTimeout(() => {
            barOneStyle.height = `${barTwoValue}px`;
            barTwoStyle.height = `${barOneValue}px`;
            barArrayValues[barOneIdx].textContent = barTwoValue;
            barArrayValues[barTwoIdx].textContent = barOneValue;
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }
  }
  function handleChange(event) {
    setSpeed(event.target.value);
  }
  return (
    <div className="Controller">
      <div className="btn-list">
        <button className="btn" onClick={resetArray}>
          Generate New Array
        </button>
        <button className="btn" onClick={mergeSort}>
          Merge Sort
        </button>
        <button className="btn" onClick={quickSort}>
          Quick Sort
        </button>
        <button className="btn" onClick={() => this.heapSort()}>
          Heap Sort
        </button>
        <button className="btn" onClick={bubbleSort}>
          Bubble Sort
        </button>
      </div>
      <div className="algo-speed">
        <p>Sorting Speed</p>
        <input
          id="typeinp"
          type="range"
          min="20"
          max="100"
          value={ANIMATION_SPEED_MS}
          onChange={handleChange}
          step="1"
        />
      </div>
    </div>
  );
};
// function randomIntFromInterval(min, max) {
//   // min and max included
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

export default Navbar;

import React from "react";
import { getMergeSortAnimations } from "../sortingAlgorithms/MergeSortingAlgorithm.js";
import { ArrayState } from "../ArrayContext.js";

import { bubbleSortAlgorithmn } from "../sortingAlgorithms/BubbleSortAlgorithmn.js";
import { QuickSortAlgo } from "../sortingAlgorithms/QuickSortAlgorithmn.js";
import { Heapsort } from "../sortingAlgorithms/HeapSortAlgorithm.js";
import "./Navbar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const {
    setSpeed,
    array,
    resetArray,
    ANIMATION_SPEED_MS,
    PRIMARY_COLOR,
    SECONDARY_COLOR,
  } = ArrayState();

  function notifyme(msg) {
    const notify = () =>
      toast.info(msg, {
        position: "top-center",
        autoClose: 9000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    notify();
  }
 
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

    let msg =
      "Merge sort is a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.";
    notifyme(msg);
  }
  function bubbleSort() {
    let newArray = array.slice();
    const animations = bubbleSortAlgorithmn(newArray);

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
    let msg =
      "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.";
    notifyme(msg);
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

    let msg =
      "Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as a pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.";
    notifyme(msg);
  }
  function heapSort() {
    let newArray = array.slice();
    const animations = Heapsort(newArray);

    let i = 0;
    const arrayBars = document.getElementsByClassName("array-bar");
    const arrayvalue = document.getElementsByClassName("array-value");

    while (i < animations.length) {
      if (animations[i].length === 3) {
        let j = 0;
        while (i < animations.length && animations[i].length === 3) {
          const [barOneIdx, barTwoIdx, barThreeIdx] = animations[i];
          if (
            barOneIdx < array.length &&
            barTwoIdx < array.length &&
            barThreeIdx < array.length
          ) {
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const barThreeStyle = arrayBars[barThreeIdx].style;
            const barOneValueStyle = arrayvalue[barOneIdx].style;
            const barTwoValueStyle = arrayvalue[barTwoIdx].style;
            const barthreeValueStyle = arrayvalue[barThreeIdx].style;
            const color = j % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
              barThreeStyle.backgroundColor = color;
              barOneValueStyle.backgroundColor = color;
              barTwoValueStyle.backgroundColor = color;
              barthreeValueStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS * 2);
          }
          j++;
          i++;
        }
      } else if (animations[i].length === 2) {
        const [barOneIdx1, barTwoIdx1] = animations[i];
        if (barOneIdx1 !== barTwoIdx1) {
          const barOneStyle1 = arrayBars[barOneIdx1].style;
          const barTwoStyle1 = arrayBars[barTwoIdx1].style;
          const barTwoValue1 = arrayvalue[barOneIdx1].textContent;
          const barOneValue1 = arrayvalue[barTwoIdx1].textContent;
          setTimeout(() => {
            barOneStyle1.height = `${barTwoValue1}px`;
            barTwoStyle1.height = `${barOneValue1}px`;
            arrayvalue[barOneIdx1].textContent = barTwoValue1;
            arrayvalue[barTwoIdx1].textContent = barOneValue1;
          }, i * ANIMATION_SPEED_MS * 2);
        }
        i++;
      } else {
        const [barOneIdx, barTwoIdx, barOneValue, barTwoValue] = animations[i];
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

    let msg =
      "Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to the selection sort where we first find the minimum element and place the minimum element at the beginning. Repeat the same process for the remaining elements.";
    notifyme(msg);
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
        <button className="btn" onClick={heapSort}>
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
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        className="foo"
      />
    </div>
  );
};

export default Navbar;

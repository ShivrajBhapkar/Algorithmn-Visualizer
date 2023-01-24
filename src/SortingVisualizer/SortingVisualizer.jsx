import React from "react";
import { useEffect, useState } from "react";
import { getMergeSortAnimations } from "../sortingAlgorithms/MergeSortingAlgorithm.js";
import { bubbleSortAlgorithmn } from "../sortingAlgorithms/BubbleSortAlgorithmn.js";
import { QuickSortAlgo } from "../sortingAlgorithms/QuickSortAlgorithmn.js";
import "./SortingVisualizer.css";

// Change this value for the speed of the animations.
// const ANIMATION_SPEED_MS = 20;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 25;

// This is the main color of the array bars.
const PRIMARY_COLOR = "turquoise";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

// export default class SortingVisualizer extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       array: [],
//     };
//   }

//   componentDidMount() {
//     this.resetArray();
//   }

//   resetArray() {
//     const array = [];
//     for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
//       array.push(randomIntFromInterval(5, 730));
//     }
//     this.setState({ array });
//   }

//   mergeSort() {
//     const animations = getMergeSortAnimations(this.state.array);
//     for (let i = 0; i < animations.length; i++) {
//       const arrayBars = document.getElementsByClassName("array-bar");
//       const isColorChange = i % 3 !== 2;
//       if (isColorChange) {
//         const [barOneIdx, barTwoIdx] = animations[i];
//         const barOneStyle = arrayBars[barOneIdx].style;
//         const barTwoStyle = arrayBars[barTwoIdx].style;
//         const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
//         setTimeout(() => {
//           barOneStyle.backgroundColor = color;
//           barTwoStyle.backgroundColor = color;
//         }, i * ANIMATION_SPEED_MS);
//       } else {
//         setTimeout(() => {
//           const [barOneIdx, newHeight] = animations[i];
//           const barOneStyle = arrayBars[barOneIdx].style;
//           barOneStyle.height = `${newHeight}px`;
//         }, i * ANIMATION_SPEED_MS);
//       }
//     }
//   }

//   quickSort() {
//     // We leave it as an exercise to the viewer of this code to implement this method.
//   }

//   heapSort() {
//     // We leave it as an exercise to the viewer of this code to implement this method.
//   }

//   bubbleSort() {
//     // We leave it as an exercise to the viewer of this code to implement this method.
//   }

//   // NOTE: This method will only work if your sorting algorithms actually return
//   // the sorted arrays; if they return the animations (as they currently do), then
//   // this method will be broken.
//   testSortingAlgorithms() {
//     for (let i = 0; i < 100; i++) {
//       const array = [];
//       const length = randomIntFromInterval(1, 1000);
//       for (let i = 0; i < length; i++) {
//         array.push(randomIntFromInterval(-1000, 1000));
//       }
//       const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
//       const mergeSortedArray = getMergeSortAnimations(array.slice());
//       console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
//     }
//   }

//   render() {
//     const { array } = this.state;

//     return (
//       <div className="array-container">
//         {array.map((value, idx) => (
//           <div
//             className="array-bar"
//             key={idx}
//             style={{
//               backgroundColor: PRIMARY_COLOR,
//               height: `${value}px`,
//             }}
//           ></div>
//         ))}
//         <button onClick={() => this.resetArray()}>Generate New Array</button>
//         <button onClick={() => this.mergeSort()}>Merge Sort</button>
//         <button onClick={() => this.quickSort()}>Quick Sort</button>
//         <button onClick={() => this.heapSort()}>Heap Sort</button>
//         <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
//         <button onClick={() => this.testSortingAlgorithms()}>
//           Test Sorting Algorithms (BROKEN)
//         </button>
//       </div>
//     );
//   }
// }
export default function Example() {
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
        let k = i + 3;
        let j = 0;
        while (i < k) {
          const isColorChange = j % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const barOneValueStyle = arrayvalue[barOneIdx].style;
            const barTwoValueStyel = arrayvalue[barTwoIdx].style;
            const color = j % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
              barOneValueStyle.backgroundColor = color;
              barTwoValueStyel.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS * 2);
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
          }
          j++;
          i++;
        }
      } else {
        const [barOneIdx, barTwoIdx, barOneValue, barTwoValue] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;

        setTimeout(() => {
          barOneStyle.height = `${barTwoValue}px`;
          barTwoStyle.height = `${barOneValue}px`;
          arrayvalue[barOneIdx].textContent = barTwoValue;
          arrayvalue[barTwoIdx].textContent = barOneValue;
          // barTwoStyle.backgroundColor = "green";
        }, i * ANIMATION_SPEED_MS * 2);

        i++;
      }
    }
    // console.log(animations);
  }

  //   heapSort() {
  //     // We leave it as an exercise to the viewer of this code to implement this method.
  //   }

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

  function testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = getMergeSortAnimations(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
  }
  //   function getInitialState() {
  //   return {value: 3};
  // }
  function handleChange(event) {
    // this.setState({ value: event.target.value });
    setSpeed(event.target.value);
  }
  return (
    <div className="Container">
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
      <div className="Controller">
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
        <div className="btn" onClick={testSortingAlgorithms}>
          Test Sorting Algorithms (BROKEN)
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
    </div>
  );
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}

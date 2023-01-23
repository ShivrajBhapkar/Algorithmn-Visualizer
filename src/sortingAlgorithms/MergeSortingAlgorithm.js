export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;

  mergeSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, animations) {
  if (startIdx >= endIdx) return;
  const middleIdx = startIdx + parseInt((endIdx - startIdx) / 2);
  mergeSortHelper(mainArray, startIdx, middleIdx, animations);
  mergeSortHelper(mainArray, middleIdx + 1, endIdx, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, animations) {
  let n1 = middleIdx - startIdx + 1;
  let n2 = endIdx - middleIdx;
  let Leftarray = new Array(n1);
  let Rightarray = new Array(n2);
  let k = startIdx;
  let i = 0;
  let j = 0;
  for (let i = 0; i < n1; i++) Leftarray[i] = mainArray[k + i];
  for (let j = 0; j < n2; j++) Rightarray[j] = mainArray[middleIdx + 1 + j];

  while (i < n1 && j < n2) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i + startIdx + 1, j + middleIdx]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i + startIdx + 1, j + middleIdx]);
    if (Leftarray[i] <= Rightarray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, Leftarray[i]]);
      mainArray[k++] = Leftarray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, Rightarray[j]]);
      mainArray[k++] = Rightarray[j++];
    }
  }
  while (i < n1) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i + startIdx + 1, i + startIdx + 1]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i + startIdx + 1, i + startIdx + 1]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, Leftarray[i]]);
    mainArray[k++] = Leftarray[i++];
  }
  while (j < n2) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j + middleIdx, j + middleIdx]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j + middleIdx, j + middleIdx]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, Rightarray[j]]);
    mainArray[k++] = Rightarray[j++];
  }
}

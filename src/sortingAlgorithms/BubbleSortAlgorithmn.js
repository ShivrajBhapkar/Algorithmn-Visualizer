export function bubbleSortAlgorithmn(array) {
  let length = array.length;
  const animation = [];
  if (array.length <= 1) {
    return array;
  }
  bubbleSortHelper(array, length, animation);
  return animation;
}
function bubbleSortHelper(arr, n, animation) {
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      animation.push([j, j + 1]);
      animation.push([j, j + 1]);
      animation.push([j, j + 1, arr[j], arr[j + 1]]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

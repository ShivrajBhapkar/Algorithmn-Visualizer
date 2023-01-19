// An optimized version of Bubble Sort
function bubbleSort(arr, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n - i; j++) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
}

/* Function to print an array */
function printArray(arr, size) {
  for (let i = 0; i < size; i++) console.log(arr[i]);
}

// Driver program to test above functions
var arr = [5, 1, 4, 2, 8, 2];
var n = 6;

// printArray(arr, n);

bubbleSort(arr, n);

printArray(arr, n);

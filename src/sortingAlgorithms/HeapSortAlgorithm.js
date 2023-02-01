export function Heapsort(arr) {
  let N = arr.length;
  const animation = [];

  for (let i = Math.floor(N / 2) - 1; i >= 0; i--)
    heapify(arr, N, i, animation);

  for (let i = N - 1; i >= 0; i--) {
    animation.push([0, i, arr[0], arr[i]]);
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapify(arr, i, 0, animation);
  }
  return animation;
}

function heapify(arr, N, i, animation) {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;
  animation.push([largest, l, r]);
  animation.push([largest, l, r]);

  if (l < N && arr[l] > arr[largest]) largest = l;
  if (r < N && arr[r] > arr[largest]) largest = r;

  animation.push([largest, i]);

  if (largest !== i) {
    let swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;

    heapify(arr, N, largest, animation);
  }
}

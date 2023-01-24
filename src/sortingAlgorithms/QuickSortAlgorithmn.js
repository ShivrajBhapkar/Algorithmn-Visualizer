export function QuickSortAlgo(array) {
  let animation = [];
  QuickSortUtil(array, 0, array.length - 1, animation);
  console.log(array);
  return animation;
}
function QuickSortUtil(arr, start, end, animation) {
  if (start < end) {
    let j = QuickSortHelper(arr, start, end, animation);
    QuickSortUtil(arr, start, j - 1, animation);
    QuickSortUtil(arr, j + 1, end, animation);
  }
}
function QuickSortHelper(arr, start, end, animation) {
  let temp = arr[start];
  let j = start;
  while (start < end) {
    while (arr[start] <= temp) {
      animation.push([start, start]);
      animation.push([start, start]);
      start++;
    }
    while (arr[end] > temp) {
      animation.push([end, end]);
      animation.push([end, end]);
      end--;
    }
    if (start < end) {
      animation.push([start, end, arr[start], arr[end]]);
      animation.push([start, end, arr[start], arr[end]]);
      animation.push([start, end, arr[start], arr[end]]);
      [arr[start], arr[end]] = [arr[end], arr[start]];
    }
  }
  animation.push([j, end, arr[j], arr[end]]);
  [arr[j], arr[end]] = [arr[end], arr[j]];
  return end;
}

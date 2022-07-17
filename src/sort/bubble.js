/**
 * 冒泡
 * 从数组开头两两比较
 * 如果后一个比前一个大则交换位置
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; i < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}

const arr = [10, 4, 23, 9, 12, 7, 3, 11, 1];

bubbleSort(arr);
console.log("arr: ", arr);

/**
 * 快速排序
 * 选取一个基点k
 * 从两头遍历数组
 * 比基点k大的的放在基点k右边
 * 比基点k小的放在基点k左边
 * 1、先从右边开始，比基点k大跳过，比基点k小则和基点k交换位置
 * 2、交换位置以后从左边继续遍历
 * 3、比基点k小跳过，比基点k大则继续和基点k交换位置
 * 4、直到两个指针相遇
 * 5、递归调用基点k左右两边的数组
 */
const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start >= end) return;
  let k = arr[start];
  let _start = start;
  let _end = end;
  while (end > start) {
    // 先从右边
    while (end > start) {
      if (arr[end] < k) {
        let tmp = arr[end];
        arr[end] = k;
        arr[start] = tmp;
        break;
      } else {
        end--;
      }
    }

    // 再从左边
    while (end > start) {
      if (arr[start] > k) {
        let tmp = arr[start];
        arr[start] = k;
        arr[end] = tmp;
        break;
      } else {
        start++;
      }
    }
  }
  quickSort(arr, _start, start - 1);
  quickSort(arr, start + 1, _end);
};

const arr = [10, 4, 23, 9, 12, 7, 3, 11, 1];

quickSort(arr);
console.log("arr: ", arr);

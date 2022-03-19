class Heap {
  constructor(list) {
    this.buildHeap(list);
    this.heap = list;
  }

  /**
   * 建堆
   */
  buildHeap(list) {
    const len = list.length;
    const firstLeaf = Math.floor(len / 2);
    for (let i = firstLeaf; i >= 0; i--) {
      this.heapIfy(list, i);
    }
    return list;
  }

  /**
   * 判断是否符合堆
   */
  heapIfy(list, index) {
    const len = list.length;
    const value = list[index];
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    let largeIndex = index;
    if (leftIndex <= len && value < list[leftIndex]) {
      largeIndex = leftIndex;
    }
    if (rightIndex <= len && list[largeIndex] < list[rightIndex]) {
      largeIndex = rightIndex;
    }
    if (largeIndex !== index) {
      const mid = list[index];
      list[index] = list[largeIndex];
      list[largeIndex] = mid;
      this.heapIfy(list, largeIndex);
    }
  }

  /**
   * 排序
   * @param {*} index
   * @returns
   */

  sort() {
    const list = [];
    const _heap = this.heap.slice();
    for (let i = _heap.length - 1; i >= 0; i--) {
      const mid = _heap[0];
      _heap[0] = _heap[_heap.length - 1];
      _heap[_heap.length - 1] = mid;
      list.unshift(_heap.pop());
      this.heapIfy(_heap, 0);
    }
    return list;
  }

  /**
   * 插入
   * @param {*} value
   */
  insert(value) {
    this.heap.push(value);
    let parentIndex = this.heap.length - 1;
    while (parentIndex > 0) {
      parentIndex = this.getParentIndex(parentIndex);
      this.heapIfy(this.heap, parentIndex);
    }
  }

  /**
   * 删除
   */
  pop() {
    const mid = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap[this.heap.length - 1] = mid;
    this.heap.pop();
    this.heapIfy(this.heap, 0);
  }

  /**
   * 获取左子树下标
   */
  getLeftIndex(index) {
    return index * 2 + 1;
  }

  /**
   * 获取右子树下标
   */
  getRightIndex(index) {
    return index * 2 + 2;
  }

  /**
   * 获取父元素
   * @param {*} index
   * @returns
   */
  getParentIndex(index) {
    return Math.ceil(index / 2) - 1;
  }
}

const heap = new Heap([0, 1, 2, 3, 4, 5, 6, 7, 8]);
// const list = heap.sort();
// console.log("list: ", list);
console.log("heap: ", heap.heap);

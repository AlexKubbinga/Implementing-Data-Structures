'use strict';

const Heap = require('../scripts/heap.js');


let test= Array.from({length: 20}, () => Math.floor(Math.random() * 50))

// Fake HeapSort (doesn't swim down)
function heapSort (arr) {
  let heap = new Heap();
  let finalArr = [];
  heap.heapify(arr);

  while (heap.array.length) {
    finalArr.unshift(heap.extract_max());
  }
  console.log(finalArr)
}


heapSort(test);
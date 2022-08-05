'use strict';

var should = require('chai').should();

const Heap = require('../scripts/heap.js');

describe('Heap', function () {

 // Validation that heap works (aka bad tests)
let heap = new Heap();
heap.insert(100);
heap.insert(19);
heap.insert(36);
heap.insert(17);
heap.insert(12);
heap.insert(20);
heap.insert(31);
heap.insert(8);
heap.insert(9);
console.log(heap.extract_max());
heap.insert(45);
console.log(`Final Heap: [${heap.array}]`);

it('Should heapify,insert,remove and extract max ', function () {
  heap.array.should.eql([45,19,36,17,12,20,31,8,9])
});

});

'use strict';

// Heaps are usually implemented as arrays
// Parent:Child relationship
//given i, its children are at 2i+1 and 2i+2 and its parent is at Math.floor((i-1)/2)

// 2^h -1 gives you the last index of height row
class Heap {
  constructor(){
    this.array = [];
  }
  insert (value) {
    console.log(this.array);
    let index;
    let nullIndex = this.array.indexOf(null);
    if (nullIndex !== -1) {
      this.array[nullIndex] = value;
      index = nullIndex;
    } else {
      this.array.push(value);
      index = this.array.length -1;
    }
    if (this.array.length ===1) return true // if adding root, treat it differently
    // check parent, if its bigger than parent, swap and continue checking parents.
    while (value > this.array[Math.floor((index-1)/2)]) {
      let parent_index = Math.floor((index-1)/2);
      let temp = this.array[parent_index]
      this.array[index] = temp;
      this.array[parent_index] = value;
      index = parent_index;
    }
    console.log(this.array);
    return true;
  }
  remove(value) {
    console.log(`Trying to remove ${value} from ${this.array}`);
    let index = this.array.indexOf(value);
    if (index === -1) return false;

    let leftChild = this.array[(2*index) +1];
    let rightChild = this.array[(2*index) +2];


    let replacementIndex, replacement;


    while (leftChild || rightChild) {
      replacement = Math.max(leftChild, rightChild);
      replacementIndex = this.array.indexOf(replacement);
      this.array[index] = replacement;

      leftChild =  this.array[(2*replacementIndex) +1];
      rightChild = this.array[(2*replacementIndex) +2];
      index = replacementIndex;
    }

      this.array[replacementIndex] = null;

      return true;
  }
  extract_max () {
    let root = this.array[0]
    this.remove(root);
    return root;
  }

}





// This failed because to insert a value need to know the index of parent and not possible unless made a global heap array
// At this point we realized might as well just implement as array anyway and changed course.
class HeapAttemptFail {
  constructor (value) {
    this.root = {value, left:null, right:null};
  }
  insert(value) {
    // two step process of left most insert and swim
    let checked = leftMostInsert(value);





  }
  extract(value) {}

  replace(value){}

  sink(){}

  swim(){

  }
  leftMostInsert (value) {
    let queue = [this.root];
    let node = {value, left:null, right:null};
    let checked = [];
    while (queue.length) {
      let current = queue.shift()
      checked.push(current);
      if (!current.left) {
        current.left = node;
        return checked;
      }
      else if (!current.right) {
        current.right = node;
        return checked;
      }
      else{
        queue.push(current.left)
        queue.push(current.right)
      }
    }
  }


}


module.exports = Heap;

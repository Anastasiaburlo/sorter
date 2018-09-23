class Sorter {
  constructor(element) {
    // your implementation
    this.element = element;
    this.array = [];
  }

  add(element) {
    // your implementation
    this.array.push(element);
  }

  toArray() {
    // your implementation
    return this.array;
  }

  at(index) {
    // your implementation
    return this.array[index];
  }

  get length() {
    // your implementation
    return this.array.length;
  }
  sort(indices) {
    // your implementation
    let arrayToSort = [];
    let indicesToSort = [];

    for (var i = 0; i < this.array.length; i++) {
      if (indices.indexOf(i) !== -1) {
        arrayToSort.push(this.array[i]);
        indicesToSort.push(i);
      }
    }

    let finalArray;
    if(this.compareFunction) finalArray = arrayToSort.sort(this.compareFunction);
    else finalArray = arrayToSort.sort(function(a, b) {return a - b});

    let x = 0;   
    for (var j = 0; j < this.array.length; j++) {
      if(indicesToSort.indexOf(j) !== -1) {
        this.array[j] = finalArray[x];
        ++x;
      }
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
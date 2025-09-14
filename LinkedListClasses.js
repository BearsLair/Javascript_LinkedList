class LinkedList {
  // append(value) - adds new node to end of list
  append(value) {}
  // prepend(value) - adds new node to start of list
  // size - returns total number of nodes
  // head - returns first node
  // tail - returns last node in list
  // at(index) - returns node at given index
  // pop - removes last element of list
  // constains(value) - returns true if value is in list, false otherwise
  // find(value) - returns index of node containing value
  // toString - display list objects as strings
  // with format: ( value ) -> ( value ) -> ( value ) -> null
  // insertAt(value, index) - inserts new node at given index
  // removeAt(index) - removes node at index
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const newNode = new Node("dog", "cat");

console.log(newNode);

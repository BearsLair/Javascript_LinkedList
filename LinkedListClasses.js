// class LinkedList() {

// }

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const newNode = new Node("dog", "cat");

console.log(newNode);

// The nodes are NESTED Node objects, joined together via nextNode property.

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.headNode = null;
  }

  // append(value) - adds new node to end of list
  append(value) {
    let node = new Node(value, null);

    if (this.headNode === null) {
      this.headNode = node;
      this.length++;
    } else {
      let current = this.headNode;

      while (current.nextNode != null) {
        current = current.nextNode;
      }
      current.nextNode = node;
      this.length++;
    }
  }

  // prepend(value) - adds new node to start of list
  // size - returns total number of nodes
  size() {
    return this.length;
  }
  // head - returns first node
  head() {
    return this.headNode.value;
  }
  // tail - returns last node in list
  tail() {
    let current = this.headNode;

    while (current != null) {
      if (current.nextNode == null) {
        return current.value;
      } else {
        current = current.nextNode;
      }
    }
  }
  // at(index) - returns node at given index (0-based).
  // pop - removes last element of list
  // constains(value) - returns true if value is in list, false otherwise
  // find(value) - returns index of node containing value
  // toString - display list objects as strings
  // with format: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    let current = this.headNode;
    let string = "";

    while (current != null) {
      string += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    string += "null";

    return string;
  }

  // insertAt(value, index) - inserts new node at given index
  // removeAt(index) - removes node at index
}

const newList = new LinkedList();

newList.append("dog");
newList.append("cat");
newList.append("bird");
newList.append("fish");
newList.append("mouse");

console.log(newList.toString());
console.log("Number of nodes: ", newList.size());
console.log("First node: ", newList.head());
console.log("Last node: ", newList.tail());

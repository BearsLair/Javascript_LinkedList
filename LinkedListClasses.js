// The nodes are NESTED Node objects, joined together via nextNode property.

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  // append(value) - adds new node to end of list
  append(value) {
    let node = new Node(value, null);

    if (this.head === null) {
      this.head = node;
      this.size++;
    } else {
      let current = this.head;

      while (current.nextNode != null) {
        current = current.nextNode;
      }
      current.nextNode = node;

      this.size++;
    }
  }

  // prepend(value) - adds new node to start of list
  // size - returns total number of nodes
  // head - returns first node
  // tail - returns last node in list
  // at(index) - returns node at given index
  // pop - removes last element of list
  // constains(value) - returns true if value is in list, false otherwise
  // find(value) - returns index of node containing value
  // toString - display list objects as strings
  toString() {
    let current = this.head;
    let string = "";

    while (current.nextNode != null) {
      string += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    string += "null";

    return string;
  }
  // with format: ( value ) -> ( value ) -> ( value ) -> null
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

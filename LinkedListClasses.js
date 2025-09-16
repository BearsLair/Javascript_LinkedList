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
  at(index) {
    let current = this.headNode;
    let i = -1;

    while (i < this.length) {
      i++;

      if (i == index) {
        return current.value;
      }

      current = current.nextNode;
    }
  }
  // pop - removes last element of list
  pop() {
    let current = this.headNode;
    let i = 1;

    while (i < this.length - 1) {
      current = current.nextNode;
      i++;
    }

    current.nextNode = null;
    this.length--;
  }
  // constains(value) - returns true if value is in list, false otherwise
  contains(value) {
    let current = this.headNode;

    while (current != null) {
      if (current.value == value) {
        return true;
      }

      current = current.nextNode;
    }

    return false;
  }
  // find(value) - returns index of node containing value
  find(value) {
    let current = this.headNode;
    let i = 0;

    while (i < this.length) {
      if (current == null) {
        return "node not found";
      } else if (current.value == value) {
        return i;
      } else {
        current = current.nextNode;
        i++;
      }
    }
  }
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
  insertAt(value, index) {
    let current = this.headNode;
    let i = 0;
    let nextNodeCopy = null;

    while (i < index) {
      if (i == index - 1) {
        nextNodeCopy = current.nextNode;
        current.nextNode = new Node(value, nextNodeCopy);
        this.length++;
        console.log(this.length);
        break;
      } else {
        current = current.nextNode;
        i++;
      }
    }
  }
  // removeAt(index) - removes node at index
}

const newList = new LinkedList();

newList.append("dog");
newList.append("cat");
newList.append("bird");
newList.append("fish");
newList.append("mouse");

console.log("Linked List: ", newList.toString());
console.log("Number of nodes: ", newList.size());
console.log("First node: ", newList.head());
console.log("Last node: ", newList.tail());
console.log("Node at index 2: ", newList.at(2));
console.log("---------------------");

newList.pop();
console.log("Linked List with last element removed: ", newList.toString());
console.log("---------------------");

console.log("Linked List contains 'cat': ", newList.contains("cat"));
console.log("Linked list contains 'poodle': ", newList.contains("poodle"));
console.log("---------------------");

console.log("find index of cat: ", newList.find("cat"));
console.log("find index of bird: ", newList.find("bird"));
console.log("find index of monkey: ", newList.find("monkey"));
console.log("---------------------");

newList.insertAt("lion", 1);
console.log("Lion added at index 1: ", newList.toString());
newList.insertAt("parrot", 3);
console.log("Parrot added at index 3: ", newList.toString());
console.log("Number of nodes: ", newList.size());
console.log("---------------------");

import { LinkedList } from "./LinkedListClasses.js";

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

newList.removeAt(2);
console.log("removed value at index 2", newList.toString());
console.log("Number of nodes: ", newList.size());
newList.removeAt(1);
console.log("removed value at index 1", newList.toString());
console.log("Number of nodes: ", newList.size());

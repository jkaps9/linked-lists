import { LinkedList } from "./linked-list.js";

const myList = new LinkedList();

myList.append("dog");
myList.append("cat");
myList.append("parrot");
myList.append("hamster");
myList.append("snake");
myList.append("turtle");

console.log(myList.head()); //dog
console.log(myList.size()); //6
console.log(myList.toString());

myList.prepend("cheetah");
console.log(myList.toString());

console.log(myList.at(4));

myList.pop();
console.log(myList.toString());

console.log(myList.contains("snake")); //true
console.log(myList.contains("parrot")); //true
console.log(myList.contains("cheetah")); //true
console.log(myList.contains("jaguar")); //false

console.log(myList.find("snake")); //5
console.log(myList.find("parrot")); //3
console.log(myList.find("cheetah")); //0
console.log(myList.find("jaguar")); //null

console.log(myList.toString());
myList.insertAt("lynx", 3);
console.log(myList.toString());

myList.insertAt("fox", 12);
console.log(myList.toString());

myList.insertAt("pig", 0);
console.log(myList.toString());

myList.removeAt(0);
console.log(myList.toString());

myList.removeAt(50);
console.log(myList.toString()); //no change

myList.removeAt(myList.size() / 2);
console.log(myList.toString());

myList.removeAt(myList.size());
console.log(myList.toString()); //no change

myList.removeAt(myList.size() - 1);
console.log(myList.toString());

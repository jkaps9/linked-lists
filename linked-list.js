class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export class LinkedList {
  constructor(firstNode = null) {
    this.firstNode = firstNode;
  }

  append(value) {
    // adds a new node containing value to the end of the list
    const newNode = new Node(value);
    if (this.head() === null) {
      this.firstNode = newNode;
    } else {
      this.tail().nextNode = newNode;
    }
  }

  prepend(value) {
    //adds a new node containing value to the start of the list
    const newNode = new Node(value);
    newNode.nextNode = this.head();
    this.firstNode = newNode;
  }

  size() {
    // returns the total number of nodes in the list

    let currentNode = this.head();

    let count = 1;

    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      count++;
    }

    return count;
  }

  head() {
    //returns the first node in the list
    return this.firstNode;
  }

  //   set head(node) {
  //     this.head = node;
  //   }

  tail() {
    //returns the last node in the list
    let currentNode = this.head();

    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  at(index) {
    //returns the node at the given index
    let currentNode = this.head();

    let currentIndex = 0;

    if (index === 0) {
      return currentNode;
    }

    if (index < 1 || index >= this.size()) {
      return null;
    }

    while (currentNode && currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return currentNode;
  }

  pop() {
    //removes the last element from the list
    let currentNode = this.head();
    while (currentNode.nextNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = null;
  }

  contains(value) {
    //returns true if the passed in value is in the list and otherwise returns false.
    let currentNode = this.head();
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    // returns the index of the node containing value, or null if not found.
    let currentIndex = 0;
    let currentNode = this.head();
    while (currentNode) {
      if (currentNode.value === value) {
        return currentIndex;
      }
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    return null;
  }

  toString() {
    // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    let currentNode = this.head();
    let str = "";
    while (currentNode) {
      str += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    str += "null";
    return str;
  }

  insertAt(value, index) {
    //that inserts a new node with the provided value at the given index.

    if (index === 0) {
      this.prepend(value);
    } else if (index >= this.size()) {
      this.append(value);
    } else {
      const parentNode = this.at(index - 1);

      const newNode = new Node(value, parentNode.nextNode);
      parentNode.nextNode = newNode;
    }
  }

  removeAt(index) {
    //that removes the node at the given index.
    if (index >= this.size()) {
      return;
    }

    if (index === 0) {
      this.firstNode = this.head().nextNode;
    } else {
      const parentNode = this.at(index - 1);
      parentNode.nextNode = parentNode.nextNode.nextNode;
    }
  }
}

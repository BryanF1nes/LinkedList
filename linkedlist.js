// Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Linked List Class
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
    this.size++;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  size() {
    return this.size;
  }

  atIndex(index) {
    let current = this.head;
    let counter = 0;
    while (current !== this.tail.next) {
      if (counter === index) {
        return console.log(`Node Value: ${current.value}`);
      } else {
        current = current.next;
        counter++;
      }
    }
    return console.log("This is not a valid index");
  }

  pop() {
    if (!this.head) {
      return null;
    }

    if (this.head === this.tail) {
      const removedValue = this.head.value;
      this.head = null;
      this.tail = null;
      this.size--;
      return removedValue;
    }

    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }

    const removedValue = this.tail.value;

    this.tail = current;
    this.tail.next = null;
    this.size--;

    return removedValue;
  }

  contains(value) {
    let current = this.head;
    while (current !== this.tail.next) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
      return false;
    }
  }

  find(value) {
    let current = this.head;
    let counter = 0;
    while (current !== this.tail.next) {
      if (current.value === value) {
        return console.log(`Index: ${counter}`);
      } else {
        counter++;
        current = current.next;
      }
    }
    return console.log(`Index: Not found within the linked list.`);
  }

  toString() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += `(${current.value}) -> `;
      current = current.next;
    }
    result += "null";
    return result;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      throw new Error("Index out of bounds!");
    }

    const node = new Node(value);

    if (index === 0) {
      node.next = current;
      this.head = node;
      if (!this.tail) {
        this.tail = node;
      }
    } else if (index === this.size) {
      this.tail.next = node;
      this.tail = node;
    } else {
      let current = this.head;
      let previous = null;
      let counter = 0;

      while (counter < index) {
        previous = current;
        current = current.next;
        counter++;
      }

      previous.next = node;
      node.next = current;
    }

    this.size++;
  }
}

const linkedList = new LinkedList();
linkedList.append(5);
linkedList.append(12);
linkedList.prepend(3);
linkedList.prepend(11);
linkedList.pop(); // removes 12
console.log(linkedList.contains(3)); // returns false
linkedList.atIndex(0); // value 3
linkedList.find(5); // index of 1
linkedList.insertAt(8, 2);
console.log(linkedList.toString());

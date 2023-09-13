// Node Factory Function
function Node(value, pointer) {
  return { value, pointer };
}

// Linked List Factory Function
function LinkedList(head = null, tail = null) {
  // appends to the linkedList - checks to see if a head is present first
  function append(value) {
    if (this.head === null) {
      this.head = Node(value, this.tail);
    } else {
      this.tail = Node(value, null);
      this.head.pointer = this.tail;
    }
  }
  // prepends to the linkedList - checks to see if a head is present first
  function prepend(value) {
    if (this.head === null) {
      this.head = Node(value, this.tail);
    } else {
    }
  }
  return { head, tail, append };
}

const linkedList = LinkedList();
linkedList.append(5);
linkedList.append(3);

console.log(linkedList);

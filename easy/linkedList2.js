class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  insertLast(data) {
    if (!this.head) {
      this.insertFirst(data);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(data);
      this.size++;
    }
  }

  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }

    if (index == 0) {
      this.insertFirst(data);
      return;
    }

    let count = 0;
    let current = this.head;
    let previous;
    let newNode = new Node(data);
    while (count < index) {
      count++;
      previous = current;
      current = current.next;
    }

    newNode.next = current;
    previous.next = newNode;
    this.size++;
  }

  getAt(index) {
    let current = this.head;
    let count = 0;
    while (count < index) {
      count++;
      current = current.next;
    }
    console.log(current);
    return;
  }

  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let count = 0;
    let current = this.head;
    let previous;

    if (index == 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this.size--;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }
}

let a = new Node(1, 0);
let ll = new LinkedList();
ll.insertFirst(2);
ll.insertFirst(1);
ll.insertLast(4);
ll.insertAt(3, 2);
ll.getAt(1);
//ll.removeAt(2);
console.dir(ll, { depth: null });

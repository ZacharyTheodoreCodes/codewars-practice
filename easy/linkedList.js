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

  //insert last node
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

  //insert at index
  insertAt(data, index) {
    //if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    if (index == 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;
    this.size++; 
  }
  
}

let a1 = new Node(2, 0);
let ll = new LinkedList();
// ll.insertFirst(3);
// ll.insertFirst(4);
ll.insertLast(5);
//console.log(ll);
console.dir(ll, { depth: null });

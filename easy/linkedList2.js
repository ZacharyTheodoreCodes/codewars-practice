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

   let count = 0 ;
    
  }
}

let a = new Node(1, 0);
let ll = new LinkedList();
ll.insertFirst(3);
ll.insertFirst(2);
ll.insertLast(4);
console.dir(ll, { depth: null });

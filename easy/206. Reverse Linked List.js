class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const arrayToLinkedList = function (arr) {
  let head = null;
  let current = null;

  for (const value of arr) {
    const newNode = new Node(value);
    if (!head) {
      head = newNode;
      current = head;
    } else {
      current.next = newNode;
      current = newNode;
    }
  }
  return head;
};

function reverseList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

const inputArr = [1, 2, 3, 4, 5];
const linkedList = arrayToLinkedList(inputArr);
reverseList(linkedList);
//console.dir(reverseList(linkedList), { depth: null });
//console.dir(linkedList, { depth: null });

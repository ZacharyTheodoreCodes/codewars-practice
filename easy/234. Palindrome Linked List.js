var isPalindrome = function (head) {};

function reverseList(linkedList) {
  let current = linkedList;
  let prev = null;
  let next = null;
  
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function arrayToLinkedList(arr) {
  let head = null;
  let current = null;
  for (let value of arr) {
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
}

let head = [1, 2, 2, 1];
let linkedList = arrayToLinkedList(head);
console.dir(linkedList, { depth: null });

/**
 * turn array into linked list
 * reverse
 * compare
 * return true or false;
 */

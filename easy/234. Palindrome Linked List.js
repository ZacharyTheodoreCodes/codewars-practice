var isPalindrome = function (head) {
  let linkedList = arrayToLinkedList(head);
  let reversed = reverseList(linkedList);

  let currentOriginal = linkedList;
  let currentReversed = reversed;

  while (currentOriginal !== null && currentReversed !== null) {
    if (currentOriginal.data !== currentReversed.data) {
      console.log("Not a palindrome");
      return false;
    }
    currentOriginal = currentOriginal.next;
    currentReversed = currentReversed.next;
  }

  console.log("Palindrome");
  return true;
};
function reverseList(linkedList) {
  let current = linkedList;
  let prev = null;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
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
// let ll = arrayToLinkedList(head);
// console.dir(ll, { depth: null });
isPalindrome(head);
console.dir(palindrome, { depth: null });

/**
 * turn array into linked list
 * reverse
 * compare
 * return true or false;
 */

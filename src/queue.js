const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (this.head) {
      let curentElem = this.head;
      while (curentElem.next) {
        curentElem = curentElem.next;
      }

      curentElem.next = new ListNode(value);
    } else {
      this.head = new ListNode(value);
    }
  }

  dequeue() {
    let curentElem = this.head;
    this.head = curentElem.next;
    return curentElem.value;
  }
}

module.exports = {
  Queue
};

class Stack {
    constructor() {
      this.queue1 = [];
      this.queue2 = [];
    }
  
    // Function to push an element onto the stack
    push(element) {
      // Move all elements from queue1 to queue2
      while (this.queue1.length > 0) {
        this.queue2.push(this.queue1.shift());
      }
      // Add the new element to the empty queue1
      this.queue1.push(element);
      // Move back all elements from queue2 to queue1
      while (this.queue2.length > 0) {
        this.queue1.push(this.queue2.shift());
      }
    }
  
    // Function to remove and return the top element from the stack
    pop() {
      if (this.queue1.length === 0) {
        return null;
      }
      return this.queue1.shift();
    }
  
    // Function to return the top element from the stack without removing it
    top() {
      if (this.queue1.length === 0) {
        return null;
      }
      return this.queue1[0];
    }
  
    // Function to check if the stack is empty
    empty() {
      return this.queue1.length === 0;
    }
  }
  
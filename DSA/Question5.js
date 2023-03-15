class Stack {
    constructor() {
      this.q1 = [];
      this.q2 = [];
      this.currentSize = 0;
    }
  
    push(item) {
      this.currentSize++;
      this.q2.push(item);
  
      // Move all items from q1 to q2
      while (this.q1.length > 0) {
        this.q2.push(this.q1.shift());
      }
  
      // Swap q1 and q2
      let temp = this.q1;
      this.q1 = this.q2;
      this.q2 = temp;
    }
  
    pop() {
      if (this.q1.length === 0) {
        return null;
      }
  
      this.currentSize--;
      return this.q1.shift();
    }
  
    size() {
      return this.currentSize;
    }
  
    isEmpty() {
      return this.currentSize === 0;
    }
  }
  
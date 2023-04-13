class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add element to the end of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove and return the element from the front of the queue
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift();
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  // Function to find the shortest safe path in the park
  function shortestSafePath(park) {
    const m = park.length;
    const n = park[0].length;
    const queue = new Queue();
  
    // Mark the first column cells as visited and enqueue them
    for (let i = 0; i < m; i++) {
      if (park[i][0] === 1) {
        queue.enqueue({ row: i, col: 0 });
        park[i][0] = 0; // mark as visited
      }
    }
  
    // Array to store possible moves in four directions
    const moves = [
      { row: -1, col: 0 }, // Up
      { row: 0, col: -1 }, // Left
      { row: 1, col: 0 }, // Down
      { row: 0, col: 1 } // Right
    ];
  
    // BFS to explore the park from first column to last column
    while (!queue.isEmpty()) {
      const { row, col } = queue.dequeue();
  
      // If we reach the last column, return the distance
      if (col === n - 1) {
        return park[row][col];
      }
  
      // Explore the adjacent cells in all four directions
      for (let i = 0; i < 4; i++) {
        const newRow = row + moves[i].row;
        const newCol = col + moves[i].col;
  
        // Check if the new cell is within the park bounds and not visited yet
        if (
          newRow >= 0 &&
          newRow < m &&
          newCol >= 0 &&
          newCol < n &&
          park[newRow][newCol] === 1
        ) {
          // Mark the cell as visited and enqueue it
          queue.enqueue({ row: newRow, col: newCol });
          park[newRow][newCol] = park[row][col] + 1; // update distance
        }
      }
    }
  
    // If no safe path found
    return -1;
  }
  
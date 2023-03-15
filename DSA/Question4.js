
function depth(arr) {
    if (!Array.isArray(arr)) {
      return 0; // Not an array
    }
    let maxDepth = 1;
    for (let i = 0; i < arr.length; i++) {
      const currentDepth = depth(arr[i]) + 1;
      if (currentDepth > maxDepth) {
        maxDepth = currentDepth;
      }
    }
    return maxDepth;
  }
  
  // Example usage
  console.log(depth([1, 2, 3, 4])); // Output: 1
  console.log(depth([1, [2, [3, 4]]]));
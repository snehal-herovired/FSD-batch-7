class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function deleteBinaryTree(root) {
    if (!root) return; // If root is null, no tree to delete
  
    const queue = []; // Create a queue for level order traversal
    queue.push(root); // Enqueue the root node
  
    while (queue.length > 0) {
      const currNode = queue.shift(); // Dequeue the node
  
      // Delete the node's left child if exists
      if (currNode.left) {
        queue.push(currNode.left);
        currNode.left = null;
      }
  
      // Delete the node's right child if exists
      if (currNode.right) {
        queue.push(currNode.right);
        currNode.right = null;
      }
  
      // Delete the current node itself
      currNode = null;
    }
  
    // After the traversal, the entire binary tree is deleted
    root = null;
  }
  
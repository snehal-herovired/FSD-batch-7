class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    // Helper function to find the inorder successor
    findInorderSuccessor(node) {
      let current = node.right;
      while (current && current.left !== null) {
        current = current.left;
      }
      return current;
    }
  
    // Helper function to find the inorder predecessor
    findInorderPredecessor(node) {
      let current = node.left;
      while (current && current.right !== null) {
        current = current.right;
      }
      return current;
    }
  
    // Function to delete a node from the BST
    deleteNode(value) {
      this.root = this._deleteNode(this.root, value);
    }
  
    _deleteNode(root, value) {
      if (root === null) {
        return root;
      }
  
      if (value < root.value) {
        root.left = this._deleteNode(root.left, value);
      } else if (value > root.value) {
        root.right = this._deleteNode(root.right, value);
      } else {
        // Node to be deleted is found
  
        // Case 1: Node is a leaf node
        if (root.left === null && root.right === null) {
          root = null;
        }
  
        // Case 2: Node has only one child
        else if (root.left === null) {
          root = root.right;
        } else if (root.right === null) {
          root = root.left;
        }
  
        // Case 3: Node has two children
        else {
          // Find the inorder successor (or predecessor)
          // Replace the node's value with the value of the inorder successor (or predecessor)
          if (root.right) {
            let temp = this.findInorderSuccessor(root);
            root.value = temp.value;
            root.right = this._deleteNode(root.right, temp.value);
          } else {
            let temp = this.findInorderPredecessor(root);
            root.value = temp.value;
            root.left = this._deleteNode(root.left, temp.value);
          }
        }
      }
      return root;
    }
  }
  
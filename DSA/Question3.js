class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(data) {
      const newNode = new Node(data);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.data.percentage < node.data.percentage) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    findStudent(name) {
      return this.findNode(this.root, name);
    }
  
    findNode(node, name) {
      if (node === null) {
        return null;
      } else if (node.data.name === name) {
        return node;
      } else if (name < node.data.name) {
        return this.findNode(node.left, name);
      } else {
        return this.findNode(node.right, name);
      }
    }
  }
  
  const bst = new BinarySearchTree();
  
  // Accept student data from the user
  const id = prompt("Enter student id:");
  const name = prompt("Enter student name:");
  const marks = [];
  
  for (let i = 1; i <= 5; i++) {
    marks.push(parseFloat(prompt(`Enter marks of subject ${i}:`)));
  }
  
  // Calculate percentage of student
  const total = marks.reduce((acc, curr) => acc + curr);
  const percentage = (total / 5).toFixed(2);
  
  // Create student object
  const student = {
    id,
    name,
    marks,
    percentage,
  };
  
  // Insert student into BST
  bst.insert(student);
  
  // Accept student name from user to display grades
  const searchName = prompt("Enter student name to display grades:");
  
  // Find student node in BST
  const studentNode = bst.findStudent(searchName);
  
  if (studentNode === null) {
    console.log(`Student with name '${searchName}' not found`);
  } else {
    console.log(`Grades of ${studentNode.data.name}:`);
    console.log(`Subject 1: ${studentNode.data.marks[0]}`);
    console.log(`Subject 2: ${studentNode.data.marks[1]}`);
    console.log(`Subject 3: ${studentNode.data.marks[2]}`);
    console.log(`Subject 4: ${studentNode.data.marks[3]}`);
    console.log(`Subject 5: ${studentNode.data.marks[4]}`);
    console.log(`Percentage: ${studentNode.data.percentage}%`);
  }
  
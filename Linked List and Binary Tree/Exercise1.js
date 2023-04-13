class Student {
    constructor(student_id, student_name, marks) {
        this.student_id = student_id;
        this.student_name = student_name;
        this.marks = marks;
        this.percentage = marks.reduce((sum, mark) => sum + mark, 0) / marks.length; // Calculate percentage

        this.left = null;
        this.right = null;
    }
}

// Function to insert a student into the binary search tree
function insertStudent(root, student) {
    if (root === null) {
        return student;
    }

    if (student.percentage < root.percentage) {
        root.left = insertStudent(root.left, student);
    } else {
        root.right = insertStudent(root.right, student);
    }

    return root;
}

// Function to search for a student in the binary search tree
function searchStudent(root, student_name) {
    if (root === null || root.student_name === student_name) {
        return root;
    }

    if (student_name < root.student_name) {
        return searchStudent(root.left, student_name);
    }

    return searchStudent(root.right, student_name);
}

// Function to display the student's details based on name
function displayStudentDetails(root, student_name) {
    const student = searchStudent(root, student_name);
    if (student !== null) {
        console.log("Student ID:", student.student_id);
        console.log("Student Name:", student.student_name);
        console.log("Student Marks:", student.marks.join(", "));
        console.log("Student Percentage:", student.percentage.toFixed(2) + "%");
    } else {
        console.log("Student not found.");
    }
}

// Example usage:

// Create a binary search tree for student data
let root = null;
root = insertStudent(root, new Student(1, "Alice", [80, 85, 90, 92, 88]));
root = insertStudent(root, new Student(2, "Bob", [78, 89, 92, 87, 95]));
root = insertStudent(root, new Student(3, "Charlie", [88, 82, 92, 85, 90]));
root = insertStudent(root, new Student(4, "Dave", [90, 87, 91, 92, 89]));

// Display details of a specific student
displayStudentDetails(root, "Bob");

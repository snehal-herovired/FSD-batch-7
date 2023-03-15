const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const totalTasks = document.getElementById('total-tasks');
const completedTasks = document.getElementById('completed-tasks');
const deleteAllBtn = document.getElementById('delete-all-btn');

let tasks = [];

// Add task function
function addTask(e) {
    e.preventDefault();

    // Get input value
    const newTask = input.value.trim();

    // If input is empty, do nothing
    if (!newTask) return;

    // Create task object
    const task = {
        id: Date.now(),
        content: newTask,
        completed: false
    };

    // Add task to tasks array
    tasks.push(task);

    // Clear input field
    input.value = '';

    // Render tasks
    renderTasks();
}

// Render tasks function
function renderTasks() {
    // Clear todo list
    todoList.innerHTML = '';

    // Loop through tasks array and render each task
    tasks.forEach(task => {
        const li = document.createElement('li');

        // Add content to task
        li.innerText = task.content;

        // Add completed class if task is completed
        if (task.completed) {
            li.classList.add('completed');
        }

        // Add click event listener to mark task as completed
        li.addEventListener('click', () => {
            task.completed = !task.completed;
            renderTasks();
        });

        // Add delete button to task
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', () => {
            deleteTask(task.id);
        });

        // Append task and delete button to todo list
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });

    // Update total task count
    totalTasks.innerText = tasks.length;

    // Update completed task count
    const completedTasksCount = tasks.filter(task => task.completed).length;
    completedTasks.innerText = completedTasksCount;
}

// Delete task function
function deleteTask(id) {
    // Filter out task with given id
    tasks = tasks.filter(task => task.id !== id);

    // Render tasks
    renderTasks();
}

// Delete all tasks function
function deleteAllTasks() {
    // Set tasks array to empty
    tasks = [];

    // Render tasks
    renderTasks();
}

// Add event listeners
form.addEventListener('submit', addTask);
deleteAllBtn.addEventListener('click', deleteAllTasks);

let tasks = [];

// print output on screen
function print(message) {
    const output = document.getElementById("output");
    output.innerText += message + "\n";
}

// Clear output
function clearOutput() {
    document.getElementById("output").innerText = "";
}

function showTasks() {
    clearOutput();

    if (tasks.length === 0) {
        print("No tasks available.");
    } else {
        print("Your To-Do List:");
        tasks.forEach((task, index) => {
            print(`${index + 1}. ${task}`);
        });
    }
}

function addTask() {
    clearOutput();

    let task = prompt("Enter a new task:");

    if (task && task.trim() !== "") {
        tasks.push(task.trim());
        print("Task added successfully!");
    } else {
        print("Task cannot be empty!");
    }
}

function deleteTask() {
    clearOutput();

    if (tasks.length === 0) {
        print("No tasks to delete.");
        return;
    }

    showTasks();

    let taskNo = parseInt(prompt("Enter task number to delete:"));

    if (!isNaN(taskNo) && taskNo >= 1 && taskNo <= tasks.length) {
        let removed = tasks.splice(taskNo - 1, 1);
        clearOutput();
        print(`Task '${removed[0]}' deleted successfully!`);
    } else {
        clearOutput();
        print("Invalid task number!");
    }
}

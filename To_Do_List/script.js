const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const clearBtn = document.getElementById("clear-btn");
const counter = document.getElementById("counter");

/* Add task on button click */
addBtn.addEventListener("click", addTask);

/* Add task on ENTER key */
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

/* Clear all tasks */
clearBtn.addEventListener("click", function () {
    taskList.innerHTML = "";
    updateCounter();
});

function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    /* Tick Button */
    const tickBtn = document.createElement("button");
    tickBtn.textContent = "✅";
    tickBtn.className = "tick-btn";

    /* Task Text */
    const span = document.createElement("span");
    span.textContent = taskText;
    span.className = "task-text";

    /* Delete Button */
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";

    function toggleComplete() {
        span.classList.toggle("completed");
        tickBtn.classList.toggle("done");
        updateCounter();
    }

    /* Click events */
    tickBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        toggleComplete();
    });

    span.addEventListener("click", toggleComplete);

    delBtn.addEventListener("click", function () {
        li.remove();
        updateCounter();
    });

    li.appendChild(tickBtn);
    li.appendChild(span);
    li.appendChild(delBtn);

    taskList.appendChild(li);

    input.value = "";
    updateCounter();
}

/* Update Completed / Total */
function updateCounter() {
    const total = taskList.children.length;
    const completed = document.querySelectorAll(".completed").length;

    counter.textContent = `Completed: ${completed} / Total: ${total}`;
}

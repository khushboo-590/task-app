
document.addEventListener("DOMContentLoaded", function () {
    const addTaskButton = document.getElementById("addTask");
    const taskInput = document.getElementById("taskInput");
    const clearTasksButton = document.getElementById("clearTasks");

    const taskList = document.getElementById("taskList");

    function loadTasks() {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            let li = document.createElement("li");
            li.dataset.index = index;
            li.innerHTML = `
                        <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
                        <button class="complete"><img src="./assets/images/bx_check-circle.svg" alt="Complete" ></button>
                        <button class="delete"><img src="./assets/images/bx_trash.svg" alt="delete"></button>
                    `;
            taskList.appendChild(li);
        });
    }


    function addTask() {
        let taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push({ text: taskText, completed: false });
        localStorage.setItem("tasks", JSON.stringify(tasks));

        taskInput.value = "";
        loadTasks();
    }

    taskList.addEventListener("click", function (e) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        let index = e.target.closest("li")?.dataset.index;

        if (!index) return;

        if (e.target.closest(".complete")) {
            tasks[index].completed = !tasks[index].completed;
            e.target.closest(".complete").classList.toggle("active");
        }

        if (e.target.closest(".delete")) {
            tasks.splice(index, 1);
            e.target.closest(".delete").classList.toggle("active");
        }

        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    });

    clearTasksButton.addEventListener("click", function () {
        localStorage.removeItem("tasks");
        taskList.innerHTML = "";
        clearTasksButton.classList.add("active");
    });

    addTaskButton.addEventListener("click", addTask);
    loadTasks();
});



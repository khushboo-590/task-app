


document.addEventListener("DOMContentLoaded", function () {
    const addTaskButton = document.getElementById("addTask");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    function addTask() {
        let taskText = taskInput.value.trim();
        if (taskText !== "") {
            let li = document.createElement("li");

            li.innerHTML = `
                <span>${taskText}</span>
                <div class="gap-15 align-items-center d-flex">
                    <button class="complete ">
                                        <img src="./assets/images/bx_check-circle.svg" alt="Complete" >
</button>
                    <button class="delete"><img src="./assets/images/bx_trash.svg" alt="delete"</button>
                </div>
            `;

            taskList.appendChild(li);
            taskInput.value = "";
        }
    }

    addTaskButton.addEventListener("click", addTask);

    taskList.addEventListener("click", function (e) {
        if (e.target.classList.contains("complete")) {
            e.target.parentElement.parentElement.classList.toggle("completed");
        }
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.parentElement.remove();
        }
    });
});


















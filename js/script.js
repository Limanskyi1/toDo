// render Task
function renderTask() {
  const arr = JSON.parse(localStorage.getItem("tasks"));
  if (arr && arr.length > 0) {
    drawTask(arr);
  }
}

// Filters
function filterTasks(filterType) {
    let filteredTasks;
    switch (filterType) {
      case "active":
        filteredTasks = tasksArr.filter(task => !task.status);
        break;
      case "completed":
        filteredTasks = tasksArr.filter(task => task.status);
        break;
      default:
        filteredTasks = tasksArr;
    }
    tasksList.innerHTML = "";
    drawTask(filteredTasks);
  }

// Draw one Task
function drawTask(arr) {
  arr.forEach((task) => {
    const div = document.createElement("div");
    div.id = task.id;
    div.classList.add("task");
    task.status ? div.classList.add("done") : div.classList.remove("done");
    div.innerHTML = `
            <div class="task-status"></div>
            <p>${task.innerText}</p>
            <img class="delete-task" src="icons8-trash.svg" alt="">
        `;
    tasksList.appendChild(div);
  });
}

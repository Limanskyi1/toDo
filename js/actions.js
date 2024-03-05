// add Task
const addTask = (value) => {
  const div = document.createElement("div");
  div.classList.add("task");
  let id = Date.now();
  div.id = id;
  div.innerHTML = `
        <div class="task-status">
        </div>
        <p>${value}</p>
        <img class="delete-task" src="icons8-trash.svg" alt="">
    `;
  const taskObj = {
    id: id,
    status: false,
    innerText: value,
  };
  tasksArr.push(taskObj);
  localStorage.setItem("tasks", JSON.stringify(tasksArr));
  return div;
};

// delete Task
function deleteTask(task) {
  const filteredArr = tasksArr.filter((item) => {
    if (Number(task.id) !== Number(item.id)) return true;
  });
  tasksArr = filteredArr;
  localStorage.setItem("tasks", JSON.stringify(tasksArr));
  task.remove();
}

// status Change
function statusChange(clickedTask) {
  tasksArr = tasksArr.map((task) => {
    if (Number(task.id) === Number(clickedTask.id)) {
      task.status = !task.status;
    }
    return task;
  });
  localStorage.setItem("tasks", JSON.stringify(tasksArr));
  clickedTask.classList.contains("done") ? clickedTask.classList.remove("done")
    : clickedTask.classList.add("done");
}

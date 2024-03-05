

// Submit to add Task
form.addEventListener('submit',(e) => {
    e.preventDefault();
    const value = input.value;
    input.value = '';
    tasksList.appendChild(addTask(value));
});


tasksList.addEventListener('click', (e) => {
    const clickedTask = e.target.closest('.task');
    if (!clickedTask) return;

    if (e.target.classList.contains('delete-task')) {
        deleteTask(clickedTask);
    } else if (e.target.classList.contains('task-status')) {
        statusChange(clickedTask);
    }
});


filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(otherBtn => otherBtn.classList.remove('active'));
        btn.classList.add('active');
    });
});



allTasksBtn.addEventListener('click', () => filterTasks('all'));
activeTasksBtn.addEventListener('click', () => filterTasks('active'));
completedTasksBtn.addEventListener('click', () => filterTasks('completed'));

completedTasksBtnClear.addEventListener('click', () => {
    const completedTasksItems = document.querySelectorAll('.task.done');
    completedTasksItems.forEach(item => {
        item.remove();
    });
    tasksArr = tasksArr.filter(task => {
        if (Array.from(completedTasksItems).some(otherTask => Number(otherTask.id) === Number(task.id))) {
          return false;
        }
        return true;
    });
    localStorage.setItem('tasks',JSON.stringify(tasksArr));
});



renderTask();
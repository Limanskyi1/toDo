tasksDrake.on('drop', function(el, target, source, sibling) {
    let tasksList = document.querySelectorAll('.task');
    let arrayFromNodeList = [...tasksList];
    let orderIds = arrayFromNodeList.map(item => parseInt(item.id));

    orderIds.pop();

    tasksArr.sort((a, b) => {
        let idA = parseInt(a.id);
        let idB = parseInt(b.id);
        return orderIds.indexOf(idA) - orderIds.indexOf(idB);
    });
    if (arrayFromNodeList.length > 0) {
        arrayFromNodeList.pop();
    }
    localStorage.setItem('tasks',JSON.stringify(tasksArr));
});
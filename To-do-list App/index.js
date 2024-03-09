let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false });
        displayTasks();
        taskInput.value = "";
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function displayTasks() {
const taskList = document.querySelector(".list");
taskList.innerHTML = "";
tasks.forEach((task, index) => {
const truncatedText = task.text.length > 20 ? task.text.slice(0, 26) + "..." : task.text;
const taskItem = document.createElement("div");
taskItem.classList.add("item");
taskItem.innerHTML = `
    <input type="checkbox" onchange="toggleTask(${index})" ${task.completed ? "checked" : ""}>
    <h3 class="headingggg" style="background-color: #b81818;width:250px;height:auto;">${truncatedText}</h3>
    <button onclick="removeTask(${index})" style="padding:5px;background-color:white;color:#b81818;border-radius:4px;border:none;">Remove</button>
`;
taskList.appendChild(taskItem);
});
}


displayTasks();
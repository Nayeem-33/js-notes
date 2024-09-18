const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
document.getElementById("addTask").addEventListener("click", function (event) {
  let newTask = document.createElement("li");
  newTask.innerText = taskInput.value
  taskList.appendChild(newTask)
  taskInput.value = ''
  event.stopImmediatePropagation()
});

taskList.addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target)
})

const taskContainer = document.querySelector("#content-container");
const inputBox = document.getElementById("input-value");
const rows = taskContainer.getElementsByTagName("tr")

//* Adding new task
document.querySelector("#task-btn").addEventListener("click", function (e) {
  let newTr = document.createElement("tr");

  if (inputBox.value !== "") { // ! to prevent empty task
    newTr.innerHTML = `
          <td></td> <!-- Serial number will be set later -->
          <td>${inputBox.value}</td>
          <td class="done-btn"><button class="btn btn-xs btn-success action-btn">Done</button></td>
      `;

    taskContainer.appendChild(newTr);
    inputBox.value = "";

    // Handle the Done/Delete button functionality
    newTr.querySelector(".action-btn").addEventListener("click", function (event) {
      if (event.target.innerText === "DONE") {
        event.target.parentNode.parentNode.children[1].style.textDecoration = "line-through";
        event.target.classList.add("btn-error");
        event.target.innerHTML = "Delete";
      } else if (event.target.innerText === "DELETE") {
        event.target.parentNode.parentNode.remove();
        updateSerialNumbers(); // Update serial numbers after deleting a task
      }
    });

    // After adding, update serial numbers
    updateSerialNumbers();
  } else {
    alert("Write a Task");
  }
});

// Function to update serial numbers using a for loop
function updateSerialNumbers() {
  ; // Get all <tr> elements

  // Use a traditional for loop to loop through the rows
  for (let i = 0; i < rows.length; i++) {
    rows[i].cells[0].textContent = i + 1; // Set the serial number as index + 1
  }
}

// Clear all the task
document.getElementById("clear-btn").addEventListener("click", function () {
    taskContainer.innerHTML = "";
  });
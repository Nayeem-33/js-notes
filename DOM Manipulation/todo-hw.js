const addBtn = document.querySelector("#task-btn");

const taskContainer = document.querySelector("#content-container");

let inputBox = document.getElementById("input-value");

document.querySelector("#task-btn").addEventListener("click", function () {
  let newTr = document.createElement("tr");
  newTr.innerHTML = `
    <tr>
        <th>1</th>
        <td>${inputBox.value}</td>
        <td><button class="btn btn-xs btn-success action-btn">done</button></td>
    </tr>
    `;

  taskContainer.appendChild(newTr);
});

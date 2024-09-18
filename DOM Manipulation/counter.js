let counter = document.getElementById("counterValue");

document
  .getElementById("decrement")
  .addEventListener("click", function (event) {
    let counterNum = Number(counter.innerText);
    counterNum--;
    counter.innerText = counterNum;
  });
document
  .getElementById("increment")
  .addEventListener("click", function (event) {
    let counterNum = Number(counter.innerText);
    counterNum++;
    counter.innerText = counterNum;
  });

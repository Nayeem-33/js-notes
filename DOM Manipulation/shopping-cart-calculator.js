console.log("Maal connected");

const productList = document.getElementById("productList");
const productInput = document.getElementById("productInput");

const itemName = productInput.querySelector("#itemName");
const itemQty = productInput.querySelector("#itemQty");
const itemPrice = productInput.querySelector("#itemPrice");
document
  .getElementById("addToCart")
  .addEventListener("click", function (event) {
    let newInput = document.createElement("li");
    newInput.innerHTML = `
    <li class="flex justify-between gap-5">
        <p class="text-left w-full">${itemName.value}</p>
        <p class="text-right w-24">${itemQty.value}</p>
        <p class="text-right w-28">${itemPrice.value}</p>
        <p class="totalPrice text-right w-28">${
          itemQty.value * itemPrice.value
        }</p>
    </li>`;

    productList.appendChild(newInput);

    itemName.value = "";
    itemQty.value = "";
    itemPrice.value = "";
    event.stopImmediatePropagation();
    console.log(itemName.value, itemQty.value, itemPrice);

    calculateTotal();
  });

function calculateTotal() {
  const allTheTotalNumber = document.querySelectorAll(".totalPrice");
  let totalPrice = 0;

  for (const number of allTheTotalNumber) {
    totalPrice = totalPrice + Number(number.textContent);
  }
  document.getElementById("totalPriceF").textContent = totalPrice.toFixed(2);
}

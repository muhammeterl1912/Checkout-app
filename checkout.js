// ..................SELECTORS..................
const deleteallbtn = document.querySelector(".delete-div .fa-trash-can");
const products = document.querySelector(".product-list .products");
const deleteallremove = document.querySelector(".delete-div");

// ..................SELECTORS..................
//................Events..............................
deleteallbtn.addEventListener("click", () => {
  products.textContent = "No Products";
  products.classList.add("no-product");
  deleteallremove.remove();
});
products.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-plus")) {
    event.target.previousElementSibling.textContent++;
    calculatePrice(event.target);
  } else if (event.target.classList.contains("fa-minus")) {
    if (event.target.nextElementSibling.textContent <= 0) {
      return;
    }

    event.target.nextElementSibling.textContent--;
    calculatePrice(event.target);
  } else if (event.target.classList.contains("fa-trash-can")) {
    event.target.closest(".product").remove();
    calculatePrice(event.target)
  }
});

//................Events..............................
const calculatePrice = (dis) => {
  const discountendPrice = dis
    .closest(".product-info")
    .querySelector("#discounted-price");

  const productPrice = dis
    .closest(".buttons-div")
    .querySelector("#product-price");
  const quantity = dis.parentNode.querySelector("#quantity");
  productPrice.textContent = (
    quantity.textContent * discountendPrice.textContent
  ).toFixed(2);
  calculateTotalPrice();
};
const calculateTotalPrice = () => {
  const prices = document.querySelectorAll("#product-price");
  const total = [...prices].reduce(
    (sum, price) => sum + Number(price.textContent),
    0
  );
  document.querySelector("#selected-price").textContent = total.toFixed(2)
};

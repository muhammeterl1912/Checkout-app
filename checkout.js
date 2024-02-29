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
    calculatePrice(event.target)
  }
});

//................Events..............................
const calculatePrice = (dis) => {
  const discountendPrice = dis
    .closest(".product-info")
    .querySelector("#discounted-price");
    discountendPrice.textContent
};

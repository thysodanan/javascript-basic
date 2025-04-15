var icon = document.querySelector(".icon");
var body = document.querySelector("body");
var close = document.querySelector(".close");
var listProduct = [];
var cart = [];
var productlist = document.querySelector(".list-product");
icon.addEventListener("click", () => {
  body.classList.toggle("active");
});
close.addEventListener("click", () => {
  body.classList.toggle("active");
});

const listProducthtml = document.querySelector(".product");
const adddatatohtml = () => {
  listProducthtml.innerHTML = "";
  if (listProduct.length > 0) {
    listProduct.forEach((product) => {
      let newproduct = document.createElement("div");
      newproduct.dataset.id = product.id;
      newproduct.classList.add("list");
      newproduct.innerHTML = `
             <img
      src="${product.imge}"
      alt=""
      />
      <h2>${product.name}</h2>
      <div class="price">${product.price}</div>
      <button class="add">add to cart</button>
        `;
      listProducthtml.appendChild(newproduct);
    });
  }
};
listProducthtml.addEventListener("click", function (event) {
  var positionclick = event.target;
  if (positionclick.classList.contains("add")) {
    var productId = positionclick.parentElement.dataset.id;
    addCart(productId);
  }
});
const addtocart = (productId) => {
  let posproductincart = cart.findIndex(
    (value) => value.productId == productId
  );
  if (cart.length <= 0) {
    cart = [{ productId: productId, qty: 1 }];
  } else {
    cart[posproductincart].qty=cart[posproductincart].qty+1;
  }
  console.log(carts)
};
addtocart();
const initApp = () => {
  //get data from json
  fetch("js.json")
    .then((response) => response.json())
    .then((data) => {
      listProduct = data;
      console.log(listProduct);
      adddatatohtml();
    });
};
initApp();

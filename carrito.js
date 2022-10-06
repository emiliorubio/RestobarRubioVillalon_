<<<<<<< HEAD

const carrito = JSON.parse(localStorage.getItem(("carrito") ||[]));
if(carrito) {
  for (let index = 0; index < carrito.length; index++) {
    const producto = carrito[index];
    addItemToShoppingCart(
      producto.id,
      producto.title,
    producto.price,
    producto.image,
    producto.quantity
    );
  }
}
const addToShoppingCartButtons = document.querySelectorAll(".addToCart");

addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener("click", addToCartClicked);
});

const comprarButton = document.querySelector(".comprarButton");
comprarButton.addEventListener("click", comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
  ".shoppingCartItemsContainer"
);

function addItemToShoppingCart(itemId,itemTitle, itemPrice, itemImage, itemQuantity) {
=======
/* Pendiente de resolver 
setTimeout(function() {
  console.log("producto añadido correctamente");
}, 3000);
*/
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

for (let index = 0; index < carrito.length; index++) {
  const producto = carrito[index];
  addItemToShoppingCart(
    producto.title,
    producto.price,
    producto.image,
    producto.quantity
  );
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage, itemQuantity) {
>>>>>>> 7918d8f24fe211e1bc7d1cc6770265997322779a
  const shoppingCartItemsContainer =
    document.getElementById("contenedor-carrito");

  const shoppingCartRow = document.createElement("div");
  const shoppingCartContent = `
    <div class="row shoppingCartItem">
        <div class="col-6">
<<<<<<< HEAD
            <div class="shopping-cart-item pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title text-white shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price pb-2 pt-3">
=======
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
>>>>>>> 7918d8f24fe211e1bc7d1cc6770265997322779a
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
<<<<<<< HEAD
                class="shopping-cart-quantity pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="${itemQuantity}">
                <button id="${itemId}" class="btn btn-danger buttonDelete" type="button">X</button>
=======
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="${itemQuantity}">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
>>>>>>> 7918d8f24fe211e1bc7d1cc6770265997322779a
            </div>
        </div>
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector(".buttonDelete")
    .addEventListener("click", removeShoppingCartItem);

  shoppingCartRow
    .querySelector(".shoppingCartItemQuantity")
    .addEventListener("change", quantityChanged);

  updateShoppingCartTotal();
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
<<<<<<< HEAD
  const buttonId = buttonClicked.id
  buttonClicked.closest(".shoppingCartItem").remove();
  const carroActual = JSON.parse(localStorage.getItem(("carrito") ||[]));

  if(carroActual) {
    const filterItems = carroActual.filter(producto => producto.id !== buttonId)
    localStorage.setItem('carrito', JSON.stringify(filterItems))
  }
=======
  buttonClicked.closest(".shoppingCartItem").remove();
>>>>>>> 7918d8f24fe211e1bc7d1cc6770265997322779a
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector(".shoppingCartTotal");

  const shoppingCartItems = document.querySelectorAll(".shoppingCartItem");

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      ".shoppingCartItemPrice"
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace("$", ``)
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      ".shoppingCartItemQuantity"
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
<<<<<<< HEAD
  shoppingCartTotal.innerHTML = `$${total.toLocaleString('es-CL')}`;
}

const buttonCheckout = document.querySelector('#checkout')
buttonCheckout.addEventListener('click',() => checkout())

function checkout() {
  shoppingCartItemsContainer.innerHTML = "";
  localStorage.clear()
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = "";
  updateShoppingCartTotal();

=======
  shoppingCartTotal.innerHTML = `$${total.toFixed()}`;
>>>>>>> 7918d8f24fe211e1bc7d1cc6770265997322779a
}

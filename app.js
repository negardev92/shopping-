const f = document.getElementById("form");
const q = document.getElementById("query");

let products = [
  {
    id: "1",
    model: "laptop_mac",
    Color: "blue",
    price: "2000$",
    photo:
      "https://colorworksnursery.com/images/thumbs/0000024_apple-macbook-pro-13-inch_550.jpeg",
  },
  {
    id: "2",
    model: "laptop-mac-m2",
    Color: "red",
    price: "2500$",
    photo:
      "https://colorworksnursery.com/images/thumbs/0000024_apple-macbook-pro-13-inch_550.jpeg",
  },
  {
    id: "3",
    model: "laptop-mac-m2-Air",
    Color: "silver",
    price: "2350$",
    photo:
      "https://colorworksnursery.com/images/thumbs/0000024_apple-macbook-pro-13-inch_550.jpeg",
  },
];

f.addEventListener("submit", submitted);

function submitted(event) {
  event.preventDefault();
  var results = [];
  var toSearch = q.value;

  for (var i = 0; i < products.length; i++) {
    for (key in products[i]) {
      if (products[i][key].indexOf(toSearch) != -1) {
        results.push(products[i]);
      }
    }
  }

  let y = document.getElementById("show-search");
  let x = results.find((obj) => obj.model);

  if (y.style.display === "none") {
    y.style.display = "block";
    y.innerHTML = `<img  src="${x.photo}"/>
  <p>model: ${x.model}</br>
   Color: ${x.Color}</br>
  price: ${x.price}</br></p>
  `;
  } else {
    y.style.display = "none";
  }
}

products.forEach((product) => {
  let template = (document.getElementById("products-show").innerHTML += `

<p> <img src="${product.photo}" />
model: ${product.model}</br>
 Color: ${product.Color}</br>
price: ${product.price}</br>
<button id=${product.id} class="btn-add" onclick="AddToCart(event) ">افزودن به سبد</button>
</p>
`);
});

var cart = [];
function AddToCart(event) {
  event.preventDefault();
  var element = event.target;

  let x = products.find((obj) => obj.id == element.id);
  cart.push(x);
  return cart;
}

let cartbtn = document.querySelector(".cart");
cartbtn.addEventListener("click", showCart);

function showCart(e) {
  e.preventDefault();
  show = document.getElementById("cart-show");

  if (show.style.display === "none") {
    show.style.display = "block";
    if (cart.length == 0) {
      show.innerHTML = `
      <p class="cart-empty"> سبد خالی است </p>`;
    } else {
      cart.forEach((cartList) => {
        show.innerHTML += `
       <div class="cart-display">
       <img src="${cartList.photo}" /></br>
       <p>model: ${cartList.model}</br>
        Color: ${cartList.Color}</br>
       price: ${cartList.price}</br>
       <button id=${cartList.id} class="btn-remove" onclick="RemoveToCart(event)"> حذف </button>
       </p></div>
       `;
      });
    }
  } else {
    show.style.display = "none";
  }
}

function RemoveToCart(event) {
  event.preventDefault();
  var removeEl = event.target;
  let find_id_remove = cart.find((obj) => obj.id == removeEl.id);
  console.log(find_id_remove);
}

const f = document.getElementById("form");
const q = document.getElementById("query");

let products = [
  {
    id: "1",
    model: "laptop_mac",
    Color: "blue",
    price: "2000$",
    photo:
      "../tests/pic/dc9KyLMoi.png",
  },
  {
    id: "2",
    model: "laptop-mac-m2",
    Color: "red",
    price: "2500$",
    photo:
    "../tests/pic/dc9KyLMoi.png",
  },
  {
    id: "3",
    model: "laptop-mac-m2-Air",
    Color: "silver",
    price: "2350$",
    photo:
    "../tests/pic/dc9KyLMoi.png",
  },
];


function showproducts(){
  products.forEach((product) => {
    document.getElementById("products-show").innerHTML += `
    
    <p> <img src="${product.photo}" />
    model: ${product.model}</br>
     Color: ${product.Color}</br>
    price: ${product.price}
    <button id=${product.id} class="btn-add" onclick="AddToCart(event) ">+</button>
    </p>
    `;
    });
}
showproducts()
f.addEventListener("submit", serch);
function serch(event) {
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
  
  let showsearch = document.getElementById("show-search");
  let findresults = results.find((obj) => obj.model);
  if (showsearch.style.display === "none") {
    showsearch.style.display = "block";
    showsearch.innerHTML = `<img  src="${findresults.photo}"/>
  <p>model: ${findresults.model}</br>
   Color: ${findresults.Color}</br>
  price: ${findresults.price}</br></p>
  `;
  
  console.log(results);
  } else {
    showsearch.style.display = "none";
  }
}





var cart = [];
function AddToCart(event) {
  event.preventDefault();
  var element = event.target;
  let findprodcut = products.find((obj) => obj.id == element.id);
  let isexists = products.find((obj) => obj.id == findprodcut.id);
   item=0;
  if(isexists){
    
    
  }
  else{
    console.log('vojod darad')
  }
  cart.push(findprodcut);
  
  console.table(cart)
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

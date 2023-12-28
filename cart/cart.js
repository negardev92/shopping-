
const f = document.getElementById('form');
const q = document.getElementById('query');

let products = [
  { id:"1" ,model:"loptob_mac",Color: "blue",price:"2000$", photo:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} ,
  {  id:"2" ,model:"loptob-mac-m2",Color: "red",price:"2500$",photo:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  {  id:"3" ,model:"loptob-mac-m2-Air",Color: "silver",price:"2350$",photo:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
]

    

f.addEventListener('submit', submitted);
function submitted(event) {
  event.preventDefault();  
var results = [];
var toSearch =q.value;

for(var i=0; i<products.length; i++) {
  for(key in products[i]) {
    if(products[i][key].indexOf(toSearch)!=-1) {
      results.push(products[i]);
    }
  }
}

 console.log(results);

}
 if(products.length == 0){
    document.getElementsByClassName("cart-empty").style.display="none"
 }



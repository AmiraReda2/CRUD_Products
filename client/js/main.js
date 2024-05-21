var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productDesc = document.getElementById("productDesc");

// !======================== get product ======================//
var products = [];
function getProducts() {
fetch("http://localhost:3000/product")
    .then((response) => response.json())
    .then((json) => {
    products = json.results;
    display();
    });
}
getProducts();

const display = () => {
  var box = "";
  products.forEach((product) => {
    box += `<tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.description}</td>
        <td>
            <button onclick="getIdForUpdate(${product.id})" class="btn btn-outline-success">update</button>
            <button onclick="deleteData(${product.id})" class="btn btn-outline-danger">delete</button>
        </td>
    </tr>`;
  });
  document.getElementById("tbody").innerHTML = box;
};

function sendData() {
  let body={
    name:productName.value,
    price:productPrice.value,
    description:productDesc.value
  };
  api("POST",body)
  clear()
  display();
}

var inputID = ' '

function getIdForUpdate(id){
    inputID = id
    document.getElementById("add").style.display = "none"
    document.getElementById("update").style.display = "block"
}

function deleteData(id){
    api("DELETE",{id:id})
}
// ! ========================= updateData ========================//
function updateData(){
    let body={
        id:inputID,
        name:productName.value,
        price:productPrice.value,
        description:productDesc.value
    };
    api("PUT",body)
    document.getElementById("add").style.display = "block"
    document.getElementById("update").style.display = "none"
    clear()
    display();
}

function api(method, body) {
  fetch(`http://localhost:3000/product`, {
    method:method,
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    console.log(body)
}
// ! ====================== clear ========================//
function clear(){
    productName = ''
    productPrice = ''
    productDesc = ''
}
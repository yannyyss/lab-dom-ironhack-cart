/*
//Esta función sí funciona:
function fnChangeQty(obj) {
  var intQty = obj.value;
  //Get de Product div:
  var divProduct = obj.parentElement.parentElement;
  //Obtain the product price:
  var divPrice = divProduct.querySelector('#div-price');
  var intPrice = divPrice.querySelector('#product-price').innerHTML;
  //Access to the total price:
  var divTotalPrice = divProduct.querySelector('#total-product');
  var totalPrice = divTotalPrice.querySelector('#total-price').innerHTML;
  console.log(totalPrice);
}
//Este código sí funciona:
//1. CALCULAR PRECIO TOTAL: TERMINADO
var buttonCalculatePrices = document.getElementById("my-btn");
buttonCalculatePrices.addEventListener("click", function () {

  var intShampooPrice = document.getElementById("shampoo-price").innerHTML;
  var intShampooQuantity = document.getElementById("shampoo-quantity").value;
  var intSoapPrice = document.getElementById("soap-price").innerHTML;
  var intSoapQuantity = document.getElementById("soap-quantity").value;

  if (intShampooQuantity == "NAN" || intSoapQuantity == "NAN") {
    intShampooQuantity = 0;
    intSoapQuantity = 0;
  }

  var shampooResult = intShampooPrice * intShampooQuantity;
  document.getElementById("total-shampoo").innerHTML = shampooResult;

  var soapResult = intSoapPrice * intSoapQuantity;
  document.getElementById("total-soap").innerHTML = soapResult;

  var result = shampooResult + SoapResult;
  document.getElementById("total-price").innerHTML = result;

});
*/
/*
//BORRAR UN PRODUCTO COMPLETO DE LA LISTA: NO TERMINADO
function fnDeleteProduct(obj) {
  var objToBeDeleted = document.getElementById(obj.parentElement.id);
  objToBeDeleted.parentNode.removeChild(objToBeDeleted);
}
//Hasta aquí funciona bien

//CREAR UN NUEVO PRODUCTO: NO TERMINADO
/*var createButton = document.getElementById("create-button");
createButton.addEventListener("click",function (){
  var newProduct = document.getElementById("new-product").value;
  var newProductPrice = document.getElementById("new-product-price").value;
  if(){
      //create a new product...
     }
});*/

// OBTENER EL VALOR DEL CONTENIDO DE DOS IMPUTS PARA CREAR UN NUEVO PRODUCTO: NO FUNCIONA
/*var clickShampooQuantity = document.getElementById("shampoo-quantity").value;
clickShampooQuantity.addEventListener("change",function (){
      var intShampooPrice = document.getElementById("shampoo-price").innerHTML;
      var intShampooQuantity = document.getElementById("shampoo-quantity").value;
                  
      if(intShampooQuantity == "NAN"){
      intShampooQuantity = 0;
      }
  
      var shampooResult = intShampooPrice * intShampooQuantity;
      document.getElementById("total-shampoo").innerHTML = shampooResult;
} //No funciona

var clickSoapQuantity = document.getElementById("soap-quantity").value;
clickSoapQuantity.addEventListener("change",function (){
  
      var intSoapPrice = document.getElementById("soap-price").innerHTML;
      var intSoapQuantity = document.getElementById("soap-quantity").value;
                  
      if(intSoapQuantity == "NAN"){
      intSoapQuantity = 0;
      }
  
      var soapResult = intSoapPrice * intSoapQuantity;
      document.getElementById("total-shampoo").innerHTML = soapResult;
} //No funciona */

//CODIGO EXTRA PARA BORRAR VALORES DE UN PRODUCTO
/*var buttonDelete = document.getElementById("delete-shampoo");
buttonDeleteShampoo.addEventListener("click",function(){
    if (intShampooQuantity > 0){
     intShampooQuantity = 0;
     var shampooResult = intShampooPrice * intShampooQuantity;
      document.getElementById("total-shampoo").innerHTML = shampooResult;
      document.getElementById("shampoo-quantity").value = intShampooQuantity;
   
   if (intSoapQuantity > 0){
     intSoapQuantity = 0;
     var soapResult = intSoapPrice * intSoapQuantity;
      document.getElementById("total-soap").innerHTML = soapResult;
      document.getElementById("soap-quantity").value = intSoapQuantity;
   }); */

/*   
var buttonCalculatePrices = document.getElementById("my-btn");
buttonCalculatePrices.addEventListener("click", function() {
  var intPrice = document.getElementById("shampoo-price").innerHTML; //No me acuerdo porqué tiene .innerHTML
  var intQuantity = document.getElementById("shampoo-quantity").value;

  if (intQuantity == "NAN" || intSoapQuantity == "NAN") {
    intQuantity = 0;
  }

  var intResult = intPrice * intQuantity;
  document.getElementById("total-shampoo").innerHTML = shampooResult;
  intResult += intResult;
  var result = intResult;
  document.getElementById("total-price").innerHTML = result;
});

*/

function deleteItem(e){

}

function getPriceByProduct(itemNode){
  
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

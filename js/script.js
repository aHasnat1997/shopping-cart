// "use strict";

function setAddToCartEventListener(btnId){
  document.getElementById(btnId).addEventListener('click', function (event) {
    const productName = event.target.parentNode.parentNode.childNodes[1].innerText;
    const productPrice = event.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
    const productQuentity = event.target.parentNode.parentNode.childNodes[7].childNodes[1].value;
  
    if(productQuentity === '' || productQuentity <= 0){
      event.target.parentNode.parentNode.childNodes[7].childNodes[3].innerText = 'Enter valid Number';
      return;
    }
    else{
      event.target.parentNode.parentNode.childNodes[7].childNodes[3].innerText = '';
    }
  
    let badge = document.getElementById('badge').innerText;
    let items = document.getElementById('items').innerHTML;
    const newBadge = parseInt(badge) + 1;
    const newItems = parseInt(items) + 1;
    document.getElementById('badge').innerText = newBadge;
    document.getElementById('items').innerText = newItems;
    document.getElementById(btnId).setAttribute('disabled', '');
  
    const totalPrice = parseFloat(productPrice) * parseFloat(productQuentity);
  
    const tableContener = document.getElementById('table-contener');
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${productName}</td>
      <td>$ ${productPrice}</td>
      <td>${productQuentity}</td>
      <td>$ ${totalPrice}</td>
    `;
    tableContener.appendChild(tr);
  
    event.target.parentNode.parentNode.childNodes[7].childNodes[1].value = '';
  
    
    let finalPrice = parseFloat(document.getElementById('final-price').innerHTML);
    const newFinalPrice = finalPrice + totalPrice;

    document.getElementById('final-price').innerHTML = newFinalPrice;
    document.getElementById('total-price').innerHTML = newFinalPrice;
    
  });
}



setAddToCartEventListener('product-one');
setAddToCartEventListener('product-two');
setAddToCartEventListener('product-three');
setAddToCartEventListener('product-four');
setAddToCartEventListener('product-five');
setAddToCartEventListener('product-six');
setAddToCartEventListener('product-seven');
setAddToCartEventListener('product-eight');
setAddToCartEventListener('product-nine');

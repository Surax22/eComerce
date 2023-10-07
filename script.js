let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
let loginForm = document.querySelector('.container-login');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    
}


window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });


  if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
  }else{
    ready()
  }

  function ready() {
    var removeCartItemButtons = document.getElementsByClassName('fa-trash')
    for(var i = 0; i< removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
    }
    var quantityInputs = document.getElementsByClassName('quantity')
  for(var i=0; i<quantityInputs.length; i++){
    var input =quantityInputs[i]
    input.addEventListener('change', quantityChanged)
  }
  var addToCartbuttons =document.getElementsByClassName('btn')
  for(var i=0; i<addToCartbuttons.length; i++){
      var button = addToCartbuttons[i]
      button.addEventListener('click', addToCartClicked)
  }
  document.getElementsByClassName('btn-checkout')[0].addEventListener('click', checkOutClicked)
  }
  function checkOutClicked(event){
    alert("Thank you for your purchase!")
    var cartItems = document.getElementsByClassName('box-item')[0]
    while(cartItems.hasChildNodes()){
      cartItems.removeChild(cartItems.firstChild)
    //  let numb = cartItems.childNodes//.length;
     // console.log(numb)
     // console.log(numb.length)

    }
    updateCartTotal()
  }
  function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updateCartTotal()
  }
function quantityChanged(event){
  var input = event.target
  if(isNaN(input.value) || input.value <=0){
    input.value = 1
  }
  updateCartTotal()
}
function addToCartClicked(event){
  var button = event.target
  var shopItem = button.parentElement
  var title = shopItem.getElementsByClassName("box-item-title")[0].innerText
  var price = shopItem.getElementsByClassName('price')[0].innerText
  var imgeSrc = shopItem.getElementsByClassName('item-img')[0].src
  addItemToCart(title, price, imgeSrc)
  updateCartTotal() 
}



function addItemToCart(title, price, imgeSrc) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('box-item')
  var cartItems =document.getElementsByClassName('box-item')[0]
  var cartItemNames = cartItems.getElementsByClassName('box-item-title')
  for(var i=0; i < cartItemNames.length; i++){
    if(cartItemNames[i].innerText === title){
      alert("this is already added to the cart")
      return
    }
  }

  var cartRowContents =`
  <div class="box-item">       
<i class="fas fa-trash"></i>
<div class="content-cart">
<img class="item-img"  src="${imgeSrc}" alt="">  
<h3 class="box-item-title" id="p1">${title}</h3>
<div class="item-price"> ${price}
<span > qty : <input type="number" value="1" class="cart-quantity" aria-label="quantity"></span>
</div>
</div>
</div>
`
cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('fa-trash')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)

}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('box-item')[0]
  var cartRows = cartItemContainer.getElementsByClassName('content-cart')
  var total = 0
 

 for(var i =0; i< cartRows.length; i++) {
  var cartRow = cartRows[i]

  var priceElement = cartRow.getElementsByClassName('item-price')[0]
   var quantityElement = cartRow.getElementsByClassName('cart-quantity')[0]
   
 

 var price = parseFloat(priceElement.innerText.replace('$', ''))
  
 var quantity = quantityElement.value
    
  total = total + (price * quantity)
 
  }
total = Math.round(total * 100)/ 100
document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total

  
}


const search = () => {
  
 const searchBox = document.getElementById("search-box").value.toLowerCase()

  const product = document.querySelectorAll(".box-item")
  console.log(product)

 const productName = document.querySelectorAll(".box-item-title ")

 console.log(productName.innerText)

  for( var i = 0; i < productName.length; i++){
 let match = product[i].getElementsByTagName("h3")[0];
      console.log(match.textContent)

    if(match){
      let textValue = match.textContent || match.innerHTML

      if(textValue.toLocaleLowerCase().indexOf(searchBox) > -1){
        product[i].style.display = "";
      }else{
        product[i].style.display= "none";
       }
      }
      // console.log(match)
  }
}
function validate(){
var email = document.getElementById("U-email").value
var password = document.getElementById("password").value 


if(email == "surafelnegaa@gmail.com" && password == "123alex"){
  alert("Login successful");

  return false;
}else {
  alert("You insert incorrect password or email");
}

} 

 /*sign up form starts*/

document.addEventListener("DOMContentLoaded", () =>{
  const loginForm = document.querySelector("#login");
  const createAccountForm =document.querySelector("#createAccount");

  document.querySelector("#linkCreatAccount").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.add("form-hiden")
    createAccountForm.classList.remove("form-hiden")
  });

  document.querySelector("#linkLogin").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.remove("form-hiden")
    createAccountForm.classList.add("form-hiden")
  });
});
/* sign up form starts*/




 



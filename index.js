const headlineS = document.querySelector('.headline-small');
const cart = document.querySelector('.cart');
const pay = document.querySelector('.pay');
const image = document.querySelector('img');
const lis = document.querySelector('ul').children;
const menu = document.querySelector('.menu');
const selectedItem = document.querySelector('.goods');
const quantity = document.querySelector('.quantity');
const total = document.getElementById('sum');
const submit = document.querySelector('.submit');
const itemList =  document.getElementById('item-list');

// jQuery
$(function() {
 
  $(".checkout-popup").on("keyup", ".quantity", function(){
		let price = $("li").data("price");
		let quantity = $(this).val();
		$("#sum").text(price * quantity).toFixed(2);
	})
  
 $('li').hover(
    function () {
     $('.popup').fadeIn();
    },
   function () {
     $('.popup').fadeOut();
    }
  );
})

function openForm() {
  document.getElementById("myCheckout").style.display = "block";
}
function closeForm() {
  document.getElementById("myCheckout").style.display = "none";
}

function openCart() {
  document.getElementById("myCart").style.display = "block";
}
function closeCart() {
  document.getElementById("myCart").style.display = "none";
}

// change color and text of h2
headlineS.addEventListener('mouseover',()=> {
    headlineS.style.color = '#c44569';
    headlineS.textContent = "Warning! Super Delicious!!"
});

headlineS.addEventListener('mouseleave',()=> {
    headlineS.style.color = '#fff';
    headlineS.textContent = "The #1 Bakery in PA!"
});

cart.addEventListener('click', (e)=> {
  openCart();
});

pay.addEventListener('click', (e)=> {
  closeCart();
});

// change image style
image.addEventListener('mouseenter',()=> {
    image.style.borderColor = '#c44569';
});

image.addEventListener('mouseleave',()=> {
    image.style.borderColor= '#fff5f5';
});

// add item to checkout on click
for(let i=0; i < lis.length; i++) {
  lis[i].addEventListener('click',(e)=> {
    openForm();
    selectedItem.textContent =e.target.textContent;
    sum.textContent = e.target.dataset.price+sum.textContent;
  })
}

submit.addEventListener('click', (e)=> {
  let li = document.createElement('li');
  itemList.append(li).append(e.target.textContent);
  closeForm();
  
})

// change li style and show image of item on hover
for(let i=0; i < lis.length; i++) {
  lis[i].addEventListener('mouseover',(e)=> {
    e.target.style.backgroundColor = '#fff';
    e.target.style.fontSize = '1.10em';
    if(lis[i]===document.getElementById("pie")) {
      image.src = 'https://i.ibb.co/m429dRH/nathan-lemon-336328-unsplash.jpg';
    } else if(lis[i]===document.getElementById("jammy")) {
      image.src = 'https://i.ibb.co/HhRdQdG/monika-grabkowska-487289-unsplash.jpg';
    } else if(lis[i]===document.getElementById("roly")) {
      image.src = 'https://i.ibb.co/PwnZ62V/jessica-castro-348993-unsplash.jpg';
    } else if(lis[i]===document.getElementById("doughnut")) {
      image.src = 'https://i.ibb.co/zZmb7Dz/s-o-c-i-a-l-c-u-t-1075434-unsplash.jpg';
    } else if(lis[i]===document.getElementById("cookie")) {
      image.src = 'https://i.ibb.co/GnyRxxs/brooke-lark-96787-unsplash.jpg';
    } else if(lis[i]===document.getElementById("scone")) {
      image.src = 'https://i.ibb.co/2v96yCz/brina-blum-114391-unsplash.jpg';
    } else {
      image.src = 'https://i.ibb.co/m5M82ws/alexandra-gorn-310414-unsplash.jpg';
    } 
  })
}

for(let i=0; i < lis.length; i++) {
  lis[i].addEventListener('mouseleave',(e)=> {
    e.target.style.backgroundColor = '#fff5f5';
    e.target.style.fontSize = '1em';
  })
}



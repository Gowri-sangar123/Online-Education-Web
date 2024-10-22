let menuBtn = document.querySelector('#menu-btn');
let navbar =document.querySelector('.header .flex .navbar');

menuBtn.onclick =() =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    
}
var swiper = new Swiper(".course-slider", {
    spaceBetween:20,
    grabCursor:true,
    loop:true,

    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints:{
        540:{
            sliderPerView:1,
        },
        768:{
            sliderPerView:2,
        },
        1024:{
            sliderPerView:3,
        },
    },
  });
  var swiper = new Swiper(".teachers-slider", {
    spaceBetween:20,
    grabCursor:true,
    loop:true,

    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints:{
        540:{
            sliderPerView:1,
        },
        768:{
            sliderPerView:2,
        },
        1024:{
            sliderPerView:3,
        },
    },
  });
  var swiper = new Swiper(".reviews-slider", {
    spaceBetween:20,
    grabCursor:true,
    loop:true,

    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints:{
        540:{
            sliderPerView:1,
        },
        768:{
            sliderPerView:2,
        },
        1024:{
            sliderPerView:3,
        },
    },
  });
// scroll
  const contents = document.querySelectorAll('.content span');
  const container = document.querySelector('.count'); 
  
  let activated = false;
  
  window.addEventListener("scroll", () => {
      if (
          window.pageYOffset > container.offsetTop - window.innerHeight + 200 && !activated
      ) {
          contents.forEach(content => {
              content.innerText = 0;
              let count = 0;
  
              function updateCount() {
                  const target = parseInt(content.dataset.count);
                  if (count < target) {
                      count++;
                      content.innerText = count;
                      setTimeout(updateCount, 10);
                  } else {
                      content.innerText = target;
                  }
              }
  
              updateCount();
          });
  
          activated = true;
      }
  });
  


  document.addEventListener("DOMContentLoaded", function() {
    // Get all nav items
    const navItems = document.querySelectorAll('.navbar a');
  
    // Loop through each item
    navItems.forEach(item => {
      item.addEventListener('click', function(event) {
        // Remove 'active' class from all items
        navItems.forEach(nav => nav.classList.remove('active'));
  
        // Add 'active' class to the clicked item
        this.classList.add('active');
      });
    });
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    function changeNavOnScroll() {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;

            if (sectionTop >= 0 && sectionTop < window.innerHeight / 2) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSectionId)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', changeNavOnScroll);
    changeNavOnScroll(); // Trigger the function on page load
});


// send email
function sendemail(event) {
  event.preventDefault();  

  var email = document.getElementById("email").value;
  var from_name = document.getElementById("name").value;
  var message = "Course selected: " + document.getElementById("scourse").value + "\n";
  var number = document.getElementById("number").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;

  message += "Phone Number: " + number + "\nGender: " + gender;

  var templateParams = {
    to_name: email,
    from_name: from_name,
    message: message
  };

  emailjs.send('service_qdji8mm', 'template_pke4d3p', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      window.alert("Sent successfully!");
    }, function(error) {
      console.log('FAILED...', error);
      window.alert("Message failed to send.");
    });
}


//   // add to cart
//   // let cart = [];
//   // const cartCountElement = document.querySelector('.cart-icon-count'); // Assuming the icon has class 'cart-icon-count'
//   // const cartItemsList = document.getElementById("cart-items");
//   // const totalPriceElement = document.getElementById("total-price");
//   // const originalPriceElement = document.getElementById("original-price");
  
//   // function updateCartCount() {
//   //   cartCountElement.innerText = cart.length;
//   // }
  
//   // function updateCart() {
//   //   cartItemsList.innerHTML = "";
    
//   //   let totalPrice = 0;
//   //   let originalTotalPrice = 0;
  
//   //   cart.forEach((course, index) => {
//   //     const cartItem = document.createElement("li");
//   //     cartItem.innerHTML = `
//   //       <img src="${course.image}" alt="${course.name}" class="cart-course-image">
//   //       <div class="cart-course-details">
//   //         <p>${course.name}</p>
//   //         <p>By ${course.instructor}</p>
//   //         <p>Price: ₹${course.price} <span class="cart-original-price">₹${course.originalPrice}</span></p>
//   //         <button class="remove-from-cart" data-index="${index}">Remove</button>
//   //       </div>
//   //     `;
//   //     cartItemsList.appendChild(cartItem);
//   //     totalPrice += course.price;
//   //     originalTotalPrice += course.originalPrice;
//   //   });
  
//   //   totalPriceElement.innerText = `Total: ₹${totalPrice}`;
//   //   originalPriceElement.innerText = `Original Price: ₹${originalTotalPrice}`;
    
//   //   updateCartCount();
//   // }
  
//   // function addToCart(courseName, coursePrice, originalPrice, courseImage, courseInstructor) {
//   //   const courseInCart = cart.find(course => course.name === courseName);
  
//   //   if (!courseInCart) {
//   //     cart.push({ 
//   //       name: courseName, 
//   //       price: coursePrice, 
//   //       originalPrice: originalPrice,
//   //       image: courseImage,
//   //       instructor: courseInstructor 
//   //     });
//   //   }
    
//   //   updateCart();
//   // }
  
//   // function removeFromCart(index) {
//   //   cart.splice(index, 1);
//   //   updateCart();
//   // }
  
//   // // Add event listeners to "Add to Cart" buttons
//   // document.querySelectorAll(".add-to-cart").forEach(button => {
//   //   button.addEventListener("click", (e) => {
//   //     const courseElement = e.target.closest(".swiper-slide");
//   //     const courseName = courseElement.querySelector(".course-title").innerText;
//   //     const coursePrice = parseInt(courseElement.querySelector(".course-price").innerText.replace("₹", ""));
//   //     const originalPrice = parseInt(courseElement.querySelector(".original-price").innerText.replace("₹", ""));
//   //     const courseImage = courseElement.querySelector(".course-image").src;
//   //     const courseInstructor = courseElement.querySelector(".course-instructor").innerText;
      
//   //     addToCart(courseName, coursePrice, originalPrice, courseImage, courseInstructor);
//   //   });
//   // });
  
//   // // Remove from cart event
//   // cartItemsList.addEventListener("click", (e) => {
//   //   if (e.target.classList.contains("remove-from-cart")) {
//   //     const index = e.target.getAttribute("data-index");
//   //     removeFromCart(index);
//   //   }
//   // });
  

// // another response
// // Initialize the cart array and total price
// // Initialize the cart array and total price
// let cart = [];
// let total = 0;

// // Function to update Cart Icon count
// function updateCartIcon() {
//   const cartIconCount = document.querySelector(".cart-icon-count");
//   cartIconCount.textContent = cart.length;
// }

// // Function to update Total Price in the Cart
// function updateCartTotal() {
//   const totalPriceElement = document.getElementById("total-price");
//   totalPriceElement.textContent = `Total: ₹${total}`;
// }

// // Function to add an item to the cart
// function addToCart(courseId, courseName, coursePrice, button) {
//   // Add the item to the cart
//   cart.push({ id: courseId, name: courseName, price: parseInt(coursePrice) });

//   // Update the total price
//   total += parseInt(coursePrice);

//   // Update the button text
//   button.textContent = "Remove from Cart";

//   // Update cart icon and total price
//   updateCartIcon();
//   updateCartTotal();

//   // Update the cart display with new item
//   const cartItems = document.getElementById("cart-items");
//   const newItem = document.createElement("li");
//   newItem.textContent = `${courseName} - ₹${coursePrice}`;
//   newItem.setAttribute("data-id", courseId);
//   cartItems.appendChild(newItem);
// }

// // Function to remove an item from the cart
// function removeFromCart(courseId, coursePrice, button) {
//   // Find the index of the course in the cart
//   const courseIndex = cart.findIndex(item => item.id === courseId);

//   // Remove the course from the cart
//   if (courseIndex !== -1) {
//     cart.splice(courseIndex, 1);
//     total -= parseInt(coursePrice);

//     // Update the button text back to "Add to Cart"
//     button.textContent = "Add to Cart";

//     // Update cart icon and total price
//     updateCartIcon();
//     updateCartTotal();

//     // Remove the course from the cart display
//     const cartItems = document.getElementById("cart-items");
//     const itemToRemove = cartItems.querySelector(`[data-id="${courseId}"]`);
//     cartItems.removeChild(itemToRemove);
//   }
// }

// // Event listeners for Add/Remove Cart buttons
// document.querySelectorAll(".addcard").forEach(button => {
//   button.addEventListener("click", (event) => {
//     const course = event.target.closest(".swiper-slide");
//     const courseId = course.getAttribute("data-id");
//     const courseName = course.getAttribute("data-name");
//     const coursePrice = course.getAttribute("data-price");

//     // Check if the course is already in the cart
//     const courseInCart = cart.find(item => item.id === courseId);

//     if (courseInCart) {
//       // If the course is already in the cart, remove it
//       removeFromCart(courseId, coursePrice, event.target);
//     } else {
//       // Otherwise, add the course to the cart
//       addToCart(courseId, courseName, coursePrice, event.target);
//     }
//   });
// });




// // Get the cart icon and sidenav elements
// const cartIcon = document.getElementById("cart-icon");
// const cartSidenav = document.getElementById("cart-sidenav");
// const closeSidenav = document.getElementById("close-sidenav");

// // Function to open the cart sidenav
// cartIcon.addEventListener("click", () => {
//   cartSidenav.classList.add("open");
// });

// // Function to close the cart sidenav
// closeSidenav.addEventListener("click", () => {
//   cartSidenav.classList.remove("open");
// });



const btnCart = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart');
const btnClose = document.querySelector('#cart-close');


btnCart.addEventListener('click', ()=>{
  cart.classList.add('cart-active')
});

btnClose.addEventListener('click', ()=>{
  cart.classList.remove('cart-active')
});

document.addEventListener('DOMContentLoaded', loadFood);

function loadFood() {
    loadContent();
}

function loadContent() {
    // Remove Food Items From Cart
    let btnRemove = document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn) => {
        btn.addEventListener('click', removeItem);
    });
    //product change
    let qtyelements = document.querySelectorAll('.cart-quantity');
    qtyelements.forEach((input) => {
      input.addEventListener('change', changeqty);
    });

    //add cart
    let cartBtns = document.querySelectorAll('.addcard');
    cartBtns.forEach((btn) => {
      btn.addEventListener('click',addCart)
    });
    updateTotal();
}

// Remove Item
function removeItem() {
  if(confirm('you want to remove')){
    
    let title = this.parentElement.querySelector('.cart-edu-title').innerHTML;
    itemList = itemList.filter(el =>el.title!=title);
    this.parentElement.remove(); 
    loadContent();
  }
}

function changeqty(){
  if(isNaN(this.value) || this.value<1)
    this.value =1;
  loadContent();
}


let itemList = [];

// addCart function
function addCart() {
  let course = this.parentElement;
  
  // Corrected to use innerHTML
  let title = course.querySelector('.crs-title').innerHTML;
  let price = course.querySelector('.price').innerHTML;
  let imgSrc = course.querySelector('.course-image').src;

  let newProduct = { title, price, imgSrc };

  // Check if the product is already added
  if (itemList.find((el) => el.title === newProduct.title)) {
    alert("Product is already added");
    return;
  } else {
    // Fixed the typo: changed itemListList to itemList
    itemList.push(newProduct);
  }

  // Create and append the new product to the cart
  let newProductElement = createCartProduct(title, price, imgSrc);
  let element = document.createElement('div');
  element.innerHTML = newProductElement;
  let cartBasket = document.querySelector('.cart-content');
  cartBasket.append(element);

  // Load additional content if necessary
  loadContent();
}

   
function createCartProduct(title,price,imgSrc){
return `
 <div class="cart-box">
              <img src="${imgSrc}" alt="" class="cart-img">
              <div class="detail-box">
                <div class="cart-edu-title">${title}</div>
                <div class="price-box">
                  <div class="cart-price">${price}</div>
                  <div class="cart-amt">${price}</div>
                </div>
                <input type="number" value="1" class="cart-quantity" >
              </div>
         <div class="cart-remove">
          <i class="fa-solid fa-trash" ></i>
         </div>
             
            </div>`
};

function updateTotal()
{
const cartItems=document.querySelectorAll('.cart-box');
const totalValue=document.querySelector('.total-price');
let total=0;
cartItems.forEach (product=>{
let priceElement=product.querySelector('.cart-price');
let price=parseFloat (priceElement.innerHTML.replace("$",""));
let qty=product.querySelector('.cart-quantity').value;
total+=(price*qty);
product.querySelector('.cart-amt').innerText="$"+(price*qty);
});
totalValue.innerHTML= 'Rs. '+total;



//add count 
const cartCount = document.querySelector('.cart-icon-count')
let count = itemList.length;
cartCount.innerHTML =count;

if(count==0){
  cartCount.style.display = "none"
}
else{
    cartCount.style.display = "block"
}
}


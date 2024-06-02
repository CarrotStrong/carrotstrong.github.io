const cart = document.querySelector(".shopping-cart");
const cartMenu = document.querySelector(".shopping-menu");
const closeMenu = document.querySelector(".close-shopping-menu");

let pageWidthPhone = window.matchMedia("(max-width: 768px)");

cart.addEventListener("click", () => {
    if(pageWidthPhone.matches){
        cartMenu.style.width = "100%";
    }else
    cartMenu.style.width = "40%";
});

closeMenu.addEventListener("click", () => {
    cartMenu.style.width = "0%";
});
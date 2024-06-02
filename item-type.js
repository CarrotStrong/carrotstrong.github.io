const tshirtsBtn = document.querySelector('#tshirts');
const hoodiesBtn = document.querySelector('#hoodies');

const tshirts = document.querySelectorAll('.tshirt');
const hoodies = document.querySelectorAll('.hoodie');



tshirtsBtn.addEventListener("click", () => {
    hoodies.forEach((hoodie) => {
        hoodie.classList.add("hide");
    });
    if(tshirts.className = "hide"){
        tshirts.forEach((tshirts) => {
            tshirts.classList.remove("hide");
        });
    }
    tshirtsBtn.classList.add("menu-active");
    hoodiesBtn.classList.remove("menu-active");
})

hoodiesBtn.addEventListener("click", () => {
    tshirts.forEach((tshirt) => {
            tshirt.classList.add("hide");
    });
    if(hoodies.className = "hide"){
        hoodies.forEach((hoodie) => {
            hoodie.classList.remove("hide");
        });
    }
    hoodiesBtn.classList.add("menu-active");
    tshirtsBtn.classList.remove("menu-active");
})
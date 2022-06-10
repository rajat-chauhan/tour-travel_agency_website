
let user_icon = document.getElementById("user");
let form_cross = document.querySelector(".cross-mark");
let search_icon = document.getElementById("search");
let search_cross = document.querySelector(".search-cross");
let bar_icon = document.querySelector(".fa-bars")
let sideNav_cross = document.querySelector(".cross-mark-sideNav")

user_icon.addEventListener("click", function(){
    let form = document.querySelector(".form-container");
    form.classList.add("displayForm");
})

form_cross.addEventListener("click", function(){
    let form = document.querySelector(".form-container");
    form.classList.remove("displayForm");
})

search_icon.addEventListener("click", function(){
    let search_box = document.querySelector(".search-box");
    search_box.classList.add("displaySearch");
})

search_cross.addEventListener("click", function(){
    let search_box = document.querySelector(".search-box");
    search_box.classList.remove("displaySearch");
})

bar_icon.addEventListener("click", function(){
    let sideNav_box = document.querySelector(".side-nav");
    sideNav_box.classList.add("displaySideNav");
})
sideNav_cross.addEventListener("click", function(){
    let sideNav_box = document.querySelector(".side-nav");
    sideNav_box.classList.remove("displaySideNav");
})

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

//Page-5

let p5_img = document.querySelectorAll(".p5_images");

for(let i=0; i< p5_img.length; i++){
    p5_img[i].addEventListener("mouseenter", function(){
        let display_p5Contt = document.querySelectorAll(".p5_img_content");
        display_p5Contt[i].classList.add("displayP5Contt");
    })
}

for(let i=0; i< p5_img.length; i++){
    p5_img[i].addEventListener("mouseleave", function(){
        let display_p5Contt = document.querySelectorAll(".p5_img_content");
        display_p5Contt[i].classList.remove("displayP5Contt");
    })
}
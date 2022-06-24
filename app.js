
let user_icon = document.getElementById("user");
let form_cross = document.querySelector(".cross-mark");
let search_icon = document.getElementById("search");
let search_cross = document.querySelector(".search-cross");
let bar_icon = document.querySelector(".fa-bars");
let sideNav_cross = document.querySelector(".cross-mark-sideNav");
let radio_btn1 = document.querySelector(".radio-btn1");
let radio_btn2 = document.querySelector(".radio-btn2");
let radio_btn3 = document.querySelector(".radio-btn3");
let radio_btn4 = document.querySelector(".radio-btn4");
let homeNav = document.querySelectorAll(".homeNav");

homeNav.forEach((value) => {
    value.addEventListener("click", function(){
    let pge1 = document.querySelector(".page1");
    pge1.classList.add("p1_sizing");
    })
})


user_icon.addEventListener("click", function(){
    let form = document.querySelector(".form-container");
    form.classList.add("displayForm");
})

form_cross.addEventListener("click", function(){
    let form = document.querySelector(".form-container");
    form.classList.remove("displayForm");
})

search_icon.addEventListener("click", function(){
    let search_box = document.querySelector(".lower_header");
    search_box.classList.add("displaySearch");
})

search_cross.addEventListener("click", function(){
    let search_box = document.querySelector(".lower_header");
    search_box.classList.remove("displaySearch");
})

bar_icon.addEventListener("click", function(){
    let sideNav_box = document.querySelector(".side-nav");
    sideNav_box.classList.add("displaySideNav");
    bar_icon.classList.add("fa-bars_active");
    sideNav_cross.classList.add("diplay_crossSideNav");

    let pages = document.querySelectorAll(".pages");
    pages.forEach((value) => {
        value.classList.add("position");
    })
})

sideNav_cross.addEventListener("click", function(){
    let sideNav_box = document.querySelector(".side-nav");
    sideNav_box.classList.remove("displaySideNav");
    sideNav_cross.classList.remove("diplay_crossSideNav");
    bar_icon.classList.remove("fa-bars_active");

    let pages = document.querySelectorAll(".pages");
    pages.forEach((value) => {
        value.classList.remove("position");
    })
})

let side_href = document.querySelectorAll(".side-href");

side_href.forEach((value) => {
    value.addEventListener("click", function(){
        let sideNav_box = document.querySelector(".side-nav");
        sideNav_box.classList.remove("displaySideNav"); 
        sideNav_cross.classList.remove("diplay_crossSideNav");
        bar_icon.classList.remove("fa-bars_active"); 
        
        let pages = document.querySelectorAll(".pages");
        pages.forEach((value) => {
            value.classList.remove("position");
        })
    });
})





//Page-1

radio_btn1.addEventListener("click", function(){
    let p1 = document.querySelector(".page1");
    p1.style.backgroundImage = "url(./images/p1road.jpg)";
})

radio_btn2.addEventListener("click", function(){
    let p1 = document.querySelector(".page1");
    p1.style.backgroundImage = "url(./images/p1adventure.jpg)"
})
radio_btn3.addEventListener("click", function(){
    let p1 = document.querySelector(".page1");
    p1.style.backgroundImage = "url(./images/p1_hot-air-balloons.jpg)"
})
radio_btn4.addEventListener("click", function(){
    let p1 = document.querySelector(".page1");
    p1.style.backgroundImage = "url(./images/p1_default_img.jpg)"
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



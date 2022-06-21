
let user_icon = document.getElementById("user");
let form_cross = document.querySelector(".cross-mark");
let search_icon = document.getElementById("search");
let search_cross = document.querySelector(".search-cross");
let bar_icon = document.querySelector(".fa-bars");
let sideNav_cross = document.querySelector(".cross-mark-sideNav");


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



//   // import Swiper JS
// import Swiper from 'swiper';
//   // import Swiper styles
// import 'swiper/css';

var swiper = new Swiper(".p6_containerr", {
    spaceBetween: 5,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
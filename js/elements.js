// hamburger navigation bar elements 

let openHam = document.querySelector('#openHam');
let closeHam = document.querySelector('closeHam');
let navigationItems = document.querySelector('navigation-items');

//reusuable function, controls visibility of elements

const hamburgerEvent = (navigation, close, open) => {
    navigationItems.computedStyleMap.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
};

openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));

//parallax

document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".parallax-wrap span").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}


//hamburger 2.0

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=> {
  hamburger.classList.toggle("active");
  nav-menu.classList.toggle("active");
})



//slideshow elements

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < DOMStringList.length; i++) {
//         dots[i].className = dots[i].className.replace("active", "" );
//     }
//     slides[slideIndex-1].style.display="block";
// }

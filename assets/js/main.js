const navcolor = document.querySelector(".nav-transparent");

// window.onscroll = () => {
//   var top = window.scrollY;
//   console.log(top);
//   if (top >= 100) {
//     navcolor.classList.add("active");
//   } else {
//     navcolor.classList.remove("active");
//   }
// };

// Navbar collapse on clicking the navItem

let navToggle = document.querySelector(".navbar-toggler");
let x = document.getElementById("collpase").getAttribute("aria-expanded");
let collap = document.querySelector(".navbar-collapse");

function collapse() {
  navToggle.classList.add("collapsed");
  if (x == "true") {
    x = "false";
  } else {
    x = "true";
  }
  document.getElementById("collpase").setAttribute("aria-expanded", x);

  collap.classList.remove("show");
}

// Owl Carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    autoplayTimeout:5000  
  });
});

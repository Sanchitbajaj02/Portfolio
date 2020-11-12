const navcolor = document.querySelector(".nav-transparent");

window.onscroll = () => {
  var top = window.scrollY;
  console.log(top);
  if (top >= 100) {
    navcolor.classList.add("active");
  } else {
    navcolor.classList.remove("active");
  }
};

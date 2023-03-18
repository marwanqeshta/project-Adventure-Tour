// FAQ Section

var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
    this.classList.toggle("active");
    /* Toggle between hiding and showing the active panel */
    var body = this.nextElementSibling;
    if (body.style.display === "block") {
      body.style.display = "none";
    } else {
      body.style.display = "block";
    }
  });
}
//Navbar Section

var navbar = document.querySelector(".navbar");
var menu = document.querySelector(".fa-bars");
var closebtn = document.querySelector(".fa-xmark");
var click = document.querySelectorAll(".navbar a");

click.forEach((element) => {
  element.onclick = function () {
    navbar.style.transform = "translateY(-260%)";
  };
});

menu.onclick = function () {
  navbar.style.transform = "translateX(0%)";
};

closebtn.onclick = function () {
  navbar.style.transform = "translateX(-260%)";
};

//Header Section

var heading = document.querySelector("header");

if (window.scrollY == 0) {
  heading.style.backgroundColor = null;
} else if (window.scrollY >= 200) {
  heading.style.backgroundColor = "black";
}

var upbtn = document.querySelector(".fa-angle-up");

upbtn.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
// Loader Section

const preloader = document.querySelector(".spinner");

const fadeEffect = setInterval(() => {
  // if we don't set opacity 1 in CSS, then   //it will be equaled to "", that's why we   // check it
  if (!preloader.style.opacity) {
    preloader.style.opacity = 1;
  }
  if (preloader.style.opacity > 0) {
    preloader.style.opacity -= 0.1;
    preloader.style.zIndex = 1;
  } else {
    clearInterval(fadeEffect);
    preloader.style.zIndex = -1;
  }
}, 700);

window.addEventListener("load", fadeEffect);

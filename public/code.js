// let button = document.querySelectorAll(".navbar-button");
// let optionButton = document.querySelector(".navbar-button");
let navBar = document.getElementsByClassName("navbar");
let openButton = () => {
  let open = document.getElementById("open");
  open.style.display = "none";
  let close = document.getElementById("close");
  close.style.display = "block";

  //   Navbar Opening
  navBar[0].style.display = "flex";
//   Overflow setting
document.querySelector("body").style.overflow = "hidden";
};

let closeButton = () => {
  let open = document.getElementById("open");
  open.style.display = "block";
  let close = document.getElementById("close");
  close.style.display = "none";

  //   Navbar Closing
  navBar[0].style.display = "none";
//   Overflow setting
document.querySelector("body").style.overflow = "auto";
};

let navBar = document.getElementsByClassName("navbar");

// Background lightColor for UnderMobile
let mobileUnder = document.getElementsByClassName("mobileBG")

let openButton = () => {
  let open = document.getElementById("open");
  open.style.display = "none";
  let close = document.getElementById("close");
  close.style.display = "block";

  //   Navbar Opening
  navBar[0].style.display = "flex";
//   Overflow setting
document.querySelector("body").style.overflow = "hidden";

// Background lightColor for UnderMobile
mobileUnder[0].style.display = "block";
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

// Background lightColor for UnderMobile
mobileUnder[0].style.display = "none";
};

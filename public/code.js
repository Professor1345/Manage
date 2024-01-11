let navBar = document.getElementsByClassName("navbar");

// Background lightColor for UnderMobile
let mobileUnder = document.getElementsByClassName("mobileBG");

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

function submitButton() {
  //   alert("clickkk");
  let input = document.getElementById("email").value;
  document.getElementById("inputError").innerHTML = "";

  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
// OR let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  try {
    if (input == "".trim()) throw "The input field is empty.";
    if(!emailRegex.test(input)) throw "Please insert a valid email";
    else {
      return true;
    }
    // if (input.t)
  } catch (error) {
    // output[0].style.display = "block";
    document.getElementById("inputError").innerHTML = error;
    return false;
  } finally {
    document.getElementById("email").value = "";
  }
}

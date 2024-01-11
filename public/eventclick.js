let x = document.getElementsByClassName("mobileSwitch")[0];
let y = x.getElementsByTagName("button");

let slideSw = document.getElementsByClassName("ftbt-container");
// slideSw[0].style.display = "none";

// let containerF = document.getElementById("containerF");
// (screen.availWidth >= 768)?
// containerF.style.display = "flex":
// containerF[0].style.display = "flex";

// Button One
let buttonOne = () => {
  slideSw[0].style.display = "flex";
  slideSw[1].style.display = "none";
  slideSw[2].style.display = "none";
  slideSw[3].style.display = "none";

  //   alert("Button 1");
  y[0].style.backgroundColor = "rgb(243,96,60)";
  y[1].style.backgroundColor = "transparent";
  y[2].style.backgroundColor = "transparent";
  y[3].style.backgroundColor = "transparent";
};
y[0].addEventListener("click", buttonOne);

// Button Two
let buttonTwo = () => {
  slideSw[0].style.display = "none";
  slideSw[1].style.display = "flex";
  slideSw[2].style.display = "none";
  slideSw[3].style.display = "none";
  //   alert("Button 2");
  y[0].style.backgroundColor = "transparent";
  y[1].style.backgroundColor = "rgb(243,96,60)";
  y[2].style.backgroundColor = "transparent";
  y[3].style.backgroundColor = "transparent";
};
y[1].addEventListener("click", buttonTwo);

// Button Three
let buttonThree = () => {
  slideSw[0].style.display = "none";
  slideSw[1].style.display = "none";
  slideSw[2].style.display = "flex";
  slideSw[3].style.display = "none";
  //   alert("Button 3");
  y[0].style.backgroundColor = "transparent";
  y[1].style.backgroundColor = "transparent";
  y[2].style.backgroundColor = "rgb(243,96,60)";
  y[3].style.backgroundColor = "transparent";
};
y[2].addEventListener("click", buttonThree);

// Button Four
let buttonFour = () => {
  slideSw[0].style.display = "none";
  slideSw[1].style.display = "none";
  slideSw[2].style.display = "none";
  slideSw[3].style.display = "flex";
  //   alert("Button 4");
  y[0].style.backgroundColor = "transparent";
  y[1].style.backgroundColor = "transparent";
  y[2].style.backgroundColor = "transparent";
  y[3].style.backgroundColor = "rgb(243,96,60)";
};
y[3].addEventListener("click", buttonFour);

// UI for Navbar
const navbar = document.querySelector(".navbar");
const navbutton = document.querySelector(".navbuttons");

navbutton.addEventListener("click", () => {
  navbutton.classList.toggle("btnchanges");
});

window.addEventListener("scroll", () => {
  const getscrolly = window.scrollY;

  if (getscrolly > 100) {
    navbar.classList.add("changes");
  } else {
    navbar.classList.remove("changes");
  }
});

// UI for Autotext
const textel = document.getElementById("text");

// autotext
const text = ["Developer", "Designer"];
// console.log(text.length);
let count = 0;
let idx = 0;
let current = "";
let letter = "";
let speed = 500;

function autotext() {
  if (count === text.length) {
    count = 0;
  }
  current = text[count];
  letter = current.slice(0, idx++);

  textel.innerText = letter;

  if (letter.length === current.length) {
    count++;
    idx = 0;
  }

  setTimeout(autotext, speed);
}
autotext();

// Start Footer
const getyear = document.getElementById("getyear");
const getfullyear = new Date().getFullYear();
getyear.textContent = getfullyear;
// End Footer

const click = document.querySelector(".click-field");
const number = document.querySelector(".counter-number");
const colorField = document.querySelector(".color-field");
const reset = document.querySelector(".reset");

let counter = 0;
let colorCount = 0;

function countFunction(e) {
  if (e.target === reset) {
    counter = 0;
    colorCount = 0;
  }
  if (e.target === click || e.key === " ") {
    counter++;
    colorCount++;
    console.log(counter);
  }
  if (counter % 100 === 0) {
    s;
    colorCount = 0;
  }

  if (e.key === "space") {
    counter++;
  }
  number.innerText = counter;
  colorField.style.width = colorCount + "%";
}

click.addEventListener("click", countFunction);
document.addEventListener("keypress", countFunction);
reset.addEventListener("click", countFunction);

/*
const main = document.querySelector("main");
const input = main.querySelector(".input-class");
const button = main.querySelector("#show-button");
let password = "";
function passwordFunction() {
  password = input.value;
  console.log("password", password);
}

button.addEventListener("click", passwordFunction);
*/

////// fast, cheap and good??? //////////////

const main = document.querySelector("main");
const fast = main.querySelector("#fast");
const cheap = main.querySelector("#cheap");
const good = main.querySelector("#good");
let penultimateCheck;
let lastCheck;
let currentCheck;

function checkboxCheck(event) {
  currentCheck = event.target;
  penultimateCheck = lastCheck;
  lastCheck = currentCheck;

  console.log(" lastCheck", lastCheck);
  console.warn("  penultimateCheck", penultimateCheck);

  if (fast.checked && cheap.checked && good.checked) {
    penultimateCheck.checked = false;
  }
}

fast.addEventListener("click", checkboxCheck);

cheap.addEventListener("click", checkboxCheck);

good.addEventListener("click", checkboxCheck);

/*

const main = document.querySelector("main");
const input = main.querySelector(".input-class");
const button = main.querySelector("#show-button");
let password = "";
function passwordFunction(e) {
  e.preventDefault();
  password = input.value;
  console.log("password", password);
}

button.addEventListener("click", passwordFunction);
*/

////// fast, cheap and good??? //////////////

const fast = document.querySelector("#fast");
const cheap = document.querySelector("#cheap");
const good = document.querySelector("#good");
let currentCheck;

function checkboxCheck(e) {
  let lastCheck = currentCheck;
  currentCheck = e.target;
  if (fast.checked && cheap.checked && good.checked) lastCheck.checked = false;
}

fast.addEventListener("click", checkboxCheck);
cheap.addEventListener("click", checkboxCheck);
good.addEventListener("click", checkboxCheck);

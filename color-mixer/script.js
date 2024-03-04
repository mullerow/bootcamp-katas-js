const range1 = document.querySelector(".range1");
const range2 = document.querySelector(".range2");
const range3 = document.querySelector(".range3");
const brightness = document.querySelector(".brightness");
const colorField = document.querySelector(".color-field");
let color1 = 0;
let color2 = 0;
let color3 = 0;
let brightnessLevel = 1;
function colorMixer(e) {
  if (e.target === range1) {
    color1 = e.target.value;
  }
  if (e.target === range2) {
    color2 = e.target.value;
  }
  if (e.target === range3) {
    color3 = e.target.value;
  }
  if (e.target === brightness) {
    brightnessLevel = e.target.value / 100;
  }
  console.log(e.target, e.target.value);
  colorField.style.backgroundColor =
    "rgb(" + color1 + "," + color2 + "," + color3 + "," + brightnessLevel + ")";
}

range1.addEventListener("input", colorMixer);
range2.addEventListener("input", colorMixer);
range3.addEventListener("input", colorMixer);
brightness.addEventListener("input", colorMixer);

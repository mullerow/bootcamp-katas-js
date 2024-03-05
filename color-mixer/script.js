const range1 = document.querySelector(".range1");
const range2 = document.querySelector(".range2");
const range3 = document.querySelector(".range3");
const brightness = document.querySelector(".brightness");
const colorField = document.querySelector(".color-field");
const invert1 = document.querySelector(".invert-field1");
const invert2 = document.querySelector(".invert-field2");
const opacity = document.querySelector(".opacity");
let color1 = 0;
let color2 = 0;
let color3 = 0;
let brightnessLevel = 1;
function colorMixer(e) {
  if (e.target === range1) {
    color1 = e.target.value * 2.55;
  }
  if (e.target === range2) {
    color2 = e.target.value * 2.55;
  }
  if (e.target === range3) {
    color3 = e.target.value * 2.55;
  }
  if (e.target === brightness) {
    brightnessLevel = e.target.value / 100;
  }
  if (e.target === opacity) {
    opacityLevel = e.target.value / 100;
  }
  console.log(e.target, e.target.value);
  colorField.style.backgroundColor =
    "rgb(" + color1 + "," + color2 + "," + color3 + "," + brightnessLevel + ")";
  colorField.style.opacity = opacityLevel;
  //
  invert1.style.backgroundColor =
    "rgb(" + color1 + "," + color2 + "," + color3 + "," + brightnessLevel + ")";
  invert1.style.filter = "invert(1)";

  invert2.style.backgroundColor =
    "rgb(" + color1 + "," + color2 + "," + color3 + "," + brightnessLevel + ")";
  invert2.style.filter = "invert(70%)";
}

range1.addEventListener("input", colorMixer);
range2.addEventListener("input", colorMixer);
range3.addEventListener("input", colorMixer);
brightness.addEventListener("input", colorMixer);
opacity.addEventListener("input", colorMixer);

/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const FORM = document.querySelector("form");
const INPUT = document.getElementById("search");
const OUTPUT = document.getElementById("output");

function convertFunction(event) {
  event.preventDefault();
  let value = INPUT.value;
  let lbValue = document.createElement("div");
  lbValue.textContent = value + " Kilograms equals " + value * 2.2046 + " lb";
  let gValue = document.createElement("div");
  gValue.textContent = value + " Kilograms equals " + value / 0.001 + " g";
  let ozValue = document.createElement("div");
  ozValue.textContent = value + " Kilograms equals " + value * 35.274 + " oz";

  OUTPUT.append(lbValue, gValue, ozValue);

  console.log(value);
  console.log(lbValue);
  console.log(gValue);
  console.log(ozValue);
}

FORM.addEventListener("submit", convertFunction);

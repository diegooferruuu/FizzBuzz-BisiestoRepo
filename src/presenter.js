import {generarFizzBuzz, generarSecuencia} from "./fizzbuzz";

const num = document.querySelector("#numero");
const form = document.querySelector("#fizzbuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const number = Number.parseInt(num.value);

  div.innerHTML = "<p>" + generarSecuencia(number) + "</p>";
});

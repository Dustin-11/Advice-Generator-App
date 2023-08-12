import './style.css'

const Button = document.getElementById("button");
const TextInput = document.getElementById("text__input");

Button.addEventListener("click", quote)

function quote() {
fetch("https://api.adviceslip.com/advice")
  .then((response) => response.json())
  .then((json) => console.log(json));
  TextInput.innerHTML = JSON.parse(json);
}
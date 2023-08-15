import './style.css'

const Button = document.getElementById("button");
const TextInput = document.getElementById("text__input");
const AdviceNumber = document.getElementById("advice__input")
Button.addEventListener("click", getText)

async function getText(file) {
    let myObject = await fetch("https://api.adviceslip.com/advice");
    let myText = await myObject.json();
    TextInput.innerHTML = myText.slip.advice;
    AdviceNumber.innerHTML = myText.slip.id;
  }
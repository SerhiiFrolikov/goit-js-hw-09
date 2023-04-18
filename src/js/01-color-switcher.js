const body = document.querySelector('body')
const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');

let changeBgc = null;
let changeColor = getRandomHexColor();

start.addEventListener("click", () => {
  changeBgc = setInterval(() => {
    start.disabled = true;
    body.style.backgroundColor = changeColor;
  }, 1000);
});

stop.addEventListener("click", () => {
    clearInterval(changeBgc);
start.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

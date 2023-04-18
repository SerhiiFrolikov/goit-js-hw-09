const body = document.querySelector('body')
const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');

let changeBgc = null;
stop.disabled = true;

start.addEventListener("click", () => {
  changeBgc = setInterval(() => {
    start.disabled = true;
    stop.disabled = false;
  
    let changeColor = getRandomHexColor();
    body.style.backgroundColor = changeColor;
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(changeBgc);
    stop.disabled = true;
    start.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

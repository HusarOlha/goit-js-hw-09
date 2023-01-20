const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};

refs.start.addEventListener('click', onStartBtnClick);
refs.stop.addEventListener('click', onStopBtnClick);

let interval = null;

function getRandomColor() {
  const color = getRandomHexColor();
  console.log(color);
  document.body.style.backgroundColor = color;
}

function onStartBtnClick() {
  interval = setInterval(getRandomColor(), 1000);

  refs.start.disabled = true;
  refs.stop.disabled = false;
}

function onStopBtnClick() {
  clearInterval(interval);
  refs.start.disabled = false;
  refs.stop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

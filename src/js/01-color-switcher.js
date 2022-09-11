const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

refs.startBtn.addEventListener('click', startChangeBgColor);
refs.stopBtn.addEventListener('click', stopChangeBgColor);
let timerId = null;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
 

function startChangeBgColor() {
  timerId = setInterval(() => {
    const randomBgColor = getRandomHexColor();

    document.body.style.backgroundColor = randomBgColor;
  }, 1000);

refs.startBtn.setAttribute('disabled', '');
};

function stopChangeBgColor() {
  clearInterval(timerId);
  refs.startBtn.removeAttribute('disabled');
};







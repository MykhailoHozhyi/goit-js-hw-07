function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('input[type="number"]');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

let size = 30;
const boxesArr = [];

const createBoxes = amount => {
  destroyBoxes();

  if (amount > 0 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      boxesArr.push(
        `<div style='width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}'></div>`
      );
      size += 10;
    }
  }
  boxes.innerHTML = boxesArr.join('');
  inputNumber.value = '';
};

const onButtonCreateClick = () => createBoxes(inputNumber.value);

buttonCreate.addEventListener('click', onButtonCreateClick);

const destroyBoxes = () => {
  boxes.innerHTML = '';
  size = 30;
  boxesArr.length = 0;
};
const onButtonDestroyClick = () => destroyBoxes();

buttonDestroy.addEventListener('click', onButtonDestroyClick);

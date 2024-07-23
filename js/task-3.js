const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const onFieldInput = () => {
  nameOutput.textContent = nameInput.value.trim();
  if (nameInput.value == 0) {
    nameOutput.textContent = 'Anonymous';
  }
};

nameInput.addEventListener('input', onFieldInput);

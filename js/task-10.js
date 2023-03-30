function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxContainer = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const numberInput = document.querySelector("input");

const createBox = () => {
  const allBoxes = [];

  let previouSize = 30;

  for (let i = 0; i < numberInput.value; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    const newSize = previouSize + 10;
    box.style.height = `${newSize}px`;
    box.style.width = `${newSize}px`;
    previouSize = newSize;
    allBoxes.push(box);
  }

  boxContainer.append(...allBoxes);
};

const destroyBoxes = () => {
  boxContainer.innerHTML = "";
  numberInput.value = "";
};

createBtn.addEventListener("click", createBox);
destroyBtn.addEventListener("click", destroyBoxes);

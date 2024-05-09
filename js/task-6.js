function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    return;
  }

  destroyBoxes();

  let size = 30;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
    size += 10;
  }

  boxesDiv.appendChild(fragment);

  input.value = "";
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

const container = document.createElement("div");
container.classList.add("container-box");

const controlsElement = document.getElementById("controls");
const boxesElement = document.getElementById("boxes");

container.appendChild(controlsElement);
container.appendChild(boxesElement);

document.body.appendChild(container);

const inputElement = document.querySelector('#controls input[type="number"]');
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

inputElement.classList.add("input-controls");
createButton.classList.add("btn-create");
destroyButton.classList.add("btn-destroy");

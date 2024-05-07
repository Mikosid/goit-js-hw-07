const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  const name = nameInput.value.trim();

  if (name) {
    nameOutput.textContent = name;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});

const container = document.createElement("div");

container.classList.add("container");

const inputElement = document.getElementById("name-input");
const headingElement = document.querySelector("h1");

const parentElement = inputElement.parentElement;

parentElement.insertBefore(container, headingElement);

container.appendChild(inputElement);
container.appendChild(headingElement);

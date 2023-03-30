const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

// const onInputChange = (event) => {
//   spanEl.textContent = event.currentTarget.value;
// };

// inputEl.addEventListener("input", onInputChange);



inputEl.addEventListener(
  "input",
  (event) => (spanEl.textContent = event.currentTarget.value)
);

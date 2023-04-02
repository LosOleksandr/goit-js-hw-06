const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");


const spanElDefault = spanEl.textContent;

const onInputChange = (event) => {
  if (event.currentTarget.value === "") {
    return (spanEl.textContent = spanElDefault);
  }

  spanEl.textContent = event.currentTarget.value.trim();
};

inputEl.addEventListener("input", onInputChange);

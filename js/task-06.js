const inputEl = document.querySelector("#validation-input");

const onInputBlur = (event) => {
  if (
    event.currentTarget.value.length ===
    Number(inputEl.getAttribute("data-length"))
  ) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
};

inputEl.addEventListener("blur", onInputBlur);

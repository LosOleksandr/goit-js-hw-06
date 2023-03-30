const inputEl = document.querySelector("#validation-input");

const onInputBlur = (event) => {
  if (
    event.currentTarget.value.length ===
    Number(inputEl.getAttribute("data-length"))
  ) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid")

  } else {
    inputEl.classList.remove("valid")
    inputEl.classList.add("invalid");
    inputEl.value = "";
  }
};

inputEl.addEventListener("blur", onInputBlur);

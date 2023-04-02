const inputEl = document.querySelector("#validation-input");

const changeClass = (classToAdd, classToRemove) => {
  event.currentTarget.classList.add(classToAdd);
  event.currentTarget.classList.remove(classToRemove);
};

const onInputBlur = (event, validClass, invalidClass) => {
  if (
    event.currentTarget.value.length ===
    Number(inputEl.getAttribute("data-length"))
  ) {
    changeClass(validClass, invalidClass);
  } else {
    changeClass(invalidClass, validClass);
  }
};

inputEl.addEventListener("blur", (event) =>
  onInputBlur(event, "valid", "invalid")
);



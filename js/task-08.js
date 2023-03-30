const formEl = document.querySelector(".login-form");

function formValidation(event) {
  let values, error;

  const allInputs = [...formEl.querySelectorAll("input")];

  if (allInputs.some((input) => input.value === "")) {
    error = "All fields must be filled out";
  } else {
    const elements = event.currentTarget.elements;
    const mail = elements.email.value;
    const password = elements.password.value;
    values = {
      mail,
      password,
    };
  }
  return { values, error };
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const { values, error } = formValidation(event);
  if (error) alert(error);
  if (values) console.log(values);
  formEl.reset();
});


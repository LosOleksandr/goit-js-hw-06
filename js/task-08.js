const formEl = document.querySelector(".login-form");

const inpurError = "All fields must be filled out"

function formValidation(event) {
  let values, error;

  const allInputs = [...event.currentTarget.querySelectorAll("input")];

  if (allInputs.some((input) => input.value === "")) {
    return (error = inpurError);
  }

  const elements = event.currentTarget.elements;
  const mail = elements.email.value;
  const password = elements.password.value;
  return (values = {
    mail,
    password,
  });
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const result = formValidation(event);
  if (result === inpurError) {
    alert(inpurError);
  } else {
    console.log(result);
  }
  
  event.currentTarget.reset();
});


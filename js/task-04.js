const buttonDecr = document.querySelector('button[data-action="decrement"]');
const buttonIncr = document.querySelector('button[data-action="increment"]');
const counterValueEl = document.querySelector("#value");
let counterValue = 0;

const onBtnDecrClick = () => {
  counterValue -= 1;
  return (value.textContent = counterValue);
};
const onBtnIncrClick = () => {
  counterValue += 1;
  return (value.textContent = counterValue);
};

buttonDecr.addEventListener("click", onBtnDecrClick);
buttonIncr.addEventListener("click", onBtnIncrClick);

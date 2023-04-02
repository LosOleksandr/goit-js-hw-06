function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const changeColorText = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  const hexColor = getRandomHexColor();
  document.body.style.backgroundColor = hexColor;
  changeColorText.textContent = hexColor;
});

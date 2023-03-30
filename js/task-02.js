const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

// const elements = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const itemListEl = document.createElement("li");
//   itemListEl.textContent = ingredients[i];
//   listEl.classList.add("item");
//   elements.push(itemListEl);
// }

// listEl.append(...elements);

const itemListEls = ingredients.map((ingredient) => {
  const itemListEl = document.createElement("li");
  itemListEl.textContent = ingredient;
  itemListEl.classList.add("item");
  return itemListEl;
});

listEl.append(...itemListEls);

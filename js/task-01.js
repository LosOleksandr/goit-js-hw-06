const listEl = document.querySelector("#categories");

console.log(`Number of categories: ${listEl.children.length}`);

const itemListElements = document.querySelectorAll(".item");

itemListElements.forEach((element) => {
  console.log("Category: ", element.firstElementChild.textContent);
  console.log("Elements: ", element.lastElementChild.children.length);
});

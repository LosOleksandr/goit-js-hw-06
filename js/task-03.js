const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

//! Звичайне вирішення

// const galleryList = document.querySelector(".gallery");

// const galleryListContainer = images.map((image) => {
//   const galleryEl = document.createElement("li");
//   const galleryImageEl = document.createElement("img");
//   galleryImageEl.src = image.url;
//   galleryImageEl.alt = image.alt;
//   galleryImageEl.width = 540;
//   galleryImageEl.classList.add("gallery-img");
//   galleryEl.insertAdjacentElement("afterbegin", galleryImageEl);
//   return galleryEl;
// });

// galleryList.append(...galleryListContainer);

//! Вирішення за допомогою функції

const galleryList = document.querySelector(".gallery");

const makeGallery = (obj) => {
  return obj.map((element) => {
    const galleryEl = document.createElement("li");
    const galleryImageEl = document.createElement("img");
    galleryImageEl.src = element.url;
    galleryImageEl.alt = element.alt;
    galleryImageEl.width = 540;
    galleryImageEl.classList.add("gallery-img");
    galleryEl.insertAdjacentElement("afterbegin", galleryImageEl);
    return galleryEl;
  });
};

const galleryListContainer = makeGallery(images);

galleryList.append(...galleryListContainer);

// all-categories-btn container
const allCatbtn = document.querySelector(".all-categories-btn");
const catgoriesContent = document.querySelector(".all-content");
const categoriesbtnData = ["All", "men", "women", "kids"];
const data = [
  {
    categorie: "men",
    label: "men01",
  },
  {
    categorie: "men",
    label: "men02",
  },
  {
    categorie: "men",
    label: "men03",
  },
  {
    categorie: "women",
    label: "women01",
  },
  {
    categorie: "women",
    label: "women02",
  },
  {
    categorie: "women",
    label: "women03",
  },
  {
    categorie: "kids",
    label: "kid01",
  },
  {
    categorie: "kids",
    label: "kid02",
  },
  {
    categorie: "kids",
    label: "kid03",
  },
];
// createCatgoriesbtn function
function createCatgoriesbtn() {
  categoriesbtnData.map((item) => {
    let btn = document.createElement("button");
    btn.innerHTML = item;
    btn.setAttribute("data-cat", item);
    btn.classList.add("btn");
    allCatbtn.append(btn);
  });
}
function CreateCategoriesData() {
  data.map((item) => {
    let catbox = document.createElement("div");
    catbox.classList.add("cat", item.categorie);
    catbox.innerHTML = item.label;
    catgoriesContent.appendChild(catbox);
  });
}
CreateCategoriesData();
createCatgoriesbtn();

const filterbtn = document.querySelectorAll(".btn");
const allProduct = document.querySelectorAll(".cat");

filterbtn.forEach((item) => {
  item.addEventListener("click", () => {
    let SelectCat = item.dataset.cat;
    // pasing current cat
    FilterProductByCatergorie(SelectCat, allProduct);
  });
});

function FilterProductByCatergorie(getCurrentCat, getAllProduct) {
  getAllProduct.forEach((item) => {
    const isAllCatSelected = getCurrentCat.toLowerCase() === "all";
    const isFilterCat = !item.classList.contains(getCurrentCat);
    if (isFilterCat && !isAllCatSelected) {
      item.classList.add("hide");
    } else {
      item.classList.remove("hide");
    }
  });
}

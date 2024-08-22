import { data } from "./data.js";
const paginationList = document.querySelector(".pagination-list");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const NumberContainer = document.querySelector(".pagination-numbers");

function fetchData() {
  paginationList.innerHTML = data
    .map((item) => {
      return `<li class='list'>
      <p>${item.id}</p>
      <h4>name :${item.first_name}</h4>
      <p> lastName : ${item.last_name} </p>
      </li>`;
    })
    .join(" ");
}
fetchData();

let PerpageLimit = 10;
// extracting all list item
let alllist = document.querySelectorAll(".list");
let pagecount = Math.floor(alllist.length / PerpageLimit);

// creating button as per pagecount
function createNumber(getindex) {
  let buttone = document.createElement("button");
  buttone.classList.add("page-num");
  buttone.innerHTML = getindex;
  buttone.setAttribute("page-count", getindex);
  NumberContainer.appendChild(buttone);
}

let currentPage = 1;
function handlebtn() {
  if (currentPage === 1) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
  }
  if (currentPage === pagecount) next.disabled = true;
  else next.disabled = false;
}
function handleActivePage() {
  document.querySelectorAll(".page-num").forEach((btn) => {
    btn.classList.remove("active-state");
    const currentIndex = Number(btn.getAttribute("page-count"));
    if (currentIndex === currentPage) {
      btn.classList.add("active-state");
    }
    if (currentIndex) {
      btn.addEventListener("click", () => {
        handleCurrentPage(currentIndex);
      });
    }
  });
}

// handling the current page
function handleCurrentPage(getcurrentPage) {
  currentPage = getcurrentPage;
  // range
  let prevRange = (getcurrentPage - 1) * PerpageLimit;
  let currentRange = getcurrentPage * PerpageLimit;
  handlebtn();
  handleActivePage();

  alllist.forEach((item, i) => {
    item.classList.add("hide-item");
    if (i >= prevRange && i < currentRange) {
      item.classList.remove("hide-item");
    }
  });
}
function createPagnumber() {
  for (let i = 1; i <= pagecount; i++) {
    createNumber(i);
  }
}
prev.addEventListener("click", () => {
  handleCurrentPage(currentPage - 1);
});
next.addEventListener("click", () => {
  handleCurrentPage(currentPage + 1);
});

createPagnumber();
handleCurrentPage(1);

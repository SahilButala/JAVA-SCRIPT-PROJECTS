const scrollbar = document.querySelector(".progress-bar");
console.log(scrollbar);
const scrollcontent = document.querySelector(".scroll-content");

function fetchData() {
  try {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        displayData(data);
      });
  } catch (e) {
    console.log("error", e.message);
  }
}
function displayData(getData) {
  console.log(getData);
  scrollcontent.innerHTML = getData
    .map((item) => {
      console.log(item);
      return `<div class="box">
          <p>${item.description.slice(0, 200) + "...."}</p>
          <h5 class="title">${item.title}</h5>
          <div class="price">${item.price}$</div>
        </div>`;
    })
    .join("");
}
fetchData();

window.onscroll = function () {
  handleScroll();
};
function handleScroll() {
  let topheight = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let alreadyScrolled = (topheight / height) * 100;
  scrollbar.style.width = `${alreadyScrolled}%`;
}

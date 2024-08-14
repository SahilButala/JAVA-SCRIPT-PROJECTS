const container = document.querySelector(".all-products");
const loadProducts = document.querySelector(".load-products");
let cuurent = 0;
const fetchData = async (getposition) => {
  try {
    const res = await fetch(
      `https://dummyjson.com/products?limit=4&skip=${
        getposition === 0 ? 0 : getposition * 4
      }`
    );
    const data = await res.json();
    if (data && data.products.length > 0) displayData(data.products);
  } catch (error) {
    console.log("error", error.message);
  }
};

const displayData = (data) => {
  data.forEach((item, index) => {
    // creating element add set classses
    const box = document.createElement("div");
    box.classList.add("box");
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image-div");
    const img = document.createElement("img");
    imageDiv.appendChild(img);
    const iamgedetail = document.createElement("div");
    iamgedetail.classList.add("image-details");

    // setting data into a element
    img.src = item.thumbnail;
    iamgedetail.innerHTML = item.description;
    box.append(imageDiv);
    box.append(iamgedetail);

    container.append(box);
    if(container.children.length === 30){
        loadProducts.setAttribute("disabled","true")
    }
  });
};
fetchData(cuurent);
loadProducts.addEventListener("click", () => {
  fetchData((cuurent += 1));
});

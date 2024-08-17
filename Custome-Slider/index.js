const swipper = document.querySelector(".swipper");
const dotcon = document.querySelector(".dot-con");
// fetching the data
async function fetchdata() {
  try {
    const res = await fetch(
      "https://api.slingacademy.com/v1/sample-data/photos"
    );
    const data = await res.json();

    if (data) displayData(data.photos); // passing the data as a parameter
  } catch (error) {
    console.log("error :", error.message);
  }
}
// its shows the data
function displayData(data) {
  // it takes data from above function
  swipper.innerHTML = data
    .map((item) => {
      return `<div class="div"><img src=${item.url} alt=""></div>`;
    })
    .join(" ");
  // dots counts are depend upon number of images
  dotcon.innerHTML = data
    .map((item, index) => {
      return `<span class="dot ${
        index === 0 ? "active" : ""
      }" data-slide=${index}></span>`;
    })
    .join(" ");
}
fetchdata();


setTimeout(() => {
  const slide = document.querySelectorAll(".div");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  let currentSlide = 0;
  console.log(next);
  // this functions accepet the current slide to update the dot count
  function activedotCount(slide) {
    document
      .querySelectorAll(".dot")
      .forEach((dots) => dots.classList.remove("active"));
    document
      .querySelector(`.dot[data-slide='${slide}'] `)
      .classList.add("active");
  }

  // this functions accepet the current slide to update the images
  function currentImageSlide(currentslide) {
    slide.forEach((slides, index) => {
      slides.style.transform = `translateX(${100 * (index - currentslide)}%)`;
    });
  }
  currentImageSlide(currentSlide);
  // jump to prev image
  prev.addEventListener("click", () => {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }
    currentImageSlide(currentSlide);
    activedotCount(currentSlide);
  });
  // jump to next slide
  next.addEventListener("click", () => {
    currentSlide++;
    if (currentSlide > slide.length - 1) {
      currentSlide = 0;
    }
    currentImageSlide(currentSlide);
    activedotCount(currentSlide);
  });

  dotcon.addEventListener("click", (e) => {
    let cur = e.target.dataset.slide;
    currentImageSlide(cur);
    activedotCount(cur);
  });
}, 1000);

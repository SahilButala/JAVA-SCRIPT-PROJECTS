const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const progressstep = document.querySelectorAll(".progress-step");
const ProgressBar = document.querySelector(".progress");

let currentProgressStep = 1;

next.addEventListener("click", () => {
  if (currentProgressStep < progressstep.length) {
    currentProgressStep++;
  }
  updateProgressBar();
});
prev.addEventListener("click", () => {
  if (currentProgressStep > 1) {
    currentProgressStep--;
  }
  updateProgressBar();
});
// function to update progress bar
function updateProgressBar() {
  progressstep.forEach((item, index) => {
    item.classList[`${index < currentProgressStep ? "add" : "remove"}`](
      "active"
    );
  });
  ProgressBar.style.width =
    ((currentProgressStep - 1) / (progressstep.length - 1)) * 100 + "%";
  if (currentProgressStep === 1) {
    prev.disabled = true;
  } else if (currentProgressStep === progressstep.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

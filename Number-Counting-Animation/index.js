const Displaynum = document.querySelectorAll(".num");
let interval = 5000;
Displaynum.forEach((item) => {
  let start = 0;
  let end = parseInt(item.getAttribute("data-num"));
  let duration = Math.floor(interval / end);
  let count = setInterval(() => {
    start += 1;
    item.innerHTML = start;
    if (start === end) {
      clearInterval(count);
    }
  }, duration);
});

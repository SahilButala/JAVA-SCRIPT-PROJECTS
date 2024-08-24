const inputValue = document.querySelector(".input");
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
btn.addEventListener("click", GetMovieDetails);
// window.addEventListener("load", GetMovieDetails);
const err = document.querySelector(".error")
function GetMovieDetails() {
  try {
    let extarctInputValue = inputValue.value;
    let url = `http://www.omdbapi.com/?t=${extarctInputValue}&apikey=${key}`;
    if (extarctInputValue <= 0) throw new Error("Movie Not Available");
    else {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
            if(!data) throw new Error("Movie Not Available")
            else displayData(data)
        });
      }
    } catch (error) {
      console.log("error", error.message);
      err.innerHTML = error.message
  }
}
function displayData(getdata) {
  container.innerHTML = `<div class="left-container">
    <div class="image">
        <img src=${getdata.Poster} alt="">
    </div>
</div>
<div class="right-container">
    <div class="content">
        <h2 class="title">${getdata.Title}</h2>
        <div class="categories">
        ${getdata.Genre.split(",").join("<div></div>")}
        </div>
        <div class="time">
                    <p>Runtime : ${getdata.Runtime}</p>
                    <b>Released Date : ${getdata.Released}</b>
                     <p>Year : ${getdata.Year}</p>
                </div>
                <div class="ratings">
                <p>Rating : <b> ${getdata.imdbRating}</b></p>
            </div>
        <p class="description">${getdata.Plot}</p>
        <div class="cast">
            <b class="cast">cast</b>
            <div class="names">
                  <h5>${getdata.Actors}</h4>
            </div>
        </div>
    </div>
</div>`;
}

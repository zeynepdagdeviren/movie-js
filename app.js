 const arrows = document.querySelectorAll(".arrow");
 const movieLists = document.querySelector(".movie-list");

arrows.forEach((arrow, i) => {
const ratio = Math.floor(window.innerWidth / 270)
const itemNumber = movieLists[i].querySelectorAll("img").length;
let clickCounter = 0;
arrow.addEventListener("click", () => {
clickCounter++;
if ((itemNumber = (4 + clickCounter) + (4 - ratio) >= 0)) {
 movieList[i].style.transform = `translateX( ${
 movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
}px)`;
} else {
movieLists[i].style.transform = "translateX(0)"
 clickCounter = 0;
 }
 });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container, .movie-list-title, .navbar-container, .left-menu-icon,.toggle")

ball.addEventListener("click", ()=> {
 items.forEach(item => {
item.classList.toggle("active")
 })
 ball.classList.toggle("active")
})

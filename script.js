const movies = [];

const movieForm = document.getElementById("movieForm");
const movieList = document.getElementById("movieList");
const input = document.getElementById("title");
const counter = document.getElementById("counter");

function updateCounter() {
    counter.textContent = movies.length;
}

function addMovie(title) {
    movies.push(title);

    const li = document.createElement("li");
    li.textContent = title;
    movieList.appendChild(li);

    updateCounter();
}

movieForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = input.value.trim();

    if (title === "") {
        alert("Podaj nazwę filmu!");
        return;
    }

    addMovie(title);

    input.value = "";
});
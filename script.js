const movies = [];

const counter = document.getElementById("counter");

function updateCounter() {
    counter.textContent = movies.length;
}

function addMovie(title) {
    movies.push(title);
    updateCounter();
}
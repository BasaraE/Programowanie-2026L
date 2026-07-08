const movies = [];

function updateMovieCounter() {
    const movieList = document.getElementById('movieList');
    const counterElement = document.getElementById('movie-counter');
    if (movieList && counterElement) {
        const movieCount = movieList.getElementsByTagName('li').length;
        counterElement.textContent = movieCount;
    }
}

function addMovie() {
    const inputElement = document.getElementById('title');
    if (!inputElement) return;

    const movieTitle = inputElement.value.trim();

    if (movieTitle !== "") {
        movies.push(movieTitle);

        const movieList = document.getElementById('movieList');
        if (movieList) {
            const newLi = document.createElement('li');
            newLi.textContent = movieTitle;
            movieList.appendChild(newLi);
        }

        inputElement.value = "";
        updateMovieCounter();
    }
}

updateMovieCounter();

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            addMovie();
        });
    }
});

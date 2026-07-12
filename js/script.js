let movies = JSON.parse(localStorage.getItem('movies')) || [];

function updateCounter() {
    const counter = document.getElementById('movie-count');
    const movieItems = document.querySelectorAll('#movieList li');
    if (counter) {
        counter.textContent = movieItems.length;
    }
}

function renderMovies() {
    const movieList = document.getElementById('movieList');
    if (!movieList) return;
    
    movieList.innerHTML = '';
    
    movies.forEach((movie) => {
        const li = document.createElement('li');
        li.textContent = movie;
        movieList.appendChild(li);
    });
    
    updateCounter();
}

function addMovie(event) {
    if (event) event.preventDefault();
    
    const input = document.getElementById('title');
    if (!input) return;
    
    const movieTitle = input.value.trim();
    
    if (movieTitle !== '') {
        movies.push(movieTitle);
        
        localStorage.setItem('movies', JSON.stringify(movies));
        
        input.value = '';
        renderMovies();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', addMovie);
    }
    
    renderMovies();
});
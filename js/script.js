const movies = [];

function updateCounter() {
    const counter = document.getElementById('movie-count');
    const movieItems = document.querySelectorAll('#movieList li');
    
    if (counter) {
        counter.textContent = movieItems.length;
    }
}

function addMovie(event) {
    if (event) event.preventDefault();
    
    const input = document.getElementById('title');
    const movieList = document.getElementById('movieList');
    
    if (input && movieList && input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value.trim();
        movieList.appendChild(li);
        
        input.value = '';
        
        updateCounter();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', addMovie);
    }
    updateCounter();
});
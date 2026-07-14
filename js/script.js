const movies = [];

const form = document.querySelector('form');
const input = document.getElementById('title');
const movieList = document.getElementById('movieList');
const counter = document.getElementById('movie-counter');
const messageBox = document.getElementById('message-box');

function updateCounter() {
    counter.textContent = movies.length;
}

function addMovie(movieTitle) {

    movies.push(movieTitle);

    const newLi = document.createElement('li');
    newLi.textContent = movieTitle;
    movieList.appendChild(newLi);

    updateCounter();

    messageBox.textContent = `Film "${movieTitle}" został pomyślnie dodany!`;
    messageBox.style.display = 'block';

    setTimeout(() => {
        messageBox.style.display = 'none';
    }, 3000);
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const movieTitle = input.value.trim();
    
    if (movieTitle !== '') {
        addMovie(movieTitle);
        input.value = '';
    }
});

updateCounter();
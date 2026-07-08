
const movies = JSON.parse(localStorage.getItem('movies')) || [];


function updateMovieCounter() {
    const movieList = document.getElementById('movieList');
    const counterElement = document.getElementById('movie-counter');
    
    if (movieList && counterElement) {
        movieList.innerHTML = '';
        movies.forEach(movie => {
            const li = document.createElement('li');
            li.textContent = movie;
            movieList.appendChild(li);
        });
        counterElement.textContent = movies.length;
    }
}


function updateRecentlyAdded(newMovieTitle) {
    const recentlyList = document.getElementById('recentlyAddedList');
    if (recentlyList && newMovieTitle) {
     
        if (recentlyList.textContent.includes("Brak ostatnio")) {
            recentlyList.innerHTML = '';
        }
        const li = document.createElement('li');
        li.textContent = newMovieTitle;
    
        recentlyList.insertBefore(li, recentlyList.firstChild);
    }
}


function showSuccessMessage(title) {
    const messageContainer = document.getElementById('message-container');
    if (messageContainer) {
        messageContainer.textContent = `Film "${title}" został pomyślnie zapisany!`;
 
        setTimeout(() => {
            messageContainer.textContent = '';
        }, 3000);
    }
}


function addMovie(event) {
    event.preventDefault();
    const inputElement = document.getElementById('title');
    if (!inputElement) return;

    const movieTitle = inputElement.value.trim();

    if (movieTitle !== "") {
        // Dodanie do tablicy, localStorage i aktualizacja widoku
        movies.push(movieTitle);
        localStorage.setItem('movies', JSON.stringify(movies));
        
        updateMovieCounter();
        updateRecentlyAdded(movieTitle);
        showSuccessMessage(movieTitle);
        
        inputElement.value = "";
    }
}


document.addEventListener('DOMContentLoaded', () => {
    updateMovieCounter();
    const form = document.getElementById('movieForm');
    if (form) {
        form.addEventListener('submit', addMovie);
    }
});

const movies = JSON.parse(localStorage.getItem('movies')) || [];

function renderMovies() {
    const movieList = document.getElementById('movieList');
    const actionMovieList = document.getElementById('actionMovieList');
    
    if(movieList) movieList.innerHTML = '';
    if(actionMovieList) actionMovieList.innerHTML = '';

    movies.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = movie.title;
        
        // Якщо жанр фільму акція, додаємо в окрему секцію
        if (movie.genre === 'akcja' && actionMovieList) {
            actionMovieList.appendChild(li);
        } else if (movieList) {
            movieList.appendChild(li);
        }
    });
}

function addMovie(event) {
    if(event) event.preventDefault();
    
    const titleInput = document.getElementById('title');
    if(!titleInput || !titleInput.value.trim()) return;

    // Якщо в назві є слово "akcja" (без врахування регістру) – ставимо цей жанр
    const isAction = titleInput.value.toLowerCase().includes('akcja');

    const newMovie = {
        title: titleInput.value,
        genre: isAction ? 'akcja' : 'ogólny'
    };

    movies.push(newMovie);
    localStorage.setItem('movies', JSON.stringify(movies));
    
    titleInput.value = '';
    renderMovies();
    showAlert("Pomyślnie dodano film!");
}

function showAlert(text) {
    const alertBox = document.getElementById('alert-message');
    if(alertBox) {
        alertBox.textContent = text;
        alertBox.style.display = 'block';
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 3000);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if(form) {
        form.addEventListener('submit', addMovie);
    }

    const themeToggle = document.getElementById('themeToggle');
    if(themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark-theme');
            localStorage.setItem('darkTheme', isDark);
        });
    }

    if(localStorage.getItem('darkTheme') === 'true') {
        document.body.classList.add('dark-theme');
    }
    
    renderMovies();
});
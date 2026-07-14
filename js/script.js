
const form = document.getElementById('movie-form');
const titleInput = document.getElementById('movie-title');
const genreSelect = document.getElementById('movie-genre');
const generalList = document.getElementById('general-movie-list');
const comedyList = document.getElementById('comedy-movie-list');
const totalCountSpan = document.getElementById('total-count');
const toast = document.getElementById('success-toast');


function updateCounter() {
    
    const totalMovies = document.querySelectorAll('li').length;
    totalCountSpan.textContent = totalMovies; 
}


function showSuccessMessage() {
    toast.classList.add('show'); 
    
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}


form.addEventListener('submit', function(event) {
    
    event.preventDefault(); 


    const title = titleInput.value.trim();
    const genre = genreSelect.value;

    
    if (title === '') return;

    
    const newLi = document.createElement('li');
    newLi.textContent = title;

    
    if (genre === 'comedy') {
        comedyList.appendChild(newLi);
    } else {
        generalList.appendChild(newLi);
    }

    
    updateCounter();
    showSuccessMessage();

    
    titleInput.value = '';
});
// Funkcja powiadomień działa poprawnie

// Połącz się z elementami HTML przy użyciu ich identyfikatorów (ID)
const form = document.getElementById('movie-form');
const titleInput = document.getElementById('movie-title');
const genreSelect = document.getElementById('movie-genre');
const generalList = document.getElementById('general-movie-list');
const comedyList = document.getElementById('comedy-movie-list');
const totalCountSpan = document.getElementById('total-count');
const toast = document.getElementById('success-toast');

// ZADANIE 4: Logika aktualizująca licznik
function updateCounter() {
    // Liczy, ile tagów 'li' (czyli dodanych filmów) znajduje się obecnie na stronie
    const totalMovies = document.querySelectorAll('li').length;
    totalCountSpan.textContent = totalMovies; // Podmienia tekst w znaczniku span na aktualną liczbę
}

// ZADANIE 5: Logika wyświetlania powiadomienia
function showSuccessMessage() {
    toast.classList.add('show'); // Dodaje klasę CSS odpowiedzialną za pojawienie się komunikatu
    
    // Ustawia "timer", by po 3000 ms (3 sekundy) odebrać tę klasę i go schować
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Główna logika po kliknięciu "Dodaj film"
form.addEventListener('submit', function(event) {
    // Blokuje domyślne zachowanie formularza (czyli przeładowanie strony po kliknięciu)
    event.preventDefault(); 

    // Pobiera wpisany tekst i wybraną kategorię
    const title = titleInput.value.trim();
    const genre = genreSelect.value;

    // Jeżeli nic nie wpisano, to po prostu przerywa działanie
    if (title === '') return;

    // Tworzy nowy tag listy <li> dla nowego filmu
    const newLi = document.createElement('li');
    newLi.textContent = title;

    // ZADANIE 2: Przydzielanie filmu do odpowiedniej sekcji w zależności od pola 'select'
    if (genre === 'comedy') {
        comedyList.appendChild(newLi);
    } else {
        generalList.appendChild(newLi);
    }

    // Wywołanie wcześniej stworzonych funkcji (Zadanie 4 i Zadanie 5)
    updateCounter();
    showSuccessMessage();

    // Czyszczenie pola wpisywania nazwy na koniec (przygotowanie pod nowy film)
    titleInput.value = '';
});

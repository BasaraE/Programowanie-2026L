const movies = [];
let count = 0;

function addMovie(event) {
    event.preventDefault(); 

    const titleInput = document.getElementById('title');
    
    if (titleInput.value.length < 3) {
        return; 
    }

    movies.push(titleInput.value);
    count++;
    document.getElementById('counter').innerText = count;
    titleInput.value = '';
}

document.querySelector('.my-btn').addEventListener('click', addMovie);
const movies = []; const form = document.getElementById("movieForm"); const titleInput = document.getElementById("title"); const movieList = document.getElementById("movieList"); function addMovie(e) { e.preventDefault(); const t = titleInput.value.trim(); if(t !== "") { movies.push(t); const li = document.createElement("li"); li.textContent = t; movieList.appendChild(li); titleInput.value = ""; localStorage.setItem("movies", JSON.stringify(movies)); } } form.addEventListener("submit", addMovie);

document.getElementById('msg').textContent = 'Witaj w aplikacji do filmow!';

const movieForm = document.getElementById("movieForm");
const titleInput = document.getElementById("title");
const movieList = document.getElementById("movieList");
const clearBtn = document.getElementById("clearBtn");
const message = document.getElementById("message");
const movieCount = document.getElementById("movieCount");

let movies = JSON.parse(localStorage.getItem("movies")) || [];

function saveMovies() {
  localStorage.setItem("movies", JSON.stringify(movies));
}

function updateCounter() {
  movieCount.textContent = `Liczba filmów: ${movies.length}`;
}

function renderMovies() {
  movieList.innerHTML = "";

  movies.forEach((movie) => {
    const li = document.createElement("li");
    li.textContent = movie;
    movieList.appendChild(li);
  });

  updateCounter();
}

movieForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = titleInput.value.trim();

  if (title === "") {
    return;
  }

  movies.push(title);
  saveMovies();
  renderMovies();
  message.textContent = "";
  titleInput.value = "";
});

clearBtn.addEventListener("click", function () {
  movies = [];
  saveMovies();
  renderMovies();
  message.textContent = "Lista filmów została wyczyszczona.";
});

renderMovies();
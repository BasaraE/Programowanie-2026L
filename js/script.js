const movies = [];

const form = document.getElementById("movieForm");
const title = document.getElementById("title");
const list = document.getElementById("movieList");
const message = document.getElementById("message");

form.addEventListener("submit", function(e){

    e.preventDefault();

    if(title.value.trim() === ""){
        alert("Podaj nazwę filmu!");
        return;
    }

    movies.push(title.value);

    const li = document.createElement("li");
    li.textContent = title.value;

    list.appendChild(li);

    message.textContent = "Film został dodany pomyślnie!";

    title.value = "";

});
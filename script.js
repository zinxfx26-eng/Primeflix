console.log("Prime Flix Loaded Successfully!");

// Welcome Button
document.querySelector(".hero button").addEventListener("click", () => {
    alert("🎬 Welcome to Prime Flix!");
});

// Get Movies
let movies = JSON.parse(localStorage.getItem("movies")) || [];

// Load Movies
function loadMovies(search = "") {

    const movieContainer = document.getElementById("movieContainer");

    if (!movieContainer) return;

    movieContainer.innerHTML = "";

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase()) ||
        movie.category.toLowerCase().includes(search.toLowerCase()) ||
        movie.description.toLowerCase().includes(search.toLowerCase())
    );

    if (filteredMovies.length === 0) {

        movieContainer.innerHTML = `
            <h2 style="color:white;text-align:center;width:100%;">
                No Movies Found 😢
            </h2>
        `;

        return;
    }

    filteredMovies.forEach(movie => {

        movieContainer.innerHTML += `

        <div class="card">

            <img src="${movie.poster}" alt="${movie.title}">

            <h3>${movie.title}</h3>

            <p>${movie.description}</p>

            <p><strong>🎭 Category:</strong> ${movie.category}</p>

            <p><strong>📅 Year:</strong> ${movie.year}</p>

            <p><strong>⭐ Rating:</strong> ${movie.rating}</p>

            <a href="${movie.movie}" target="_blank">
                <button>▶ Watch Now</button>
            </a>

        </div>

        `;

    });

}

// Load News
function loadNews() {

    const newsContainer = document.getElementById("newsContainer");

    if (!newsContainer) return;

    const news = JSON.parse(localStorage.getItem("news")) || [];

    if (news.length === 0) return;

    newsContainer.innerHTML = "";

    news.forEach(item => {

        newsContainer.innerHTML += `

        <div class="news-box">

            <h3>${item.title}</h3>

            <p>${item.content}</p>

        </div>

        `;

    });

}

// Search
const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        loadMovies(this.value);

    });

}

// Start
loadMovies();
loadNews();

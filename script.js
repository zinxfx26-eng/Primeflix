console.log("Prime Flix Loaded Successfully!");

// Welcome button
document.querySelector(".hero button").addEventListener("click", function () {
    alert("🎬 Welcome to Prime Flix!");
});

// Load Movies
function loadMovies() {

    const movieContainer = document.getElementById("movieContainer");

    if (!movieContainer) return;

    const movies = JSON.parse(localStorage.getItem("movies")) || [];

    movieContainer.innerHTML = "";

    if (movies.length === 0) {
        movieContainer.innerHTML = `
            <p style="color:white;font-size:20px;">
                No movies available.
            </p>
        `;
        return;
    }

    movies.forEach(movie => {

        movieContainer.innerHTML += `
            <div class="card">

                <img src="${movie.poster}" alt="${movie.title}">

                <h3>${movie.title}</h3>

                <p>${movie.description}</p>

                <p><strong>Category:</strong> ${movie.category}</p>

                <p><strong>Year:</strong> ${movie.year}</p>

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

// Run everything
loadMovies();
loadNews();

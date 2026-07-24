console.log("PrimeFlix Loaded!");

document.querySelector(".hero button").addEventListener("click", () => {
    alert("🎬 Welcome to PrimeFlix!");
});

const movieContainer = document.getElementById("movieContainer");
const newsContainer = document.getElementById("newsContainer");
const searchInput = document.getElementById("searchInput");

let allMovies = [];

// Load Movies From Supabase
async function loadMovies(search = "") {

    const { data, error } = await supabase
        .from("movies")
        .select("*")
        .order("id", { ascending: false });

    if (error) {
        console.error(error);
        movieContainer.innerHTML = "<h2>Failed to load movies.</h2>";
        return;
    }

    allMovies = data;

    let movies = data;

    if (search !== "") {

        movies = movies.filter(movie =>
            movie.title.toLowerCase().includes(search.toLowerCase()) ||
            movie.category.toLowerCase().includes(search.toLowerCase()) ||
            movie.description.toLowerCase().includes(search.toLowerCase())
        );

    }

    movieContainer.innerHTML = "";

    if (movies.length === 0) {

        movieContainer.innerHTML = `
        <h2 style="width:100%;text-align:center;">
            No Movies Found
        </h2>
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

// Search
if (searchInput) {

    searchInput.addEventListener("input", () => {

        const keyword = searchInput.value.toLowerCase();

        const filtered = allMovies.filter(movie =>
            movie.title.toLowerCase().includes(keyword) ||
            movie.category.toLowerCase().includes(keyword) ||
            movie.description.toLowerCase().includes(keyword)
        );

        movieContainer.innerHTML = "";

        if (filtered.length === 0) {

            movieContainer.innerHTML =
                "<h2 style='width:100%;text-align:center;'>No Movies Found</h2>";

            return;
        }

        filtered.forEach(movie => {

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

    });

}

// News (optional for now)
async function loadNews() {

    if (!newsContainer) return;

    newsContainer.innerHTML = `
    <h3>PrimeFlix</h3>
    <p>Latest News Coming Soon...</p>
    `;

}

loadMovies();
loadNews();

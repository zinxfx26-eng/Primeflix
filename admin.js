// Load movies from Local Storage
let movies = JSON.parse(localStorage.getItem("movies")) || [];

// Add Movie
document.getElementById("addMovie").addEventListener("click", () => {

    const title = document.getElementById("movieTitle").value.trim();
    const poster = document.getElementById("posterUrl").value.trim();
    const movie = document.getElementById("movieUrl").value.trim();
    const description = document.getElementById("description").value.trim();
    const category = document.getElementById("category").value.trim();
    const year = document.getElementById("year").value.trim();
    const rating = document.getElementById("rating").value.trim();

    if (
        !title ||
        !poster ||
        !movie ||
        !description ||
        !category ||
        !year ||
        !rating
    ) {
        alert("Please fill all fields.");
        return;
    }

    const newMovie = {
        id: Date.now(),
        title,
        poster,
        movie,
        description,
        category,
        year,
        rating
    };

    movies.push(newMovie);

    localStorage.setItem("movies", JSON.stringify(movies));

    alert("✅ Movie Added Successfully!");

    // Clear form
    document.getElementById("movieTitle").value = "";
    document.getElementById("posterUrl").value = "";
    document.getElementById("movieUrl").value = "";
    document.getElementById("description").value = "";
    document.getElementById("category").value = "";
    document.getElementById("year").value = "";
    document.getElementById("rating").value = "";
});

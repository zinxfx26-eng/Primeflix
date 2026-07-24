let movies = JSON.parse(localStorage.getItem("movies")) || [];

document.getElementById("addMovie").addEventListener("click", () => {

    const title = document.getElementById("movieTitle").value.trim();
    const poster = document.getElementById("posterUrl").value.trim();
    const movie = document.getElementById("movieUrl").value.trim();
    const description = document.getElementById("description").value.trim();
    const category = document.getElementById("category").value.trim();
    const year = document.getElementById("year").value.trim();
    const rating = document.getElementById("rating").value.trim();

    console.log({
        title,
        poster,
        movie,
        description,
        category,
        year,
        rating
    });

    if (!title) return alert("Movie Title is empty");
    if (!poster) return alert("Poster URL is empty");
    if (!movie) return alert("Movie URL is empty");
    if (!description) return alert("Description is empty");
    if (!category) return alert("Category is empty");
    if (!year) return alert("Year is empty");
    if (!rating) return alert("Rating is empty");

    movies.push({
        id: Date.now(),
        title,
        poster,
        movie,
        description,
        category,
        year,
        rating
    });

    localStorage.setItem("movies", JSON.stringify(movies));

    alert("✅ Movie Added Successfully!");
});

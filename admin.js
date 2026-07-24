// Load existing data
let movies = JSON.parse(localStorage.getItem("movies")) || [];
let news = JSON.parse(localStorage.getItem("news")) || [];

// Add Movie
document.getElementById("addMovie").addEventListener("click", () => {
    const title = document.getElementById("movieTitle").value.trim();
    const poster = document.getElementById("moviePoster").value.trim();
    const description = document.getElementById("movieDesc").value.trim();

    if (!title || !poster || !description) {
        alert("Please fill in all movie fields.");
        return;
    }

    movies.push({
        id: Date.now(),
        title,
        poster,
        description
    });

    localStorage.setItem("movies", JSON.stringify(movies));

    alert("✅ Movie added successfully!");

    document.getElementById("movieTitle").value = "";
    document.getElementById("moviePoster").value = "";
    document.getElementById("movieDesc").value = "";
});

// Add News
document.getElementById("addNews").addEventListener("click", () => {
    const title = document.getElementById("newsTitle").value.trim();
    const content = document.getElementById("newsContent").value.trim();

    if (!title || !content) {
        alert("Please fill in all news fields.");
        return;
    }

    news.push({
        id: Date.now(),
        title,
        content
    });

    localStorage.setItem("news", JSON.stringify(news));

    alert("📰 News added successfully!");

    document.getElementById("newsTitle").value = "";
    document.getElementById("newsContent").value = "";
});

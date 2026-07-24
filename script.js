console.log("Prime Flix loaded successfully");

// Hero Button
const heroButton = document.querySelector(".hero button");

if (heroButton) {
  heroButton.addEventListener("click", () => {
    alert("Welcome to Prime Flix!");
  });
}

// =============================
// Load Movies From Supabase
// =============================

async function loadMovies() {
  try {
    const { data, error } = await supabase
      .from("movies")
      .select("*");

    if (error) {
      console.error("Supabase Error:", error);
      return;
    }

    console.log("Connected to Supabase ✅");
    console.log("Movies:", data);

    // We'll display the movies on the page later.
  } catch (err) {
    console.error("Unexpected Error:", err);
  }
}

loadMovies();

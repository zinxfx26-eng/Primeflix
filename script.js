console.log("Prime Flix loaded successfully");


// Future features:
// - Supabase login
// - Admin dashboard
// - Upload movies
// - Add news
// - Edit website sections



document.querySelector(".hero button")
.onclick=function(){

alert("Welcome to Prime Flix!");

};
async function testConnection() {
  const { data, error } = await supabase
    .from("movies")
    .select("*");

  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Connected to Supabase!");
    console.log(data);
  }
}

testConnection();
async function loadMovies() {
  const { data, error } = await supabase
    .from("movies")
    .select("*");

  if (error) {
    console.error("Supabase Error:", error);
    return;
  }

  console.log("Movies:", data);
}

loadMovies();

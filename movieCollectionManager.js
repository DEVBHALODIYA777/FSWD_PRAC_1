const movies = [
    { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
    { title: "The Godfather", genre: "Crime", rating: 9.2, releaseYear: 1972 },
    { title: "Parasite", genre: "Thriller", rating: 8.6, releaseYear: 2019 },
    { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008 },
    { title: "Forrest Gump", genre: "Drama", rating: 8.8, releaseYear: 1994 },
  ];
  
  function addMovie(title, genre, rating, releaseYear) {
    const newMovie = { title, genre, rating, releaseYear };
    movies.push(newMovie);
    console.log(`Added: "${title}" (${releaseYear}) - ${genre}, Rating: ${rating}`);
  }
  
  function listMoviesByGenre(genre) {
    const genreMovies = movies.filter(movie => movie.genre === genre);
    console.log(`Movies in "${genre}" genre:`);
    if (genreMovies.length === 0) {
      console.log("No movies found.");
    } else {
      genreMovies.forEach(movie => console.log(`- ${movie.title} (${movie.releaseYear})`));
    }
  }
  
  function findHighestRatedMovie() {
    if (movies.length === 0) {
      console.log("No movies in the collection.");
      return;
    }
    let highestRated = movies[0];
    for (let movie of movies) {
      if (movie.rating > highestRated.rating) {
        highestRated = movie;
      }
    }
    console.log(`Highest Rated: "${highestRated.title}" (${highestRated.rating}/10)`);
  }
  
  function listMovieTitles() {
    const titles = movies.map(movie => movie.title);
    console.log("Movies in your collection:");
    if (titles.length === 0) {
      console.log("No movies to display.");
    } else {
      console.log(titles.join(", "));
    }
  }
  
  function listMoviesAfterYear(year) {
    const recentMovies = movies.filter(movie => movie.releaseYear > year);
    console.log(`Movies released after ${year}:`);
    if (recentMovies.length === 0) {
      console.log("No movies found.");
    } else {
      recentMovies.forEach(movie => console.log(`- ${movie.title} (${movie.releaseYear})`));
    }
  }
  
  addMovie("Interstellar", "Sci-Fi", 8.6, 2014);
  listMoviesByGenre("Sci-Fi");
  findHighestRatedMovie();
  listMovieTitles();
  listMoviesAfterYear(2000);
  
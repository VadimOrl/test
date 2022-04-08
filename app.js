let numberOfFilms = window.prompt("Сколько фильмов" ,"0")

/* не понятно что да как */
let personalMoveDB = {
  count:numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

let lastFilms = window.prompt("Посел фильм" ,"0");
let countFilms = window.prompt("оцени" ,"0");

personalMoveDB.movies[lastFilms] = countFilms;
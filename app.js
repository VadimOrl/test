let numberOfFilms = window.prompt("Сколько фильмов" ,"0")


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
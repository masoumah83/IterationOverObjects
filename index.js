// q1;
const person = {
  name: "Masouamh",
  age: 41,
  City: "kuwiat",
};
//q2
person.email = "m.ashknani@hotmail.com";

console.log(person);

//q3
/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/
let haskey = (Opject, aKey) => {
  if (Opject[aKey]) {
    console.log(true);
  } else {
    console.log(false);
  }
};
//function // object//key
haskey(person, "name");
haskey(person, "age");
haskey(person, "City");
haskey(person, "hello");
haskey(person, "all");

// person.name === person["name"]

//q4
//Q4) Create a function that accepts an array of objects called 'movies'
//and iterates through it to print the titles of all the movies.
const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];

//q4
let movTitle = (movies) => {
  movies.forEach((movie) => {
    console.log(movie.title);
  });
};
movTitle(movies);

//q5
let movInYear = (movies) => {
  let movies94 = movies.filter((movies) => {
    if (movies.year == 1994) {
      return true;
    } else {
      return false;
    }
  });
  return movies94.length;
};
console.log(movInYear(movies));

//q6

let modifimov = (movies) => {
  let modifiarray = movies.map((mov) => {
    if (mov.title == "The Dark Knight") {
      mov.genre = "Action / Drama";
      return mov;
    } else return mov;
  });
  return modifiarray;
};
console.log(modifimov(movies));

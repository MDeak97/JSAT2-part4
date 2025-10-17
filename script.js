// File Name: script.js
// Description: File to answer questions from Part 4 of assessment JSAT 2
// Author: Michael Deak
// Date: 17/10/2025
// Version: 1.00

// Q4.1 - Define a movie class with the following properties MovieID Title Year Rating.

// Define Movie class
class Movie {
  constructor(movieId, title, year, rating) {
    this.movieId = movieId;
    this.title = title;
    this.year = year;
    this.rating = rating;
  }
}
// Display Movie class in the console
console.log(Movie);

// Q4.2 - Create an array of at least 10 movies with mock values and print the array in console.

// Creating array with 10 Movie objects
const movieArray = [
  new Movie(5, "Inception", 2010, "PG-13"),
  new Movie(1, "Matrix", 2010, "R"),
  new Movie(8, "Interstellar", 2014, "PG-13"),
  new Movie(3, "Avatar", 2009, "PG-13"),
  new Movie(10, "Gladiator", 2000, "R"),
  new Movie(7, "Titanic", 1997, "PG-13"),
  new Movie(2, "The Dark Knight", 2008, "PG-13"),
  new Movie(9, "Joker", 2019, "R"),
  new Movie(4, "The Lion King", 1994, "G"),
  new Movie(6, "Avengers: Endgame", 2019, "PG-13"),
];

// Print the entire array to the console.
console.log("All Movies (Unsorted): ");
console.log(movieArray);

// Q4.3 - Sort the array in “ascending” order by Movie ID.

// Sorting array by movieID (ascending order)
console.log("All movies (Sorted): ");
movieArray.sort((a, b) => a.movieId - b.movieId);

// Log the sorted array in the console
console.log(movieArray);

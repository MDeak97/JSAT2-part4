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

console.log(Movie);

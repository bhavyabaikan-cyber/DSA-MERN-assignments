

// ASSIGNMENT 4: 
// ------------
// Movie Streaming Platform

// You are working on a movie recommendation system.

// Test data:
// const movies = [
//   { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
//   { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
//   { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
//   { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
// ];


// Tasks:
//     1. filter() only "Sci-Fi" movies
//     2. map() to return:
//             "Inception (8.8)"
//     3. reduce() to find average movie rating
//     4. find() movie "Joker"
//     5. findIndex() of "Avengers"

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
//     1. filter() only "Sci-Fi" movies
let SciFimovies = movies.filter((movie) => movie.genre === "Sci-Fi")
console.log(SciFimovies)

//     2. map() to return:
//             "Inception (8.8)"
let newmovies = movies.map((movie) => {
  return {
    title : movie.title,
    rating : movie.rating
  }
})
console.log(newmovies)

//     3. reduce() to find average movie rating
let ratingsum = movies.reduce((acc,movie) => acc += movie.rating,0)
let ratingavg = ratingsum / movies.length
console.log(ratingavg)

//     4. find() movie "Joker"
let findJoker = movies.filter((movie) => movie.title === "Joker")
console.log(findJoker)

//     5. findIndex() of "Avengers"
let findAvengers = movies.findIndex((movie) => movie.title === "Avengers")
console.log(findAvengers)
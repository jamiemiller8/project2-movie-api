//** THIS DETAILS MY PLAN FOR PROJECT 2 **//

// For my second project, I am going to build a Movie JSON API.

// I will be pulling my data from the Movie Database API that was listed 
// as an example in the project 2 readme file. 

//https://www.themoviedb.org/documentation/api --> this is the link for the API


// The models I will be using for this API are 1. Movie, 2. People, 3. Genres

// The Movie model properties include: 
// genres:
// title:
// id:
// release_date:
// runtime:
// revenue:
// popularity:
// tagline:
// original_language:
// budget:
// overview: 

//The People model properties include:
// name:
// id:
// gender:
// biography: 
// birthday:

//The Genres model properties include:
// name:
// id: 


//FIGURE OUT HOW TO INSERT PICTURE TO SHOW RELATIONSHIP MAP BETWEEN THE MODELS



// BRONZE PLAN:
// build a functioning api that meets the hard requirements: 3 models, use express
// and mongoose, implement CRUD functionality, deploy to heroku, etc.


//SILVER PLAN:
//create a fourth model


//GOLD PLAN:
//add css and style the webpage
// maybe do some front-end stuff like the pokedex lab


//API Key: *******
// 91d8f6047bd78cea27290405a4b8fd68

//Example API Request with Full Link: -ONLY SHOWS 1 MOVIE
// https://api.themoviedb.org/3/movie/550?api_key=91d8f6047bd78cea27290405a4b8fd68

//API Access Read Token
// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWQ4ZjYwNDdiZDc4Y2VhMjcyOTA0MDVhNGI4ZmQ2OCIsInN1YiI6IjVkNDE5NmMwYjg3YWVjN2YwZjM5ZDU0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lj-myKZH658zj9KiFlCaAvBp6osrS-7lOft_Rci2-94


//ACTUAL FULL API URLS

//THIS ONE LISTS 5 MOVIES - MAYBE FROM OSCARS 2008? Might need to switch
"https://api.themoviedb.org/4/list/27?page=1&api_key=91d8f6047bd78cea27290405a4b8fd68&size=50"

//THIS ONE LISTS THE GENRES
"https://api.themoviedb.org/3/genre/movie/list?api_key=91d8f6047bd78cea27290405a4b8fd68&language=en-US"

//THIS ONE LISTS MOST POPULAR PEOPLE/ACTORS
"https://api.themoviedb.org/3/person/popular?api_key=91d8f6047bd78cea27290405a4b8fd68&language=en-US&page=1"




///OTHER API LINKS:

//this one gives top 50 grossing movies of all time:
// https://api.themoviedb.org/4/list/10?page=1&api_key=91d8f6047bd78cea27290405a4b8fd68


// this one lists the most popular people/actors..but there's so many of them listed
// https://api.themoviedb.org/3/person/popular?api_key=91d8f6047bd78cea27290405a4b8fd68&language=en-US&page=1



//LINKS TO SUBMITT PROJECT:

// https://jamies-node-app.herokuapp.com/ ----> heroku deployed link
// https://github.com/jamiemiller8/project2-movie-api ----> my github link 
// https://youtu.be/yyVsTnoZWzU ----> youtube screencast link
// https://vimeo.com/351624690 ----> same thing but screencast with vimeo / was testing both
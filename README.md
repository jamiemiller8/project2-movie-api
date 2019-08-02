## Project 2: Movie API 

This is an API of movies with the data coming from the The Movie Database (https://www.themoviedb.org/documentation/api).

In this API, there are three models: movie, genre, and people. The movie model also has several different properties, including title, genres, revenue, runtime, budget, and overview. 

```
const MovieSchema = new Schema ({
    id: Number,
    title: String,
    popularity: Number,
    original_language: String,
    genres: [{
        type: Schema.Types.ObjectId,
        ref: "Genre"
    }],
    release_date: String,
    run_time: Number, 
    revenue: Number,
    tagline: String,
    budget: Number,
    overview: String
});

```

## Installing
- Fork this repository
- Clone it down to your local repository and open in text editor
- Install dependencies 


## Tools used to Build and Deploy
- JavaScript
- Node.js
- Express
- Mongoose
- MongoDB 
- Heroku
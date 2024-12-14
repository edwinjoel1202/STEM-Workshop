const { default: mongoose } = require("mongoose");

const movieSchema = new mongoose.Schema({
    movieId : String,
    movieName : String,
    genre : String,
    favorite : String,
    rating : Number,
    moviePoster : String,
    moviePlot : String
  });

const Movies = mongoose.model("movie", movieSchema);

module.exports = { Movies };
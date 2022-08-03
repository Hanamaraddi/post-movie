import Movie from "../model/movieSchema.js";

//CREATE

export const createMovie = async (req, res) => {
  const newMovie = new Movie(req.body);

  try {
    const savedMovie = await newMovie.save();
    res.status(200).json(savedMovie);
  } catch (err) {
    console.log(err);
  }
};

//GET

export const getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (err) {
    console.log(err);
  }
};

//GET ALL MOVIE

export const getMovieAll = async (req, res) => {
  try {
    const movie = await Movie.find({});
    res.status(200).json(movie);
  } catch (err) {
    console.log(err);
  }
};

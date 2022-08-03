import express from "express";
import {
  createMovie,
  getMovie,
  getMovieAll,
} from "../controllers/movie-controllers.js";

const router = express.Router();

//Post Movie

router.post("/movie", createMovie);

//GET MOVIE BY ID

router.get("/movie/:id", getMovie);

//GET ALL MOVIE
router.get("/movies", getMovieAll);

export default router;

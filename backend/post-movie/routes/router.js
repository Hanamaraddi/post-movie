import express from "express";
import {
  createMovie,
  getMovie,
  getMovieAll,
} from "../controllers/movie-controllers.js";

const router = express.Router();

//Post Movie

router.post("/movies", createMovie);

//GET MOVIE BY ID

router.get("/movies/:id", getMovie);

//GET ALL MOVIE
router.get("/movies", getMovieAll);

export default router;

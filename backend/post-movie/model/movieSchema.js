import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  language: {
    type: String,
    required: true,
  },

  genre: {
    type: String,
    required: true,
  },

  director: {
    type: String,
    required: true,
  },

  starring: {
    type: String,
    required: true,
  },

  sort: {
    type: String,
  },
});

export default mongoose.model("Movie", movieSchema);

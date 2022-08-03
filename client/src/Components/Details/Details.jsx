import React, { useState } from "react";

export const Details = () => {
  const [movie, setMovie] = useState({
    category: "",
    name: "",
    image: "",
    language: "",
    genre: "",
    director: "",
    starring: "",
    sort: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // console.log(name, value);

    setMovie(() => {
      return { ...movie, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { category, name, image, language, genre, director, starring, sort } =
      movie;

    const data = {
      category,
      name,
      image,
      language,
      genre,
      director,
      starring,
      sort,
    };

    fetch("http://localhost:5000/movies", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.log("result", result);
    });
    // console.log(movie);
    alert("Movie Posted");
  };

  return (
    <div className="form-controller">
      <h3>Movies</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label"></label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={movie.category}
            onChange={handleInput}
            placeholder="Category"
          />
        </div>

        <div className="mb-3">
          <label className="form-label"></label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={movie.name}
            onChange={handleInput}
            placeholder="Movie Name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label"></label>
          <input
            type="text"
            className="form-control"
            name="image"
            value={movie.image}
            onChange={handleInput}
            placeholder="image-url"
          />
        </div>

        <div className="mb-3">
          <label className="form-label"></label>
          <input
            type="text"
            className="form-control"
            name="director"
            value={movie.director}
            onChange={handleInput}
            placeholder="Director"
          />
        </div>

        <div className="mb-3">
          <label className="form-label"></label>
          <input
            type="text"
            className="form-control"
            name="starring"
            value={movie.starring}
            onChange={handleInput}
            placeholder="Actors"
          />
        </div>

        <div className="mb-3">
          <label className="form-label"></label>
          <input
            type="text"
            className="form-control"
            name="language"
            value={movie.language}
            onChange={handleInput}
            placeholder="Language"
          />
        </div>

        <div className="mb-3">
          <label className="form-label"></label>
          <input
            type="text"
            className="form-control"
            name="genre"
            value={movie.genre}
            onChange={handleInput}
            placeholder="Genre"
          />
        </div>

        <div className="mb-3">
          <label className="form-label"></label>
          <input
            type="text"
            className="form-control"
            name="sort"
            value={movie.sort}
            onChange={handleInput}
            placeholder="Sort"
          />
        </div>

        <button type="submit" className="btn btn-primary mb-5">
          Submit
        </button>
      </form>
    </div>
  );
};

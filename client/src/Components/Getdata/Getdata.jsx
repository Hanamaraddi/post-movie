import React, { useEffect, useState } from "react";

export const Getdata = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/movies").then((result) => {
      result.json().then((resp) => {
        // console.log("result", resp);
        setData(resp);
      });
    });
  }, []);
  console.log(data);

  return (
    <div className="row">
      {data.map((movie) => (
        <div className="col-md-3 mt-5 mb-5 ">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={movie.image}
              className="card-img-top img-size"
              alt={movie.name}
            />
            <div className="card-body">
              <h4 className="card-title">{movie.name}</h4>
              <p>{movie.genre}</p>
              <p>{movie.director}</p>
              <h6>{movie.starring}</h6>
            </div>
            <button type="submit" className="btn btn-primary">
              Watch Trailer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

import React from "react";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home-page">
      <h1>Wel-Come</h1>

      <NavLink to="/register">
        <div className="registerbtn">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </NavLink>

      <NavLink to="/login">
        <div className="loginbtn">
          <button type="submit" className="btn btn-dark">
            Login
          </button>
        </div>
      </NavLink>
    </div>
  );
};

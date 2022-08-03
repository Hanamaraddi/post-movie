import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Geeksynergy
          </a>
          <form className="d-flex">
            <a className="navbar-brand" href="/about-us">
              Company Info
            </a>
            <a href="/post-movie" type="submit" class="btn btn-primary">
              Post Movie
            </a>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;

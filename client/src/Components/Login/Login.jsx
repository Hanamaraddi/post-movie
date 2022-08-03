import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const history = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    // console.log(user);

    setUser(() => {
      return { ...user, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const getUserArr = localStorage.getItem("userInform");

    console.log(getUserArr);

    const { email, password } = user;

    if (email === "") {
      alert("Email field is Required");
    } else if (password === "") {
      alert("Password field is required");
    } else {
      if (getUserArr && getUserArr) {
        const userdata = JSON.parse(getUserArr);

        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });
        if (userlogin.length === 0) {
          alert("Invalid User");
        } else {
          alert("User Login Success");

          localStorage.setItem("login_user", JSON.stringify(getUserArr));

          history("/movie-data");
        }
      }
    }
  };

  return (
    <div className="form-controller">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={user.email}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={user.password}
            onChange={handleInput}
          />
        </div>

        <button type="submit" className="btn btn-dark">
          Login
        </button>
      </form>
    </div>
  );
};

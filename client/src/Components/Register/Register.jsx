import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [data, setData] = useState([]);

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

    const { username, email, mobile, password } = user;

    if (username === "") {
      alert("Username is required");
    } else if (email === "") {
      alert("Email field is Required");
    } else if (mobile === "") {
      alert("Mobile field is required");
    } else if (password === "") {
      alert("Password field is required");
    } else {
      console.log("Data Added Successfully");

      localStorage.setItem("userInform", JSON.stringify([...data, user]));
      alert("registration Completed");
    }
  };

  return (
    <div className="form-controller">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">User Name</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={user.username}
            onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile</label>
          <input
            type="Number"
            className="form-control"
            name="mobile"
            value={user.mobile}
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

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

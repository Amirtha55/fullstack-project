import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    alert("Registration Successful 🔥");

    navigate("/login");

  };

  return (

    <div className="container mt-5">

      <div className="card p-4 shadow">

        <h2 className="text-center mb-4">

          Register

        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <button
            className="btn btn-dark w-100"
            type="submit"
          >
            Register
          </button>

        </form>

      </div>

    </div>

  );
}

export default Register;
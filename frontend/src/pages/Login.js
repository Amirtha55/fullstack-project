import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    const storedUser =
      JSON.parse(
        localStorage.getItem("user")
      );

    if (
      storedUser &&
      email === storedUser.email &&
      password === storedUser.password
    ) {

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      alert("Login Successful 🔥");

      navigate("/products");

    } else {

      alert("Invalid Credentials ❌");

    }

  };

  return (

    <div className="container mt-5">

      <div className="card p-4 shadow">

        <h2 className="text-center mb-4">

          Login

        </h2>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            className="form-control mb-3"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="form-control mb-3"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            className="btn btn-dark w-100"
            type="submit"
          >
            Login
          </button>

        </form>

      </div>

    </div>

  );
}

export default Login;
import React from "react";

import {
  Link
} from "react-router-dom";

import {
  FaShoppingCart,
  FaHeart,
  FaBox,
  FaMoon
} from "react-icons/fa";

function Navbar({
  cartCount,
  darkMode,
  setDarkMode
}) {

  const logout = () => {

    localStorage.removeItem(
      "isLoggedIn"
    );

    window.location.href =
      "/login";

  };

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">

      <Link
        className="navbar-brand fw-bold"
        to="/"
      >
        E-Commerce Store
      </Link>

      <div className="ms-auto d-flex flex-wrap gap-2">

        <Link
          to="/products"
          className="btn btn-outline-light"
        >
          <FaBox className="me-2" />
          Products
        </Link>

        <Link
          to="/orders"
          className="btn btn-outline-light"
        >
          Orders
        </Link>

        <Link
          to="/wishlist"
          className="btn btn-outline-light"
        >
          <FaHeart className="me-2" />
          Wishlist
        </Link>

        <Link
          to="/cart"
          className="btn btn-outline-light"
        >
          <FaShoppingCart className="me-2" />
          Cart ({cartCount})
        </Link>

        <Link
          to="/add-product"
          className="btn btn-outline-light"
        >
          Add Product
        </Link>

        <Link
          to="/login"
          className="btn btn-outline-light"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="btn btn-outline-light"
        >
          Register
        </Link>

        <button
          className="btn btn-warning"
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >
          <FaMoon className="me-2" />

          {darkMode
            ? "Light"
            : "Dark"}
        </button>

        <button
          className="btn btn-danger"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </nav>

  );
}

export default Navbar;

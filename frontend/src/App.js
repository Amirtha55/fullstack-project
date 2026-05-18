import React, {
  useState,
  useEffect
} from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import Products from "./pages/Products";

import Cart from "./pages/Cart";

import Login from "./pages/Login";

import AddProduct from "./pages/AddProduct";

import Checkout from "./pages/Checkout";

import OrderSuccess from "./pages/OrderSuccess";

import Orders from "./pages/Orders";

import Wishlist from "./pages/Wishlist";

import ProductDetails from "./pages/ProductDetails";

import AdminDashboard from "./pages/AdminDashboard";

function App() {

  const [cart, setCart] =
    useState([]);

  const [wishlist, setWishlist] =
    useState([]);

  const [darkMode, setDarkMode] =
    useState(false);

  useEffect(() => {

    const savedCart =
      JSON.parse(
        localStorage.getItem("cart")
      );

    if (savedCart) {

      setCart(savedCart);

    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);

  const addToCart = (product) => {

    const existingProduct =
      cart.find(

        (item) =>
          item.id === product.id

      );

    if (existingProduct) {

      const updatedCart =
        cart.map((item) =>

          item.id === product.id

            ? {
                ...item,
                quantity:
                  item.quantity + 1
              }

            : item

        );

      setCart(updatedCart);

    } else {

      setCart([

        ...cart,

        {
          ...product,
          quantity: 1
        }

      ]);

    }

  };

  return (

    <BrowserRouter>

      <div
        className={
          darkMode

            ? "bg-dark text-white min-vh-100"

            : "bg-light text-dark min-vh-100"
        }
      >

        <Navbar
          cartCount={cart.length}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/products"
            element={
              <Products
                addToCart={addToCart}
                wishlist={wishlist}
                setWishlist={
                  setWishlist
                }
              />
            }
          />

          <Route
            path="/product/:id"
            element={
              <ProductDetails />
            }
          />

          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
              />
            }
          />

          <Route
            path="/wishlist"
            element={
              <Wishlist
                wishlist={wishlist}
              />
            }
          />

          <Route
            path="/checkout"
            element={
              <Checkout cart={cart} />
            }
          />

          <Route
            path="/order-success"
            element={
              <OrderSuccess />
            }
          />

          <Route
            path="/orders"
            element={<Orders />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/add-product"
            element={<AddProduct />}
          />

          <Route
              path="/admin"
              element={<AdminDashboard />}
          />

        </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;
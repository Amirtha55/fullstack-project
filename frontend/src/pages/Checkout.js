import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function Checkout({ cart }) {

  const navigate = useNavigate();

  const [address, setAddress] =
    useState("");

  const totalPrice = cart.reduce(

    (total, item) =>

      total + item.price * item.quantity,

    0

  );

  const placeOrder = () => {

    if (!address) {

      alert("Enter Delivery Address");

      return;

    }

    const orders =
      JSON.parse(
        localStorage.getItem("orders")
      ) || [];

    const newOrder = {

      items: cart,

      address: address,

      total: totalPrice

    };

    orders.push(newOrder);

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

    navigate("/order-success");

  };

  return (

    <div className="container mt-5">

      <div className="card p-4 shadow">

        <h1 className="mb-4">

          Checkout 💳

        </h1>

        <h4>

          Total Amount:

          ₹ {totalPrice}

        </h4>

        <textarea
          className="form-control mt-4"
          rows="4"
          placeholder="Enter Delivery Address"
          value={address}
          onChange={(e) =>
            setAddress(e.target.value)
          }
        />

        <button
          className="btn btn-dark mt-4 w-100"
          onClick={placeOrder}
        >
          Place Order
        </button>

      </div>

    </div>

  );
}

export default Checkout;
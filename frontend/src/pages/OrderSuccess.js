import React from "react";

import { Link } from "react-router-dom";

function OrderSuccess() {

  return (

    <div className="container mt-5 text-center">

      <div className="card p-5 shadow">

        <h1 className="text-success">

          Order Placed Successfully 🎉

        </h1>

        <p className="mt-4">

          Thank you for shopping ❤️

        </p>

        <Link
          to="/products"
          className="btn btn-dark mt-4"
        >
          Continue Shopping
        </Link>

      </div>

    </div>

  );
}

export default OrderSuccess;
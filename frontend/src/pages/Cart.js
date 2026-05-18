import React from "react";

import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {

  const removeFromCart = (id) => {

    const updatedCart = cart.filter(

      (item) => item.id !== id

    );

    setCart(updatedCart);

  };

  const increaseQty = (id) => {

    const updatedCart = cart.map(

      (item) =>

        item.id === id

          ? {
              ...item,
              quantity:
                item.quantity + 1
            }

          : item

    );

    setCart(updatedCart);

  };

  const decreaseQty = (id) => {

    const updatedCart = cart.map(

      (item) =>

        item.id === id

          ? {
              ...item,
              quantity:
                item.quantity > 1

                  ? item.quantity - 1

                  : 1
            }

          : item

    );

    setCart(updatedCart);

  };

  const totalPrice = cart.reduce(

    (total, item) =>

      total +
      item.price * item.quantity,

    0

  );

  return (

    <div className="container mt-5">

      <h1>Your Cart 🛒</h1>

      {cart.length === 0 ? (

        <h4 className="mt-4">

          Cart is Empty

        </h4>

      ) : (

        <div>

          {cart.map((item, index) => (

            <div
              className="card p-3 mt-3 shadow"
              key={index}
            >

              <h4>{item.name}</h4>

              <p>
                Price: ₹ {item.price}
              </p>

              <div className="d-flex align-items-center mb-3">

                <button
                  className="btn btn-dark"
                  onClick={() =>
                    decreaseQty(item.id)
                  }
                >
                  -
                </button>

                <h5 className="mx-3 mt-2">

                  {item.quantity}

                </h5>

                <button
                  className="btn btn-dark"
                  onClick={() =>
                    increaseQty(item.id)
                  }
                >
                  +
                </button>

              </div>

              <h5 className="text-success">

                Total:

                ₹
                {item.price *
                  item.quantity}

              </h5>

              <button
                className="btn btn-danger"
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                Remove
              </button>

            </div>

          ))}

          <div className="card p-4 mt-4 bg-dark text-white">

            <h2>

              Grand Total:

              ₹ {totalPrice}

            </h2>

            <Link
              to="/checkout"
              className="btn btn-light mt-3"
            >
              Proceed to Checkout
            </Link>

          </div>

        </div>

      )}

    </div>

  );
}

export default Cart;
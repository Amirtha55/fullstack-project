import React from "react";

function Wishlist({ wishlist }) {

  return (

    <div className="container mt-5">

      <h1 className="mb-4">

        Wishlist ❤️

      </h1>

      {wishlist.length === 0 ? (

        <h4>No Wishlist Items</h4>

      ) : (

        wishlist.map((item, index) => (

          <div
            className="card p-3 mb-3 shadow"
            key={index}
          >

            <h4>{item.name}</h4>

            <p>
              ₹ {item.price}
            </p>

          </div>

        ))

      )}

    </div>

  );
}

export default Wishlist;
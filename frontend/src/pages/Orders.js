import React from "react";

function Orders() {

  const orders =
    JSON.parse(
      localStorage.getItem("orders")
    ) || [];

  return (

    <div className="container mt-5">

      <h1 className="mb-4">

        My Orders 📦

      </h1>

      {orders.length === 0 ? (

        <h4>No Orders Found</h4>

      ) : (

        orders.map((order, index) => (

          <div
            className="card p-4 mb-4 shadow"
            key={index}
          >

            <h4>

              Order #{index + 1}

            </h4>

            <p>

              Delivery Address:

              {order.address}

            </p>

            <h5 className="text-success">

              Total:

              ₹ {order.total}

            </h5>

            <hr />

            {order.items.map((item, i) => (

              <div key={i}>

                <p>

                  {item.name}

                  × {item.quantity}

                </p>

              </div>

            ))}

          </div>

        ))

      )}

    </div>

  );
}

export default Orders;
import React from "react";

function AdminDashboard() {

  const products =
    JSON.parse(
      localStorage.getItem("products")
    ) || [];

  const orders =
    JSON.parse(
      localStorage.getItem("orders")
    ) || [];

  return (

    <div className="container mt-5">

      <h1 className="mb-5">

        Admin Dashboard 📊

      </h1>

      <div className="row">

        <div className="col-md-6">

          <div className="card p-4 shadow">

            <h3>

              Total Products

            </h3>

            <h1 className="text-primary">

              {products.length}

            </h1>

          </div>

        </div>

        <div className="col-md-6">

          <div className="card p-4 shadow">

            <h3>

              Total Orders

            </h3>

            <h1 className="text-success">

              {orders.length}

            </h1>

          </div>

        </div>

      </div>

    </div>

  );
}

export default AdminDashboard;
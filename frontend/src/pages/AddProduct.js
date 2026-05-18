import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function AddProduct() {

  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [image, setImage] =
    useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    const newProduct = {

      id: Date.now(),

      name,

      price,

      category,

      image

    };

    const existingProducts =
      JSON.parse(
        localStorage.getItem(
          "products"
        )
      ) || [];

    const updatedProducts = [

      ...existingProducts,

      newProduct

    ];

    localStorage.setItem(

      "products",

      JSON.stringify(
        updatedProducts
      )

    );

    alert(
      "Product Added Successfully 🚀"
    );

    navigate("/products");

  };

  return (

    <div className="container mt-5">

      <div className="card p-4 shadow">

        <h1 className="text-center mb-4">

          Add Product

        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Product Name"
            className="form-control mb-3"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            required
          />

          <input
            type="number"
            placeholder="Price"
            className="form-control mb-3"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
            required
          />

          <input
            type="text"
            placeholder="Category"
            className="form-control mb-3"
            value={category}
            onChange={(e) =>
              setCategory(
                e.target.value
              )
            }
            required
          />

          <input
            type="text"
            placeholder="Image URL"
            className="form-control mb-3"
            value={image}
            onChange={(e) =>
              setImage(e.target.value)
            }
            required
          />

          <button
            type="submit"
            className="btn btn-dark w-100"
          >
            Add Product
          </button>

        </form>

      </div>

    </div>

  );
}

export default AddProduct;
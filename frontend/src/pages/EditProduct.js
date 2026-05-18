import React, { useEffect, useState } from "react";

import axios from "axios";

import { useParams, useNavigate }
from "react-router-dom";

function EditProduct() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: ""
  });

  useEffect(() => {

    fetchProduct();

  }, []);

  const fetchProduct = async () => {

    const response = await axios.get(
      "http://localhost:8080/products"
    );

    const foundProduct =
      response.data.find(
        (p) => p.id === parseInt(id)
      );

    setProduct(foundProduct);

  };

  const handleChange = (e) => {

    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await axios.put(
      `http://localhost:8080/products/${id}`,
      product
    );

    alert("Product Updated ✅");

    navigate("/products");

  };

  return (

    <div className="container mt-5">

      <div className="card p-4 shadow">

        <h2 className="text-center mb-4">
          Edit Product
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            className="form-control mb-3"
            value={product.name}
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            className="form-control mb-3"
            value={product.price}
            onChange={handleChange}
          />

          <input
            type="text"
            name="image"
            className="form-control mb-3"
            value={product.image}
            onChange={handleChange}
          />

          <button
            className="btn btn-dark w-100"
            type="submit"
          >
            Update Product
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditProduct;
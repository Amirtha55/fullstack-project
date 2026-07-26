import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ProductCard({
  product,
  addToCart,
  setWishlist
}) {
  const navigate = useNavigate();

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleDelete = () => {
    const products =
      JSON.parse(localStorage.getItem("products")) || [];

    const updatedProducts = products.filter(
      (item) => item.id !== product.id
    );

    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );

    alert("Product Deleted 🗑️");
    window.location.reload();
  };

  const addToWishlist = () => {
    setWishlist((prev) => [...prev, product]);
  };

  return (
    <div className="card shadow-lg border-0 p-3 h-100 rounded-4">

      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top"
          height="250"
          style={{ objectFit: "cover" }}
        />
      </Link>

      <div className="card-body">

        <Link
          to={`/product/${product.id}`}
          className="text-decoration-none text-dark"
        >
          <h4>{product.name}</h4>
        </Link>

        <h5 className="text-success">
          ₹ {product.price}
        </h5>

        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <p>
          <strong>Rating:</strong> ⭐ {product.rating}
        </p>

        <p>
          {product.stock > 0
            ? "✅ In Stock"
            : "❌ Out of Stock"}
        </p>

        {/* Rating Buttons */}
        <div className="mb-3 mt-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className="btn btn-warning me-1"
              onClick={() => setRating(star)}
            >
              ⭐
            </button>
          ))}
        </div>

        <h6>
          Your Rating: {rating} ⭐
        </h6>

        <textarea
          className="form-control mt-3"
          placeholder="Write Review..."
          value={review}
          onChange={(e) =>
            setReview(e.target.value)
          }
        />

        {review && (
          <div className="mt-3">
            <h6>Customer Review 💬</h6>
            <p>{review}</p>
          </div>
        )}

        <button
          className="btn btn-dark w-100 mt-3"
          disabled={product.stock <= 0}
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>

        <button
          className="btn btn-danger w-100 mt-2"
          onClick={addToWishlist}
        >
          ❤️ Wishlist
        </button>

        <button
          className="btn btn-primary w-100 mt-2"
          onClick={() =>
            navigate(
              `/edit-product/${product.id}`
            )
          }
        >
          Edit
        </button>

        <button
          className="btn btn-danger w-100 mt-2"
          onClick={handleDelete}
        >
          Delete
        </button>

      </div>
    </div>
  );
}

export default ProductCard;
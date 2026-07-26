import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

function Products({ addToCart, setWishlist }) {

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("");

  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 79999,
      category: "Mobiles",
      image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg",
      rating: 4.8,
      stock: 10
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      price: 69999,
      category: "Mobiles",
      image: "https://m.media-amazon.com/images/I/71RVuBs3q9L._SX679_.jpg",
      rating: 4.7,
      stock: 15
    },
    {
      id: 3,
      name: "MacBook Air M3",
      price: 114999,
      category: "Electronics",
      image: "https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg",
      rating: 4.9,
      stock: 5
    },
    {
      id: 4,
      name: "Sony Headphones",
      price: 9999,
      category: "Electronics",
      image: "https://m.media-amazon.com/images/I/61vIICn2A6L._SX679_.jpg",
      rating: 4.5,
      stock: 20
    },
    {
      id: 5,
      name: "Boat Smart Watch",
      price: 2999,
      category: "Electronics",
      image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL._SX679_.jpg",
      rating: 4.4,
      stock: 30
    },
    {
      id: 6,
      name: "Black Shirt",
      price: 999,
      category: "Fashion",
      image: "https://m.media-amazon.com/images/I/61gQK1H8PBL._UY741_.jpg",
      rating: 4.3,
      stock: 25
    },
    {
      id: 7,
      name: "HP Pavilion Laptop",
      price: 64999,
      category: "Electronics",
      image: "https://m.media-amazon.com/images/I/71LJJrKbezL._SX679_.jpg",
      rating: 4.6,
      stock: 8
    },
    {
      id: 8,
      name: "Nike Running Shoes",
      price: 4999,
      category: "Shoes",
      image: "https://m.media-amazon.com/images/I/61utX8kBDlL._UY695_.jpg",
      rating: 4.5,
      stock: 20
    },
    {
      id: 9,
      name: "Women's Saree",
      price: 2499,
      category: "Fashion",
      image: "https://m.media-amazon.com/images/I/91N6A7Q5hKL._UY879_.jpg",
      rating: 4.7,
      stock: 15
    },
    {
      id: 10,
      name: "Bluetooth Earbuds",
      price: 1999,
      category: "Electronics",
      image: "https://m.media-amazon.com/images/I/61KNJav3S9L._SX679_.jpg",
      rating: 4.4,
      stock: 30
    },
    {
      id: 11,
      name: "Gaming Keyboard",
      price: 2999,
      category: "Electronics",
      image: "https://m.media-amazon.com/images/I/71kr3WAj1FL._SX679_.jpg",
      rating: 4.5,
      stock: 12
    },
    {
      id: 12,
      name: "Smart TV 43 Inch",
      price: 28999,
      category: "Electronics",
      image: "https://m.media-amazon.com/images/I/81QpkIctqPL._SX679_.jpg",
      rating: 4.8,
      stock: 5
    }
  ];

  const filteredProducts = products
    .filter(
      (product) =>
        product.name
          .toLowerCase()
          .includes(search.toLowerCase()) &&
        (selectedCategory === "All" ||
          product.category === selectedCategory)
    )
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") {
        return a.price - b.price;
      }

      if (sortOrder === "highToLow") {
        return b.price - a.price;
      }

      return 0;
    });

  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Products 🛍️
      </h1>

      <input
        type="text"
        placeholder="Search Products..."
        className="form-control mb-3"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <select
        className="form-control mb-3"
        value={selectedCategory}
        onChange={(e) =>
          setSelectedCategory(
            e.target.value
          )
        }
      >
        <option value="All">
          All Categories
        </option>
        <option value="Electronics">
          Electronics
        </option>
        <option value="Fashion">
          Fashion
        </option>
        <option value="Mobiles">
          Mobiles
        </option>
        <option value="Shoes">
          Shoes
        </option>
      </select>

      <select
        className="form-control mb-4"
        value={sortOrder}
        onChange={(e) =>
          setSortOrder(e.target.value)
        }
      >
        <option value="">
          Sort By Price
        </option>
        <option value="lowToHigh">
          Low To High
        </option>
        <option value="highToLow">
          High To Low
        </option>
      </select>

      <div className="row">
        {filteredProducts.map(
          (product) => (
            <div
              className="col-md-4 mb-4"
              key={product.id}
            >
              <ProductCard
                product={product}
                addToCart={addToCart}
                setWishlist={setWishlist}
              />
            </div>
          )
        )}
      </div>

    </div>
  );
}

export default Products;
import React, {
  useEffect,
  useState
} from "react";

import ProductCard
from "../components/ProductCard";

function Products({
  addToCart,
  setWishlist
}) {

  const [
    products,
    setProducts
  ] = useState([]);

  const [
    search,
    setSearch
  ] = useState("");

  const [
    suggestions,
    setSuggestions
  ] = useState([]);

  const [
    selectedCategory,
    setSelectedCategory
  ] = useState("All");

  const [
    sortOrder,
    setSortOrder
  ] = useState("");

  useEffect(() => {

    const savedProducts =
      JSON.parse(
        localStorage.getItem(
          "products"
        )
      ) || [];

    setProducts(savedProducts);

  }, []);

  const filteredProducts =
    products

      .filter((product) =>

        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

        &&

        (

          selectedCategory ===
          "All"

          ||

          product.category ===
          selectedCategory

        )

      )

      .sort((a, b) => {

        if (
          sortOrder ===
          "lowToHigh"
        ) {

          return (
            a.price - b.price
          );

        }

        if (
          sortOrder ===
          "highToLow"
        ) {

          return (
            b.price - a.price
          );

        }

        return 0;

      });

  return (

    <div className="container mt-5">

      <h1
        className="
          text-center
          mb-4
          text-white
        "
      >

        Products 🛍️

      </h1>

      <input
        type="text"
        placeholder="
          Search Products...
        "
        className="
          form-control
          mb-2
        "
        value={search}
        onChange={(e) => {

          setSearch(
            e.target.value
          );

          const filtered =
            products.filter(

              (product) =>

                product.name
                  .toLowerCase()
                  .includes(

                    e.target.value
                      .toLowerCase()

                  )

            );

          setSuggestions(
            filtered
          );

        }}
      />

      {search && (

        <div
          className="
            card
            p-2
            mb-4
            shadow
          "
        >

          {suggestions
            .slice(0, 5)
            .map((item) => (

              <p
                key={item.id}
                className="mb-2"
                style={{
                  cursor:
                    "pointer"
                }}
                onClick={() => {

                  setSearch(
                    item.name
                  );

                  setSuggestions(
                    []
                  );

                }}
              >

                🔍 {item.name}

              </p>

            ))}

        </div>

      )}

      <select
        className="
          form-control
          mb-4
        "
        value={
          selectedCategory
        }
        onChange={(e) =>

          setSelectedCategory(
            e.target.value
          )

        }
      >

        <option value="All">

          All Categories

        </option>

        <option
          value="Electronics"
        >

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
        className="
          form-control
          mb-4
        "
        value={sortOrder}
        onChange={(e) =>

          setSortOrder(
            e.target.value
          )

        }
      >

        <option value="">

          Sort By Price

        </option>

        <option
          value="lowToHigh"
        >

          Low To High

        </option>

        <option
          value="highToLow"
        >

          High To Low

        </option>

      </select>

      <div className="row">

        {filteredProducts
          .length > 0 ? (

          filteredProducts.map(
            (product) => (

              <div
                className="
                  col-md-4
                  mb-4
                "
                key={product.id}
              >

                <ProductCard
                  product={product}
                  addToCart={
                    addToCart
                  }
                  setWishlist={
                    setWishlist
                  }
                />

              </div>

            )

          )

        ) : (

          <h3 className="text-white">

            No Products Found

          </h3>

        )}

      </div>

    </div>

  );
}

export default Products;
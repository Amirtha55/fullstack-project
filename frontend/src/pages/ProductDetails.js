import React from "react";

import {
  useParams,
  Link
} from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();

  const products =
    JSON.parse(
      localStorage.getItem(
        "products"
      )
    ) || [];

  const product =
    products.find(

      (item) =>

        item.id ===
        Number(id)

    );

  if (!product) {

    return (

      <div
        className="
          container
          mt-5
          text-center
          text-white
        "
      >

        <h1>

          Product Not Found ❌

        </h1>

      </div>

    );

  }

  const recommendedProducts =
    products.filter(

      (item) =>

        item.category ===
        product.category

        &&

        item.id !== product.id

    );

  return (

    <div className="container mt-5">

      <div
        className="
          card
          glass-card
          shadow-lg
          border-0
          rounded-4
          p-5
        "
      >

        <div className="row">

          <div className="col-md-6">

            <img
              src={product.image}
              alt={product.name}
              className="
                img-fluid
                rounded-4
              "
            />

          </div>

          <div className="col-md-6">

            <h1 className="text-white">

              {product.name}

            </h1>

            <h2 className="text-warning mt-3">

              ₹ {product.price}

            </h2>

            <h4 className="text-light mt-3">

              Category:
              {" "}
              {product.category}

            </h4>

            <p
              className="
                text-light
                mt-4
                fs-5
              "
            >

              Premium quality product
              with modern shopping
              experience 🚀

            </p>

            <button
              className="
                btn
                btn-warning
                btn-lg
                mt-4
              "
            >

              Add To Cart 🛒

            </button>

          </div>

        </div>

      </div>

      <div className="mt-5">

        <h2 className="text-white">

          Recommended Products 🔥

        </h2>

        <div className="row mt-4">

          {recommendedProducts.map(
            (item) => (

              <div
                className="
                  col-md-4
                  mb-4
                "
                key={item.id}
              >

                <div
                  className="
                    card
                    glass-card
                    p-3
                    shadow-lg
                    border-0
                    rounded-4
                    h-100
                  "
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      card-img-top
                      rounded-4
                    "
                    height="250"
                  />

                  <div className="card-body">

                    <h4 className="text-white">

                      {item.name}

                    </h4>

                    <h5 className="text-warning">

                      ₹ {item.price}

                    </h5>

                    <p className="text-light">

                      {item.category}

                    </p>

                    <Link
                      to={`/product/${item.id}`}
                      className="
                        btn
                        btn-warning
                        w-100
                      "
                    >

                      View Product

                    </Link>

                  </div>

                </div>

              </div>

            )

          )}

        </div>

      </div>

    </div>

  );
}

export default ProductDetails;
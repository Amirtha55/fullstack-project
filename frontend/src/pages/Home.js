import React, {
  useEffect,
  useState
} from "react";

import {
  Link
} from "react-router-dom";

import Slider from "react-slick";

import {
  ReactTyped
} from "react-typed";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

function Home() {

  const [
    products,
    setProducts
  ] = useState([]);

  useEffect(() => {

    const savedProducts =
      JSON.parse(
        localStorage.getItem(
          "products"
        )
      ) || [];

    setProducts(savedProducts);

  }, []);

  const settings = {

    dots: true,

    infinite: true,

    speed: 500,

    slidesToShow: 3,

    slidesToScroll: 1,

    autoplay: true,

    autoplaySpeed: 2000,

  };

  return (

    <div>

      <div
        className="
          d-flex
          justify-content-center
          align-items-center
          text-center
          text-white
        "
        style={{

          height: "90vh",

          background:
            "linear-gradient(to right, #141e30, #243b55)"

        }}
      >

        <div>

          <h1
            className="
              display-2
              fw-bold
            "
          >

            Welcome To

            <br />

            E-Commerce Store 🛒

          </h1>

          <p
            className="
              mt-4
              fs-4
            "
          >

            <ReactTyped

              strings={[

                "Discover Amazing Products 🚀",

                "Modern Shopping Experience 🛒",

                "Premium Deals Everyday 🔥",

                "Advanced E-Commerce Store 💎"

              ]}

              typeSpeed={50}

              backSpeed={30}

              loop

            />

          </p>

          <Link
            to="/products"
            className="
              btn
              btn-warning
              btn-lg
              mt-4
              px-5
              py-3
              rounded-pill
            "
          >

            Shop Now

          </Link>

        </div>

      </div>

      <div className="container mt-5">

        <h1
          className="
            text-center
            mb-5
            fw-bold
            text-white
          "
        >

          Trending Products 🔥

        </h1>

        <Slider {...settings}>

          {products.map((product) => (

            <div
              key={product.id}
              className="p-3"
            >

              <div
                className="
                  card
                  glass-card
                  shadow-lg
                  border-0
                  rounded-4
                  p-3
                  h-100
                "
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    card-img-top
                    rounded-4
                  "
                  height="250"
                />

                <div className="card-body">

                  <h3 className="text-white">

                    {product.name}

                  </h3>

                  <h4 className="text-warning">

                    ₹ {product.price}

                  </h4>

                  <p className="text-light">

                    {product.category}

                  </p>

                  <Link
                    to="/products"
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

          ))}

        </Slider>

      </div>

    </div>

  );
}

export default Home;
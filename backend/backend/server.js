const express =
  require("express");

const mongoose =
  require("mongoose");

const cors =
  require("cors");

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(

  "mongodb+srv://admin:admin123@cluster0.abcd.mongodb.net/ecommerce?retryWrites=true&w=majority"

)

.then(() => {

  console.log(
    "MongoDB Connected 🔥"
  );

})

.catch((error) => {

  console.log(error);

});

const productRoutes =
  require(
    "./routes/productRoutes"
  );

app.use(
  "/api",
  productRoutes
);

app.listen(5000, () => {

  console.log(

    "Server Running On Port 5000 🚀"

  );

});